export {};
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

// User Model
const model = require('../../libs/mongo/userModel')

// @route POST api/auth
// @desc Auth user
// @access Public

router.post('/', (req: any, res: any) => {

    const { mail, pass } = req.body;

    // Basic validation
    if ( !mail || !pass ){
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    // Check for existing user
    model.isExistUser(mail, (err: any, user: any) => {
        if (!user) return res.status(400).json({msg: 'User not found'});

        // Validate password
        model.compareHashed(pass, user.pass, (err: Error, isMatch: boolean) => {
            if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

            jwt.sign(
                {_id: user._id},
                process.env.JWTSECRET,
                {expiresIn: 3600},
                (err:Error | null, token: string | undefined) => {
                    if (err) throw  err;
                    res.json({
                        token: token,
                        user: {
                            _id: user._id,
                            userName: user.userName,
                            mail: user.mail,
                            registerDate: user.registerDate
                        }
                    })
                }
            )
        })
    })

});

// @route GET api/auth/user
// @desc Get user data
// @access Private
router.get('/user', auth, (req: any, res: any) => {
    model.findUser(req.user._id, res);
});


module.exports = router;


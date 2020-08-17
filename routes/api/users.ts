export {};
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// User Model
const model = require('../../libs/mongo/userModel');

// @route POST api/users
// @desc Register new user
// @access Public

router.post('/', (req: any, res: any) => {

    const { userName, mail, pass } = req.body;

    // Basic validation
    if (!userName || !mail || !pass ){
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    // Check for existing user
    model.isExistUser(mail, (err: any, user: any) => {
        if (user) return res.status(400).json({msg: 'User already exists'});
        model.hashUserPass(pass, (err: Error, hashedPass: string) => {
            if (err) return res.status(400).json({msg: 'Something went wrong'});
            model.addUser({userName, mail, pass: hashedPass},
                (err: any, user: any) => {

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
                }
            )
        });

    })

});


module.exports = router;


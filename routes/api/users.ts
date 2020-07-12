const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// @route GET api/users
// @desc Get All Users
// @access Public

router.post('/', (req: any, res: any) => {
    const newUser = new User({
        userName: req.body.userName,
        mail: req.body.mail
    });

    newUser.save().then((user: any) => res.json(user));
});

// @route POST api/users
// @desc Create a User
// @access Public

router.get('/', (req: any, res: any) => {
    User.find()
        .sort({ date: -1 })
        .then((users: any) => res.json(users))
});


// @route DELETE api/users/:id
// @desc Delete a User
// @access Public

router.delete('/:id', (req: any, res: any) => {
    User.findById(req.params.id)
        .then((user: any) => user.remove().then(() => res.json({success: true})))
        .catch((err: any) => {
            return res.status(404).json({success: false});
        });
})


module.exports = router;


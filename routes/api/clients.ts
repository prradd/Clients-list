const express = require('express');
const router = express.Router();

// Client Model
const Client = require('../../models/Client');

// @route GET api/clients
// @desc Get All Clients
// @access Public

router.get('/', (req: any, res: any) => {
    Client.find()
        .sort({ date: -1 })
        .then((clients: any) => res.json(clients))
});

// @route POST api/clients
// @desc Create a Client
// @access Public

router.post('/', (req: any, res: any) => {
    const newClient = new Client({
        userName: req.body.userName,
        mail: req.body.mail,
        phone: req.body.phone
    });

    newClient.save().then((client: any) => res.json(client));
});

// @route DELETE api/clients/:id
// @desc Delete a Client
// @access Public

router.delete('/:id', (req: any, res: any) => {
    Client.findById(req.params.id)
        .then((client: any) => client.remove().then(() => res.json({success: true})))
        .catch((err: any) => {
            return res.status(404).json({success: false});
        });
})

// @route PUT api/clients/:id
// @desc Edit a Client
// @access Public

router.put('/:id', (req: any, res: any) => {
    const editedClient = {
        userName: req.body.userName,
        mail: req.body.mail,
        phone: req.body.phone
    };

    Client.findByIdAndUpdate(
        {_id: req.params.id},
        {$set: editedClient},
        {"new": true})
        // .exec()
        .then((client: any) => res.json(client))
        .catch((err: any) => {
            return res.status(404).json({success: false});
        });
})

module.exports = router;


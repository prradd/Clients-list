import {IClientObjectExist} from "../../types";

const express = require('express');
const router = express.Router();

// Client Model
const model = require('../../libs/mongo/model')

// @route GET api/clients
// @desc Get All Clients
// @access Public

router.get('/', (req: any, res: any) => {
    model.getClients({}, (err: any, clients: Array<IClientObjectExist> | null) => res.json(clients))
});

// @route POST api/clients
// @desc Create a Client
// @access Public

router.post('/', (req: any, res: any) => {
    const { userName, mail, phone } = req.body
    model.addClient({ userName, mail, phone }, (err: any, client: any) => res.json(client))
});

// @route DELETE api/clients/:id
// @desc Delete a Client
// @access Public

router.delete('/:id', (req: any, res: any) => {
    model.removeClient({_id: req.params.id}, (err: any) => {
        if (err) {
            res.status(404).json({success: false})
        } else {
            res.json({success: true})
        }
    })
})

// @route PUT api/clients/:id
// @desc Edit a Client
// @access Public

router.put('/:id', (req: any, res: any) => {

    const { userName, mail, phone } = req.body
    model.updateClient({_id: req.params.id}, { userName, mail, phone }, (err: any, client:any) => {
        if (err) {
            res.status(404).json({success: false})
        } else {
            res.json(client)
        }
    })
})

module.exports = router;


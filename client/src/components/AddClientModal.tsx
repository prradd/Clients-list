import React, {Dispatch, useState} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import {ADD_CLIENT, ITarget} from "../actions/types";
import {useDispatch} from "react-redux";
import {v1 as uuid} from "uuid";
import {ClientActions} from "../actions/clientActions";

const AddClientModal = () => {

    const [modal, setModal] = useState(false);
    const [user, setUser] = useState({
        userName: '',
        phone: '',
        mail: ''
    });

    const clientsDispatch = useDispatch<Dispatch<ClientActions>>();

    const toggle = () => {
        setModal(!modal);
    }

    const onChange = (e: ITarget) => {
        setUser({...user,
            [e.target.name]: e.target.value})
    }

    const today = new Date();
    const date = today.getDate() + '.' + (today.getUTCMonth() + 1) + '.' + today.getFullYear();

    console.log(date);

    const onSubmit = (e:any) => {
        e.preventDefault();

        const newClient = {
            id: uuid(),
            userName: user.userName,
            phone: user.phone,
            mail: user.mail,
            creationDate: date
        }

        clientsDispatch({type: ADD_CLIENT, payload: newClient});

        toggle();
    }

    return (
        <div>
            <Button
                color="success"
                style={{"float": "left", "backgroundColor":"00b074"}}
                onClick={toggle}
            >משימה חדשה</Button>
            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>הוספת משימה חדשה</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="userName">שם משתמש</Label>
                            <Input
                                type="text"
                                name="userName"
                                id="clientUserName"
                                onChange={onChange}
                            />
                            <Label for="phone">טלפון</Label>
                            <Input
                                type="text"
                                name="phone"
                                id="clientPhone"
                                onChange={onChange}
                            />
                            <Label for="mail">מייל</Label>
                            <Input
                                type="text"
                                name="mail"
                                id="clientMail"
                                onChange={onChange}
                            />

                            <Button
                                color="success"
                                style={{marginTop: '2rem'}}
                                block
                            >הוספ/י משימה</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddClientModal
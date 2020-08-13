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

import {EDIT_CLIENT, ITarget, ClientActions, IClientObjectExist} from "../actions/types";
import {useDispatch} from "react-redux";
import axios from "axios";

const EditClientModal = (initialUser: IClientObjectExist) => {

    const [modal, setModal] = useState(false);
    const [user, setUser] = useState(initialUser);

    const clientsDispatch = useDispatch<Dispatch<ClientActions>>();

    const toggle = () => {
        setModal(!modal);
    }

    const onChange = (e: ITarget) => {
        setUser({...user,
            [e.target.name]: e.target.value})
    }

    const onSubmit = (e:any) => {
        e.preventDefault();

        const editedClient: IClientObjectExist = {
            _id: user._id,
            userName: user.userName,
            phone: user.phone,
            mail: user.mail,
            creationDate: user.creationDate
        }

        axios
            .put(`/api/clients/${user._id}`, editedClient)
            .then((res: any) =>
                    clientsDispatch({
                        type: EDIT_CLIENT,
                        payload: res.data
                    })
            )
            .catch(err =>
                console.log(err)
            );

        toggle();
    }

    return (
        <div>
            <Button
                className="remove-btn"
                size="sm"
                onClick={toggle}
            >עריכה</Button>
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
                                required
                                type="text"
                                name="userName"
                                id="clientUserName"
                                value={user.userName}
                                onChange={onChange}
                            />
                            <Label for="phone">טלפון</Label>
                            <Input
                                type="text"
                                name="phone"
                                id="clientPhone"
                                value={user.phone}
                                onChange={onChange}
                            />
                            <Label for="mail">מייל</Label>
                            <Input
                                type="text"
                                name="mail"
                                id="clientMail"
                                value={user.mail}
                                onChange={onChange}
                            />
                            <Button
                                color="success"
                                style={{marginTop: '2rem'}}
                                block
                            >שמירה</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default EditClientModal
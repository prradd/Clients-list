import React, {Dispatch, useState} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink
} from "reactstrap";

import {ITarget, AuthActions, ErrorActions} from "../../actions/types";
import {useDispatch} from "react-redux";

const RegisterModal = () => {

    const [modal, setModal] = useState(false);
    const [msg, setMsg] = useState(null);
    const [user, setUser] = useState( {
        userName: '',
        mail: '',
        password: ''
    });

    const authDispatch = useDispatch<Dispatch<AuthActions>>();
    const errorsDispatch = useDispatch<Dispatch<ErrorActions>>();

    const toggle = () => {
        setModal(!modal);
    }

    const onChange = (e: ITarget) => {
        setUser({...user,
            [e.target.name]: e.target.value})
    }

    const today = new Date();
    const date = today.getDate() + '.' + (today.getUTCMonth() + 1) + '.' + today.getFullYear();

    const onSubmit = (e:any) => {
        e.preventDefault();



        toggle();
    }

    return (
        <div>
            <NavLink onClick={toggle} href="#">
                הרשמה
            </NavLink>
            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>הרשמה</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="userName">שם משתמש</Label>
                            <Input
                                required
                                type="text"
                                name="userName"
                                id="userUserName"
                                className="mb-4"
                                onChange={onChange}
                            />
                            <Label for="mail">מייל</Label>
                            <Input
                                type="text"
                                name="mail"
                                id="userMail"
                                className="mb-4"
                                onChange={onChange}
                            />
                            <Label for="password">ססמא</Label>
                            <Input
                                type="password"
                                name="password"
                                id="userPassword"
                                className="mb-4"
                                onChange={onChange}
                            />

                            <Button
                                color="success"
                                style={{marginTop: '2rem'}}
                                block
                            >רישום</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default RegisterModal
import React, {Dispatch, Fragment} from "react";
import {Table, Container, Row, Col, Button} from "reactstrap";

import {useDispatch, useSelector} from "react-redux";
import {DELETE_CLIENT} from "../actions/types";
import {AppState} from "../reducers";
import {ClientActions} from "../actions/clientActions";
import AddClientModal from "./AddClientModal";
import EditClientModal from "./EditClientModal";

const DataTable = () => {

    const clients = useSelector((state:AppState) => state.client.clients);
    const clientsDispatch = useDispatch<Dispatch<ClientActions>>();

    const onDeleteClick = (id: string) => {
        clientsDispatch({type: DELETE_CLIENT, payload: id});
    }

    const renderTableData = () => {
        return clients.map((client) => {
            const {id, userName, phone, mail, creationDate} = client;
            return (
                <tr key={id} >
                    <td>{userName}</td>
                    <td >{phone}</td>
                    <td>{mail}</td>
                    <td>{creationDate}</td>
                    <td>
                        <Row>
                            <Button
                                className="remove-btn"
                                size="sm"
                                onClick={() => onDeleteClick(id)}
                            >מחיקה</Button>
                            <EditClientModal
                                id={id}
                                userName={userName}
                                phone={phone}
                                mail={mail}
                                creationDate={creationDate}
                            />
                        </Row>
                    </td>
                </tr>
            )
        })
    }

    return (
        <Fragment>
            <Container>
                <Row fluid="true" style={{"padding": "10px"}}>
                    <Col xs="4">
                        <span className="tableTitle">רשימת הלקוחות שלך({clients.length})</span>
                    </Col>
                    <Col xs="4"></Col>
                    <Col xs="4">
                        <AddClientModal />
                    </Col>
                </Row>

                <Table responsive hover >
                    <thead>
                    <tr>
                        <th>שם משתמש</th>
                        <th>טלפון</th>
                        <th>מייל</th>
                        <th>תאריך יצירת המשימה</th>
                        <th>פעולות</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderTableData()}
                    </tbody>
                </Table>
            </Container>

        </Fragment>

    )
}

export default DataTable;
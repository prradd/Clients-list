import React, {Dispatch, Fragment, useEffect} from "react";
import {Table, Container, Row, Col, Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {ClientActions, IClientObjectExist} from "../actions/types";
import {AppState} from "../reducers";
import AddClientModal from "./AddClientModal";
import EditClientModal from "./EditClientModal";
import {deleteClient, getClients} from "../actions/clientActions";

const DataTable = () => {

    const clients = useSelector((state:AppState) => state.client.clients);
    const clientsDispatch = useDispatch<Dispatch<ClientActions>>();

    useEffect(() =>{
        getClients(clientsDispatch)
    }, [clientsDispatch]);

    const onDeleteClick = (id: string) => {
        deleteClient(clientsDispatch, id);
    }

    const formatDate = (creationDate: string) => {
        const event = new Date(creationDate.toString());
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' };
        return event.toLocaleTimeString('he-IL', options)
    }

    const renderTableData = () => {
        return clients.map((client: IClientObjectExist) => {
            const {_id, userName, phone, mail, creationDate} = client;
            return (
                <tr key={_id} >
                    <td>{userName}</td>
                    <td >{phone}</td>
                    <td>{mail}</td>
                    <td>{creationDate ? formatDate(creationDate) : null}</td>
                    <td>
                        <Row>
                            <Button
                                className="remove-btn"
                                size="sm"
                                onClick={() => onDeleteClick(_id)}
                            >מחיקה</Button>
                            <EditClientModal
                                _id={_id}
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
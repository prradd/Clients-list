import React, {Fragment, useEffect, useState} from "react";
import {Table, Container, Row, Col, Button} from "reactstrap";

import {useDispatch, useSelector} from "react-redux";
import {deleteClient, getClients} from "../actions/clientActions";


interface ClientObject {
    id: string;
    userName: string;
    phone?: string;
    mail?: string;
    creationDate?: string;
    actions?: string
}

const DataTable = () => {

    // const [users, setUsers] = useState<Array<ClientObject>>([
    //     {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
    //     {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
    //     {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
    //     {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
    //     {id: uuid(), userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
    // ])
    console.log(getClients());


    const clients = useSelector((state:any) => state.client.clients);

    const onDeleteClick = (id: string) => {
        deleteClient(id);
    }

    const renderTableData = () => {
        return clients.map((client: ClientObject) => {
            const {id, userName, phone, mail, creationDate, actions} = client;
            return (
                <tr key={id} >
                    <td>{userName}</td>
                    <td >{phone}</td>
                    <td>{mail}</td>
                    <td>{creationDate}</td>
                    <td>
                        <Button
                            className="remove-btn"
                            size="sm"
                            onClick={() => onDeleteClick(id)}
                        >מחיקה</Button>
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
                        {/*<Button*/}
                        {/*    color="success"*/}
                        {/*    style={{"float": "left", "backgroundColor":"00b074"}}*/}
                        {/*    onClick={() => {*/}
                        {/*        const userName = prompt('Enter Username');*/}
                        {/*        if (userName){*/}
                        {/*          // setUsers([...users, {id: uuid(), userName}])*/}
                        {/*        }*/}
                        {/*    }}*/}
                        {/*>משימה חדשה</Button>*/}
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

// DataTable.propTypes = {
//     getUsers: PropTypes.func.isRequired,
//     user: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     user: state.user
// })

// export default connect(mapStateToProps, {getUsers})(DataTable);
export default DataTable;
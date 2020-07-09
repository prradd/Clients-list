import React, {Fragment, useState} from "react";

const DataTable = () => {

    const [clients, setClients] = useState([
        {id: 1, userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: 2, userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: 3, userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: 4, userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
        {id: 5, userName: "אנטון", phone: "054-4228667", mail: "prradd@gmail.com", creationDate: "8.7.2020", actions: "צפיה עריכה מחיקה"},
    ])

    const renderTableData = () => {
        return clients.map((client, index) => {
            const {id, userName, phone, mail, creationDate, actions} = client;
            return (
                <tr key={id}>
                    <td>{userName}</td>
                    <td>{phone}</td>
                    <td>{mail}</td>
                    <td>{creationDate}</td>
                    <td>{actions}</td>
                </tr>
            )
        })
    }

    return (
        <Fragment>
            <h2>רשימת הלקוחות</h2>
            <table className="clientListTable">
                <tr>
                    <th>שם משתמש</th>
                    <th>טלפון</th>
                    <th>מייל</th>
                    <th>תאריך יצירת המשימה</th>
                    <th>פעולות</th>
                </tr>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        </Fragment>

    )
}

export default DataTable;
import React from "react";
import DoctorRow from "../DoctorRow/DoctorRow";

const DoctorTable = () => {
    return <div className="row">
        <table>
            <thead>
                <tr>
                    <th>Upin</th>
                    <th>Name</th>
                    <th>ZipCode</th>
                    <th>City</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="doctors">
                <DoctorRow />
            </tbody>
        </table>
    </div >

}

export default DoctorTable

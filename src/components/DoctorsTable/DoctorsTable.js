import React from "react";
import DoctorRow from "../DoctorRow/DoctorRow";

const DoctorTable = (props) => {
    return <div className="row">
        <table>
            <thead>
                <tr>
                    <th style={{ padding: "1.2rem 1.5rem" }}>Upin</th>
                    <th>Name</th>
                    <th>ZipCode</th>
                    <th>City</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="doctors">
                {
                    props.doctors.map((doctor) => {
                        return <DoctorRow key={doctor.upin} doctor={doctor} updateDoctors={props.updateDoctors} />
                    })
                }
            </tbody>
        </table>
    </div >
}

export default DoctorTable

import React, { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import DoctorRow from "../DoctorRow/DoctorRow";

const DoctorTable = () => {
    const { filteredDoctors } = useContext(DoctorContext);

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
                    filteredDoctors.map((doctor) => {
                        return <DoctorRow key={doctor.upin} doctor={doctor} />
                    })
                }
            </tbody>
        </table>
    </div >
}

export default DoctorTable

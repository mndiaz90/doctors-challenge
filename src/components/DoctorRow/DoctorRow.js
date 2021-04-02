import React, { useState } from "react";
import { changeDoctorAvailability } from "./DoctorRow.util"
import "./DoctorRow.css"

const DoctorRow = (props) => {
    const [doctor, setDoctor] = useState(props.doctor)

    const onClickButton = (doctor) => {
        changeDoctorAvailability(doctor).then((modifiedDoctor) => {
            modifiedDoctor.city = doctor.city
            modifiedDoctor.zipcode = doctor.zipcode
            setDoctor(modifiedDoctor)
        });
    }

    return <>
        <tr data-upin={doctor.upin} className="rowDoctor" style={doctor.available ? {} : {
            textDecoration: "line-through",
            fontStyle: "italic",
            background: "rgb(229 234 236)"
        }}
        >
            <td>{doctor.upin}</td>
            <td>{doctor.name}</td>
            <td>{doctor.zipcode}</td>
            <td>{doctor.city}</td>
            <td>
                <button className={doctor.available ? "button_unavailable" : "button_available"} onClick={() => onClickButton(doctor)}>
                    {doctor.available ? 'Mark as Unavailable' : 'Mark as Available'}
                </button>
            </td>
        </tr>
    </>
}

export default DoctorRow

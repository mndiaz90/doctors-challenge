import React, { useState } from "react";
import { changeDoctorAvailability } from "./DoctorRow.util"
import "./DoctorRow.css"

const DoctorRow = (props) => {
    const onClickButton = (doctor) => {
        changeDoctorAvailability(doctor).then((modifiedDoctor) => {
            modifiedDoctor.city = doctor.city
            modifiedDoctor.zipcode = doctor.zipcode

            props.updateDoctors(modifiedDoctor)
        });
    }

    return <>
        <tr data-upin={props.doctor.upin} className="rowDoctor" 
            style={props.doctor.available ? {} : {textDecoration: "line-through", fontStyle: "italic", background: "rgb(229 234 236)"
        }}
        >
            <td>{props.doctor.upin}</td>
            <td>{props.doctor.name}</td>
            <td>{props.doctor.zipcode}</td>
            <td>{props.doctor.city}</td>
            <td>
                <button className={props.doctor.available ? "button_unavailable" : "button_available"} onClick={() => onClickButton(props.doctor)}>
                    {props.doctor.available ? 'Mark as Unavailable' : 'Mark as Available'}
                </button>
            </td>
        </tr>
    </>
}

export default DoctorRow

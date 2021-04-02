import React, { useState } from "react";
import { changeDoctorAvailability } from "./DoctorRow.util"

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
        <tr data-upin={doctor.upin} className={doctor.available ? "available_doctor" : "unavailable_doctor"}>
            <td>{doctor.upin}</td>
            <td>{doctor.name}</td>
            <td>{doctor.zipcode}</td>
            <td>{doctor.city}</td>
            <td>
                <button className="button button-outline" onClick={() => onClickButton(doctor)}>
                    {doctor.available ? 'Mark as Unavailable' : 'Mark as Available'}
                </button>
            </td>
        </tr>
    </>
}

export default DoctorRow

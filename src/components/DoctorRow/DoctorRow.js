import React, { useState } from "react";

const DoctorRow = (props) => {
    const [doctor, setDoctor] = useState(props.doctor)

    return <>
        <tr data-upin={doctor.upin} className={doctor.available ? "available_doctor" : "unavailable_doctor"}>
            <td>{doctor.upin}</td>
            <td>{doctor.name}</td>
            <td>{doctor.zipcode}</td>
            <td>{doctor.city}</td>
            <td>
                <button className="button button-outline">
                    {doctor.available ? 'Mark as Unavailable' : 'Mark as Available'}
                </button>
            </td>
        </tr>
    </>
}

export default DoctorRow

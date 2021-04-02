import React from 'react';

const DoctorRow = () => {
    return <>
        <tr>
            <td>202029</td>
            <td>John Doe</td>
            <td>92037</td>
            <td>La Jolla</td>
            <td>
                <button className="button button-outline">
                    Mark as Available
                </button>
            </td>
        </tr>
    </>
}

export default DoctorRow

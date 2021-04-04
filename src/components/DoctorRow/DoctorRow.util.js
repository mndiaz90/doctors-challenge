import config from "../../../config";

export const changeDoctorAvailability = async (doctor) => {
    return fetch(`${config.serverEndpoint}/doctors/${doctor.upin}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            available: !doctor.available
        })
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw `Error: ${response.status} ${response.statusText}`
            }
        })
        .catch((error) => alert(error))
}

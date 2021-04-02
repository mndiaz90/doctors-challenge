import config from "../../../config"

export const changeDoctorAvailability = (doctor) => {
    return fetch(`${config.serverEndpoint}/doctors/${doctor.upin}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            available: !doctor.available
        })
    })
        .then((response) => response.json())
        .then((modifiedDoctor) => modifiedDoctor)
        .catch((error) => console.log(error))
}

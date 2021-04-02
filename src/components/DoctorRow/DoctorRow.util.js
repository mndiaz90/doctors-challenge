const baseUrl = "http://localhost:3030"

export const changeDoctorAvailability = (doctor) => {
    return fetch(`${baseUrl}/doctors/${doctor.upin}`, {
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

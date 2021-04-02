const baseUrl = "http://localhost:3030"

export const getDoctorsList = (htmlDoctorsTable) => {
    return fetch(baseUrl + "/doctors")
        .then((response) => response.json())
        .then((doctors) => mergeDoctorsData(doctors, htmlDoctorsTable))
        .catch((error) => console.log(error))

}

const mergeDoctorsData = (doctors, htmlDoctorsTable) => {
    return doctors.map((doctor, index) => {
        if (doctor.upin === Number(htmlDoctorsTable[index].upin)) {
            return Object.assign({}, doctor, htmlDoctorsTable[index])
        }
    })
}

import config from "../../../config"

export const getDoctorsList = (htmlDoctorsTable) => {
    return fetch(`${config.serverEndpoint}/doctors`)
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

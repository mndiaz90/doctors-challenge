import config from "../../../config";

export const getDoctorsList = async (htmlDoctorsTable) => {
    return fetch(`${config.serverEndpoint}/doctors`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw `Error: ${response.status} ${response.statusText}`
            }
        })
        .then((doctors) => mergeDoctorsData(doctors, htmlDoctorsTable))
        .catch((error) => alert(error))
}

const mergeDoctorsData = (doctors, htmlDoctorsTable) => {
    return doctors.map((doctor, index) => {
        if (doctor.upin === Number(htmlDoctorsTable[index].upin)) {
            return Object.assign({}, doctor, htmlDoctorsTable[index])
        }
    })
}

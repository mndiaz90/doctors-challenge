function getDoctorsTable() {
    const doctorRows = document.getElementsByTagName("tbody")[0].rows;
    const arrayDoctors = Array.from(doctorRows);
    const doctorsTable = arrayDoctors.map((row) => {
        const td = row.getElementsByTagName("td");
        return {
            upin: row.getAttribute('data-upin'),
            name: td[0].innerText,
            zipcode: td[1].innerText,
            city: td[2].innerText,
        }
    });

    return doctorsTable;
}

export default getDoctorsTable;

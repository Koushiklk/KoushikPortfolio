console.log("Welcome to Koushik's Portfolio");

function showResult(course) {

    const result = document.getElementById("resultDisplay");

    let title = "";
    let institute = "";
    let year = "";
    let location = "";
    let score = "";

    switch(course){

        case "sslc":
            title = "📘 SSLC (10th)";
            institute = "SRI SIDDAGANGA COMPOSITE HIGH SCHOOL";
            year = "2020 - 2021";
            location = "Davanagere, Karnataka";
            score = "77.12%";
            break;

        case "puc":
            title = "📙 PUC (12th)";
            institute = "NUTHANA INDEPENDENT PU COLLEGE";
            year = "2021 - 2023";
            location = "Davanagere, Karnataka";
            score = "88.93%";
            break;

        case "btech":
            title = "🎓 B.Tech (Computer Science & Engineering)";
            institute = "GM UNIVERSITY";
            year = "2023 - 2027";
            location = "Davanagere, Karnataka";
            score = "CGPA : 7.61";
            break;
    }

    result.innerHTML = `
        <h3>${title}</h3>

        <table class="result-table">
            <tr>
                <td><strong>Institute</strong></td>
                <td>${institute}</td>
            </tr>

            <tr>
                <td><strong>Academic Year</strong></td>
                <td>${year}</td>
            </tr>

            <tr>
                <td><strong>Location</strong></td>
                <td>${location}</td>
            </tr>

            <tr>
                <td><strong>Result</strong></td>
                <td><strong>${score}</strong></td>
            </tr>
        </table>
    `;

    result.style.display = "block";
}
console.log("Welcome to Koushik's Portfolio");

function showResult(course) {

    const result = document.getElementById("resultDisplay");
    let data = {};

    if (course === "sslc") {
        data = {
            title: "📘 SSLC (10th)",
            institute: "Sri Siddaganga Composite High School",
            year: "2020 - 2021",
            location: "Davanagere, Karnataka",
            score: "77.12%"
        };
    }

    else if (course === "puc") {
        data = {
            title: "📙 PUC (12th)",
            institute: "Nuthana Independent PU College",
            year: "2021 - 2023",
            location: "Davanagere, Karnataka",
            score: "88.93%"
        };
    }

    else if (course === "btech") {
        data = {
            title: "🎓 B.Tech (Computer Science & Engineering)",
            institute: "GM University",
            year: "2023 - 2027",
            location: "Davanagere, Karnataka",
            score: "CGPA: 7.61"
        };
    }

    result.innerHTML = `
        <h3>${data.title}</h3>
        <table class="result-table">
            <tr>
                <td>Institute</td>
                <td>${data.institute}</td>
            </tr>
            <tr>
                <td>Academic Year</td>
                <td>${data.year}</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>${data.location}</td>
            </tr>
            <tr>
                <td>Result</td>
                <td>${data.score}</td>
            </tr>
        </table>
    `;

    result.style.display = "block";
}
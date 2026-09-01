// AMR Early Warning System

function calculateRisk() {
    const resistance = Number(
        document.getElementById("resistance").value
    );

    const result = document.getElementById("result");

    let risk;
    let message;

    if (resistance >= 60) {
        risk = "HIGH RISK";
        message = "Immediate surveillance recommended.";
    } 
    else if (resistance >= 30) {
        risk = "MEDIUM RISK";
        message = "Monitor resistance trend carefully.";
    } 
    else {
        risk = "LOW RISK";analytics.html
        message = "Continue routine surveillance.";
    }

    result.innerHTML = `
        <strong>${risk}</strong>
        <br>
        ${message}
    `;
}


// AMR Dataset

const amrData = [
    {
        bacteria: "E. coli",
        antibiotic: "Ampicillin",
        totalTests: 100,
        resistant: 65
    },

    {
        bacteria: "Klebsiella",
        antibiotic: "Ceftriaxone",
        totalTests: 80,
        resistant: 56
    },

    {
        bacteria: "E. coli",
        antibiotic: "Ciprofloxacin",
        totalTests: 70,
        resistant: 11
    }
];


// Calculate resistance percentage

function calculateResistance(totalTests, resistant) {

    if (totalTests === 0) {
        return 0;
    }

    return ((resistant / totalTests) * 100).toFixed(1);
}


// Generate risk level

function getRiskLevel(resistance) {

    if (resistance >= 60) {
        return "HIGH";
    }

    if (resistance >= 30) {
        return "MEDIUM";
    }

    return "LOW";
}


// Analyse AMR data

function analyseAMR() {

    amrData.forEach(sample => {

        const resistance = calculateResistance(
            sample.totalTests,
            sample.resistant
        );

        const risk = getRiskLevel(Number(resistance));

        console.log(
            sample.bacteria +
            " + " +
            sample.antibiotic +
            " → " +
            resistance +
            "% → " +
            risk
        );
    });
}


// Early warning system

function generateAlert() {

    const highRiskSamples = amrData.filter(sample => {

        const resistance = calculateResistance(
            sample.totalTests,
            sample.resistant
        );

        return Number(resistance) >= 60;
    });

    if (highRiskSamples.length > 0) {

        console.warn(
            "⚠ HIGH AMR RISK DETECTED:",
            highRiskSamples
        );

    } else {

        console.log(
            "No high-risk AMR pattern detected."
        );
    }
}


// Run analysis

analyseAMR();
generateAlert();
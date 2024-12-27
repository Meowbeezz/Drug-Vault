// Sample drug data for testing
const drugData = [
    {
        name: "Aspirin",
        uses: "Aspirin is used to reduce fever, pain, and inflammation.",
        dosage: "The typical adult dose is 325–650 mg every 4 to 6 hours.",
        sideEffects: "Side effects may include nausea, stomach upset, or bleeding.",
        warnings: "Avoid if allergic to aspirin or other NSAIDs. May cause stomach bleeding.",
        interactions: "Can interact negatively with blood thinners like warfarin."
    },
    {
        name: "Ibuprofen",
        uses: "Ibuprofen is used to reduce fever, pain, and inflammation.",
        dosage: "The typical adult dose is 200–400 mg every 4 to 6 hours.",
        sideEffects: "Side effects may include nausea, headache, or dizziness.",
        warnings: "Avoid if allergic to ibuprofen or other NSAIDs. May cause stomach issues.",
        interactions: "Can interact negatively with blood thinners and other NSAIDs."
    },
    {
        name: "Paracetamol",
        uses: "Paracetamol is commonly used to relieve mild to moderate pain and reduce fever.",
        dosage: "Typical dose is 500 mg every 4 to 6 hours.",
        sideEffects: "Side effects can include liver damage at high doses.",
        warnings: "Avoid overuse and take care if you have liver problems.",
        interactions: "Paracetamol interacts with alcohol and may affect liver function."
    },
    {
        name: "Amoxicillin",
        uses: "Amoxicillin is used to treat bacterial infections.",
        dosage: "The typical adult dose is 500 mg every 8 hours.",
        sideEffects: "Side effects may include nausea, diarrhea, and skin rash.",
        warnings: "Can cause allergic reactions in people allergic to penicillin.",
        interactions: "Amoxicillin can interact with certain other antibiotics and birth control pills."
    },
    {
        name: "Lisinopril",
        uses: "Lisinopril is used to treat high blood pressure and heart failure.",
        dosage: "The typical dose is 10-40 mg per day.",
        sideEffects: "Side effects include dizziness, headache, and fatigue.",
        warnings: "May cause a dry cough or elevated blood potassium levels.",
        interactions: "Can interact with diuretics and certain other blood pressure medications."
    },
    {
        name: "Metformin",
        uses: "Metformin is used to treat type 2 diabetes.",
        dosage: "The typical dose is 500 mg to 1,000 mg, twice a day.",
        sideEffects: "Side effects can include nausea, diarrhea, and stomach upset.",
        warnings: "Can cause lactic acidosis in rare cases, especially in those with kidney problems.",
        interactions: "May interact with diuretics, corticosteroids, and certain blood pressure drugs."
    },
    {
        name: "Amlodipine",
        uses: "Amlodipine is used to treat high blood pressure and chest pain.",
        dosage: "The typical dose is 5-10 mg per day.",
        sideEffects: "Side effects can include swelling, dizziness, and fatigue.",
        warnings: "Can cause low blood pressure, especially when standing up quickly.",
        interactions: "May interact with other blood pressure medications."
    },
    {
        name: "Atorvastatin",
        uses: "Atorvastatin is used to lower cholesterol and reduce the risk of heart disease.",
        dosage: "Typical dose ranges from 10 mg to 80 mg per day.",
        sideEffects: "Side effects include muscle pain, liver enzyme changes, and digestive issues.",
        warnings: "Can cause liver problems and muscle damage.",
        interactions: "May interact with certain antibiotics and antifungals."
    },
    {
        name: "Simvastatin",
        uses: "Simvastatin is used to lower cholesterol levels and reduce cardiovascular risks.",
        dosage: "Typical dose is 10-40 mg per day, taken in the evening.",
        sideEffects: "Side effects may include muscle pain, liver problems, and stomach issues.",
        warnings: "Avoid alcohol and monitor for muscle pain.",
        interactions: "Can interact with several drugs, including certain antibiotics and antifungals."
    },
    {
        name: "Omeprazole",
        uses: "Omeprazole is used to treat gastroesophageal reflux disease (GERD) and stomach ulcers.",
        dosage: "Typical dose is 20-40 mg per day.",
        sideEffects: "Side effects may include nausea, headache, and abdominal pain.",
        warnings: "Can cause stomach infections and low magnesium levels.",
        interactions: "May interact with certain antibiotics and medications used for HIV."
    },
    {
        name: "Pantoprazole",
        uses: "Pantoprazole is used to treat stomach acid-related conditions like GERD.",
        dosage: "Typical dose is 20-40 mg per day.",
        sideEffects: "Side effects may include headache, nausea, and stomach upset.",
        warnings: "May cause low magnesium levels and increase the risk of bone fractures.",
        interactions: "Can interact with certain antifungal drugs and HIV medications."
    },
    {
        name: "Prednisone",
        uses: "Prednisone is used to treat inflammation and autoimmune conditions.",
        dosage: "The typical dose is 5-60 mg per day, depending on the condition.",
        sideEffects: "Side effects may include weight gain, mood changes, and increased blood sugar.",
        warnings: "Should not be stopped suddenly and may cause osteoporosis over long-term use.",
        interactions: "May interact with certain vaccines and other immunosuppressive drugs."
    },
    {
        name: "Gabapentin",
        uses: "Gabapentin is used to treat nerve pain and seizures.",
        dosage: "Typical dose is 300 mg to 3,600 mg per day.",
        sideEffects: "Side effects may include dizziness, fatigue, and swelling.",
        warnings: "May cause suicidal thoughts and should not be abruptly discontinued.",
        interactions: "Can interact with other medications that affect the central nervous system."
    },
    {
        name: "Losartan",
        uses: "Losartan is used to treat high blood pressure and prevent stroke.",
        dosage: "Typical dose is 25-100 mg per day.",
        sideEffects: "Side effects can include dizziness, back pain, and fatigue.",
        warnings: "May cause elevated potassium levels and should be used cautiously in patients with kidney issues.",
        interactions: "Can interact with other blood pressure medications and potassium-sparing diuretics."
    },
    {
        name: "Levothyroxine",
        uses: "Levothyroxine is used to treat hypothyroidism (underactive thyroid).",
        dosage: "The typical starting dose is 25–50 mcg per day.",
        sideEffects: "Side effects may include weight loss, nervousness, and increased heart rate.",
        warnings: "Should not be used if you have thyroid disease other than hypothyroidism.",
        interactions: "Can interact with calcium supplements, iron, and certain other medications."
    },
    {
        name: "Clopidogrel",
        uses: "Clopidogrel is used to prevent blood clots in patients with heart disease.",
        dosage: "Typical dose is 75 mg once daily.",
        sideEffects: "Side effects can include bleeding, bruising, and gastrointestinal upset.",
        warnings: "Should be discontinued 5 days before surgery to reduce bleeding risk.",
        interactions: "Can interact with aspirin, NSAIDs, and certain other blood thinners."
    },
    {
        name: "Tamsulosin",
        uses: "Tamsulosin is used to treat enlarged prostate and improve urinary flow.",
        dosage: "Typical dose is 0.4–0.8 mg per day.",
        sideEffects: "Side effects can include dizziness, headache, and fatigue.",
        warnings: "May cause low blood pressure, especially when standing up.",
        interactions: "Can interact with other medications for blood pressure and alpha-blockers."
    },
    {
        name: "Furosemide",
        uses: "Furosemide is used to treat fluid retention and high blood pressure.",
        dosage: "Typical dose is 20-80 mg per day.",
        sideEffects: "Side effects can include dehydration, low potassium levels, and dizziness.",
        warnings: "Monitor kidney function and potassium levels during treatment.",
        interactions: "Can interact with other diuretics, blood pressure medications, and digoxin."
    },
    {
        name: "Zolpidem",
        uses: "Zolpidem is used to treat insomnia.",
        dosage: "Typical dose is 5-10 mg before bedtime.",
        sideEffects: "Side effects may include dizziness, drowsiness, and headache.",
        warnings: "Can cause sleepwalking or other unusual behaviors.",
        interactions: "May interact with other central nervous system depressants, like alcohol."
    }
];


// Search functionality
document.getElementById('search-btn').addEventListener('click', function () {
    const searchTerm = document.getElementById('search').value.toLowerCase().trim();
    if (!searchTerm) return;

    const drug = drugData.find(d => d.name.toLowerCase() === searchTerm);
    
    if (drug) {
        displayDrugInfo(drug);
    } else {
        alert("Drug not found in database!");
    }
});

// Display drug information
function displayDrugInfo(drug) {
    document.getElementById('drug-info').style.display = 'block';
    document.getElementById('drug-info').innerHTML = `
        <h2>${drug.name}</h2>
        <p><strong>Uses:</strong> ${drug.uses}</p>
        <p><strong>Dosage:</strong> ${drug.dosage}</p>
        <p><strong>Side Effects:</strong> ${drug.sideEffects}</p>
        <p><strong>Warnings:</strong> ${drug.warnings}</p>
        <p><strong>Interactions:</strong> ${drug.interactions}</p>
    `;
}

// Interaction check functionality
document.getElementById('interaction-btn').addEventListener('click', function () {
    const drug1 = document.getElementById('drug1').value.toLowerCase().trim();
    const drug2 = document.getElementById('drug2').value.toLowerCase().trim();

    const drug1Data = drugData.find(d => d.name.toLowerCase() === drug1);
    const drug2Data = drugData.find(d => d.name.toLowerCase() === drug2);

    if (drug1Data && drug2Data) {
        const interactionResult = checkInteraction(drug1Data, drug2Data);
        displayInteractionResult(interactionResult);
    } else {
        alert("Please enter valid drug names.");
    }
});

// Check interaction and return positive/negative
function checkInteraction(drug1, drug2) {
    // Example: Check for negative interaction between Aspirin and Ibuprofen
    if (drug1.name === "Aspirin" && drug2.name === "Ibuprofen") {
        return { type: 'negative', message: `Negative interaction detected between ${drug1.name} and ${drug2.name}.` };
    } else {
        return { type: 'positive', message: `No significant interaction between ${drug1.name} and ${drug2.name}.` };
    }
}

// Display the interaction result
function displayInteractionResult(result) {
    const resultBox = document.getElementById('interaction-result');
    resultBox.style.display = 'block';
    resultBox.innerHTML = `<p><strong>${result.message}</strong></p>`;

    if (result.type === 'negative') {
        resultBox.classList.add('negative');
        resultBox.classList.remove('positive');
    } else {
        resultBox.classList.add('positive');
        resultBox.classList.remove('negative');
    }
}
// Get all collapsible links
var coll = document.querySelectorAll(".collapsible");

// Add event listeners to each link
coll.forEach(function(link) {
    link.addEventListener("click", function() {
        // Toggle between hiding and showing the active content
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

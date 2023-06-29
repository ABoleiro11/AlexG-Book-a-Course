function validateForm() {
    
    if (!Vorname()) return false; 
    if (!Vorname()) return false;
    
    return true; 
}

function validateVorname() {
    let value = document.getElementById("vorname").value;
    
    if (value === "") { // 'single quotes'
        // Fehlerfall
        setMessage1("Bitte den Vornamen eingeben.");
        return false; 
    }

    sessionStorage.setItem("vorname", value);

    return true; 
}


function validateLastName() {
    let value = document.getElementById("name").value;

    if (value === "") { // 'single quotes'
        // Fehlerfall
        setMessage1("Bitte den Nachnamen eingeben.");
        return false; 
    }

    sessionStorage.setItem("name", value);

    return true; 
}

function setMessage1(value) {
    document.getElementById("message-1").innerText = value;
}

function setMessage2(value)  {
    document.getElementById("message-2").innerText = value;
}

// ----------------------------------------------------------------

function generateConfirmation() {
   
    document.getElementById("vorname").innerText = sessionStorage.getItem("vorname");

   
}
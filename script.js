function validateForm() {
    // if (false) return false;
    // if (!true) return false;
    if (!Vorname()) return false; // Formular hat Fehler
    if (!Vorname()) return false;
    
    return true; // Formular wurde korrekt ausgefüllt.
}

function validateVorname() {
    let value = document.getElementById("vorname").value;
    //          document = the html  
    //                   getElementById = search for an element in the html 
    //                                       value = what's the value of that element?
    if (value === "") { // 'single quotes'
        // Fehlerfall
        setMessage1("Bitte den Vornamen eingeben.");
        return false; // korrekte Eingabe
    }

    sessionStorage.setItem("vorname", value);

    return true; // korrekte Eingabe
}


function validateLastName() {
    let value = document.getElementById("name").value;

    if (value === "") { // 'single quotes'
        // Fehlerfall
        setMessage1("Bitte den Nachnamen eingeben.");
        return false; // korrekte Eingabe
    }

    sessionStorage.setItem("name", value);

    return true; // korrekte Eingabe
}

function setMessage1(value) {
    document.getElementById("message-1").innerText = value;
}

function setMessage2(value)  {
    document.getElementById("message-2").innerText = value;
}

// ----------------------------------------------------------------

function generateConfirmation() {
    // Vornamen einfüllen (in <span> Tag)
    document.getElementById("vorname").innerText = sessionStorage.getItem("vorname");

    // Nachnamen einfüllen...
}
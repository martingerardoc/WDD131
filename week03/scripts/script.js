//Obtener el año actual para el copyright
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Obtener la última fecha de modificación del documento
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;


// Static values for temperature and wind speed
let temperatureCelsius = 10; // Static temperature in °C
let windSpeedKmh = 15;       // Static wind speed in km/h

// Function to calculate wind chill factor
function calculateWindChill(tempC, windSpeedKmh) {
    // Convert wind speed to meters per second
    let windSpeedMps = windSpeedKmh / 3.6;
    
    // Wind chill formula (valid only if temperature <= 10°C and wind speed > 4.8 km/h)
    if (tempC <= 10 && windSpeedMps > 1.33) {
        return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedMps, 0.16) + 0.3965 * tempC * Math.pow(windSpeedMps, 0.16);
    } else {
        return "N/A";  // Not applicable if the conditions aren't met
    }
}

// Function to display the calculated wind chill when the page loads
function displayWindChill() {
    // Get wind chill factor
    let windChillFactor = calculateWindChill(temperatureCelsius, windSpeedKmh);

    // Update the HTML to display the result
    document.getElementById("windchill").textContent = windChillFactor !== "N/A" 
        ? windChillFactor.toFixed(2) + "°C"
        : "N/A";
}

// Call the function to display the wind chill when the page loads
window.onload = displayWindChill;
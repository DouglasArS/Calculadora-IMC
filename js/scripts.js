// Calculate imc
function calculateIMC() {

    // Get user weight 
    let weight = parseFloat(
        document.querySelector("#weight").value
    )

    // Get user height
    let height = parseFloat(
        document.querySelector("#height").value
    )

    document.querySelector("#imc-value").textContent = (weight / Math.pow(height, 2)).toFixed(2);


}

const calculateBtn = document.querySelector("#calculate-imc")

calculateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    calculateIMC();
})

// Clear IMC
function clearIMC() {
    document.querySelector("#weight").value = ""
    document.querySelector("#height").value = ""
    document.querySelector("#imc-value").textContent = ""
}

const clearBtn = document.querySelector("#clear-imc")

clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    clearIMC();
})
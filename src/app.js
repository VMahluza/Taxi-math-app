const taxiFare = document.getElementById("taxi-fare")
const amountRecieved = document.getElementById("money-recieved")
const numberOfPassangers = document.getElementById("number-of-passagers")
const results = document.getElementById("results")
const calculateBtn = document.getElementById("change-btn")

calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let change = amountRecieved.value - (taxiFare.value * numberOfPassangers.value)
    const result = generateOuput(taxiFare.value, amountRecieved.value, numberOfPassangers.value, change)
    results.innerHTML += result

    clearInputs();
})

function generateOuput(fare, paidAmount, passangers, change) {
    let changeDisplay = `<td class="success">${change}</td>`
    if (change < 0) 
        changeDisplay = `<td class="error">Error:Money short by R${Math.abs(change)}</td>`
    
    return  `
        <tr>
            <td>R ${fare}</td>
            <td>R ${paidAmount}</td>
            <td>${passangers}</td>
            ${changeDisplay}
        </tr>
    `
}

function clearInputs() {
    taxiFare.value = "";
    amountRecieved.value = "";
    numberOfPassangers.value = ""
}

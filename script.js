function compute()
{
    // Get inputs from HTML elements and parse into required types
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    // Validate "principal" input
    if (principal <= 0){
        alert("You must enter a positive number for amount")
        document.getElementById("principal").focus();
    } else {
        // Carry out calculations
        var interest = principal * years * rate / 100
        var amount = principal + interest

        // Display result
        document.getElementById("result").innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in " + "<mark>" + years + "</mark>" + " years\<br\>";
    }

    
}

function updateRate()
{
    // Get rate input from slider
    var rateval = document.getElementById("rate").value;

    // Display rate 
    document.getElementById("rate_val").innerText = rateval;
}
document.getElementById("gobutton").addEventListener("click", function() {
    password = document.getElementById("gopassword").value;
    if (password === "TrustNo1") {
        let inputFields = document.querySelectorAll('input[type=range], input[type=checkbox]');
        for (let i = 0; i < inputFields.length; i++) {
            inputFields[i].disabled = false;
        }
    }
})


//console.log(inputs);

let allInputs2 = document.querySelectorAll('input[type=range], input[type=checkbox]');
for (let i = 0; i < allInputs2.length; i++) {
    allInputs2[i].onchange = function() {
        checkInputs();
    }
}


function checkInputs() {
    const inputs = document.querySelectorAll('input[type=range], input[type=checkbox]');
    for (let i = 0; i < inputs.length; i++) {
        //console.log(inputs[i].value);
        let total = 0;
        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j].type == "range" && inputs[j].value == 100) {
                total++;
            }
            if (inputs[j].type == "checkbox" && inputs[j].checked) {
                total++;
            }
            if (total == 11) {
                console.log(total);
                var butt = document.getElementById("launch");
                butt.disabled = false;
            }
        }
        //console.log(total);
    }
}


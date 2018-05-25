let idcard = function() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let fullname = firstName+" "+lastName;
    let age = document.getElementById("Age").value;
    let phone = document.getElementById("pnumber").value;
    let adrs = document.getElementById("address").value;
    console.log(fullname, phone, age, adrs);
    document.getElementById("postFullName").innerHTML = fullname;
    document.getElementById("pAge").innerHTML = age;
    document.getElementById("pPhone").innerHTML = phone;
    document.getElementById("pAddress").innerHTML = adrs;
}

document.getElementById("gen").addEventListener("click", function() {
    idcard();
    
} 
);




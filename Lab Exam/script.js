function registrationStudent() {
    var fname= document.getElementById("fname").value;
    var lname= document.getElementById("lname").value;
    var id= document.getElementById("id").value;
    var email= document.getElementById("email").value;
    var credit= document.getElementById("credit").value;
    var dept = document.getElementById("dept").value;
    
    if(fname == "")
    {
        alert("First Name is required");
    }
    else if(lname =="")
    {
        alert("Last Name is required");
    }
    else if(id.indexOf("-")== -1)
    {
        alert("Student ID must contain '-' ");
    }
    else if(email.indexOf("@student.aiub.edu") == -1)
    {
        alert("invalid E-mail");
    }
    else if(credit <0 || credit >= 148)
    {
        alert("Credit must be between 0 to 148");
    }
    else if(dept == "")
    {
        alert("Select Department");
    }
    else {
        var table = document.getElementById("studentTable");
        var row = table.insertRow();
        row.insertCell(0).innerHTML =fname;
        row.insertCell(1).innerHTML= lname;
        row.insertCell(2).innerHTML = id;
        row.insertCell(3).innerHTML = email;
        row.insertCell(4).innerHTML = credit;
        row.insertCell(5).innerHTML = dept;

        alert("Registration Successful");
        document.getElementById("studentForm").reset();
    }
}

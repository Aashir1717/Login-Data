alert("Hello")

const signup = document.getElementById("signup") 

signup.onclick   

    const firstnameAdress = document.getElementById("First Name").value;
    const surnameAdress = document.getElementById("Surname").value;
    const emailAdress = document.getElementById("Email").value;
    const passwordAdress = document.getElementById("Password").value;

    const getfullname = localStorage.getItem("First Name")
    const getsurname = localStorage.getItem("Surname")
    const getemail = localStorage.getItem("Email")
    const getpassword = localStorage.getItem("Password")

    if(firstnameAdress == "" && surnameAdress == "" && emailAdress == "" && passwordAdress == ""){
        alert("Input Field Has No Value!")
    } else{
        if(firstnameAdress== getfullname && surnameAdress == getsurname && emailAdress == getemail && passwordAdress == getpassword){
            alert(`Login SuccessFull, hi ${fullnameAdress}`)
        } else{
            alert("Something is Wrong !!")
        }
    }

const login = document.getElementById("login") 

login.onclick

 let Email = emailAdress = document.getElementById("Email").value;
 let Password = passwordAdress = document.getElementById("Password").value;


    let a  = getemail = localStorage.getItem("Email")
    let b = getpassword = localStorage.getItem("Password")

 if( emailAdress == "" && passwordAdress == ""){
        alert("Input Field Has No Value!")
    } else{
        if( emailAdress == getemail && passwordAdress == getpassword){
            alert(`Login SuccessFull, hi ${emailAdress}`)
        } else{
            alert("Something is Wrong !!")
        }
    }
// contact paje script

function sendEmail(){
//   alert("been evoked")
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let body = document.getElementById('message').value;
    let inputs = document.querySelectorAll('input')
    let textarea = document.querySelector('textarea')
    if ((email ==="") && (body ==="")){
        
        swal("Impress Advices", "You need to fill your Email and Message fields and Send Again.", "error");
    }
    else{
        Email.send({
            SecureToken : "5abb9918-3ad8-41b9-88b5-79d1e526d69e",
            To : 'alexbarasa0723@gmail.com',
            From : "alexmulwabarasa@gmail.com",
            Subject : "Potential Client's/Partner's Name : "+ name  +" email : "+ email,
            Body : body,
            }).then(
                message => 
                swal("Impress Greets!", "Message Received!", "success"),
                inputs.forEach((input, textarea) => input.value ='', textarea.value='')
                )
    }
};
const inputs = document.querySelectorAll(".input");

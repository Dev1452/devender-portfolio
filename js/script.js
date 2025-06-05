console.log("hello i");

function sendMail(e) {
    e.preventDefault();
    console.log("hello i");
    let params = {
        first_name: document.getElementById('firstName').value,
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        phone_no: document.getElementById('phoneNo').value,
    }
  
    emailjs.send("service_od7cqrq", "template_6oftgya", params).then(
        alert("Email Send Successfully!"),
    );


}
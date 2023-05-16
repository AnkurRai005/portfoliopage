console.log("running");

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300)
    }
})

// document.getElementById("contactForm").onsubmit = function() {submit()};

// function submit(){
//     alert("The message was sent to Ankur");
// }

document.getElementById("contactForm").onsubmit = function () { sendEmail() };

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "raiankurkumar5@gmail.com",
        Password: "tblvycwwwveukztp",
        To: "aadarsh9196@gmail.com",
        From: document.getElementById("clientEmail").value,
        Subject: "Message from " + document.getElementById("clientName").value + " via Portfolio Page",
        Body: "Name: " + document.getElementById("clientName").value + "\n" + "Email: " + document.getElementById("clientEmail").value + "\n" + "Message: " + document.getElementById("clientEnquiry").value,
    })
        .then(message => alert("The message was sent to Ankur"));
}
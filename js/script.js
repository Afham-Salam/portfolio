function sendmail(){
    let params={
        name:document.getElementById("floatingInput").value,
        email:document.getElementById("floatingEmail").value,
        subject:document.getElementById("floatingPassword").value,
        message:document.getElementById("floatingMessage").value,
    }
    emailjs.send("service_brmu3tb","template_elcd3vd",params).then(alert("Email Sent!!"))
}
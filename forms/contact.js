function sendMail(params) {
    let tempParams = {
      to_name: document.getElementById("name").value,
      from_name: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    emailjs.send("service_7z5mw1k", "template_iczgjcg", tempParams).then((res) => {
      alert("Mail successfully send");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      
    });
  }
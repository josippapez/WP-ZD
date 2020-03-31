const server_response = document.querySelector(".server_response");
const form = document.querySelector("#form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const email = form.querySelector("#email").value;
  const pswd = form.querySelector("#psw").value;
  const data = {
    email: email,
    pswd: pswd
  };
  const param = JSON.stringify(data);
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "login.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let responseJSON = JSON.parse(this.responseText);
      server_response.innerHTML =
        "WELCOME " + responseJSON.email;
    } else if (this.readyState == 4 && this.status == 401) {
      let responseJSON = JSON.parse(this.responseText);
      server_response.innerHTML = responseJSON.error;
    } else server_response.innerHTML = "LOGIN FAILED";
  };
  xmlhttp.send("signup=" + param);
});

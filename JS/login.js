//Pre-defined data (registered user)
let userData = '{"user":"developer","password":"admin"}'
localStorage.setItem("userLogin",userData);
///
let login = document.querySelector("#loginButton");
let userObj = {};
function saveLogin(){
  let check = localStorage.getItem("userLogin");
  let userInp = document.getElementById("user").value;
  let passwordInp = document.getElementById("password").value;
  userObj.user = userInp;
  userObj.password =passwordInp;
  console.log(userObj);
  if(check===JSON.stringify(userObj)){
    alert("CORRECT");
    window.location = "http://127.0.0.1:5500/HTML/index.html";

  }else{
    alert("Username or password incorrect, try again");
  }
  
}

login.addEventListener("click",saveLogin);

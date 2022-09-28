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
  let testObj = new Vue({
    el:'.login',
    data:userObj,
    created(){
      document.getElementById("loginButton").innerHTML = "Logging In...";//-------------------add an new logo here
    },
  });
  if(check===JSON.stringify(userObj)){
    alert("CORRECT");
    userObj.user = true;
    document.getElementById("approved").style.display = 'block';
    console.log(testObj.$data.user);
    setTimeout(function () {
      window.location.href = "/HTML/movies.html"; //will redirect to your blog page (an ex: blog.html)
   }, 2000); //will call the function after 2 secs.
  }else{
    alert("Username or password incorrect, try again");
    userObj.user = false;
    document.getElementById("approved").style.display = 'none';
    location.reload();
    console.log(testObj.$data.user);
  }
  
}

login.addEventListener("click",saveLogin);




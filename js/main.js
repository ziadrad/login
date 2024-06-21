var nameinput = document.getElementById('signupname')
var emailinput = document.getElementById('signupEmail')
var Passwordinput = document.getElementById('signupPassword')
var emailogin = document.getElementById('signinEmail')
var Passwordlogin = document.getElementById('signinPassword')
var users = [];

if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}
function adduser(){
  console.log(emailinput.value == "" || Passwordinput.value == "" ||nameinput.value == "");
  if (emailinput.value == "" || Passwordinput.value == "" ||nameinput.value == "") {
    if (emailinput.value == '' && nameinput.value== ''&&Passwordinput.value == '') {
      document.getElementById('success').innerHTML= "fields cannot be empty" ;
      document.getElementById('success').style.color= "red" ;
    }
    else{
    if (nameinput.value == '') {
      document.getElementById('success').innerHTML= "name cannot be empty" ;
      document.getElementById('success').style.color= "red" ;
    }
    else{
      if (emailinput.value == '') {
        document.getElementById('success').innerHTML= " email cannot be empty" ;
        document.getElementById('success').style.color= "red" ;
      }else{
        document.getElementById('success').innerHTML= " password cannot be empty" ;
        document.getElementById('success').style.color= "red" ;
      }
    }

  }
}else{
  var flag = 1;
    var user = {
        name: nameinput.value,
        email : emailinput.value,
        password:Passwordinput.value
    }
   
      users.forEach(element => {
        if (user.email==element.email || user.name == element.name) {
          flag = 0;
          document.getElementById('success').innerHTML= "exist" ;
          document.getElementById('success').style.color= "red" ;
        }
      });
if (flag) {
  users.push(user)
  localStorage.setItem("users", JSON.stringify(users))
  show()
}
  }
    }

function show(){
    var temp = "success"
    document.getElementById('success').innerHTML=temp;  
}


function isLoginEmpty() {

  if (emailogin.value == "" || Passwordlogin.value == "") {
      return false
  } else {
      return true
  }
}

function login() {
  if (isLoginEmpty() == false) {
    document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    return false
}

  var flag= 1;
  users.forEach(element => {

    if (emailogin.value==element.email&&Passwordlogin.value == element.password) {
      flag=0;
 localStorage.setItem("sessionuser",JSON.stringify( element.name));
 window.location.href += '/home_page.html';
    
    }
  });
  if (flag) {
    document.getElementById('incorrect').innerHTML= "useremail or password is incorrect" ;
    document.getElementById('incorrect').style.color= "red" ;
  }
  
  
}
 
function logout(){
  localStorage.setItem("sessionuser", null)
  window.location.href = 'https://ziadrad.github.io/login';
}
function got0SignUp() {
  window.location.href += '/signup.html';
}
function got0Login(){
  window.location.href = 'https://ziadrad.github.io/login';
}
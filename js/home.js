var username = JSON.parse( localStorage.getItem('sessionuser'))
document.getElementById('welcome').innerHTML= "welcome " +username;

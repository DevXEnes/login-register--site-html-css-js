let username = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
let loginbtn = document.querySelector(".menu button");
let usernamevalue ;
let passwordvalue;
loginbtn.addEventListener("click",function(){
  if(username.value == usernamevalue &&password.value == passwordvalue ){
alert("giriş onaylandı");
  }
});

// đăng xuất
function logout() {
  localStorage.removeItem("check");
  localStorage.removeItem("arrdata");
  window.location.assign("index.html");
}
if (localStorage.check == null) {
  const html = `<body><div class="d-flex justify-content-center align-items-center mt-5 flex-column container">
        <img class="logoimg" src="Anime.png" style="">
        <br> <br>
        <h3 class="font-weight-bold text-center">You are not logged in , please login</h3>
    </div></body>`;
  $("body").replaceWith(html);
}
//in ra ten email
var arrdata = localStorage.getItem("arrdata");
arrdata = JSON.parse(arrdata);
var user = arrdata[0].email;
const html = `<h4 class="text-center">User : ${user}</h4>`;
$(".user").replaceWith(html);
// check

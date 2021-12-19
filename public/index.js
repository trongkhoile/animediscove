// check đăng nhập
if (localStorage.check == 1) {
  const html = `<button onclick="chuyenhuong1()" class="home1 border-0 rounded-pill font-weight-bold"
      style="background-color:black;color:white;height: 40px;"><i class="fas fa-user"></i></button>`;
  $(".frm .home").replaceWith(html);
}
//xáo trộn các ảnh trên trang
function shuffle(mang) {
  let currentIndex = mang.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [mang[currentIndex], mang[randomIndex]] = [
      mang[randomIndex],
      mang[currentIndex],
    ];
  }

  return mang;
}
// mảng tìm kiếm
var searcharr = [
  { name: "Oreki Houtarou" },
  { name: "Yuuta" },
  { name: "Kazuto Kirigaya" },
  { name: "Itachi Uchiha" },
  { name: "One Punch Man" },
  { name: "Dragon Ball" },
  { name: "Kimetsu no Yaiba" },
  { name: "ReZero" },
];
// mảng ảnh
var imgarr = [
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/I9D2akL.jpeg",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/SHqvIsA.gif",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/HNxlQnu.gif",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/iEcVlBQ.gif",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/FpIN8yU.jpeg",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/Qtnb1Pk.jpeg",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/BtLuB2i.jpeg",
  },
  //
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/qxB1OUU.jpeg",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/w4oXKMW.jpeg",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/zsechO9.jpeg",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/rwyoxbC.jpeg",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/LW4gFV7.gif",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/aBUMgaC.png",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/r9sVsfK.gif",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/vrZij8i.gif",
  },
  {
    nameid: "Oreki Houtarou",
    img: "https://i.imgur.com/jBhicY6.jpeg",
  },
  //block
  {
    nameid: "Yuuta",
    img: "https://i.imgur.com/1ycZGC3.gif",
  },
  {
    nameid: "Yuuta",
    img: "https://i.imgur.com/rNMknxp.gif",
  },
  {
    nameid: "Yuuta",
    img: "https://64.media.tumblr.com/568976a534349a32f296cd1d75d86464/14fe9b1505c79cfd-c2/s1280x1920/074566791f168da3e377d1789b26a21d4a3e1d25.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://64.media.tumblr.com/e5171b732871f997a758215c7c0c0c5f/14fe9b1505c79cfd-e0/s1280x1920/6f65bfb36b40860e6ab6dfc698f128606a550239.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://64.media.tumblr.com/789a3edaf4c65aed3f75bd7dc81382dd/14fe9b1505c79cfd-c2/s1280x1920/65aa7d2bd2b24d78f50c1d1d81829e4e7e8f94ae.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://64.media.tumblr.com/f7016caf1ac174abfe606f08ca9670d5/7d62e7d04d423091-bb/s1280x1920/398865d531b170e3f993d861663484329af06be3.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://64.media.tumblr.com/07c1bfd886a374faf23b380c4d220413/7d62e7d04d423091-ff/s1280x1920/e1afb61f90c781ca671531fa75f5d003a46e813c.jpg",
  },
  //
  {
    nameid: "Yuuta",
    img: "https://64.media.tumblr.com/51417c58d892442ddced6f52ea351903/7d62e7d04d423091-e2/s1280x1920/e9dbf07e52c38b47de0642d3b82fc0f55db04dc8.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://64.media.tumblr.com/c05daf301c25a452560de5af0fa1af44/14fe9b1505c79cfd-6a/s1280x1920/e44a2021585e26e70edf2da6f447cbfc53b67057.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.imgur.com/qkegAwj.gif",
  },
  {
    nameid: "Yuuta",
    img: "https://64.media.tumblr.com/b097a24e179700e0ba53a752d9c66532/14fe9b1505c79cfd-66/s1280x1920/18da20b981f7a2b74d78cee78b454ba6b2bb0af3.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://images6.fanpop.com/image/photos/36100000/Togashi-Yuuta-image-togashi-yuuta-36129594-300-168.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://images6.fanpop.com/image/photos/36100000/Togashi-Yuuta-image-togashi-yuuta-36129701-300-169.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://images6.fanpop.com/image/photos/36100000/Togashi-Yuuta-image-togashi-yuuta-36129652-300-108.gif",
  },
  //kirito
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images5.fanpop.com/image/photos/31600000/Kirito-kirigaya-kazuto-kirito-31699071-500-281.jpg",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35140211-500-250.gif",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35140209-500-281.jpg",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35140854-500-280.gif",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35140242-500-281.jpg",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images5.fanpop.com/image/photos/31800000/Kirito-kirigaya-kazuto-kirito-31808879-500-280.gif",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35140796-500-200.gif",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35139942-500-281.jpg",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35139804-500-281.jpg",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35140874-500-281.jpg",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images5.fanpop.com/image/photos/31800000/Kirito-kirigaya-kazuto-kirito-31808880-500-278.gif",
  },
  {
    nameid: "Kazuto Kirigaya",
    img: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35140017-500-500.jpg",
  },
  //itachi
  {
    nameid: "Itachi Uchiha",
    img: "https://images4.fanpop.com/image/photos/22500000/Uchiha-Itachi-itachi-uchiha-22583804-500-375.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946324-300-300.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946246-300-533.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images6.fanpop.com/image/photos/36200000/Itachi-Uchiha-image-itachi-uchiha-36217479-300-171.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946176-300-533.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946313-300-300.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images1.fanpop.com/images/photos/1300000/itachi-uchiha-itachi-uchiha-1306062-500-375.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images4.fanpop.com/image/photos/18600000/Itachi-Uchiha-itachi-uchiha-18661966-500-281.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images2.fanpop.com/image/photos/13500000/Itachi-itachi-uchiha-13582609-345-500.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images6.fanpop.com/image/photos/43500000/Itachi-Uchiha-Fanarts-itachi-uchiha-43552895-300-355.jpg",
  },
  {
    nameid: "Itachi Uchiha",
    img: "https://images6.fanpop.com/image/photos/41900000/Itachi-Uchiha-itachi-uchiha-41946177-300-459.jpg",
  },
  {
    nameid: "ReZero",
    img: "https://i.imgur.com/BFLzXKf.jpeg",
  },
  {
    nameid: "ReZero",
    img: "https://images6.fanpop.com/image/photos/39700000/Subaru-Rem-Emilia-re-zero-39761423-3166-4082.jpg",
  },
  {
    nameid: "ReZero",
    img: "https://i.imgur.com/LXieILe.jpeg",
  },
  {
    nameid: "ReZero",
    img: "https://i.imgur.com/fTfO78x.gif",
  },
  {
    nameid: "ReZero",
    img: "https://i.imgur.com/xhK740a.gif",
  },

  {
    nameid: "Dragon Ball",
    img: "https://images6.fanpop.com/image/photos/35300000/-Gogeeta-dragon-ball-z-35367836-490-276.gif",
  },
  {
    nameid: "Dragon Ball",
    img: "https://images6.fanpop.com/image/photos/35700000/Vegeta-dragon-ball-z-35799481-762-1048.jpg",
  },
  {
    nameid: "Dragon Ball",
    img: "https://i.imgur.com/itE3Svq.gif",
  },
  {
    nameid: "One Punch Man",
    img: "https://i.imgur.com/eaxENje.jpeg",
  },
  {
    nameid: "One Punch Man",
    img: "https://i.imgur.com/V7Y2Yq2.jpeg",
  },
  {
    nameid: "One Punch Man",
    img: "https://i.imgur.com/b9YK6Gc.jpeg",
  },
  {
    nameid: "One Punch Man",
    img: "https://images6.fanpop.com/image/photos/43600000/Senritsu-no-Tatsumaki-one-punch-man-43676456-300-416.jpg",
  },
  {
    nameid: "One Punch Man",
    img: "https://images6.fanpop.com/image/photos/43600000/Genos-one-punch-man-43631244-300-445.jpg",
  },
  {
    nameid: "One Punch Man",
    img: "https://images6.fanpop.com/image/photos/43900000/monster-garou-one-punch-man-43970707-899-1431.jpg",
  },
  {
    nameid: "Kimetsu no Yaiba",
    img: "https://images6.fanpop.com/image/photos/43700000/-Kyojuro-Rengoku-kimetsu-no-yaiba-43779242-220-193.gif",
  },

  {
    nameid: "Kimetsu no Yaiba",
    img: "https://images6.fanpop.com/image/photos/43500000/Descendants-Muichiro-Tokito-Tanjirou-kamado-kimetsu-no-yaiba-43555903-300-370.jpg",
  },
  {
    nameid: "Kimetsu no Yaiba",
    img: "https://images6.fanpop.com/image/photos/43400000/Inosuke-Hashibira-kimetsu-no-yaiba-43408744-500-281.gif",
  },
  {
    nameid: "Kimetsu no Yaiba",
    img: "https://fandom.vn/wp-content/uploads/2019/09/S%C3%A1t-qu%E1%BB%B7-%C4%91%E1%BB%99i.png",
  },
];
// mảng update
var updatearr = [
  {
    name: "Itachi Uchiha",
    img1: "https://i.pinimg.com/originals/c1/d4/11/c1d411cc66dea57e645b2c8a778a14fb.jpg",
    img2: "https://i.pinimg.com/236x/e3/93/32/e39332ffe9ce70a86301126dd5439e36--naruto-shipuden-uchiha-itachi.jpg",
    img3: "https://images2.fanpop.com/image/photos/13500000/Itachi-itachi-uchiha-13582609-345-500.jpg",
  },
  {
    name: "Kazuto Kirigaya",
    img1: "https://i.pinimg.com/custom_covers/222x/533887799515198637_1502750331.jpg",
    img2: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35139942-500-281.jpg",
    img3: "https://images6.fanpop.com/image/photos/35100000/Kirigaya-Kazuto-kirigaya-kazuto-kirito-35140242-500-281.jpg",
  },
  {
    name: "Oreki Houtarou",
    img1: "https://i.pinimg.com/564x/50/db/fc/50dbfc17226716fdd4375ebcac7a4b94.jpg",
    img2: "https://i.pinimg.com/564x/ed/c4/eb/edc4eb14a7b7b26b800f0da7c72a9db6.jpg",
    img3: "https://i.pinimg.com/564x/6e/37/13/6e371317342c80fa9765a96ebab7e71f.jpg",
  },
  {
    name: "Yuuta",
    img1: "https://i.pinimg.com/736x/1b/66/22/1b66224ac54f16300cf5803670327417.jpg",
    img2: "https://i.pinimg.com/564x/f2/1b/f7/f21bf75651d6f48ccd6993430eb2d4fd.jpg",
    img3: "https://i.pinimg.com/564x/b3/28/11/b328112ab79a30f8162311cf25a476b7.jpg",
  },
  {
    name: "ReZero",
    img1: "https://i.imgur.com/LXieILe.jpeg",
    img2: "https://i.imgur.com/BFLzXKf.jpeg",
    img3: "https://images6.fanpop.com/image/photos/39700000/Subaru-Rem-Emilia-re-zero-39761423-3166-4082.jpg",
  },
  {
    name: "Dragon Ball",
    img1: "https://images6.fanpop.com/image/photos/35300000/-Gogeeta-dragon-ball-z-35367836-490-276.gif",
    img2: "https://i.imgur.com/itE3Svq.gif",
    img3: "https://images6.fanpop.com/image/photos/35700000/Vegeta-dragon-ball-z-35799481-762-1048.jpg",
  },
  {
    name: "One Punch Man",
    img1: "https://images6.fanpop.com/image/photos/43600000/Senritsu-no-Tatsumaki-one-punch-man-43676456-300-416.jpg",
    img2: "https://images6.fanpop.com/image/photos/43600000/Genos-one-punch-man-43631244-300-445.jpg",
    img3: "https://i.imgur.com/eaxENje.jpeg",
  },
  {
    name: "Kimetsu no Yaiba",
    img1: "https://images6.fanpop.com/image/photos/43500000/Descendants-Muichiro-Tokito-Tanjirou-kamado-kimetsu-no-yaiba-43555903-300-370.jpg",
    img2: "https://fandom.vn/wp-content/uploads/2019/09/S%C3%A1t-qu%E1%BB%B7-%C4%91%E1%BB%99i.png",
    img3: "https://images6.fanpop.com/image/photos/43700000/-Kyojuro-Rengoku-kimetsu-no-yaiba-43779242-220-193.gif",
  },
];
// gọi hàm refresh , mỗi khi load trang sẽ kích hoạt hàm này
shuffle(imgarr);
var input = document.getElementById("myInput");
// định nghĩa hàm xử lý myFunction
function myFunction() {
  var filter, ul, li, a, i;
  // lấy giá trị người dùng nhập
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  // Nếu filter không có giá trị thị ẩn phần kết quare\
  if (!filter) {
    ul.style.display = "none";
  } else {
    // lặp qua tất cả các thẻ li chứa kết quả
    for (i = 0; i < li.length; i++) {
      // lấy thẻ a trong các thẻ li
      a = li[i].getElementsByTagName("a")[0];
      // kiểm tra giá trị nhập có tôn tại trong nội dung thẻ a
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        //nếu có hiển thị phàn tử ul và các thẻ li đó
        ul.style.display = "block";
        li[i].style.display = "";
      } else {
        // nếu không ẩn các thẻ li
        li[i].style.display = "none";
      }
    }
  }
}
//gán sự kiện cho thẻ input
input.addEventListener("keyup", myFunction);
//in ra các mục tìm kiếm
for (e of searcharr) {
  const html = `<div class="hover"><li onclick="choose(this)" class="" ><a style="color:black;font-size:20px;"  >${e.name}</a></li></div>`;
  $("#myUL").append(html);
}
//in ra các ảnh và gif trên trang chủ
var so = 1;
for (e of imgarr) {
  const html = ` <div class="fr container ml-3">
  <br> 
  <img class="img rounded" src="${e.img}"  style="width:100%" onclick="al(this)"/> 
  </div>
  `;

  $(".framesimg" + so).append(html);
  var so = so + 1;
  if (so == 4) {
    var so = 1;
  }
}
// ấn nút refresh
function refresh() {
  // xóa trang cũ đi
  $(".fr").remove();
  // gọi lại hàm refresh lại
  shuffle(imgarr);
  // in lại sau khi đã refresh
  var so = 1;
  for (e of imgarr) {
    // localstr rỗng thì in rf full
    if (localStorage.data == null) {
      const html = ` <div class="fr container ml-3">
    <br> 
    <img class="img rounded" src="${e.img}"  style="width:100%"  onclick="al(this)"/> 
    </div>
    `;

      $(".framesimg" + so).append(html);

      var so = so + 1;
      if (so == 4) {
        var so = 1;
      }
    } else {
      // nếu lcstr có dữ liệu thì chỉ in ra dữ liệu cần
      if (localStorage.data == e.nameid) {
        const html = ` <div class="fr container ml-3">
        <br> 
        <img class="img rounded" src="${e.img}"  style="width:100%"  onclick="al(this)"/> 
        </div>
        `;

        $(".framesimg" + so).append(html);
        var so = so + 1;
        if (so == 4) {
          var so = 1;
        }
      }
    }
  }
}
//in ra toàn bộ dữ liệu khi ấn nút showall
function showall() {
  $(".fr").remove();
  shuffle(imgarr);
  var so = 1;
  for (e of imgarr) {
    const html = ` <div class="fr container ml-3">
  <br> 
  <img class="img rounded" src="${e.img}"  style="width:100%"  onclick="al(this)"/> 
  </div>
  `;

    $(".framesimg" + so).append(html);
    var so = so + 1;
    if (so == 4) {
      var so = 1;
    }
  }
}
//chọn từ ô tìm kiếm
function choose(e) {
  var namee = e.children[0].innerText;
  shuffle(imgarr);
  localStorage.setItem("data", namee);
  // in ra dữ liệu tương ứng
  $(".fr").remove();
  var so = 1;
  for (e of imgarr) {
    if (e.nameid == namee) {
      const html = ` <div class="fr container ml-3">
      <br> 
      <img class="img rounded" src="${e.img}"  style="width:100%"  onclick="al(this)"/> 
      </div>
      `;

      $(".framesimg" + so).append(html);
      var so = so + 1;
      if (so == 4) {
        var so = 1;
      }
    }
  }
}
// chuyển hướng về trang chủ
function redicter() {
  window.location.assign("index.html");
}
// thêm dữ liệu vào phần update
for (e of updatearr) {
  const html = `  <div class="" style="background-color: #E6E6E6;">
    <h6 class="pt-2 pb-3" style="color:black">Add Topic "${e.name}"</h6>

    <div class="pb-3 d-flex flex-row justify-content-around">
    <img class="imgupdt rounded"
      src="${e.img1}">
    <img class="imgupdt rounded"
      src="${e.img2}">
    <img class="imgupdt rounded"
      src="${e.img3}">
    </div>
    </div>
    <br> `;
  $(".update").append(html);
}
//ẩn hiện phần update và phần tìm kiếm khi visit trang
function update1() {
  $(".update").hide(200);
  $("#myUL").hide(100);
}
function update() {
  $(".update").toggle(200);
}
//vào trang đăng ký
function chuyenhuong() {
  window.location.assign("signin.html");
}
// chuyển hướng vào trang profile
function chuyenhuong1() {
  window.location.assign("profile.html");
}
// ẩn hiện chú thích
$(".hh").hide();
// ấn dowload
function al(e) {
  const html = `  <div class="framesbutton pt-3 pb-3 " style="">
  <img class="pb-3 rounded" src="${e.src}" style="width:50%"> 
  <h5 class="textpls pb-3" style="color:red">Please login to save photos</h5>
  <div>
  <button class="border-0 font-weight-bold rounded text-center"  style="width: 100px;height: 50px;background-color: red;color:white" onclick="yes(this)">Yes</button>
  <button class="border-0 font-weight-bold rounded text-center"  style="width: 100px;height: 50px;background-color: red;color:white" onclick="no()">No</button>
  </div>
  </div>`;
  $(".hh").show(200);
  $(".framesbutton").replaceWith(html);
  if (localStorage.check == 1) {
    $(".textpls").remove();
    $(".br").remove();
  }
}

// check sự kiện dowload ảnh

function no() {
  $(".hh").hide(200);
}

// lưu ảnh

function yes(e) {
  if (localStorage.check == 1) {
    var src = e.parentElement.parentElement.children[0].src;
    let imgPath = src;
    let fileName = getFileName(imgPath);
    saveAs(imgPath, fileName);
    console.log(getFileName(imgPath));
  }
}
function getFileName(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
// ẩn hiện chú thích
if (localStorage.check == 1) {
  $(".textpls").remove();
  $(".br").remove();
}

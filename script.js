const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click",() => {
  if (!menuOpen){
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
 // $(document).ready(function(){
 //   $("h1").click(function(){
 //     $(this).addClass("");
 //   });
 // });

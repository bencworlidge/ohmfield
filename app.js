let modalAbout = null
 function toggleModalAbout() {
   if(modalAbout === null) {
     document.getElementById("modal-about").style.display = "grid";
     document.getElementById("parent-modal-about").style.display = "grid";
     modalAbout = true
   } else {
     document.getElementById("modal-about").style.display = "none";
     document.getElementById("parent-modal-about").style.display = "none";
     modalAbout = null
   }
 }

 let modalEmail = null
 function toggleModalEmail() {
   if(modalEmail === null) {
     document.getElementById("modal-email").style.display = "grid";
     document.getElementById("parent-modal-email").style.display = "grid";
     modalEmail = true
   } else {
     document.getElementById("modal-email").style.display = "none";
     document.getElementById("parent-modal-email").style.display = "none";
     modalEmail = null
   }
 }

 let modalMusic = null
 function toggleModalMusic() {
   if(modalMusic === null) {
     document.getElementById("modal-music").style.display = "grid";
     document.getElementById("parent-modal-music").style.display = "grid";
     modalMusic = true
   } else {
     document.getElementById("modal-music").style.display = "none";
     document.getElementById("parent-modal-music").style.display = "none";
     modalMusic = null
   }
 }


 let imagebox = document.getElementById("qrbox");
 let image = document.getElementById("qrcodeimg");
let qrtext = document.getElementById("inputbox");
function generateQR(){
    if (qrtext.value.length>0) {
       image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value;
   imagebox.classList.add("showimg"); 
    }
   else{
    qrtext.classList.add("error");
   }
   setTimeout(() => {
     qrtext.classList.remove("error");
   }, 1000);
}

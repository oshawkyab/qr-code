// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

let img = document.getElementById("img");
let inp = document.getElementById("inp");
let boximg = document.getElementById("boximg");
function GenerateQr() {
 if(inp.value.length>0){
  img.src =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+
  inp.value;
  boximg.classList.add('show-img')
 }else{
  inp.classList.add('error')
  setTimeout(function(){
    inp.classList.remove('error')
  },1000)
 }
}
function regen(){
  let reload = document.getElementById('reload');
  location.reload();
}

export default function checkImgSrc (src:string) {
    const img = new Image();
    img.onload = function () { return true }
    img.onerror = function () { return false }
    img.src = src;
  }
  
  
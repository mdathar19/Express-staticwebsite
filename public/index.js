const downMes = document.getElementById('downloaded')
const qrcode = document.getElementById("qrcode");
const textInput = document.getElementById("text");
let change = ""
const qr = new QRCode(qrcode); // it takes the path where we want to implement the generated QR
qr.makeCode(textInput.value.trim()); // makeCode takes the input value.
textInput.oninput = (e) => {  // oninput event gives the change in the input as callback.
qr.makeCode(e.target.value.trim()); // here we finally gives the input value to make QR, and as qr already taken the DOM
change = e.target.value.trim(); // it places the generrated QR to there.
console.log()
};
function shot(){   // here we call this funcion after clicking of the button
domtoimage.toJpeg(qrcode, { quality: 0.95 })  // this method will let us convert the div element into a jpeg format 
.then(function (dataUrl) {   // which returns promises. 
    var link = document.createElement('a'); // we create an Anchor tag and creates a link and file name.
    link.download = `${change}QR.jpeg`;
    link.href = dataUrl;
    link.click();
    downMes.innerHTML=`<h3>QR downloded </h3>`
    
});

}

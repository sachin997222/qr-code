const inputEl = document.querySelector("#input");
const btnEl= document.querySelector("#genrateBtn");
const image = document.querySelector(".image");
const btnClass= document.querySelector(".btnclass");

const qrgenerate= async (text)=>{
    if (text=="") {
        alert("please Enter text");
        return;
    };
    try {
        btnEl.innerText=("Generating....")
        const img = document.createElement("img");  
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
        image.appendChild(img);
        btnEl.innerText=("Generated Text QR Code");
        btnClass.innerHTML=`
         <button class="download-btn">Download</button>
         <button class="search-btn">Search-again</button>
        `
         buttonFun();
        console.log("QR code")
    } catch (error) {
       alert(error);
       return; 
    }
 
}
inputEl.addEventListener("keyup",()=>{
    if(!inputEl.value.trim()){
        image.innerHTML="";
        btnClass.innerHTML="";
        btnEl.innerText = "Generate QR Code";
    }

});
btnEl.addEventListener("click",()=>{
    if(btnEl.innerText=="Generated Text QR Code"){
        alert("Enter another text")
        return;
    }
    qrgenerate(inputEl.value)
    
});

// searchAgainBtn.addEventListener("click",()=>{
//      image.innerHTML="";
//      inputEl.value='';
//      btnEl.innerText=("Generate QR Code");
//      searchAgainBtn.style.display="none";
//      download.style.display="none";
   
// })

buttonFun=function(){
    
        const searchAgainBtn = document.querySelector(".search-btn");
        const downloadBtn = document.querySelector(".download-btn");

        searchAgainBtn.addEventListener("click", () => {
            image.innerHTML = "";
            inputEl.value = "";
            btnEl.innerText = "Generate QR Code";
            btnClass.innerHTML = "";
        });

        downloadBtn.addEventListener("click", () => {
            const qrImage = image.querySelector("img").src;
            const a = document.createElement("a");
            a.href = qrImage;
            a.download = "qrcode.png";
            a.click();
        });

}
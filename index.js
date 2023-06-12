document.getElementById("get-color-btn").addEventListener("click", () => {
    const colorBoxValue = (document.getElementById("color-box").value).substring(1)
    const modeValue = document.getElementById("mode").value
    
    // Fetching colors from API
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorBoxValue}&mode=${modeValue}&count=5`)
        .then(res => res.json())
        .then(colorScheme => {
            const colors = colorScheme.colors
            
            let colorPalletHtml = ""
            colors.forEach((color) => {
                let colorValue = color.hex.clean
                
                colorPalletHtml += `
                    <div class="color-piller">
                        <div class="color" style="background-color: #${colorValue};"></div>
                        <div class="color-code">#${colorValue}</div>
                    </div>
                `                
            })
            
            document.getElementById("color-palettes").innerHTML = colorPalletHtml
            
            // // Ip=mplement copy paste
            // document.querySelectorAll(".color-code").forEach(code => {
            //     code.addEventListener("click", () => copyColorCode(code))
            // })
        })    
})


// function copyColorCode(colorCode) {

//   // Select the text field
//   colorCode.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

//   // Copy the text inside the text field
//   navigator.clipboard.writeText(colorCode.textContent);
  
//   // Alert the copied text
//   alert("Copied the code: " + copyText.textContent);
// }





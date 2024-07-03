const selecttag=document.querySelectorAll("select")
const button=document.querySelector("button")
const textbox=document.getElementById("Translated")
const translatetox=document.getElementById("Translate to")
const exchange=document.querySelector(".exchange")

selecttag.forEach((tag) =>{
    for (const key in countries){
       
        let option=`<option value=${key}>${countries[key]}</option>`;
        tag.insertAdjacentHTML("beforeend",option)




    }
})

button.addEventListener("click",()=>{
    let text=textbox.value
    translatefrom=selecttag[0].value
    translateto=selecttag[1].value
    apiurl=`https://api.mymemory.translated.net/get?q=${text}&langpair=${translatefrom}|${translateto}`
    fetch(apiurl).then(res=>
        res.json()).then(data=>{
            translatetox.value = data.responseData.translatedText;

            

        })
})

exchange.addEventListener("click",()=>{
    temptext=textbox.value
    templang=selecttag[0].value
    selecttag[0].value=selecttag[1].value
    selecttag[1].value=templang


    textbox.value=translatetox.value
    translatetox.value=temptext
})
    console.log(apiurl)

// continue at 24:00
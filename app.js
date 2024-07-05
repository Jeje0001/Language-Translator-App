const selecttag=document.querySelectorAll("select")
const button=document.querySelector("button")
const textbox=document.getElementById("Translated")
const translatetox=document.getElementById("Translate to")
const exchange=document.querySelector(".exchange")
const icons=document.querySelectorAll(".icons i")
console.log(icons)
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
    if(!text) return;
    translatetox.setAttribute("placeholder","Translating")


    apiurl=`https://api.mymemory.translated.net/get?q=${text}&langpair=${translatefrom}|${translateto}`
    fetch(apiurl).then(res=>
        res.json()).then(data=>{
            translatetox.value = data.responseData.translatedText;
            translatetox.setAttribute("placeholder","Translating")
            

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

icons.forEach(icon=>{
    icon.addEventListener("click",({target})=>{
        console.log(target.id)
        if(target.classList.contains("fa-copy")){
            if(target.id === "from"){
                navigator.clipboard.writeText(textbox.value)
                console.log("From copy clicked")
            }else{
                navigator.clipboard.writeText(translatetox.value)

                console.log("To copy icon clicked")

            }
        }else{
            if(target.id === "from"){utterance
                utterance= new SpeechSynthesisUtterance(textbox.value)
                utterance.lang=selecttag[0].value

            }else{
                utterance= new SpeechSynthesisUtterance(translatetox.value)
                utterance.lang=selecttag[1].value


            }
            speechSynthesis.speak(utterance)
        }
    })
})


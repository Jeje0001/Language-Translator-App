const selecttag=document.querySelectorAll("select")
const button=document.querySelector("button")
const textbox=document.getElementById("Translated")


selecttag.forEach(tag =>{
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
            

        })
})
    console.log(apiurl)

// continue at 20:00
const selecttag=document.querySelectorAll("select")

selecttag.forEach(tag =>{
    for (const key in countries){
        let option=`<option value=${key}>${countries[key]}</option>`;
        tag.insertAdjacentHTML("beforeend",option)



    }
})

// continue at 16:30
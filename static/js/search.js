const url = window.location.href
const searchInput = document.getElementById('search-input')
const csearchInput = document.getElementById('code-search-input')
const cresultBox = document.getElementById('code-resultbox')
const container = document.getElementById('model-holder')
const holder = document.getElementById('holder-holder')
const resultHolder = document.getElementById('result-holder')
const box = document.getElementById('search-box')
const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value
var style = window.getComputedStyle(box)

const sendSearchData = (model) =>{
    $.ajax({
        type : 'POST',
        url : 'search/',
        data : {
            'csrfmiddlewaretoken' : csrf,
            model : model,
        },
        success: (res) => {
            const data = res.data
            if(Array.isArray(data)){

                box.innerHTML = ""
                data.forEach(model =>{
                    box.innerHTML += `

                    <div class="model" id="model-container">
                    <div class="model-card">
                        <b id="title">${model.name}</b>
                        <p id="code">${model.code}</p>
                        <a href="ModelDetail/${model.pk}"><button class="btn-single">Подробнее</button></a>
                    </div>
                    <br>
                </div>

                    `
                })
            } else {
                if(searchInput.value.length > 0) {
                    box.innerHTML = `<div class="err-msg">
                                        <h3>${data}</h3>
                                    </div>
                        `
                } else {
                    holder.classList.remove('not-visible')
                    resultHolder.classList.add('not-visible')
                }
            }
        },
        error: (err) => {
            console.log(err)
        }
    })
}


searchInput.addEventListener('keyup', e=>{
    if(resultHolder.classList.contains('not-visible')){
        resultHolder.classList.remove('not-visible')
        holder.classList.add('not-visible')
    }
    sendSearchData(e.target.value)
})



const csendSearchData = (code) =>{
    $.ajax({
        type : 'POST',
        url : 'codesearch',
        data : {
            'csrfmiddlewaretoken' : csrf,
            code : code,
        },
        success: (res) => {
            const data = res.data
            if(Array.isArray(data)){
                box.innerHTML = ""
                data.forEach(code =>{
                    box.innerHTML += `
                    
                    <div class="model" id="model-container">
                    <div class="model-card">
                        <b id="title">${code.name}</b>
                        <p id="code">${code.code}</p>
                        <a href="ModelDetail/${code.pk}"><button class="btn-single">Подробнее</button></a>
                    </div>
                    <br>
                </div>

                    `
                })
            } else {
                if(csearchInput.value.length > 0) {
                    box.innerHTML = `<div class="err-msg">
                                        <h3>${data}</h3>
                                    </div>
                        `
                } else {
                    holder.classList.remove('not-visible')
                    resultHolder.classList.add('not-visible')
                }
            }
        },
        error: (err) => {
            console.log(err)
        }
    })
}

csearchInput.addEventListener('keyup', e=>{
    if(resultHolder.classList.contains('not-visible')){
        resultHolder.classList.remove('not-visible')
        holder.classList.add('not-visible')
    }
    csendSearchData(e.target.value)
})
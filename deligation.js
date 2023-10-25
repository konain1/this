
const container = document.querySelector('.container')


container.addEventListener('click',(e)=>{

    if(e.target.tagName== 'BUTTON'){
        console.log(e.target.innerText)
    }
})
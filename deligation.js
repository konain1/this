
const container = document.querySelector('.container')
const div = document.querySelector('.div')
const form = document.querySelector('.form')
const btn = document.querySelector('.button')

console.log(btn)

// container.addEventListener('click',(e)=>{

//     if(e.target.tagName== 'BUTTON'){
//         console.log(e.target.innerText)
//     }
// })

div.addEventListener('click',()=>{
    console.log('div')
    alert('div')
},
{
    capture:true
})
form.addEventListener('click',(e)=>{
    // e.preventDefault()
    console.log('form')
    alert('form')
},{
    capture:true
})
btn.addEventListener('click',()=>{
    console.log('button')
    alert('button')
},
{
    capture:true
})
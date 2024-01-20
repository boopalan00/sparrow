/*
here we connect with backend for getting each component 
from DB (means: each component is saved in DB. so,
we can cusomize it    )
*/
SERVER = [
    {   id : 1,
        'name':``,
        'tag':`<nav><a href="">Navbar</a></nav>`,
        '':''
    },
    {   id : 2,
        'name':``,
        'tag':`<nav><a href="">Navbar</a></nav>`,
    }
]
 
const wrapper = document.querySelector('.wrapper')

Dragable_elements = ''

for ()

wrapper.innerHTML = 

// SERVER.forEach( EL => {
//     wrapper.innerHTML(
//         `<h1> ${EL.id} </h1>`
//     )
// });
    

// components.forEach(component =>{
//     component.addEventListener('dragstart',()=>{
//         component.classList.add('dragging')
//         component.innerHTML = Navbar
//     })
// })

// components.forEach(component=>{
//     component.addEventListener('dragend',()=>{
//         component.classList.remove('dragging')
//       //  component.innerHTML = component.id
//     })
//  })

// main.forEach(M=>{
//     M.addEventListener('dragover',e=>{
//         e.preventDefault()
//         //const afterELM = where_to_place_it(container, e.clientY, e.clientX)
//         const current = document.querySelector('.dragging')
//         M.appendChild(current)
//     })
// })

// function where_to_place_it(container,y, x){
//     console.log(x, y );
//     const dragingELM = [...container.querySelectorAll('.card:not(.draging)')]
//     console.log(dragingELM);
// }


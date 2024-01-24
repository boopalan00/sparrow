/*
here we connect with backend for getting each component 
from DB (means: each component is saved in DB. so,
we can cusomize it    )
*/
SERVER = [
    {   id : 1,
        'name':`btn-1`,
        'tag':`<button type="button" class="btn btn-warning">Warning</button>`
    },
    {   id : 2,
        'name':`btn-2`,
        'tag':`<button type="button" class="btn btn-success">Warning</button>`,
    },
    {   id : 3,
        'name':`btn-3`,
        'tag':`<button type="button" class="btn btn-info">Warning</button>`
    },
    {   id : 4,
        'name':`btn-4`,
        'tag':`<button type="button" class="btn btn-danger">Warning</button>`,
    }
]
 

// Dragable components are generated here

var dc = ``
SERVER.forEach(EL => {
    dc += `
        <div draggable="true" class="m-2 ">
            ${EL.tag}
        </div>
        `
})

document.querySelector('.wrapper').innerHTML = dc
document.querySelector('.main').innerHTML = dc

const components = document.querySelectorAll('.m-2')

components.forEach(component =>{
    component.addEventListener('dragstart',()=>{
       // const clone = component.cl
       // component.innerHTML = ` ${SERVER[1].tag} `
    })
})

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


/*
here we connect with backend for getting each component 
from DB (means: each component is saved in DB. so,
we can cusomize it    )
*/

NAV = `<nav class="navbar bg-body-tertiary bg-dark">
<div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
</div>
</nav>`

SERVER = [
    {   id : 1,
        'name':`btn-1`,
        'tag':`<button type="button" class="btn btn-warning">Warning</button>`
    },
    {   id : 2,
        'name':`navbar`,
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

// Blocks

var dc = ``
SERVER.forEach(EL => { dc += 
`<div>
    <div draggable="true" id="Block">
        ${EL.tag}
    </div>
</div>
`})

document.querySelector('#Blocks').innerHTML = dc

const Blocks = document.querySelectorAll('#Block')

Blocks.forEach( block =>{
    block.addEventListener('dragstart',()=>{
        // const block_clone = block.cloneNode
        // block.parentElement.innerHTML =  SERVER[3].tag 
        // block.innerHTML = NAV
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


/*
here we connect with backend for getting each component 
from DB (means: each component is saved in DB. so,
we can cusomize it    )
*/

NAV = `

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

`

SERVER = [
    {   id : 1,
        'name':`btn-1`,
        'tag':`<button type="button" draggable="true" id="Block" class="btn btn-warning">Warning</button>`
    },
    {   id : 2,
        'name':`navbar`,
        'tag':`<button type="button" draggable="true" id="Block" class="btn btn-success">Warning</button>`,
    },
    {   id : 3,
        'name':`btn-3`,
        'tag':`<button type="button" draggable="true" id="Block" class="btn btn-info">Warning</button>`
    },
    {   id : 4,
        'name':`btn-4`,
        'tag':`<button type="button" draggable="true" id="Block" class="btn btn-danger">Warning</button>`,
    }
]
 

// Dragable components are generated here

// Blocks

var dc = ``
SERVER.forEach(EL => { dc += 
`<div>
    <div >
        ${EL.tag}
    </div>
</div>
`})

document.querySelector('#Blocks').innerHTML = dc

const Blocks = document.querySelectorAll('#Block')

Blocks.forEach( block =>{
    block.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text/html', e.target.dataset.elementType );
        block.remove()
    })
})

const UIBuilder = document.querySelector('#UIBuilder')
 
UIBuilder.addEventListener('dragover', (e) => {
    e.preventDefault();
});

UIBuilder.addEventListener('dragend', (e) => {
    e.preventDefault();
});

UIBuilder.addEventListener('drop', (e) => {
    e.preventDefault();
    const elementType = e.dataTransfer.getData('text/plain');
    const element = document.createElement('div');
  //  element.textContent = elementType;
    element.innerHTML = NAV
  //  element.classList.add('ui-element');
    UIBuilder.appendChild(element);
});


// function where_to_place_it(container,y, x){
//     console.log(x, y );
//     const dragingELM = [...container.querySelectorAll('.card:not(.draging)')]
//     console.log(dragingELM);
// }


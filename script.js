let currentDragedItmes=null;
const tierData=document.getElementById("tier")
const tierButton=document.getElementById("tier-btn")
const imageData=document.getElementById("item")
const itemcontainers=document.getElementsByClassName("item-container")
const imageButton=document.getElementById("item-btn")


for(const items of itemcontainers) {
    setUpForDrag(items);
}

tierButton.addEventListener('click',(event)=>{
    event.preventDefault();
    if(tierData.value==="")
    {
        alert("Enter a valid tier name");
        return;
    }
    createTierList(tierData.value);
    tierData.value=""
})

function createTierList(content)
{
    const newDiv=document.createElement('div');
    newDiv.className="section-div-one";

    const heading=document.createElement('div')
    heading.className="section-heading"
    

    const newDivTwo=document.createElement('div');
    newDivTwo.className="section-div-two";
    newDivTwo.innerText=content;

    heading.appendChild(newDivTwo)

    const divsecond=document.createElement('div')
    
    newDiv.appendChild(heading)
    newDiv.appendChild(divsecond)

    setUpForDropAndDragover(newDiv)

    const tierSection=document.getElementById("section-tier")
    tierSection.appendChild(newDiv)

}

imageButton.addEventListener('click',(event)=>{
    event.preventDefault();
    if(imageData.value=="")
    {
        console.log("Enter a valid url");
        return;
    }
    createImage(imageData.value);
    imageData.value=""
})
function createImage(urlImage)
{
    const divImage=document.createElement('div')
    divImage.setAttribute('draggable','true')
    divImage.className="image-items"

    setUpForDrag(divImage);
    
    const imageitem=document.createElement('img')
    imageitem.src=urlImage;
    imageitem.className="imageClass"
    divImage.appendChild(imageitem)
    const imageSection=document.getElementById("section-image")
    imageSection.appendChild(divImage);
}
function setUpForDrag(itemContainer)
{
    itemContainer.addEventListener('dragstart',(event)=>{
       
        currentDragedItmes=event.target.parentNode    // it is giving me image but i wnat that when i start drag the whole div should be drag.
       
    })

    itemContainer.addEventListener('dblclick', (event) => {
        const parentNode = event.target.parentNode;
        const nonTierSection = document.getElementById('section-image');
        nonTierSection.appendChild(parentNode);
    });
    
}

function setUpForDropAndDragover(tierListDiv)
{
    tierListDiv.addEventListener('drop',(event)=>{
        event.preventDefault();
    })

    tierListDiv.addEventListener('dragover',function (event){
        
        
        if(this !== currentDragedItmes.parentNode)
        {
            this.appendChild(currentDragedItmes);
        }
    })
}



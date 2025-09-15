const imageUrls = [
    "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
    "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

const TextDiv = [
    "Explore the world",
    "Wild Forest",
    "City on Winter",
    "Mountain Cloud",
    "Sunny Beach"
];

const container = document.querySelector(".container");
const tempDom = document.createDocumentFragment();

imageUrls.forEach((url, index) => {
    const div = document.createElement("div");
    div.classList.add("panel");
    div.id = `panel-${index+1}`;
    if(index === 0) div.classList.add("active");
    div.style.backgroundImage = `url(${url})`;

    const textDiv = document.createElement("div");
    textDiv.classList.add("img-text");
    textDiv.innerText = TextDiv[index];
    div.appendChild(textDiv);

    div.addEventListener("click", () => expandCard(div));
    tempDom.appendChild(div);
});

container.appendChild(tempDom);

function expandCard(divElement){
    const panels = document.querySelectorAll(".panel");
    panels.forEach(panel => panel.classList.remove("active")); 
    divElement.classList.add("active"); 
}
      
    
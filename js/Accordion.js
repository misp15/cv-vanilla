var accItem = document.getElementsByClassName('accordionItem');

function toggleItem(event) {
    var itemClass = event.target.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass === 'accordionItem close') {
        event.target.parentNode.className = 'accordionItem open';
    }
    window.scrollTo(0, document.querySelector(".open").offsetTop);            
}

document.addEventListener('click', (event) => {
    event.target.className === "accordionItemHeading" ? toggleItem(event) : console.log(false);
});

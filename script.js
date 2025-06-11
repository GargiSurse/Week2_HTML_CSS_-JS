//by id name
const imgElement = document.getElementById('superman');
console.log('BY id: ',imgElement)

//by class name 
const paraElements = document.getElementsByClassName('my_p');
console.log('By Class:', paraElements[0]);

//by tag name
const liTags = document.getElementsByTagName('li');
console.log('By Tag Name:', liTags);

//by queryselector
const myTitle = document.querySelector('.my_title');
console.log('querySelector:', myTitle);

//queryall seclector
const allListItems = document.querySelectorAll('ul li');
console.log('querySelectorAll:', allListItems);

//innerhtml
myTitle.innerHTML = 'Learning <h6>DOM</h6>';
myTitle.textContent += '(textContent added)'; //tags wont be applied they will be appered as they are shown
myTitle.innerText += ' [innerText added]';

//style change
myTitle.style.color='gold';
myTitle.style.fontFamily='Courier New';
imgElement.style.border = '5px solid crimson';

//classlist
myTitle.classList.add('highlight');
myTitle.classList.remove('my-title');
myTitle.classList.toggle('new-class');
console.log('Contains class highlight:', myTitle.classList.contains('highlight'));

//attributes methods
console.log('Image src:', imgElement.getAttribute('src'));
imgElement.setAttribute('alt', 'New Alt Text');
imgElement.removeAttribute('height');
console.log('Has alt attribute:', imgElement.hasAttribute('alt'));

//create and insert element
const newPara = document.createElement('p');
newPara.textContent = 'This is a dynamically created paragraph.';
document.body.appendChild(newPara);


//
const hr = document.createElement('hr');
document.body.insertBefore(hr, newPara);

//removiing and replacing 
const listItemToRemove = liTags[0];
listItemToRemove.remove();
//replace
const newLi = document.createElement('li');
newLi.textContent = 'Replaced Item';
const parentList = document.querySelector('ul');
parentList.replaceChild(newLi, parentList.children[1]);
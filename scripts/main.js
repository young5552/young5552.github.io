let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/baby.jpg') {
      myImage.setAttribute('src', 'images/OIP.jpg');
    } else {
      myImage.setAttribute('src', 'images/baby.jpg');
    }
}
let myButton=document.querySelector("button");
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '爱你，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(myName===null||!myName)
  {setUserName();}
  else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '爱你，' + myName;
  }
}
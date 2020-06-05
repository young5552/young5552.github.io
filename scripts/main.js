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
/*判断上下滑动：*/
$('body').bind('touchstart', function (e) {
	startX = e.originalEvent.changedTouches[0].pageX;
	startY = e.originalEvent.changedTouches[0].pageY;
});
$("body").bind("touchmove", function (e) {
	//获取滑动屏幕时的X,Y
	endX = e.originalEvent.changedTouches[0].pageX;
	endY = e.originalEvent.changedTouches[0].pageY;
	//获取滑动距离
	distanceX = endX - startX;
	distanceY = endY - startY;
	//判断滑动方向
	if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 0) {
		console.log('往右滑动');
	} else if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX < 0) {
		console.log('往左滑动');
	} else
		if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY < 0) {
			console.log('往上滑动');
		} else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 0) {
			console.log('往下滑动');

		}
})

setInterval(function () {
		var time = new Date();
		var year = time.getFullYear()-2018;  //获取年份
		var month = time.getMonth() + 1-6;  //获取月份
		var day = time.getDate()-8;   //获取日期
		var hour = checkTime(time.getHours());   //获取时
		var minite = checkTime(time.getMinutes());  //获取分
		var second = checkTime(time.getSeconds());  //获取秒
		//检查天数或者月份是否为负数
		if (day < 0) {
			month = month - 1;
			if (month == 1 || month== 3 || month==5 || month==7 || month==8 || month==10 || month==12)
				day = 31 + day;
			else if (month == 2)
				day = 29 + day;
			else
				day = 30 + day;
		}
		if (month <0) {
			year = year -1;
			month = 12 + month;
		}
		/****当时、分、秒、小于10时，则添加0****/
		function checkTime(i) {
			if (i < 10) return "0" + i;
			return i;
		}
	var box = document.getElementById("time");
	//var x = document.getElementById("myAudio").autoplay;
		box.innerHTML = '我们在一起'+year + "年" + month + "个月" + day + "天" + hour + "小时" + minite + "分钟" + second+"秒啦";
}, 1000);     //setInterval(fn,i) 定时器，每隔i秒执行fn

var btn1 = document.getElementById("button1");
var imgarr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
var img = document.getElementById("img1");
var index = 0;
btn1.onclick = function () {
	index--;
	if (index < 0) {
		index = imgarr.length - 1;
	}
	img.src = imgarr[index];
}


 //let myImage = document.querySelector('img');//定义一个变量 querySelector选择器 返回img这个属性

////是否点击了这个图片，后面是一个匿名函数
//myImage.onclick = function() {
//    let mySrc = myImage.getAttribute('src');//定义变量等于图片scr属性
//    if(mySrc === 'images/baby.jpg') {       
//      myImage.setAttribute('src', 'images/OIP.jpg');
//    } else {
//      myImage.setAttribute('src', 'images/baby.jpg');
//    }
//}
//let myButton=document.querySelector("button");   //定义变量等于属性button 
//let myHeading = document.querySelector('h1');  //定义变量等于属性标题1 

////如果本地之前没有保存的名字
//if(!localStorage.getItem('name')) {
//  setUserName();//设置名字
//} else {
//  let storedName = localStorage.getItem('name');//获取之前保存的名字
//  myHeading.textContent = '爱你，' + storedName;//设置标题
//}
////如果点击了按钮
//myButton.onclick = function() {
//   setUserName();
//}
////设置名字
//function setUserName() {
//  let myName = prompt('请输入你的名字。');
//  if(myName===null||!myName)//如果输入为空或者点了取消就要重重复输入
//  {setUserName();}
//  else {
//      localStorage.setItem('name', myName);//用‘name’来保存myName
//      myHeading.textContent = '爱你，' + myName;//设置标题
//  }
//}

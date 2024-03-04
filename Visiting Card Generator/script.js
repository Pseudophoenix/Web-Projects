var person = new Object();
var formFill;
var DOMPer = document.getElementById("con");
var fontArr=["Bootcamp","Dot Matrix","Comic Sans MS","Bradley Hand ITC","Ink Free","LED Dot-Matrix","Agency FB","Bahnschrift","Broadway"];
var T;
DOMPer.innerHTML = "";
function Save() {
	formFill = 1;
	document.getElementById("uname").value != "" ? person.uName = document.getElementById("uname").value : formFill = 0;
	document.getElementById("uorg").value != "" ? person.uOrg = document.getElementById("uorg").value : formFill = 0;
	document.getElementById("uweb").value != "" ? person.uWeb = document.getElementById("uweb").value : formFill = 0;
	document.getElementById("udesg").value != "" ? person.uDesg = document.getElementById("udesg").value : formFill = 0;

	document.getElementsByName("priColor")[0].value != "" ? person.priColor = document.getElementsByName("priColor")[0].value : formFill = 0;

	document.getElementsByName("secColor")[0].value != "" ? person.secColor = document.getElementsByName("secColor")[0].value : formFill = 0;

	document.getElementsByName("texColor")[0].value != "" ? person.texColor = document.getElementsByName("texColor")[0].value : formFill = 0;

	document.getElementsByName("fontF")[0].value != "" ? person.fontF = document.getElementsByName("fontF")[0].value : formFill = 0;
	console.log(person.fontF);
	document.getElementById("umail").value != "" ? person.uMail = document.getElementById("umail").value : formFill = 0;
	(document.getElementById("unum").value != "") && (checkNum(document.getElementById("unum").value)) ? person.uNum = document.getElementById("unum").value : formFill = 0;
	T = document.getElementById("format").value;
	(T == 1 || T == 2 || T == 3 || T == 4) ? T = document.getElementById("format").value : formFill = 0;
	if (formFill == 0) {
		alert("Incomplete Form");
		DOMPer.innerHTML = "";
	} else if (T == 1) {
		console.log("2");
		Print1();
	}
	else if (T == 2) {
		console.log("2");
		Print2();
	}
	else if (T == 3) {
		console.log("3");
		Print3();
	}
	else if (T == 4) {
		console.log("4");
		Print4();
	}
}
function Print1() {
	DOMPer.innerHTML = '<div id="m"><div id="container1"><div id="outMail"></div><div id="outNum"></div></div><div id="logo"></div><div id="outName"></div><div id="outDesOrg"></div></div>';
	var name = document.getElementById("outName");
	name.style.fontFamily=fontArr[person.fontF];
	var desgOrg = document.getElementById("outDesOrg");
	desgOrg.style.fontFamily=fontArr[person.fontF];
	var mail = document.getElementById("outMail");
	mail.style.fontFamily=fontArr[person.fontF];
	var num = document.getElementById("outNum");
	num.style.fontFamily=fontArr[person.fontF];

	var m = document.getElementById("m").style;
	m.background = person.secColor;
	m.color = person.texColor;
	// m.fontFamily=fontArr[person.fontF];
	console.log(person.fontF);
	// name.style.fontFamily="Bootcamp";
	name.innerHTML = "Name:" + person.uName;
	mail.innerHTML = "Mail:" + person.uMail;
	desgOrg.innerHTML = person.uDesg + "," + person.uOrg;

	num.innerHTML = "Phone:" + person.uNum;
	return true;
}


function Print2() {
	DOMPer.innerHTML = '<div id="m"><div class="imgBack2"><div id="logo2"></div><div id="outName2"></div><div id="outDesOrg2"></div></div><div id="container2"><div id="outMail2"></div><div id="outNum2"></div></div><div id="WebSite2"></div></div>';
	var m=document.getElementById("m").style;
	m.background = person.secColor;
	m.color = person.texColor;
	m.fontFamily=fontArr[person.fontF];

	document.getElementsByClassName("imgBack2")[0].style.background = person.priColor;

	var name = document.getElementById("outName2");
	name.style.fontFamily=fontArr[person.fontF];
	
	var desgOrg = document.getElementById("outDesOrg2");
	desgOrg.style.fontFamily=fontArr[person.fontF];
	
	var mail = document.getElementById("outMail2");
	mail.style.fontFamily=fontArr[person.fontF];

	var web = document.getElementById("WebSite2");
	web.style.fontFamily=fontArr[person.fontF];

	var num = document.getElementById("outNum2");
	num.style.fontFamily=fontArr[person.fontF];
	
	name.innerHTML = "Name:" + person.uName;
	mail.innerHTML = "Mail:" + person.uMail;
	web.innerHTML = person.uWeb;
	num.innerHTML = "Phone:" + person.uNum;
	desgOrg.innerHTML = "" + person.uDesg + "," + person.uOrg;

	return true;
}


function Print3() {
	DOMPer.innerHTML = '<div id="m"><div id="container3"><div class="imgBack3"><div id="logo3"></div></div><div><div id="outName3"></div><div id="outDesOrg3"></div><div id="outMail3"></div><div id="outNum3"></div><div id="WebSite3"></div></div></div></div>';

	var m=document.getElementById("m").style;
	m.background = person.secColor;
	m.color = person.texColor;

	document.getElementsByClassName("imgBack3")[0].style.background = person.priColor;


	var name = document.getElementById("outName3");
	name.style.fontFamily=fontArr[person.fontF];
	
	var desgOrg = document.getElementById("outDesOrg3");
	desgOrg.style.fontFamily=fontArr[person.fontF];
	
	var mail = document.getElementById("outMail3");
	mail.style.fontFamily=fontArr[person.fontF];

	var web = document.getElementById("WebSite3");
	web.style.fontFamily=fontArr[person.fontF];

	var num = document.getElementById("outNum3");
	num.style.fontFamily=fontArr[person.fontF];

	name.innerHTML = "Name:" + person.uName;
	mail.innerHTML = "Mail:" + person.uMail;
	num.innerHTML = "Phone:" + person.uNum;
	web.innerHTML = person.uWeb;
	desgOrg.innerHTML = "" + person.uDesg + "," + person.uOrg;
	return true;
}


function Print4() {

	DOMPer.innerHTML = '<div id="m"><div id	="imgBack4"><div id="logo4"></div></div><div id="outName4"></div><div id="outDesOrg4"></div><div id="container4"><div id="outMail4"></div><div id="outNum4"></div></div><div id="WebSite4">WebSite</div></div>';

	var m=document.getElementById("m").style;
	m.background = person.secColor;
	m.color = person.texColor;


	document.getElementById("imgBack4").style.background = person.priColor;


	var name = document.getElementById("outName4");
	name.style.fontFamily=fontArr[person.fontF];
	
	var desgOrg = document.getElementById("outDesOrg4");
	desgOrg.style.fontFamily=fontArr[person.fontF];
	
	var mail = document.getElementById("outMail4");
	mail.style.fontFamily=fontArr[person.fontF];

	var web = document.getElementById("WebSite4");
	web.style.fontFamily=fontArr[person.fontF];

	var num = document.getElementById("outNum4");
	num.style.fontFamily=fontArr[person.fontF];

	name.innerHTML = "Name:" + person.uName;
	mail.innerHTML = "Mail:" + person.uMail;
	num.innerHTML = "Phone:" + person.uNum;
	web.innerHTML = person.uWeb;
	desgOrg.innerHTML = "" + person.uDesg + "," + person.uOrg;
	return true;
}


function Reset() {
	DOMPer.innerHTML = "";
	return true;
}
function checkNum(num) {
	num = num.toString();
	if (num.length != 10) {
		console.log("length is not 10");
		return false;
	}
	return true;
}
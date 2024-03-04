function Calculate()
{
//length input
var len=document.getElementById('len').value;
console.log(len);

//operation input
var op=document.getElementsByName('operation')[0];
console.log(op.value);
console.log(typeof(op.value));

//first binary
var b1=document.getElementsByName('binStr')[0].value;
console.log(b1,typeof(b1));

//second binary
var b2=document.getElementsByName('binStr')[1].value;
console.log(b2,typeof(b2));
console.log(b2,typeof(Number(b2)));

if(b1.length!=len || b2.length!=len)
{
	alert("Length Mismatch: Should be "+len+" bits long");
	return false;
}

//result capture
var result=document.getElementById('res');
var res="";
if(op.value=="1"){
for(i=0;i<len;i++)
{
	res+=Number(b1[i])&Number(b2[i]);
}
	result.innerHTML=res;
}
else if(op.value=="2"){

for(i=0;i<len;i++)
{
	res+=Number(b1[i])|Number(b2[i]);
}
	result.innerHTML=res;
}
else if(op.value=="3"){
for(i=0;i<len;i++)
{
	res+=Number(b1[i])^Number(b2[i]);
}
	result.innerHTML=res;
}
else if(op.value=="4"){
for(i=0;i<len;i++)
{
	res+=!Number(b1[i]);
}
	result.innerHTML=res;
}
return false;
}
 		
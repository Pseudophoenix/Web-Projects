/* 
1->LAND
2->LOR
3->LNOT
4->BAND
5->BOR
6->BNOT
*/ 
var disp=document.getElementById("display");
disp.innerHTML='';
var stri="";
var op;
function ClearS()
{
    disp.innerHTML=stri="";
    
    return true;
}
function stringUpdate(inp)
{
    if((stri.length+inp.length)>15)
    {   
        console.log(stri.length+inp.length);
        alert("Only 15 characters allowed");
        return true;
    }
    // console.log(typeof(stri.length)+typeof(inp.length));
    // console.log(typeof(stri)+typeof(inp));

    stri+=inp;
    disp.innerHTML=stri;
    return true;
}
function calculate(str)
{
    // while()
    return true;
}
function LAND()
{
    op=1;
    return true;
}
function LOR()
{
    op=1;
    return true;
}
function LNOT()
{
    op=1;
    return true;
}
function BAND()
{
    op=1;
    return true;
}
function BOR()
{
    op=1;
    return true;
}
function inp()
{
    return true;
}

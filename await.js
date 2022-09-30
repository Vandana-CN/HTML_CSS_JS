//Async and await 
Add=()=>{
    var a=2;
    var b=3;
    setTimeout(()=>{console.log(a+b);},2000);}

Mul=()=>{ 
    var a=2;
    var b=3;
    setTimeout(()=>{console.log(a*b); },1000);} 

sub=()=>{  
    var a=5;
    var b=3;
    setTimeout(()=>{console.log(a-b);},1000);} 
async function menu() {     
    await Mul();     
    await Add();    
    await Mul();     
    await sub(); 
} 

    menu().then(()=>{     
        setTimeout(()=>{console.log("Everything working fine");},1000); });



   
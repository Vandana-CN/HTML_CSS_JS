//callbacks 
DiaplayNum=()=>{ 
    console.log(10);}      
    Add=(callback)=>{ 
        var a=2;
        var b=3;    
    setTimeout(()=> {console.log(a+b); callback()},2000);} 

    Mul=()=>{
        var x=2;
    var y=3;
    console.log(x*y);} 

Add(function (){ 
    DiaplayNum(); 
    Mul(); 
})
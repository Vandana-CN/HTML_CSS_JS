//promises 
greeting=()=>{     
    return new Promise((resolve,reject)=>{       
         //setTimeout(()=>{console.log("hello");},1000);
                      console.log("hello"); 
                      resolve(); })     } 

learning=()=>{
        return new Promise((resolve,reject)=>{         
            let errorHere=true;         
            if(!errorHere)
            {        setTimeout(()=>{console.log("Iam learning Js");},1000);         
            resolve();         
            }         
            else         
            reject("Error occured here");   

         setTimeout(()=>{console.log("Iam learning Javascript");},1000);         
        resolve();     }); } 
        
        ending=()=>{     
            return new Promise((resolve,reject)=>{         
                setTimeout(()=>{console.log("Enjoying learning");},1000);        
         console.log("Enjoying learning"); 
                 resolve();     }) } 
                 greeting() .then(learning) .then(ending).catch((err)=>{console.log("Exception : "+err)}); 
                 
                 learning().then(greeting).then(ending); 

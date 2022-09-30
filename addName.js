function addName(object,name,price)

{

    object[name]=price;

    return object;

}

console.log(addName({},"Brutus",300));

console.log(addName({piano:500,stereo:300},"Caligula",440));
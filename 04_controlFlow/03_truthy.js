const userEmail= []
if(userEmail){
    //console.log("Got user email");
}else{
   // console.log("No user email");
}

//Falsy values
// false,0,-0,BigInt On , "",null,undefined,NaN

//truthy values
//"0","false"," ",[],{},function(),{}

// if (userEmail === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
   // console.log("Object is empty");
}


//Nullish Coalescing Operators (??): null undefined

let a;
//a=5??10;
//a= null ?? 10
//a = undefined ?? 15
a = null ?? 10 ?? 20
console.log(a);


//Terniary Operators (?)

//condition ? true : false

const tea= 200
tea <=100 ? console.log("less than 100"):console.log("greater than 100");
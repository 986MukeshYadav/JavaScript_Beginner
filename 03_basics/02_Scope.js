// var = 300;
let a =300;
if(true){
    let a= 10
    const b= 20
    c=30
    // var c=30
   // console.log("INNER:",a);
}

//console.log(a);
//console.log(b);
//console.log(c);
function one(){
    const username ="mukesh"
    function two(){
        const webiste ="Youtube"
       // console.log(username)
    }
    //console.log(webiste);
    two()
}
//one();

if(true){
    const username ="Mukesh"
    if (username === "Mukesh"){
        const website ="youtube"
       // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++ Interesting +++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}
addTwo(5)
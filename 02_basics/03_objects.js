// singleton
//object.create
//object literals

const mySym = Symbol("key1")

const JsUser={
    name:"Mukesh",
    "full name":"Mukesh Kumar Yadav",
    [mySym]:"mykey1",
    age:20,
    location:"Janakpur",
    email:"mky@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="mukesh@google.com"
//Object.freeze(JsUser)
JsUser.email = "kumar@gmail.com"
//console.log(JsUser);

JsUser.greeting =function(){
    // console.log("Hello Js User");
}

JsUser.greetingTwo =function(){
    // console.log(`Hello Js User,${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
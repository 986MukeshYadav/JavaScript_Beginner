const user={
    username:"mukesh",
    price:599,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    
    }
}

// user.welcomeMessage()
// user.username="kumar"
// user.welcomeMessage()
// console.log(this)

// function a(){
//     let username="mukesh"
//     console.log(this.username);
// }
// a()

// const chai = function(){
//     let username="mukesh"
//     console.log(this.username)
// }
// chai()

// const chai =()=>{
//     let username="mukesh"
//     console.log(this);
// }
// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

// const addtwo=(num1,num2)=>num1+num2

// const addtwo=(num1,num2)=> ( num1+num2)

const addtwo=(num1,num2)=> ({username:"mukesh"})
console.log(addtwo(4,5))

// const myArray=[2,3,4,6]
// myArray.forEach()

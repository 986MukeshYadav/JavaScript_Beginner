//const tinderUser = new Object()
const tinderUser={}

tinderUser.id ="123mukesh"
tinderUser.name="Mukesh Yadav"
tinderUser.isLoggedIn =false
//console.log(tinderUser);

const regularUser ={
    email:"mky@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Mukesh ",
            lastname:"Yadav"

        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1,...obj2}
//console.log(obj3);

const users =[
    {
        id:1,
        email:"mky12@gamil.com"
    },
    {
        id:2,
        email:"mky1234@gamil.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty(''));

const course={
    coursename:"react from Bignners",
    price:"799",
    courseInstructor:"Mukesh"
}
course.courseInstructor

const {courseInstructor:instructor}=course

//console.log(courseInstructor);
//console.log(instructor);

//destructure in reacts

// const navbar=({company})=>{

// }
// navbar(company="Mueksh")


//API in JSON format
// {
//     "name":"Mukesh",
//     "coursename":"javaScript",
//     "Price":"499"
// }


//API in array format
[
        {},
        {},
        {}
    
]
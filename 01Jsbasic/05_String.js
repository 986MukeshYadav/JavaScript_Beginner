const Fname="Mukesh"
const Lname="Yadav"

//console.log(Fname + Lname + "Kumar")

//console.log(`First name is ${Fname} and Last name is ${Lname}`);

const name1= new String('Kumar-yadav-mukesh')

//console.log(name1[0]);
//console.log(name1.__proto__);

//console.log(name1.length);
//console.log(name1.toUpperCase());
//console.log(name1.chartAt(2));
//console.log(name1.indexOf(m));

const newString = name1.substring(-3,1)
console.log(newString);

const anotherString = name1.slice(-3,1)
console.log(anotherString);

const newStringone ="   mukesh   "
console.log(newStringone);
console.log(newStringone.trim());

const url="http://mukesh.com/kumar%20yadav"
console.log(url.replace('%20','-'))

console.log(url.includes('ayhooo'))

console.log(name1.split('-'));
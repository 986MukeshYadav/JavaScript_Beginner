//For 
  for (let index = 0; index <=10; index++) {
    const element = index;
    if(element === 5){
      //  console.log("5 is best number")
    }
    //console.log(element);
  }
  // console.log(element) ==> not defiend

  for (let i=1; i<=10; i++){
    //console.log(`outer loop values:${i}`);
    for(let j=1; j<=10; j++){
       // console.log(`inner loop values: ${j} and inner loop : ${i}` );
       //console.log(i+ '*' + j + '=' + i+j);
    }
  }

  let myArray = ["flash" , "hero" ,"Mukesh"]
  //console.log(myArray.length);
  for (let i=1; i< myArray.length; i++){
    const element = myArray[i];
    //console.log(element);
  }

  //Break and Continue

  for (let i=1; i<=10; i++){
    if(i==5){
      //  console.log(`Found`);
        break;
    }
    //console.log(`value of i is ${i}`);
}

for (let i=1; i<=10; i++){
    if(i==5){
        console.log(`Found`);
        continue;
    }
    console.log(`value of i is ${i}`);
}
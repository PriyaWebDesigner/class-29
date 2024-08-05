
//=======For Loop========

let marks = [90,50,49,70];

for(i=0; i<marks.length; i++){
    console.log(marks[i]);
}

//=======While Loop======
//Example-1

let marks1 = [30,40,10,69];

let j=0;
while(j<marks1.length){
    console.log(marks1[j]);
    j++;
}

//Example-2
let k = 1;
while(k<=5){
    console.log('Hello World');
    k++;
}

//Example------3
let marks4 = [78,45,36,78,90]

let m = 0;
while(m<marks4.length){
    console.log(marks4[m]);
    m++;
}

//=======Do While Loop=======
//Example1
let marks2 = [20,50,33,80];

let l = 0;
do{
    console.log(marks2[l]);
    l++;
}

while(l<marks2.length);

//Example-2
let name1 = ['Priya', 'Riya', 'Purba', 'Anushka'];

let n = 0;
do{
    console.log(name1[n]);
    n++;
}
while(n<name1.length);

//========For Each Loop=======

let marks3 = [15,45,35,95];

marks3.forEach(element=>{
    console.log(element);
})


//=========Function=========
//Example-1
function show(){
    console.log('Hello World');
}

show();

//Example-2
function array(){
    let marks4 = [39,49,56]

    for(m=0; m<marks4.length; m++)
        console.log(marks4[m]);
}

array();

//Example-3
function sum(){
    let x = 30;
    let y = 20;
    let z = 40;

    let result = x+y+z;
    console.log(result);
}

sum();

//Example-4
function multification(number1, number2, number3){
    // let a = number1;
    // let b = number2;
    // let c = number3;
    
    // let result = a*b*c;

    let result = number1*number2*number3;
    console.log(result);
}

multification(20, 20,30);

//=======Return Process========

//Exaple-1
function divison(marks1,marks2){

    let result = marks1/marks2;
    return result;
}

//divison(12,3);  //4 
console.log(divison(12,3));



//Exaple-2
function addition(num1,num2, num3){

    let result = num1+num2+num3;

    return result;
}

let returnValue = addition(30,40,50); //120

let value = returnValue * 150;

console.log(value);


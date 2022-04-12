// let num = [10,20,30,40,50];
// console.log(num);
// console.log(num.length)
// let num1 = [...num,60,70,80];
// console.log(num1);
// console.log(num1.length)
// console.log(num1[0])
// console.log(num1[1])

// let num = [10,20,30,40,50];
// let num1 = num; // Deep copy : same memory two reference. 
// console.log("Size of num "+num.length)
// console.log("Size of num1 "+num1.length)
// num1.push(60);
// console.log("Size of num "+num.length)
// console.log("Size of num1 "+num1.length)
// let num2 = [...num];    //Shallow copy : only copy values not reference.
// console.log("Size of num "+num.length)
// console.log("Size of num "+num2.length)
// num2.push(70);
// console.log("Size of num "+num.length)
// console.log("Size of num "+num2.length)

// let num = [10,20,30,40,50];
// console.log(num);
// console.log(...num)
// console.log([...num])
// console.log({...num});

// let emp = {id:100,name:"Ravi",age:21};
// let emp1 = emp;             // deep copy 
// let emp2 = {...emp};        // shallow copy 
// console.log(emp)
// console.log(emp1)
// console.log(emp2)
// emp.age=25;
// console.log(emp)
// console.log(emp1)
// console.log(emp2)
// let newEmp = {...emp1,city:"Bangalore"};
// console.log(newEmp);

let emp = {id:100,name:"Ravi",salary:12000};
emp = {...emp,salary:34000,name:"Ravi Kumar"};
console.log(emp);












let empId=101;
let empName="Ajay";
let empAge =23;
let empCity = "Mumbai";
// using literal style we can creating structure of employee 
let emp1 = {id:100,name:"Ravi",age:21,city:"Bangalore"};
console.log("Id is "+emp1.id)
console.log("Name is "+emp1.name)
console.log("Age is "+emp1.age);
console.log("City is "+emp1.city)
// using destructure employee object. 
// let id = emp1.id;
// let name = emp1.name;
// let age = emp1.age;
// let city = emp1.city;

//let {id,name,age,city}=emp1;
// console.log(id)
// console.log(name)
// console.log(age)
// console.log(city)

//partial property destructure 
// let {name,city}=emp1;
// console.log(name)
// console.log(city)

//partial property destructure with name 
 let {name:emp_name,city:emp_city}=emp1;
 console.log(emp_name)
 console.log(emp_city)

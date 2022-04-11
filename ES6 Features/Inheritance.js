//ES5 inheritance concept 
// function Employee(id,name) {
//     this.id = id;
//     this.name = name;
//     this.disEmp= function() {
//         console.log("Employee object function")
//         console.log(" id is "+this.id);
//         console.log(" name is "+this.name)
//     }
// }
// function Manager(id,name,numberOfEmp) {
//     //2nd way to do inheritance. 
//     //Employee.apply(this,[id,name]);         // passing id and name using apply as array property 
//     this.numberOfEmp= numberOfEmp;
//     //3rd way to do inheritance 
//     Employee.call(this,id,name);               // passing id name name using call with var argument indepently. 
//     this.disMgr= function() {
//         console.log("Manager object function")
//         console.log("Number of employee "+this.numberOfEmp);
//     }
// }
// //var emp1 = new Employee();
// ///emp1.disEmp();
// //1st way to do inheritance using prototype style. 
// //Manager.prototype=Object.create(emp1);
// //Manager.prototype=new Employee();
// var mgr1 = new Manager(1,"Ravi",10);
// mgr1.disMgr();
// mgr1.disEmp();
// //ES6 Inheritance concept 


class Employee {
        constructor(id,name){
            this.id = id;
            this.name = name;
            console.log("Employee class object createted..")  
        }
        disEmp(){
                console.log("Employee class function")
                console.log("id is "+this.id);
                console.log("name is "+this.name);
        }
}
class Manager extends Employee {
    constructor(id,name,numberOfEmp){
            super(id,name);
            this.numberOfEmp= numberOfEmp;
            console.log("Manager class object created..")
    }
    disMgr() {
            console.log("Manager class function")
            console.log("Number of employee "+this.numberOfEmp);
    }
}
// let emp1 = new Employee();
// emp1.disEmp();
let mgr1 = new Manager(1,"Ravi",15);
mgr1.disMgr();
mgr1.disEmp();














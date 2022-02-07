


function testArrayFrom(){
    let str = "QWERTY";
    console.log(str);
    const array = Array.from(str);
    console.log(array);
    const indexOfR = array.findIndex(i=> i=="R");
    console.log(indexOfR);
}

testArrayFrom();

function testArrayOfObjects(){
    const emp1 = {id:1, name:"Jon", dept:"Finance"};
    const emp2 = {id:2, name:"Dave", dept:"Finance"};
    const emp3 = {id:3, name:"Harish", dept:"IT"};
    const arrayOfEmployees = [];
    arrayOfEmployees.push(emp1);
    arrayOfEmployees.push(emp2);
    arrayOfEmployees.push(emp3);

    for(let employee of arrayOfEmployees){
        console.log(`Employee Details: Id - ${employee.id}, Name - ${employee.name}, Department - ${employee.dept}`);
    }

    const employeeWithNameDave = arrayOfEmployees.find(e=> e.name=="Dave");
    console.log(employeeWithNameDave.name);
    const IndexOfDave = arrayOfEmployees.findIndex(e=> e.name=="Dave");
    console.log(IndexOfDave);
    const employeesFromFinance = arrayOfEmployees.filter(e=> e.dept=="Finance");
    for(let employee of employeesFromFinance){
        console.log(`Employee Details: Id - ${employee.id}, Name - ${employee.name}, Department - ${employee.dept}`);
    }
}

testArrayOfObjects();

function testMapFunction(){
    const emp1 = {id:1, name:"Jon", dept:"Finance"};
    const emp2 = {id:2, name:"Dave", dept:"Finance"};
    const emp3 = {id:3, name:"Harish", dept:"IT"};
    const arrayOfEmployees = [];
    arrayOfEmployees.push(emp1);
    arrayOfEmployees.push(emp2);
    arrayOfEmployees.push(emp3);

    // map function - 
    // runs a function on every item in array and create a new array
    const arrayOfIds = arrayOfEmployees.map((e)=> e.id==1);
    console.log(arrayOfIds);
}

testMapFunction();

// for(every e in employee){
//     getid()
// }

// function getID(array){

// }
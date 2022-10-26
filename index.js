// Write your solution in this file!
const employee = {
    name: "Diego Jose Guatemala Funes ",
    streetAddress: " Pasaje Gerardo Barrios, casa #1, Barrio la soledad",

};


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newemployee= {...employee}; // it does not modify the original key value pairs, it mkaes a copy from employee and modifies the copy without affecting original.
    newemployee[key] = value;
    return newemployee; // returns an employee with the original key value pairs and the new key value pair

};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value; // destructive completely
    return employee;

}
function deleteFromEmployeeByKey(employee, key){
    const newEmployeeTwo=  {...employee}; // does not modify the original employee ( it is non-destructive)
    delete newEmployeeTwo[key]; // deletes key from a clone of employee 
    return newEmployeeTwo; // returns the entire updated employee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;

}


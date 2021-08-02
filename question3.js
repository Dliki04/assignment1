var employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company 
console.log(Emp1.company);

//"OUTPUT"
// "Rohit"
const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
const empdetails=Object.assign(name,details);
console.log(empdetails)

/*
//[object Object]
{
    "firstName": "Philip",
    "lastName": "Fry",
    "job": "Delivery Boy",
    "employer": "Planet Express"
}
*/
function foo1()
{
return {
bar: "hello"
};
}
function foo2()
{
return
{
bar: "hello"
};
}
console.log(foo1());
console.log(foo2());

/*"OUTPUT"
for foo1

[object Object]
{
    “bar”:”hello”
 }

      for foo2
    undefined
*/
    
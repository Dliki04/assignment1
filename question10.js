//Initialize a Constructor with function
function Hero(name, level)
{
name = name;
level = level;
}
//Initialize a constructor with function where name and level(parameters) are being referred to function itself using "this". 
//The first letter of the identifier would be capitalized by convention.
function Hero(name, level) {
    this.name = name;
    this.level = level;
}
 
var Dojo = function()
{};

Dojo.prototype.fizzBuzz = function(start, stop)
{
    for (let i = start; i < stop; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0)
        {
            console.log("Fizz");
        }
        else if (i % 5 == 0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(i);
        }
    }
}

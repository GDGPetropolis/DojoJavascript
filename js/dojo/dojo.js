(function(app)
{
    app.Dojo = function()
    {};

    app.Dojo.prototype.fizzBuzz = function(number)
    {
        let result = number.toString();

        if((number % 3 == 0) && (number % 5 == 0))
        {
            result = "FizzBuzz";
        }
        else if(number % 3 == 0)
        {
            result = "Fizz";
        }
        else if (number % 5 == 0)
        {
            result = "Buzz";
        }

        return result;
    }
})(window.app);

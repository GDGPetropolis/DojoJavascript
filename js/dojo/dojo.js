var Dojo = function(selector)
{
    this.selector = selector;
};

Dojo.prototype.fizzBuzz = function(start, stop)
{
    let app = document.querySelectorAll(this.selector)[0];
    let list = document.createElement('ul');

    for (let i = start; i < stop; i++)
    {
        let item = document.createElement('li');

        if(i % 3 == 0 && i % 5 == 0)
        {
            item.innerHTML = "FizzBuzz";
        }
        else if(i % 3 == 0)
        {
            item.innerHTML = "Fizz";
        }
        else if (i % 5 == 0)
        {
            item.innerHTML = "Buzz";
        }
        else
        {
            item.innerHTML = i.toString();
        }

        list.appendChild(item);
    }

    app.appendChild(list);
}

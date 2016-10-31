(function(app)
{
    app.loadScript("js/dojo/dojo.js");

    app.fizzbuzz_html = function(start, stop)
    {
		const dojo = new app.Dojo();

        let result_fizzbuzz = document.querySelectorAll('#app-fizzbuzz .result')[0];

        result_fizzbuzz.innerHTML = "";

        let list = document.createElement('ul');

        for (let number = start; number <= stop; number++)
        {
            let item = document.createElement('li');

            item.innerHTML = dojo.fizzBuzz(number);

            list.appendChild(item);
        }

        result_fizzbuzz.appendChild(list);
    }
})(window.app);

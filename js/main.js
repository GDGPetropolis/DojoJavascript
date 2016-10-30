(function(app)
{
    app.loadScript("js/dojo/dojo.js");

    app.main = function() {
            const dojo = new app.Dojo('#app-fizzbuzz');

            dojo.fizzBuzz(1, 101);
    }
})(window.app);

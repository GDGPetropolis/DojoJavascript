(function(app)
{
    app.loadScript = function(url, callback)
    {
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    }

    app.loadScript("js/main.js");
})(window.app || (window.app = {}));

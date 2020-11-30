<html>
    
    <body>
        <p>1. Writing using innerHTML</p>
        <p>2. Writing using document.write()</p>
        <p>3. Writing using window.alert()</p>
        <button onClick='window.print()'>Printing the page</button>
        <p id="hello"></p>
        console.log('hi')
        <script>
            document.getElementById('hello').innerHTML=5+7
            document.write(5+7);
            window.alert(5+7);
        </script>
    </body>
</html>

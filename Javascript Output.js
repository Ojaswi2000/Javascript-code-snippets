<html>
    
    <body>
        <p>1. Writing using innerHTML</p>
        <p>2. Writing using document.write()</p>
        <p>3. Writing using window.alert()</p>
        <p id="hello"></p>
        
        <script>
            document.getElementById('hello').innerHTML=5+7
            document.write(5+7);
            window.alert(5+7);
        </script>
    </body>
</html>

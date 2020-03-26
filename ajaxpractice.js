<!DOCTYPE HTML>
<html>
<head>
</head>
     <body>
     <p>MCA EXAM.</p>
     <p id="block2">RESULT</p>
     <button id="pressme">Press Me</button>
     <script type="text/javascript">
          var pElems = document.getElementsByTagName("p");
          for ( var i = 0; i < pElems.length; i++) 
          {
               pElems[i].addEventListener("mouseover", handleMouseOver);
               pElems[i].addEventListener("mouseout", handleMouseOut);
          }
          document.getElementById("pressme").onclick = function() 
          {
               document.getElementById("block2").removeEventListener("mouseout",handleMouseOut);
          }
          function handleMouseOver(e) 
          {
               e.target.innerHTML += "2016";
               e.target.style.background = 'white';
               e.target.style.color = 'black';
          }
          function handleMouseOut(e) 
          {
               e.target.innerjQuery AJAX EventsHTML += "result";
               e.target.style.removeProperty('color');
               e.target.style.removeProperty('background');
          }
     </script>
     </body>
</html>
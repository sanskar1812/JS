var x = 0;
var e = "<hr/>";
var array = Array();

function add_element_to_array()
{
array[x] = document.getElementById("feedback").value;
array[x+1] = document.getElementById("feedback1").value;
array[x+2] = document.getElementById("feedback2").value;
array[x+3] = document.getElementById("feedback3").value;
array[x+4] = document.getElementById("feedback4").value;
array[x+5] = document.getElementById("feedback5").value;
array[x+6] = document.getElementById("feedback6").value;
array[x+7] = document.getElementById("feedback7").value;
array[x+8] = document.getElementById("feedback8").value;
array[x+9] = document.getElementById("feedback9").value;
 alert("Successfully Added Feedback Details!");
 
 document.getElementById("feedback").value = "";
 document.getElementById("feedback1").value = "";
 document.getElementById("feedback2").value = "";
 document.getElementById("feedback3").value = "";
 document.getElementById("feedback4").value = "";
 document.getElementById("feedback5").value = "";
 document.getElementById("feedback6").value = "";
 document.getElementById("feedback7").value = "";
 document.getElementById("feedback8").value = "";
 document.getElementById("feedback9").value = "";
}

function display_array()
{
      
  //document.write ("This is a warning message!");
   e+="<h2>"+"Questionnaire Details"+"</h2>"; 
   e+="<table>";
   for (var y=0; y<array.length; y++)
   {
   //   e+="Feedback " +(y+1)+"<br/>";
      	
	e+="<td>"+ array[y] +"</td>";
      
   }
   e+="</table>";
   e+="<br/>";
   
   document.getElementById("result").innerHTML = e;
}
document.write("<table>");  
var i,j;
for(i=1;i<=9;i++){
	document.write("<tr>"); 
	for(j=1;j<=i;j++)
	{
		document.write("<td style='border: 1px solid;'>"+j+"x"+i+"="+i*j +" "+"</td>");
	}
	document.write("<br>");
	document.write("</tr>");

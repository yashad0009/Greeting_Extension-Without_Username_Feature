document.addEventListener("DOMContentLoaded", function()
{
getGreeting();
});
function getGreeting() 
{
	var date = new Date(); 
	var time = date.getHours()+":"+date.getMinutes();
	document.getElementById("msg1").innerHTML = time;
	if (time>="05:00" && time<"12:00") 
		document.getElementById("msg2").innerHTML = "Hello User, Good Morning!";
	else if (time>="12:00" && time<"17:00")
		document.getElementById("msg2").innerHTML = "Hello User, Good Afternoon!";
	else if (time>="17:00" && time<"24:00")
		document.getElementById("msg2").innerHTML = "Hello User, Good Evening!";
	else
		document.getElementById("msg2").innerHTML = "Hello User, it's time to have sleep. Good Night!";	
}
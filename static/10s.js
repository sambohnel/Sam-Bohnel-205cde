var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct = 0;
var questions = [
    [ "Who set the record for most expensive ever footballer in 2013?", "Cristian Ronaldo", "Gareth Bale", "Angel Di Maria", "B" ],
	[ "Which player equalled Cristiano Ronaldo and Alan Shearers record of 31 Premier League goals in a season in 2014?", "Robin Van Persie", "Sergio Augero", "Luis Suarez", "C" ],
	[ "Deli Ali moved to Spurs in 2015, but where was he before?", "MK Dons", "Crewe", "Barnet", "A" ],
	[ "Ryan Giggs retired in 2014, how many Premier League titles did he have?", "11", "9", "13", "C" ]
];
function _(x){
	return document.getElementById(x);
}
function renderQ(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	choiceA = questions[pos][1];
	choiceB = questions[pos][2];
	choiceC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+choiceA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br><br>";
	test.innerHTML += "<button onclick='checkQ()'>Submit Answer</button>";
}
function checkQ(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQ();
}
window.addEventListener("load", renderQ, false);

function hintQ1()
{
	alert("Q1 - He cost in excess of 85 Million Pounds")
}
function hintQ2()
{
	alert("Q2 - He may have been top scorer but he didnt win the league'")
}
function hintQ3()
{
	alert("Q3 - They have a reputation in recent years of producing young players")
}
function hintQ4()
{
	alert("Q4 - He had the same number as Sir Alex Ferguson")
}
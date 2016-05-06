var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct = 0;
var questions = [
    [ "Who won the Champions League in 1997", "Barcelona", "Borrusia Dortmund", "Manchester United", "B" ],
	[ "Who scored the most Premier League goals in the 1990s?", "Andy Cole", "Dennis Bergkamp", "Alan Shearer", "C" ],
	[ "Who won the most Premier League titles in the 90s?", "Blackburn Rovers", "Chelsea", "Liverpool", "A" ],
	[ "Who won the Ballon d'Or in 1998?", "Ronaldo", "Luis Figo", "Zidane", "C" ]
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
	alert("Q1 - They were a suprise package this year")
}
function hintQ2()
{
	alert("Q2 - He's regarded as a club legend")
}
function hintQ3()
{
	alert("Q3 - They havent won it since the 90s")
}
function hintQ4()
{
	alert("Q4 - He always scored goals")
}
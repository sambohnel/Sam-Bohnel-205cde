var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct = 0;
var questions = [
    [ "Which nation has won the most European Championships?", "Italy", "Germany", "France", "B" ],
	[ "Which nation shocked the world to win Euro 92?", "Denmark", "Sweeden", "Poland", "A" ],
	[ "2 nations have held the World Cup and European Championship at the same time, One is Spain who is the other?", "France", "Germany", "England", "B" ],
	[ "Who is the all time leading scorer in EUROs tournements?", "Alan Shearer", "Michel Platini", "Zlatan Ibrahimovic", "B" ]
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
	alert("Q1 - They have 3 in total")
}
function hintQ2()
{
	alert("Q2 - They only qualified as yugoslavia dropped out")
}
function hintQ3()
{
	alert("Q3 - They completed this achievement in 2000")
}
function hintQ4()
{
	alert("Q4 -They scored 9 goals in total")
}
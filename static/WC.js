var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct = 0;
var questions = [
    [ "Who won the 1998 World Cup?", "Brazil", "Italy", "France", "C" ],
	[ "How many World Cups did Pele win?", "1", "2", "3", "C" ],
	[ "Who is the all time top goal scorer in World Cups?", "Maradonna", "Miroslav Klose", "Ronaldo", "B" ],
	[ "Who scored the winning goal in the 2014 World Cup?", "Mario Goetze", "Thomas Muller", "Mesut Ozil", "A" ]
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
	alert("Q1 - They won Euro 2000 two years later")
}
function hintQ2()
{
	alert("Q2 - He won his first age 17")
}
function hintQ3()
{
	alert("Q3 - They also won the world cup the year he broke the record")
}
function hintQ4()
{
	alert("Q4 -He scored a great volley deep into extra time")
}
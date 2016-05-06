var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct = 0;
var questions = [
    [ "How many goals did Cristiano Ronaldo score in the 2014 Champions League campaign to break the record?", "15", "17", "19", "B" ],
	[ "Cristiano Ronaldo and Lional Messi are the two top goalscorers in Champions League history, who is 3rd?", "Raul", "Ruud Van Nistleroy", "Thierry Henry", "A" ],
	[ "Who has the most Champions league appearances?", "Ryan Giggs", "Xavi", "Iker Casillas", "C" ],
	[ "Who won the 2005 Champions League?", "Liverpool", "AC Milan", "Porto", "A" ]
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
	alert("Q1 - He is on course to break his record in 2016")
}
function hintQ2()
{
	alert("Q2 - They ended up with 3 Champions League medals when they retired")
}
function hintQ3()
{
	alert("Q3 - He won the Champions League in his debut season")
}
function hintQ4()
{
	alert("Q4 - An eventful night in intanbul")
}
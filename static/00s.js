var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct = 0;
var questions = [
    [ "Which British player won the Ballon d'Or in 2001?", "Michael Owen", "Steven Gerrard", "David Beckham", "A" ],
	[ "In Which year did Chelsea win their first Premiership?", "2003", "2005", "2006", "B" ],
	[ "Barcelona won the treble in which year?", "2006", "2009", "2007", "B" ],
	[ "Who was the top goalscorer in the Premier League in 2008/2009 season?", "Cristiano Ronaldo", "Steven Gerrard", "Nicolas Anelka", "C" ]
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
	test.innerHTML += "<button onclick='checkQ()'>Submit</button>";
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
	alert("Q1 - He was a teenage sensation")
}
function hintQ2()
{
	alert("Q2 - The 'Special one was manager'")
}
function hintQ3()
{
	alert("Q3 - Messi, Iniesta & Xavi ran football this year")
}
function hintQ4()
{
	alert("Q4 - He scored 19 goals this year")
}
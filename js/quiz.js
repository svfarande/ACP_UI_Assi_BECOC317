var score=0;	//set score to 0
var total=5;	//Total no. of questions
var point=1;	//point per correct answer
var highest=total*point;

//initializer
function init(){
	//set correct answers
	sessionStorage.setItem('a1','b');
	sessionStorage.setItem('a2','b');
	sessionStorage.setItem('a3','b');
	sessionStorage.setItem('a4','c');
	sessionStorage.setItem('a5','a');
}

$(document).ready(function(){
	//Hide all questions
	$('.questionForm').hide();
	
	//Show first question
	$('#q1').show();
	
	$('#q1 #next').click(function(){
		$('.questionForm').hide();
		process('q1');
		$('#q2').fadeIn(300);
		return false;
	});
	
	$('#q2 #next').click(function(){
		$('.questionForm').hide();
		process('q2');
		$('#q3').fadeIn(300);
		return false;
	});
	
	$('#q3 #next').click(function(){
		$('.questionForm').hide();
		process('q3');
		$('#q4').fadeIn(300);
		return false;
	});
	
	$('#q4 #next').click(function(){
		$('.questionForm').hide();
		process('q4');
		$('#q5').fadeIn(300);
		return false;
	});
	
	$('#q5 #next').click(function(){
		$('.questionForm').hide();
		process('q5');
		$('#results').fadeIn(300);
		return false;
	});
});

//Process the answers
function process(q) {
	if(q=="q1"){
		var submitted=$('input[name=q1]:checked').val();
		if(submitted==sessionStorage.a1){
			score++;
		}
	}
	
	if(q=="q2"){
		var submitted=$('input[name=q2]:checked').val();
		if(submitted==sessionStorage.a2){
			score++;
		}
	}
	
	if(q=="q3"){
		var submitted=$('input[name=q3]:checked').val();
		if(submitted==sessionStorage.a3){
			score++;
		}
	}
	
	if(q=="q4"){
		var submitted=$('input[name=q4]:checked').val();
		if(submitted==sessionStorage.a4){
			score++;
		}
	}
	
	if(q=="q5"){
		var submitted=$('input[name=q5]:checked').val();
		if(submitted==sessionStorage.a5){
			score++;
		}
		$('#results').html('<h3>Your score is: '+score+' out of 5</h3><a href="index.html">Take Quiz Again</a>');
	}
	
	return false;
}

//Add event listener
window.addEventListener('load',init,false);

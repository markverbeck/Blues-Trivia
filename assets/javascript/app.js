var q1 = {

	question: '"Which blues man sold his soul to the Devil at the crossroads?"',
	choice1: "Muddy Waters", 
	choice2: "Son House",
	choice3: "Robert Johnson",
	choice4: "Sonny Boy Williamson",
	answer: "Robert Johnson",
	image:  "assets/images/robertJohnson.jpg",
}

var q2 = {
	question: '"Which blues man made enough money to buy a new car, along with hire a chauffeur, by playing on street corners during the Great Depression?"',
	choice1: "Blind Willie McTell",
	choice2: "Blind Willie Johnson",
	choice3: "Blind Boy Fuller",
	choice4: "Blind Blake",
	answer: "Blind Willie Johnson",
	image: "assets/images/blindWillie.jpg",
}

var q3 = {
	question: '"Which blues man learned to play slide with a beef bone?"',
	choice1: "Mississippi Fred McDowell",
	choice2: "Duane Allman",
	choice3: "Muddy Waters",
	choice4: "Bukka White",
	answer: "Mississippi Fred McDowell",
	image: "assets/images/fredMc.jpg",
}

var q4 = {
	question: '"Which blues woman, along with her husband, recorded the orginal version of "When The Levee Breaks"?"',
	choice1: "Bonnie Raitt",
	choice2: "Ma Rainey",
	choice3: "Big Mamma Thorton",
	choice4: "Memphis Minnie",
	answer: "Memphis Minnie",
	image: "assets/images/memphis.jpg",
}

var q5 = {
	question: '"Which blues woman recorded the orginal version of "Hound Dog"?"',
	choice1: "Sister Rossetta Tharpe",
	choice2: "Susan Tedeschi",
	choice3: "Big Mamma Thorton",
	choice4: "Ko Ko Taylor",
	answer: "Big Mamma Thorton",
	image: "assets/images/bigMamma.jpg",
}

var q6 = {
	question: '"Which blues man was born with six fingers on each hand?"',
	choice1: "Howlin' Wolf",
	choice2: "Lightning Hopkins",
	choice3: "Hound Dog Taylor",
	choice4: "R.L. Burnside",
	answer: "Hound Dog Taylor",
	image: "assets/images/houndDogTaylor.jpg",
}


var time = 10;
var intervalId;
var nextQ;
var win = 0;
var lose = 0;
var unanswered = 0;








$(document).ready(function(){

	

	




	var decrement = function(){
		time --;
		$("#timer").html("Time Remaining: " + time);

		if(time === 0){
			stop();
		}
	};

	var run =  function() {
      intervalId = setInterval(decrement, 1000);
    };


	var stop = function(){
		unanswered ++;

		if($("#question").html() === q1.question){
			$("#picture").removeClass("hidden");
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/johnson.m4a");
			document.getElementById("song").play();
			$("#correctAnswer").html("Correct Answer: " + q1.answer);
			$("#picture").attr("src", q1.image);
			console.log("working");
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q2.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q2.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q2.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q2.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q2.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q2.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/willie.m4a");
			document.getElementById("song").play();
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q2.answer);
			$("#picture").attr("src", q2.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q3.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q3.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q3.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q3.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q3.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q3.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/fred.mp3");
			document.getElementById("song").play();
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q3.answer);
			$("#picture").attr("src", q3.image);
			nextQ = setTimeout(function(){
								time = 10;
				$("#question").html(q4.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q4.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q4.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q4.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q4.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q4.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/memphis.m4a");
			document.getElementById("song").play();
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q4.answer);
			$("#picture").attr("src", q4.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q5.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q5.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q5.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q5.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q5.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q5.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/mamma.m4a");
			document.getElementById("song").play();
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q5.answer);
			$("#picture").attr("src", q5.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q6.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q6.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q6.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q6.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q6.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q6.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/hounddog.m4a");
			document.getElementById("song").play();
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q6.answer);
			$("#picture").attr("src", q6.image);
			nextQ = setTimeout(function(){
				$("#result1").removeClass("hidden");
				$("#result2").removeClass("hidden");
				$("#result3").removeClass("hidden");
				time = 10;
				
				$("option4").removeClass("hidden");
				$("option4").html("");
				$("#question").html("Here's how you did!!");
				$("#result1").html("Correct Answers: " + win);
				$("#result2").html("Incorrect Answers: " + lose);
				$("#result3").html("Unanswered: " + unanswered);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#musicButton").removeClass("hidden");
				$("#start").removeClass("hidden");
				$("#start").html("Start Over?");
				
			}, 10000);
		}


		clearInterval(intervalId);
		$("#question").html("Out of time!");
		$("#option1").addClass("hidden");
		$("#option2").addClass("hidden");
		$("#option3").addClass("hidden");
		$("#option4").addClass("hidden");
	};

	

	$("#start").on("click", function(){
		$("#option4").removeClass("hidden");
		unanswered = 0;
		win = 0;
		lose = 0;
		$("#musicButton").addClass("hidden");
		$("#correctAnswer").html("");
		$("#picture").attr("src", "");
		$("#start").addClass("hidden");
		$("#correctAnswer").removeClass("hidden");
		$("#result1").addClass("hidden");
		$("#result2").addClass("hidden");
		$("#result3").addClass("hidden");
		$("#question").html(q1.question);
		$("#option1").removeClass("hidden");
		$("#option1").html(q1.choice1);
		$("#option2").removeClass("hidden");
		$("#option2").html(q1.choice2);
		$("#option3").removeClass("hidden");
		$("#option3").html(q1.choice3);
		$("#option4").removeClass("hidden");
		$("#option4").html(q1.choice4);
		$("#timer").removeClass("hidden");
		$("#timer").html("Time Remaining: " + time);
		run();
	});

	$("#option1").on("click", function(){

		if($("#question").html() === q1.question){
			$("#picture").removeClass("hidden");
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/johnson.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").html("Correct Answer: " + q1.answer);
			$("#picture").attr("src", q1.image);
			console.log("working");
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q2.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q2.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q2.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q2.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q2.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q2.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/willie.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q2.answer);
			$("#picture").attr("src", q2.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q3.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q3.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q3.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q3.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q3.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q3.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/fred.mp3");
			document.getElementById("song").play();
			$("#question").html("Right Answer!");
			win ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html(q3.answer);
			$("#picture").attr("src", q3.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q4.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q4.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q4.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q4.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q4.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q4.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/memphis.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q4.answer);
			$("#picture").attr("src", q4.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q5.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q5.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q5.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q5.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q5.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q5.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/mamma.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q5.answer);
			$("#picture").attr("src", q5.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q6.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q6.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q6.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q6.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q6.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q6.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/hounddog.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q6.answer);
			$("#picture").attr("src", q6.image);
			nextQ = setTimeout(function(){
				$("#result1").removeClass("hidden");
				$("#result2").removeClass("hidden");
				$("#result3").removeClass("hidden");
				time = 10;
				$("option4").removeClass("hidden");
				$("option4").html("");
				$("#question").html("Here's how you did!!");
				$("#result1").html("Correct Answers: " + win);
				$("#result2").html("Incorrect Answers: " + lose);
				$("#result3").html("Unanswered: " + unanswered);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#musicButton").removeClass("hidden");
				$("#start").removeClass("hidden");
				$("#start").html("Start Over?");
			}, 10000);
		}


		clearInterval(intervalId);
		
		$("#option1").addClass("hidden");
		$("#option2").addClass("hidden");
		$("#option3").addClass("hidden");
		$("#option4").addClass("hidden");
	});

	$("#option2").on("click", function(){

		if($("#question").html() === q1.question){
			$("#picture").removeClass("hidden");
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/johnson.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").html("Correct Answer: " + q1.answer);
			$("#picture").attr("src", q1.image);
			console.log("working");
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q2.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q2.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q2.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q2.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q2.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q2.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/willie.m4a");
			document.getElementById("song").play();
			$("#question").html("Right Answer!");
			win ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html(q2.answer);
			$("#picture").attr("src", q2.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q3.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q3.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q3.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q3.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q3.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q3.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/fred.mp3");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q3.answer);
			$("#picture").attr("src", q3.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q4.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q4.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q4.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q4.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q4.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q4.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/memphis.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q4.answer);
			$("#picture").attr("src", q4.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q5.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q5.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q5.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q5.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q5.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q5.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/mamma.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q5.answer);
			$("#picture").attr("src", q5.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q6.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q6.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q6.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q6.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q6.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q6.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/hounddog.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q6.answer);
			$("#picture").attr("src", q6.image);
			nextQ = setTimeout(function(){
				$("#result1").removeClass("hidden");
				$("#result2").removeClass("hidden");
				$("#result3").removeClass("hidden");
				time = 10;
			
				$("option4").removeClass("hidden");
				$("option4").html("");
				$("#question").html("Here's how you did!!");
				$("#result1").html("Correct Answers: " + win);
				$("#result2").html("Incorrect Answers: " + lose);
				$("#result3").html("Unanswered: " + unanswered);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#musicButton").removeClass("hidden");
				$("#start").removeClass("hidden");
				$("#start").html("Start Over?");
			}, 10000);
		}





		clearInterval(intervalId);
		
		$("#option1").addClass("hidden");
		$("#option2").addClass("hidden");
		$("#option3").addClass("hidden");
		$("#option4").addClass("hidden");
	});

	$("#option3").on("click", function(){

		if($("#question").html() === q1.question){
			$("#picture").removeClass("hidden");
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/johnson.m4a");
			document.getElementById("song").play();
			$("#question").html("Right Answer!");
			win ++;
			$("#correctAnswer").html(q1.answer);
			$("#picture").attr("src", q1.image);
			console.log("working");
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q2.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q2.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q2.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q2.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q2.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q2.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/willie.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q2.answer);
			$("#picture").attr("src", q2.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q3.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q3.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q3.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q3.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q3.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q3.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/fred.mp3");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q3.answer);
			$("#picture").attr("src", q3.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q4.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q4.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q4.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q4.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q4.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q4.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/memphis.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q4.answer);
			$("#picture").attr("src", q4.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q5.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q5.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q5.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q5.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q5.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q5.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/mamma.m4a");
			document.getElementById("song").play();
			$("#question").html("Right Answer!");
			win ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html(q5.answer);
			$("#picture").attr("src", q5.image);
			nextQ = setTimeout(function(){
				time = 10;
				
				$("#question").html(q6.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q6.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q6.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q6.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q6.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q6.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/hounddog.m4a");
			document.getElementById("song").play();
			$("#question").html("Right Answer!");
			win ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html(q6.answer);
			$("#picture").attr("src", q6.image);
			nextQ = setTimeout(function(){
				$("#result1").removeClass("hidden");
				$("#result2").removeClass("hidden");
				$("#result3").removeClass("hidden");
				time = 10;
				
				$("option4").removeClass("hidden");
				$("option4").html("");
				$("#question").html("Here's how you did!!");
				$("#result1").html("Correct Answers: " + win);
				$("#result2").html("Incorrect Answers: " + lose);
				$("#result3").html("Unanswered: " + unanswered);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#musicButton").removeClass("hidden");
				$("#start").removeClass("hidden");
				$("#start").html("Start Over?");
			}, 10000);
		}





		clearInterval(intervalId);
		
		$("#option1").addClass("hidden");
		$("#option2").addClass("hidden");
		$("#option3").addClass("hidden");
		$("#option4").addClass("hidden");
	});

	$("#option4").on("click", function(){

		if($("#question").html() === q1.question){
			$("#picture").removeClass("hidden");
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/johnson.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").html("Correct Answer: " + q1.answer);
			$("#picture").attr("src", q1.image);
			console.log("working");
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q2.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q2.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q2.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q2.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q2.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q2.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/willie.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q2.answer);
			$("#picture").attr("src", q2.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q3.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q3.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q3.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q3.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q3.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q3.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/fred.mp3");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q3.answer);
			$("#picture").attr("src", q3.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q4.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q4.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q4.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q4.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q4.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q4.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/memphis.m4a");
			document.getElementById("song").play();
			$("#question").html("Right Answer!");
			win ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html(q4.answer);
			$("#picture").attr("src", q4.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q5.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q5.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q5.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q5.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q5.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q5.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/mamma.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q5.answer);
			$("#picture").attr("src", q5.image);
			nextQ = setTimeout(function(){
				
				time = 10;
				$("#question").html(q6.question);
				$("#option1").removeClass("hidden");
				$("#option1").html(q6.choice1);
				$("#option2").removeClass("hidden");
				$("#option2").html(q6.choice2);
				$("#option3").removeClass("hidden");
				$("#option3").html(q6.choice3);
				$("#option4").removeClass("hidden");
				$("#option4").html(q6.choice4);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#timer").html("Time Remaining: " + time);
				run();
			}, 10000);
		}else if ($("#question").html() === q6.question){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/hounddog.m4a");
			document.getElementById("song").play();
			$("#question").html("Wrong Answer!");
			lose ++;
			$("#correctAnswer").removeClass("hidden");
			$("#picture").removeClass("hidden");
			$("#correctAnswer").html("Correct Answer: " + q6.answer);
			$("#picture").attr("src", q6.image);
			nextQ = setTimeout(function(){
				$("#result1").removeClass("hidden");
				$("#result2").removeClass("hidden");
				$("#result3").removeClass("hidden");
				time = 10;
				
				$("option4").removeClass("hidden");
				$("option4").html("");
				$("#question").html("Here's how you did!!");
				$("#result1").html("Correct Answers: " + win);
				$("#result2").html("Incorrect Answers: " + lose);
				$("#result3").html("Unanswered: " + unanswered);
				$("#correctAnswer").addClass("hidden");
				$("#picture").addClass("hidden");
				$("#musicButton").removeClass("hidden");
				$("#start").removeClass("hidden");
				$("#start").html("Start Over?");
			}, 10000);
		}





		clearInterval(intervalId);
		
		$("#option1").addClass("hidden");
		$("#option2").addClass("hidden");
		$("#option3").addClass("hidden");
		$("#option4").addClass("hidden");
	});

	$("#robertJohnson").on("click", function(){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/johnson.m4a");
			document.getElementById("song").play();
	});
	
	$("#blindWillieJohnson").on("click", function(){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/willie.m4a");
			document.getElementById("song").play();
	});

	$("#mississippiFredMcDowell").on("click", function(){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/fred.mp3");
			document.getElementById("song").play();
	});

	$("#memphisMinnie").on("click", function(){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/memphis.m4a");
			document.getElementById("song").play();
	});

	$("#bigMammaThorton").on("click", function(){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/mamma.m4a");
			document.getElementById("song").play();
	});

	$("#hounddogTaylor").on("click", function(){
			document.getElementById("song").pause();
			$("#song").attr("src", "assets/images/hounddog.m4a");
			document.getElementById("song").play();
	});




	

});
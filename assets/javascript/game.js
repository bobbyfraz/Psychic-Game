
	var wins = 0;
	var losses = 0;
	var guessesleft = 9;
	var letterList = [];
	var turns = 9;
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var computerpick = letters[Math.floor(Math.random() * letters.length)];

	function reset(){
		// do some logic here that resets everything
		computerpick = letters[Math.floor(Math.random() * letters.length)];
		guessesleft = 9;
		letterList = [];
	}

	document.onkeyup = function(event) {
		var userguess = event.key;
		//var computerpick = letters[Math.floor(Math.random() * letters.length)];
		console.log('this is the computerpick ' + computerpick);
		
		//make computer pick last for 9 clicks

		if (userguess === computerpick){
			wins++;
			alert("WINNER!!!");
			reset();
		}
		else {
			guessesleft--;
			letterList.push(userguess);
		};

		if(guessesleft<=0){
			losses++;
			alert("LOSER!!! Try Again...");
			reset();
		};

		document.getElementById("wincount").innerHTML = wins;
		document.getElementById("losscount").innerHTML = losses;
		document.getElementById("guessleftcount").innerHTML = guessesleft;
		document.getElementById("guesslist").innerHTML = letterList;
	}


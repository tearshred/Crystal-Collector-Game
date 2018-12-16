// Institute Variables

var computerGuess = "";
var wins = 0;
var losses = 0;
var counter = 0;
var imgCrystal = ["./assets/img/blue-crystal.png", "./assets/img/green-crystal.png", "./assets/img/orange-crystal.png", "./assets/img/red-crystal.png"];

// Functions

    // Generates a random number
	function randomcomputerGuess () {
		computerGuess = Math.floor(Math.random() * 119) + 29;
    }
    
    // Displays crystals on the page
	function generateImg () {
		for (var i = 0; i < imgCrystal.length; i++) {
            var crystal = $("<img>");
            crystal.addClass("crystal");
			crystal.attr("src", imgCrystal[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "128");
			$(".crystal-images").append(crystal);
		}
	}

    // Resets the HTML to the default state
	function resetHTML () {
		$("#computer-guess").html(computerGuess);
		$(".score-counter").html("<h1>Wins: " + wins + "</h1>" + "<h1>Losses: " + losses + "</h1>");
		$(".score").html(counter);
		$(".crystal-images").empty();
	}

    // Resets the game upon completion
	function resetGame () {
		randomcomputerGuess ();
		counter = 0;
		resetHTML ();
		generateImg ();
	}

	// Inital functions upon lading the game
	randomcomputerGuess();
	resetHTML ();
	generateImg ();

    // Click Functions
	function crystalClick () {
		//attr returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".score").html(counter);
		if (counter == computerGuess) {
			wins++;
            resetGame();
            
            // Displays a winning message below the scoreboard
            $(".score-container").append("<h2>Congrats! You win!</h2>")
            setTimeout(function(){ 
                $(".score-container").children("h2").remove();
            }, 5000);
        }
        
		else if (counter > computerGuess) {
			losses++;
            resetGame();

            // Displays a losing message below the scoreboard
            $(".score-container").append("<h2>Sorry, you lose!</h2>")
            setTimeout(function(){ 
                $(".score-container").children("h2").remove();
            }, 5000);
		};
	};

	//Throughout life cycle of the document, accounting for every single time document is dynamically changed execute crystalClick function
	$(document).on("click", ".crystal", crystalClick);
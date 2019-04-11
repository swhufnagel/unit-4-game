var counter = {
    targScore: 0,
    usrScore: 0,
    wins: 0,
    losses: 0
}
var crystals = {
    pink: 0,
    green: 0,
    blue: 0,
    purple: 0,
    images: ["img0.jpg", "img1.jpg", "img2.jpeg", "img3.png"],
    draw: function () {
        for (i = 0; i <= 3; i++) {
            var img = $("<img>");
            img.addClass("crystal");
            img.attr("id", "img" + i);
            img.attr("src", "assets/images/" + crystals.images[i]);

            $('.crystals').append(img);
        }

    },
    randomize: function () {
        crystals.pink = Math.floor(Math.random() * (12 - 1) + 1);
        crystals.green = Math.floor(Math.random() * (12 - 1) + 1);
        crystals.purple = Math.floor(Math.random() * (12 - 1) + 1);
        crystals.blue = Math.floor(Math.random() * (12 - 1) + 1);
    }
}
var game =
{
    play: false,
    scoreboard: function () {
        var score = $('<div>');
        score.addClass("scoreboard hidePlay");
        score.text("Your Score: " + counter.usrScore);
        $('#playScore').append(score);
        var wins = $('<p>');
        wins.addClass('wins');
        wins.text("Wins: " + counter.wins);
        $('#score').append(wins);
        var losses = $('<p>')
        losses.addClass('losses');
        losses.text("Losses: " + counter.losses);
        $('#score').append(losses);
    },
    reset: function () {
        crystals.randomize();
        counter.targScore = Math.floor(Math.random() * (120 - 19) + 19);
        counter.usrScore = 0;
        $('#playScore').html("Your Score: " + counter.usrScore);
        $('#target').html("Target Score: " + counter.targScore);
        $('.wins').html("Wins: " + counter.wins);
        $('.losses').html("Losses: " + counter.losses);
    }
}
$(document).ready(function () {
    // if not playing show play button
        if (game.play === false) {
            var play = $('<button>');
            play.addClass("playAgain")
            play.text("Play");
            $('#playScore').append(play);
        }
        function winCheck() {
            if (counter.usrScore === counter.targScore) {
                alert("You Win!");
                counter.wins++;
                game.reset();
                game.play = false;

            }
            else if (counter.usrScore > counter.targScore) {
                alert("You Lose!");
                counter.losses++;
                game.reset();
                game.play = false;

            }
        }
        //if play button is pressed start game
        $('.playAgain').click(function () {
            counter.targScore = Math.floor(Math.random() * (120 - 19) + 19);
            $('#target').html("Target Score: " + counter.targScore);
            $("#instr").addClass("hidePlay");
            game.play = true;
            game.scoreboard();
            play.addClass("hidePlay");
            $(".scoreboard").addClass("showPlay");
            crystals.draw();
            crystals.randomize();
            //if each crystal is clicked
            $(document).on("click", "#img0", function () {
                counter.usrScore += crystals.pink;
                $("#playScore").html("Your Score: " + counter.usrScore);
                winCheck();
            })
            $(document).on("click", "#img1", function () {
                counter.usrScore += crystals.green;
                console.log("you clicked green");
                console.log("score: " + counter.usrScore);
                $("#playScore").html("Your Score: " + counter.usrScore);
                winCheck();
            })
            $(document).on("click", "#img2", function () {
                counter.usrScore += crystals.purple;
                $("#playScore").html("Your Score: " + counter.usrScore);
                winCheck();
            })
            $(document).on("click", "#img3", function () {
                counter.usrScore += crystals.blue;
                $("#playScore").html("Your Score: " + counter.usrScore);
                winCheck();
            })
        })
})
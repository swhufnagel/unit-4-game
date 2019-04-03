var counter = {
    targscore: 0,
    usrscore: 0,
    wins: 0,
    losses: 0
}
var crystals = {
    blue: 0,
    green: 0,
    red: 0,
    yellow: 0
}
var game =
{
    play: false
}
$(document).ready(function() {
    var score = $('<div>');
       score.addClass("scoreboard hidePlay");
       score.text("Your Score: " + counter.usrscore);
        $('#playScore').append(score);
    if(game.play === false){
$('playScore');
var play =$('<button>');
play.addClass("playAgain")
play.text("Play");
$('#playScore').append(play);
    }
    $('.playAgain').click(function(){
        game.play = true;
        play.addClass("hidePlay");
        score.addClass("showPlay");
    })


})
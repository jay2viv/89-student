var player1="";
var player2="";

player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
document.getElementById("p1").innerHTML=player1+":";
document.getElementById("p2").innerHTML=player2+":";
document.getElementById("player_question").innerHTML="question turn: "+player1;
document.getElementById("player_answer").innerHTML="answer turn: "+player2;


var p1_score=0;
var p2_score=0;

document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;

question_player="player1";
answer_player="player2";
function send()
{
    word=document.getElementById("word").value.toLowerCase();
    secondsLetter=word.charAt(1);
    replace1=word.replace(secondsLetter,"_");
    lastletter=word.charAt(word.length-1);
    replace2=replace1.replace(lastletter,"_");
    middle=word.charAt(Math.floor(word.length/2))
    replace3=replace2.replace(middle,"_");
    console.log(replace3);
    question_html="<h4 id='word_display'>Q."+replace3+"</h4>";
    input_html="<br>answer:<input type='text' id='answer'>";
    button_html="<br><button onclick='check()' class='btn btn-info'>check </button>";
    document.getElementById("output").innerHTML=question_html+input_html+button_html;
    document.getElementById("word").value="";
}

function check()
{
    answer=document.getElementById("answer").value.toLowerCase();
    if(replace3==answer){
        if(answer_player=="player1")
        {
            p1_score=p1_score + 1;
            document.getElementById("p1_score").innerHTML=p1_score;
        }
        else{
            p2_score=p2_score+1;
            document.getElementById("p2_score").innerHTML=p2_score;
        }

        if(question_player=="player1")
        {
            question_player="player2"
            document.getElementById("player_question").innerHTML="question turn: "+player2;
            document.getElementById("player_answer").innerHTML="answer turn: "+player1;
        }
        else{
            question_player="player1";
            document.getElementById("player_question").innerHTML="question turn: "+player1;
            document.getElementById("player_answer").innerHTML="answer turn: "+player2;
        }

        if(answer_player=="player1")
        {
            answer_player="player2"
            document.getElementById("player_question").innerHTML="question turn: "+player2;
            document.getElementById("player_answer").innerHTML="answer turn: "+player1;
        }
        else{
            answer_player="player1";
            document.getElementById("player_question").innerHTML="question turn: "+player1;
            document.getElementById("player_answer").innerHTML="answer turn: "+player2;
        }
    }
}
var p1="";
var p2="";

function login()
{
    p1=document.getElementById("player_1").value;
    p2=document.getElementById("player_2").value;
    localStorage.setItem("player1",p1);
    localStorage.setItem("player2",p2);
    window.location="game_page.html";
}
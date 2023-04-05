let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let homeScoreBtnOne = document.getElementById("home-score-btn-1")

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")

function decreaseHomeScoreOne(){
    homeScore -= 1
    homeScoreEl.textContent = homeScore
}

let awayScoreEl = document.getElementById("away-score")
let awayScore = 0

let awayScoreBtnOne = document.getElementById("away-score-btn-1")

function increaseAwayScoreOne(){
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

let awayScoreBtnTwo = document.getElementById("away-score-btn-2")

function decreaseAwayScoreOne(){
    awayScore -= 1
    awayScoreEl.textContent = awayScore
}

document.getElementById("resetBtn").onclick =

function(){
    homeScore=0
    homeScoreEl.innerHTML = home-Score
    awayScore=0
    awayScoreEl.innerHTML = awayScore
}

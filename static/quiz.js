    let response=['none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none'];
let currentQuestionIndex = 1;
var display = document.getElementById("timer");
let phytime = 0;
let chetime = 0;
let mattime = 0;
let examtimetaken;
var duration = 3*60*60;
var timer = duration, hours, minutes, seconds;
let intervalId;
let physcore=0;
let chescore=0;
let matscore=0;
let pca=0;
let cca=0;
let mca=0;
let pina=0;
let cina=0;
let mina=0;
let pna=0;
let cna=0;
let mna=0;
let startTim=null;
let endTim=null;


let qns = [
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false}
    ],
    "qImage":"../static/p1-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p2-2.png"
  },
  
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p3-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/p4-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/p5-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/p6-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/p7-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p8-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p9-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p10-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p11-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p12-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/p13-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p14-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p15-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct":true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p16-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":
    "../static/p17-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p18-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p19-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/p20-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "19", "correct": false },
      { "text": "20", "correct": false },
      { "text": "39", "correct": false },
      { "text": "40", "correct": true }
    ],
    "qImage":"../static/p21-40.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "5", "correct": true },
      { "text": "6", "correct": false },
      { "text": "4", "correct": false },
      { "text": "3", "correct": false }
    ],
    "qImage":"../static/p22-5.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "14", "correct": false },
      { "text": "11", "correct": false },
      { "text": "10", "correct": false },
      { "text": "12", "correct": true }
    ],
    "qImage":"../static/p23-12.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "12", "correct": false },
      { "text": "20", "correct": false },
      { "text": "10", "correct": true },
      { "text": "24", "correct": false }
    ],
    "qImage":"../static/p24-10.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": true },
      { "text": "3", "correct": false },
      { "text": "4", "correct": false }
    ],
    "qImage":"../static/p25-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c2-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c3-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c4-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c5-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c6-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c7-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c8-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/c9-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/c10-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c11-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c12-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c13-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c14-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/c15-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct":false  },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/c16-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c17-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c18-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c19-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/c20-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "20", "correct": false },
      { "text": "10", "correct": true },
      { "text": "50", "correct": false },
      { "text": "70", "correct": false }
    ],
    "qImage":"../static/c21-10.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "180", "correct": true },
      { "text": "352", "correct": false },
      { "text": "360", "correct": false },
      { "text": "90", "correct": false }
    ],
    "qImage":"../static/c22-180.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "91", "correct": false },
      { "text": "52", "correct": false },
      { "text": "34", "correct": false },
      { "text": "493", "correct": true }
    ],
    "qImage":"../static/c23-492.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "3.", "correct": true },
      { "text": "2", "correct": false },
      { "text": "5", "correct": false },
      { "text": "8", "correct": false }
    ],
    "qImage":"../static/c24-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "917", "correct": true },
      { "text": "862", "correct": false },
      { "text": "673", "correct": false },
      { "text": "744", "correct": false }
    ],
    "qImage":"../static/c25-917.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m1-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m2-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m3-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m4-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m5-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m6-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m7-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m8-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/m9-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m10-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m11-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m12-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": true },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m13-3.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m14-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m15-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/m16-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": true },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m17-1.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "C", "correct": false },
      { "text": "D", "correct": false }
    ],
    "qImage":"../static/m18-2.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/m19-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": false },
      { "text": "C", "correct": false },
      { "text": "D", "correct": true }
    ],
    "qImage":"../static/m20-4.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "118", "correct": true },
      { "text": "120", "correct": false },
      { "text": "113", "correct": false },
      { "text": "124", "correct": false }
    ],
    "qImage":"../static/m21-118.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "1011", "correct": false },
      { "text": "1012", "correct": true },
      { "text": "1013", "correct": false },
      { "text": "1014", "correct": false }
    ],
    "qImage":"../static/m22-1012.png"
  },
  {
    "question": "",
     "time": 0,
    "answers": [
      { "text": "21", "correct": false },
      { "text": "22", "correct": true },
      { "text": "32", "correct": false },
      { "text": "24", "correct": false }
    ],
    "qImage":"../static/m23-22.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "60", "correct": true },
      { "text": "20", "correct": false },
      { "text": "32", "correct": false },
      { "text": "64", "correct": false }
    ],
    "qImage":"../static/m24-60.png"
  },
  {
    "question": "",
     "time":0,
    "answers": [
      { "text": "5", "correct": true },
      { "text": "6", "correct": false },
      { "text": "8", "correct": false },
      { "text": "4", "correct": false }
    ],
    "qImage":"../static/m25-5.png"
  },
];

function start() {
  startTim = new Date();
}

function stop() {
  endTim = new Date();
  const timeTaken = Math.floor((endTim - startTim)/1000); // Time in milliseconds
  qns[currentQuestionIndex-1].time+=timeTaken;
  startTim=null;
}





function startTimer(duration, display) {
    intervalId = setInterval(function () {
      var qarea=document.getElementById("quiz-container");
    var paneld = document.getElementById("panel-container");
    var disptable=document.getElementById("quesresptab");
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;
  
      // Display the timer in the specified format (adjust as needed)
      display.textContent = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  
      if (--timer < -1) {  
        // Timer expired, hide the timer div
        alert("Timer expired! Hiding the timer.");
        clearInterval(intervalId); // Stop the timer
        display.style.display = "none";
        qarea.style.display = "none";
        paneld.style.display="none";
        disptable.style.display="block";
        document.body.style.backgroundColor='white';
        call()// Hide the timer div
        
        
      }
    },1000);
    theme();   
    qa();
  };
function qa() {
  
  var display = document.getElementById("timer");
  var qarea=document.getElementById("quiz-container");
  var paneld = document.getElementById("panel-container");
  var disptable=document.getElementById("quesresptab");
  var bef=document.getElementById('before');
  let quizContainer = document.getElementById("quiz-container");
  
  
  function showQuestion() {
    start();
    quizContainer.innerHTML = "";

    let questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    questionContainer.innerHTML = '<span style="font-family: Arial; background-color: lightgreen;"><u>Question </u></span>' +
    '<span style="background-color: lightgreen;"><u>' + (currentQuestionIndex) + '</u></span><br>' + qns[currentQuestionIndex-1].question;

    let optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    qns[currentQuestionIndex-1].answers.forEach((answer,index) => {
      let optionButton = document.createElement("button");
      if (response[currentQuestionIndex-1] == answer['text']){
        optionButton.style.backgroundColor='green';
      }
      optionButton.className = "option-button";
      optionButton.innerHTML = `${index + 1}) ${answer.text}`;  
      optionButton.style.marginBottom='20px';
      optionButton.onclick = function () {
        response[currentQuestionIndex-1] = answer['text'];
        document.querySelectorAll(".option-button").forEach((btn) => {
          btn.classList.remove("selected");
          btn.style.backgroundColor = '';
        });
        response[currentQuestionIndex-1] = answer.text;
        optionButton.classList.add("selected");
      };
      
      
      optionsContainer.appendChild(optionButton);
    });
    let optionImage = document.createElement("img");
    optionImage.src =qns[currentQuestionIndex-1].qImage;
    optionImage.className = "option-image";
    questionContainer.appendChild(optionImage);


    let navigationButtons = document.createElement("div");
    navigationButtons.className = "navigation-buttons";

    let prevButton = document.createElement("button");
  prevButton.style.marginLeft='2%';
  prevButton.innerHTML = "Previous"; 
  prevButton.onclick = function () {
      if (currentQuestionIndex > 1) {
          // Remove active class from the current question number button
          let currentActiveButton = document.querySelector('.active');
          if (currentActiveButton) {
              currentActiveButton.classList.remove('active');
          }
          stop();
          currentQuestionIndex--;
          showQuestion();
          console.log(currentQuestionIndex);
          // Add active class to the new question number button
          let activeQuestionButton = document.querySelector(`#panel-container button:nth-child(${currentQuestionIndex })`);
          if (activeQuestionButton) {
              activeQuestionButton.classList.add('active');
          }
      }
  };
  navigationButtons.appendChild(prevButton);


    let nextButton = document.createElement("button");
    nextButton.style.marginLeft='3%';
    nextButton.innerHTML = "Next";
    nextButton.onclick = function () {
      console.log(currentQuestionIndex);
      if (currentQuestionIndex < qns.length) {
        // Remove active class from the current question number button
        let currentActiveButton = document.querySelector('.active');
            if (currentActiveButton) {
                currentActiveButton.classList.remove('active');
            }
            stop();
            currentQuestionIndex++;
            showQuestion();

            // Add active class to the new question number button
            let activeQuestionButton = document.querySelector(`#panel-container button:nth-child(${currentQuestionIndex})`);

            if (activeQuestionButton) {
                activeQuestionButton.classList.add('active');
            }
        }
    };
    navigationButtons.appendChild(nextButton);
    

    let clearButton = document.createElement("button");
    clearButton.style.marginLeft='3%';
    clearButton.innerHTML = "Clear";
    clearButton.onclick = function () {
      response[currentQuestionIndex-1]='none';
      }
  
    navigationButtons.appendChild(clearButton);


    let submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.style.marginLeft='600px';
    submitButton.style.fontSize='16px';
    submitButton.onclick = function () {
     
      let userResponse = window.confirm("Do you want to proceed?");
      if (userResponse){
        if (startTim!='null'){
        stop();
      }
      timecalc();
      if (examtimetaken<1){
        let askq=window.confirm("YOU WON'T BE ABLE TO SEE ANALYSIS IF YOU LEAVE TEST BEFORE 30 MINS")
        if (askq) {
        
          
         clearInterval(intervalId);
          display.style.display = "none";
          qarea.style.display = "none";
          paneld.style.display='none';
          bef.style.display='block';
          document.body.style.backgroundColor='white';
          
       }
       else {
        // Restart your start function or perform any other action
        start();
    }
      }
      else {
        // Restart your start function or perform any other action
        display.style.display = "none";
          qarea.style.display = "none";
          paneld.style.display='none';
          disptable.style.display="block";
          document.body.style.backgroundColor='white';
        call();
        
    }
      

      }
     
      
      
    };
    navigationButtons.appendChild(submitButton);


    quizContainer.appendChild(questionContainer);
    quizContainer.appendChild(optionsContainer);
    quizContainer.appendChild(navigationButtons);

    
  }
  // CSS Class for Active Question Number
let style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.active { background-color: blue; }';
document.getElementsByTagName('head')[0].appendChild(style);

function qpanel() {
 let panel = document.getElementById("panel-container");
 let activeQuestionNumber = document.querySelector('.active'); // Get the currently active question number

 for (let i = 1; i < 76; i++) {
    let gButton = document.createElement("button");
    gButton.innerText = i;
    gButton.style.width = '40px';
    gButton.style.height = '30px';
    gButton.style.marginTop = '5px';
    gButton.style.marginBottom = '5px';
    gButton.style.marginLeft = '12px';
    panel.appendChild(gButton);
    gButton.onclick = function () {
      let currentActiveButton = document.querySelector('.active');
      if (currentActiveButton) {
        currentActiveButton.classList.remove('active');
      }
      stop();
      
      currentQuestionIndex = i ;
      showQuestion();
      console.log(currentQuestionIndex);
      activeQuestionNumber = gButton; // Update the active question number
      gButton.classList.add('active'); // Add active class to the current button
    }
    if (i % 6 == 0) {
      panel.appendChild(document.createElement("br"));
    }
 }
}
qpanel();
  
  showQuestion();
  console.log(response)
}

function theme(){
  let quizContainer = document.getElementById("quiz-container");
  let darkButton = document.createElement("button");
  darkButton.className = "dark-button";
  darkButton.style.marginLeft='8%';
  darkButton.style.backgroundColor='black';
  darkButton.style.color='white';
  darkButton.innerHTML = "Dark-Mode"; 
  darkButton.onclick = function () {
  document.body.style.backgroundColor='rgba(0, 0, 0, 0.862)';
  quizContainer.style.color='white';
  let reuslttab = document.getElementById('quesresptab');
  reuslttab.style.color='white';
  let tabletab = document.getElementById('myTable');
  tabletab.style.color='white';
  tabletab.style.backgroundColor='black';
  }
  document.getElementById("db").appendChild(darkButton);
  

  let lightButton = document.createElement("button");
  lightButton.className = "dark-button";
  lightButton.style.marginLeft='2%';
  lightButton.style.backgroundColor='white';
  lightButton.style.color='black';
  lightButton.innerHTML = "Light-mode"; 
  lightButton.onclick = function () {
  document.body.style.backgroundColor='white';
  quizContainer.style.color='black';
  let reuslttab = document.getElementById('quesresptab');
  reuslttab.style.color='black';
  let tabletab = document.getElementById('myTable');
  tabletab.style.color='black';
  tabletab.style.backgroundColor='white';
  }
  document.getElementById("db").appendChild(lightButton); 
}
function call(){
  console.log(qns[0].time,currentQuestionIndex);
  console.log(examtimetaken);
  creatingcorrectanswerlist();
  phy();
  che();
  mat();
  subpie('physubpie',pca,pina,pna);
  subpie('chesubpie',cca,cina,cna);
  subpie('matsubpie',mca,mina,mna);  
  countingscore();
  scorepie();
  timetablecration('phytimetable');
  timetablecration('chetimetable');
  timetablecration('mattimetable');
  
  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

  for (var i = 0; i < response.length; i++) {
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
    var questionImage = document.createElement("img");
    questionImage.src = qns[i].qImage; // Replace with the path to your question image
    questionImage.alt = "Question Image";
    questionImage.className = "question-imagetable";
    cell1.appendChild(questionImage);
    cell1.innerHTML += '<br>';
      cell1.innerHTML += qns[i].question;
      cell2.innerHTML = response[i];
      cell3.innerHTML = ans[i];
      if (response[i]!=ans[i] && response[i]!='none'){
        row.style.backgroundColor='pink';
      }
      else if(response[i]=='none'){
        row.style.backgroundColor='lightgrey';
      }
      if (response[i]==ans[i] && response[i]!='none'){
        cell4.innerHTML = 4;
      }
      else if (response[i]!=ans[i] && response[i]!='none'){
        cell4.innerHTML = -0.25;
      }
      else{
        cell4.innerHTML =0;   
      }
  }
}







let ans=[]
function creatingcorrectanswerlist(){
  for (let i = 0; i < qns.length; i++) {
    let answers = qns[i].answers;
    for (let j = 0; j < answers.length; j++) {
      if (answers[j].correct) {
        ans.push(answers[j].text);
      }
    }
  }
}
console.log(response);
console.log(ans);
let score=0;
let ca=0;
let cin=0;
let na=0;
function countingscore(){
  for(let i=0;i<ans.length;i++){
    if (response[i]==ans[i] && response[i]!='none'){
      score=score+4;
      ca+=1;
    }
    else if (response[i]!=ans[i] && response[i]!='none'){
      score-=0.25;
      cin+=1;
    }
    else{
      score+=0
      na+=1;    
    }
  }
  let scdi = document.getElementById('score');
  scdi.innerHTML = '<span style="font-size:32px;font-weight:bold">Score : </span>' + '<b>'+score+'</b>';
  scdi.innerHTML += '<span style="font-size:24;background-color:blue;color:blue;width:4px; margin-left: 254px;">__ </span>';
  scdi.innerHTML += '<span style="font-size:24; margin-left:20px;">ANSWERED : </span>' + (ca+cin);
  scdi.innerHTML += '<span style="font-size:24;background-color:green;color:green;width:4px; margin-left: 50px;">__ </span>';
  scdi.innerHTML += '<span style="font-size:24px; margin-left: 20px;">CORRECT : </span>' + ca;
  scdi.innerHTML += '<span style="font-size:24;background-color:red;color:red;width:4px; margin-left: 50px;">__ </span>';
  scdi.innerHTML += '<span style="font-size:24;=40px; margin-left:20px;">INCORRECT : </span>' + cin;
  scdi.innerHTML += '<span style="font-size:24;background-color:grey;color:grey;width:4px; margin-left: 50px;">__ </span>';
  scdi.innerHTML += '<span style="font-size:24;=40px; margin-left:20px;">NOT ANSWERED :</span>' + na;
  
}

function phy(){
  for (let p=1;p<26;p++){
    if (response[p-1]==ans[p-1] && response[p-1]!='none'){
        physcore+=4;
        pca+=1;
    }
    else if (response[p-1]!=ans[p-1] && response[p-1]!='none'){
      physcore-=0.25;
      pina+=1;
  }
  else{
    physcore+=0;
    pna+=1;
  }
  }
  let pcdi = document.getElementById('phy-score');
pcdi.innerHTML = '<span style="font-size:30px;font-weight:bold">Phy-Score : </span>' + '<b>'+physcore+'</b>';
pcdi.innerHTML += '<span style="font-size:24;background-color:blue;color:blue;width:4px; margin-left: 200px;">__ </span>';
pcdi.innerHTML += '<span style="font-size:24; margin-left:20px;">ANSWERED : </span>' + (pca+pina);
pcdi.innerHTML += '<span style="font-size:24;background-color:green;color:green;width:4px; margin-left: 50px;">__ </span>';
pcdi.innerHTML += '<span style="font-size:24px; margin-left: 20px;">CORRECT : </span>' + pca;
pcdi.innerHTML += '<span style="font-size:24;background-color:red;color:red;width:4px; margin-left: 50px;">__ </span>';
pcdi.innerHTML += '<span style="font-size:24;=40px; margin-left:20px;">INCORRECT : </span>' + pina;
pcdi.innerHTML += '<span style="font-size:24;background-color:grey;color:grey;width:4px; margin-left: 50px;">__ </span>';
pcdi.innerHTML += '<span style="font-size:24;=40px; margin-left:20px;">NOT ANSWERED :</span>' + pna;
}
function che(){
  for (let c=26;c<51;c++){
    if (response[c-1]==ans[c-1] && response[c-1]!='none'){
        chescore+=4;
        cca+=1;
    }
    else if (response[c-1]!=ans[c-1] && response[c-1]!='none'){
      chescore-=0.25;
      cina+=1;
  }
  else{
    chescore+=0;
    cna+=1;
  }
  }
  let ccdi = document.getElementById('che-score');
ccdi.innerHTML = '<span style="font-size:30px;font-weight:bold">Che-Score : </span>' + '<b>'+chescore+'</b>';
ccdi.innerHTML += '<span style="font-size:24;background-color:blue;color:blue;width:4px; margin-left: 200px;">__ </span>';
ccdi.innerHTML += '<span style="font-size:24; margin-left:20px;">ANSWERED : </span>' + (cca+cina);
ccdi.innerHTML += '<span style="font-size:24;background-color:green;color:green;width:4px; margin-left: 50px;">__ </span>';
ccdi.innerHTML += '<span style="font-size:24px; margin-left: 20px;">CORRECT : </span>' + ca;
ccdi.innerHTML += '<span style="font-size:24;background-color:red;color:red;width:4px; margin-left: 50px;">__ </span>';
ccdi.innerHTML += '<span style="font-size:24;=40px; margin-left:20px;">INCORRECT : </span>' + cina;
ccdi.innerHTML += '<span style="font-size:24;background-color:grey;color:grey;width:4px; margin-left: 50px;">__ </span>';
ccdi.innerHTML += '<span style="font-size:24;=40px; margin-left:20px;">NOT ANSWERED :</span>' + cna;
}
function mat(){
  for (let m=51;m<76;m++){
    if (response[m-1]==ans[m-1] && response[m-1]!='none'){
        matscore+=4;
        mca+=1;
    }
    else if (response[m-1]!=ans[m-1] && response[m-1]!='none'){
      matscore-=0.25;
      mina+=1;
  }
  else{
    matscore+=0;
    mna+=1;
  }
  }
  let mcdi = document.getElementById('mat-score');
mcdi.innerHTML = '<span style="font-size:30px;font-weight:bold">Mat-Score : </span>' + '<b>'+matscore+'</b>';
mcdi.innerHTML += '<span style="font-size:24;background-color:blue;color:blue;width:4px; margin-left: 200px;">__ </span>';
mcdi.innerHTML += '<span style="font-size:24; margin-left:20px;">ANSWERED : </span>' + (mca+mina);
mcdi.innerHTML += '<span style="font-size:24;background-color:green;color:green;width:4px; margin-left: 50px;">__ </span>';
mcdi.innerHTML += '<span style="font-size:24px; margin-left: 20px;">CORRECT : </span>' + mca;
mcdi.innerHTML += '<span style="font-size:24;background-color:red;color:red;width:4px; margin-left: 50px;">__ </span>';
mcdi.innerHTML += '<span style="font-size:24;=40px; margin-left:20px;">INCORRECT : </span>' + mina;
mcdi.innerHTML += '<span style="font-size:24;background-color:grey;color:grey;width:4px; margin-left: 50px;">__ </span>';
mcdi.innerHTML += '<span style="font-size:24;=40px; margin-left:20px;">NOT ANSWERED :</span>' + mna;

}

function scorepie() {
  var data = {
    labels: ['PHYSICS', 'CHEMISTRY', 'MATHS'],
    datasets: [{
      data: [physcore, chescore, matscore],
      backgroundColor: ['red', 'green', 'blue'], 
      hoverOffset: 20, 
    }]
  };
  var options = {
    responsive: false, 
    maintainAspectRatio: false,
    aspectRatio: 1, 
  };


  var ctx = document.getElementById('myPieChart').getContext('2d');

  // Create the pie chart
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
  });
}


function toggleDiv() {
  var div = document.getElementById('qandres');
  var hid= document.getElementById('quesresptab')
  hid.style.display='none';
  div.style.display='block';
  let backdiv = document.createElement("div");
  let backButton1 = document.createElement("button");
  backButton1.style.backgroundColor='lightgreen';
  backButton1.style.Color='white';
  backButton1.style.fontWeight='bolder';
  backButton1.innerText='BACK';
  backButton1.style.position='fixed';
  backButton1.style.top='13%';
  backButton1.style.width='100px';
  backButton1.style.height='40px';
  backButton1.onclick=function(){
    hid.style.display='block';
    div.style.display='none';
    backdiv.style.display='none';
  }
  

backdiv.appendChild(backButton1);
document.body.appendChild(backdiv);
}
function timecalc(){
  let time_space=document.getElementById('timereport');
  var table2 = document.getElementById("timetable").getElementsByTagName('tbody')[0];

  for (let y=0;y<75;y++){
    if(y<25){
      phytime+=qns[y].time;
    }
    else if(y<51){
      chetime+=qns[y].time;
    }
    else if(y<75){
      mattime+=qns[y].time;
    }
  }

  examtimetaken=phytime+chetime+mattime;


  for (var i = 0; i < 1; i++) {
    var row = table2.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML =examtimetaken;
    cell2.innerHTML = phytime;
    cell3.innerHTML = chetime;
    cell4.innerHTML = mattime;
  }

}
function time1(){
  var div = document.getElementById('quesresptab');
  var hid= document.getElementById('timereport')
  hid.style.display='block';
  div.style.display='none';
  let backdiv = document.createElement("div");
  let backButton1 = document.createElement("button");
  backButton1.style.backgroundColor='lightgreen';
  backButton1.style.Color='white';
  backButton1.style.fontWeight='bolder';
  backButton1.innerText='BACK';
  backButton1.style.position='fixed';
  backButton1.style.top='15%';
  backButton1.style.width='100px';
  backButton1.style.height='40px';
  backButton1.onclick=function(){
    hid.style.display='none';
    div.style.display='block';
    backdiv.style.display='none';
  }
  

backdiv.appendChild(backButton1);
document.body.appendChild(backdiv);

var data = {
  labels: ['PHYSICS', 'CHEMISTRY', 'MATHS'],
  datasets: [{
    data: [phytime, chetime, mattime],
    backgroundColor: ['red', 'green', 'blue'], 
    hoverOffset: 20, 
  }]
};
var options = {
  responsive: false, 
  maintainAspectRatio: false,
  aspectRatio: 1, 
};


var ctx = document.getElementById('timepie').getContext('2d');

// Create the pie chart
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});
}

function timetablecration(tableid){
  var table = document.getElementById(tableid).getElementsByTagName('tbody')[0];
  table.style.marginLeft='12px';
  if(tableid=='phytimetable'){
    for (var i = 0; i < 25; i++) {
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var questionImage = document.createElement("img");
      questionImage.src = qns[i].qImage; // Replace with the path to your question image
      questionImage.alt = "Question Image";
      questionImage.className = "question-imagetable";
      cell1.appendChild(questionImage);
      cell2.innerHTML =qns[i].time;
    }
  }
  else if(tableid=='chetimetable'){
    for (var i = 25; i < 50; i++) {
      var row = table.insertRow(i-25);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var questionImage = document.createElement("img");
      questionImage.src = qns[i].qImage; // Replace with the path to your question image
      questionImage.alt = "Question Image";
      questionImage.className = "question-imagetable";
      cell1.appendChild(questionImage);
      cell2.innerHTML =qns[i].time;
    }
  }
  else{
    for (var i = 50; i < 75; i++) {
      var row = table.insertRow(i-50);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var questionImage = document.createElement("img");
      questionImage.src = qns[i].qImage; // Replace with the path to your question image
      questionImage.alt = "Question Image";
      questionImage.className = "question-imagetable";
      cell1.appendChild(questionImage);
      cell2.innerHTML =qns[i].time;
    }
  }
  
}


function timedisp(x){
  var div = document.getElementById(x);
  var hid= document.getElementById('timereport')
  hid.style.display='none';
  div.style.display='block';
  let backdiv = document.createElement("div");
  let backButton1 = document.createElement("button");
  backButton1.style.backgroundColor='lightgreen';
  backButton1.style.Color='white';
  backButton1.style.fontWeight='bolder';
  backButton1.innerText='BACK';
  backButton1.style.position='fixed';
  backButton1.style.top='15%';
  backButton1.style.width='100px';
  backButton1.style.height='40px';
  backButton1.onclick=function(){
    hid.style.display='block';
    div.style.display='none';
    backdiv.style.display='none';
  }
  

backdiv.appendChild(backButton1);
document.body.appendChild(backdiv);
}
function subpie(w,x,y,z){
  var data = {
    labels: ['CORRECT', 'INCORRECT', 'NOT ANSWERED'],
    datasets: [{
      data: [x, y, z],
      backgroundColor: ['green', 'red', 'grey'], 
      hoverOffset: 20, 
    }]
  };
  var options = {
    responsive: false, 
    maintainAspectRatio: false,
    aspectRatio: 1, 
  };
  
  
  var ctx = document.getElementById(w).getContext('2d');
  
  // Create the pie chart
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
  });
  }
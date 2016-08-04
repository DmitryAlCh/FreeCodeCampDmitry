function startUp(){
//******************************* JSON part **********************************
  var SimonGame={
    "interface":{},
    "rules":{},
    "user":{},
    "sounds":{}
  };
  SimonGame.interface={
    "yButtonId":"YellowButton",
    "yBackLight":"YellowLight",
    "yColor":"orange",
    "ySound": "Yellow_250Hz.wav",
    "gButtonId":"GreenButton",
    "gBackLight":"GreenLight",
    "gColor":"#44aa00",
    "gSound":"Green_415Hz.wav",
    "bButtonId":"BlueButton",
    "bBacklight":"BlueLight",
    "bColor":"#0000d4",
    "bSound":"Blue_209Hz.wav",
    "rButtonId":"RedButton",
    "rBackLight":"RedLight",
    "rColor":"#d40000",
    "rSound":"Red_310Hz.wav",
    "pButtonId":"PurpleButton",
    "pBackLight":"PurpleLight",
    "pColor":"#800080",
    "pSound":"Purple_62Jz.wav",


    //red and purple buttons to go.
  };
  SimonGame.rules={
    "sequence":[
      SimonGame.interface.yButtonId,
      SimonGame.interface.gButtonId,
      SimonGame.interface.yButtonId,
      SimonGame.interface.gButtonId,
    ],
  };
  SimonGame.user={"sequence":
  [],
  "currentPosition":0,
  "currentPlayback":false,
};
//**********************     Iterface part   ********************************
  var yButton=document.getElementById(SimonGame.interface.yButtonId);
  var yBackLight=document.getElementById(SimonGame.interface.yBackLight);
  var yAudio= new Audio(SimonGame.interface.ySound);

  var gButton=document.getElementById(SimonGame.interface.gButtonId);
  var gBackLight=document.getElementById(SimonGame.interface.gBackLight);
  var gAudio=new Audio(SimonGame.interface.gSound);

  var bButton=document.getElementById(SimonGame.interface.bButtonId);
  var bBackLight=document.getElementById(SimonGame.interface.bBacklight);
  var bAudio=new Audio(SimonGame.interface.bSound);

  var rButton=document.getElementById(SimonGame.interface.rButtonId);
  var rBackLight=document.getElementById(SimonGame.interface.rBackLight);
  var rAudio=new Audio(SimonGame.interface.rSound);

  var pButton=document.getElementById(SimonGame.interface.pButtonId);
  var pBackLight=document.getElementById(SimonGame.interface.pBackLight);
  var pAudio=new Audio(SimonGame.interface.pSound);


  yButton.addEventListener("click",function(){
    animateButton(SimonGame.interface.yButtonId);
    readSequence(SimonGame.interface.yButtonId);
  });

  gButton.addEventListener("click",function(){
    animateButton(SimonGame.interface.gButtonId);
    readSequence(SimonGame.interface.gButtonId);
  });

  bButton.addEventListener("click",function(){
    animateButton(SimonGame.interface.bButtonId);
    readSequence(SimonGame.interface.bButtonId);
  });

  rButton.addEventListener("click",function(){
    animateButton(SimonGame.interface.rButtonId);
    readSequence(SimonGame.interface.rButtonId);
  });

  pButton.addEventListener("click",function(){
    animateButton(SimonGame.interface.pButtonId);

    //readSequence(SimonGame.interface.rButtonId);
  });

//*********************       Logic part     *****************************
  function animateButton(whichButton){
    if (SimonGame.user.currentPlayback===false){
      setBackLight(whichButton);
      playSound(whichButton);
      setTimeout(function(){
        returnBackLight(whichButton);
      },1800);
    }
  }
  function playSound(whichButton){

    switch (whichButton){
      case SimonGame.interface.yButtonId:
        yAudio.play();
      break;
      case SimonGame.interface.gButtonId:
        gAudio.play();
      break;
      case SimonGame.interface.bButtonId:
        bAudio.play();
      break;
      case SimonGame.interface.rButtonId:
        rAudio.play();
      break;
      case SimonGame.interface.pButtonId:
        pAudio.play();
    }
  }
  function setBackLight(whichButton){
    SimonGame.user.currentPlayback=true;
    switch (whichButton){
      case SimonGame.interface.yButtonId:
        yBackLight.style="fill:"+SimonGame.interface.yColor+";filter:url(#filter4307)";
      break;
      case SimonGame.interface.gButtonId:
        gBackLight.style="fill:"+SimonGame.interface.gColor+";filter:url(#filter4307)";
      break;
      case SimonGame.interface.bButtonId:
        bBackLight.style="fill:"+SimonGame.interface.bColor+";filter:url(#filter4307)";
      break;
      case SimonGame.interface.rButtonId:
        rBackLight.style="fill:"+SimonGame.interface.rColor+";filter:url(#filter4307)";
      break;
      case SimonGame.interface.pButtonId:
        pBackLight.style="fill:"+SimonGame.interface.pColor+";filter:url(#filter4307)";
      break;
    }
  }
  function returnBackLight(whichButton){
    SimonGame.user.currentPlayback=false;
    switch (whichButton){
    case SimonGame.interface.yButtonId:
      yBackLight.style="black";

    break;
    case SimonGame.interface.gButtonId:
      gBackLight.style="black";
    break;
    case SimonGame.interface.bButtonId:
      bBackLight.style="black";
    break;
    case SimonGame.interface.rButtonId:
      rBackLight.style="black";
    break;
    case SimonGame.interface.pButtonId:
      pBackLight.style="black";
      //start the game here;
      startGame();
    break;
    }
  }
  function playSequence(playMargin){
    //console.log("playSequnce called");
    var i=0;
    var locTimer=setInterval(function(){
      animateButton(SimonGame.rules.sequence[i]);
      i++;
      if (i>playMargin){
        clearInterval(locTimer);
      }
    },2300);
  }

  function readSequence(whichButton){
    SimonGame.user.sequence.push(whichButton);
    //if (SimonGame.user.currentPlayback===false){
      if(compareSequences()){
        console.log("sequence is correct");
        SimonGame.user.currentPosition++;
        startGame();
      } else{
      //here we stop game.
        console.log("sequence is inCorrect");
      }
    //}
  }

  function compareSequences(){
    for (var j=0;j<SimonGame.user.sequence.length;j++){
      if(SimonGame.user.sequence[j]!==SimonGame.rules.sequence[j]){
        console.log("false");
        return false;
      }
    }
    console.log("true");
    return true;
  }

//console.log(SimonGame);
//console.log(rBackLight);
//console.log(yBackLight);

function startGame(){
    playSequence(SimonGame.user.currentPosition);
  }

}

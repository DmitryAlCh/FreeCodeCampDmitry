window.onload=function(){
	//getting button Elements to local variables.
	var myCalc=new CalcLookup();
	var lcd=myCalc.getLcd();
	var bOne=myCalc.getBuOne();
	var bTwo=myCalc.getBuTwo();
	var bCe=myCalc.getBuCe();
	//clearing lcd display;
	myCalc.resetLcdVal();
	
	
	//adding click event listeners to buttons
	//using anonym. function to call myFunction and pass arguments
	bOne.addEventListener("click",function(){clickEventHandler(myCalc,"1",true)});
	bTwo.addEventListener("click",function(){clickEventHandler(myCalc,"2",true)});
	bCe.addEventListener("click",function(){clickEventHandler(myCalc, "CE",false)});
	
};
function clickEventHandler(myCalc,val,isNumber){
	if (isNumber){
		switch (val){
			case "1":
				myCalc.startVal+="1";
				console.log("switch case result 1");
				break;
			case "2":
				console.log("switch case result 2");
				break;
			default:
				console.log("default action");
				break;
		}
		
	} else{
		console.log("functional button pressed");
	}
	
}
function formLcdStr(digit){
	return (digit+digit);
}
var CalcLookup=function() {
	this.startVal="0";
	this.arg1="0";
	this.arg2="";
	this.result="";
	//button IDs
	this.bOne="one";
	this.getBuOne = function(){
		return document.getElementById(this.bOne);
	}
	
	this.bTwo="two";
	this.getBuTwo = function (){
		return document.getElementById(this.bTwo);
	}
	
	this.bThree="three";
	this.getBuThree = function(){
		return document.getElementById(this.bThree);
	}
	this.bCe="ce";
	this.getBuCe=function(){
		return document.getElementById(this.bCe);
	}
	this.lcd="lcd";
	this.getLcd=function(){
		return document.getElementById(this.lcd);
	}
	this.bFour=document.getElementById("four");
	this.bFour.addEventListener("click",function(){console.log("button 4 pressed");})
	
	this.resetLcdVal=function(){
		document.getElementById(this.lcd).innerHTML=this.startVal;
	}
	this.myFun=function(val){
		
	}
	
	
}
/*CalcLookup.prototype.getBuTwo=function(){
	return document.getElementById(this.bTwo);
}*/
function resetCalc(myCalc){
	lcd.innerHTML=myCalc.startVal;
	console.log(myCalc.startVal);
	
}




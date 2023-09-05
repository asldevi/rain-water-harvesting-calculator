//This is the muscle of the rainwater storage calculator
//var area = document.getElementById("area").value;
//document.getElementById("Effective Roof area").innerHTML=area*.9;

//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php
//This calculates effective area, will probably not be a part of final code

var effarea=0;
function eff(){
  num1=document.getElementById("area").value
  num2=document.getElementById("Efficiency").value
  effarea=num1*num2
  document.getElementById("Effective Roof area").innerHTML=num1*num2;
}

//https://jsfiddle.net/1ou7nqjy/2/
//Very important, puts in numbers for different roof types
function rooftoeff(type) {
    document.getElementById("Efficiency").value = type.target.value
}


//https://stackoverflow.com/questions/5656392/how-to-create-input-type-text-dynamically#:~:text=createElement%20and%20setAttribute%20.-,var%20input%20%3D%20document.,to%20the%20desired%20parent%20element.
//This has all of the drop downs for different populations and demands
function moreoptions(){
  var num=document.getElementById("pop#").value;
  var finalParagraph = document.createElement("P");
  document.getElementById('hiddenButton').style.backgroundColor='#FCFCFC';
  document.getElementById('hiddenButton').style.border='1px solid #000';
  document.getElementById('hiddenButton').style.borderRadius='5px'
  //var button=document.createElement("BUTTON");
//  button.type="button";
//  button.innerHTML="Find the daily water demand of populations";
  for(var i=0;i<num;i++) {
    var pop1=document.createElement("input");
    var demand1=document.createElement("input");
    var sum1=document.createElement("input");
    var paragraph1 = document.createElement("P")
    var paragraph2 = document.createElement("P")
    var paragraph3 = document.createElement("P")
    var popnum=i+1;
    demand1.id="dem"+popnum;
    pop1.id="pop"+popnum;
    sum1.id="sum"+popnum;
    pop1.type="number";
    pop1.value="";
    pop1.placeholder="# of people"
    //  pop1.onblur=dailydem();
    demand1.placeholder="Liters";
    demand1.type="number";
    demand1.value="";
    //  demand1.onblur=dailydem();
    sum1.placeholder="leave blank"
    sum1.type="number";
    sum1.value="";
    paragraph1.innerHTML = "Population "+popnum+":";
    paragraph2.innerHTML = "Daily Water Demand of Per caital "+popnum+" in Liters:";
    paragraph3.innerHTML = "Press button to caclulate Total Water Demand (L/D) Population "+popnum+":";
    document.getElementById("new pop").appendChild(paragraph1);
    document.getElementById("new pop").appendChild(pop1);
    document.getElementById("new pop").appendChild(paragraph2);
    document.getElementById("new pop").appendChild(demand1);
    document.getElementById("new pop").appendChild(paragraph3);
    document.getElementById("new pop").appendChild(sum1);
    //document.getElementById("new pop").appendChild(linkbreak)
    //document.getElementById("new pop text").innerHTML="Population "+popnum:;
    //function m(){
    //  num1=document.getElementById("pop1").value
    //  num2=document.getElementById("dem1").value
  //   document.getElementById("sum1").innerHTML=num1*num2;
  //  }
  //  demand1.oninput=m()
  //  pop1.oninput=m()
  }
  document.getElementById("new pop").appendChild(finalParagraph);
  //document.getElementById("new pop").appendChild(button);
//  button.onClick = dailydem();
}

//This is mainly a tester, not super important
if(!document.getElementById("pop1")) {
  document.getElementById("pop#").value=0;
}

//This is important, it calculates the Total water demand
var sums=[]
var totsum=0
function dailydem(){
   var num=document.getElementById("pop#").value;
   for(var i=0;i<num;i++) {
     var turn=i+1
     pop="pop"+turn
     dem="dem"+turn
     sum="sum"+turn
     num1=document.getElementById(pop).value;
     num2=document.getElementById(dem).value;
     document.getElementById(sum).value=num1*num2;
     sums.push(document.getElementById(sum).value)
};
    //https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
    for(var i=0;i<num;i++){
      totsum+=parseFloat(sums[i])
    }
};

  //document.getElementById("pop1").oninput=m();
//  document.getElementById("dem1").oninput=m();
// }

//This function will help create the array
function createarray(start,end,step){
  start = parseFloat(start);
  end = parseFloat(end);
  step = parseFloat(step);
  if(step<=0){
    step=1;
    var array=[];
    for(var i=start;i<=end;i+=step){
    array.push(i);
  }
  array.push(end);
  if(array[array.length-1]==array[array.length-2]){
    array.pop();
  }
  return array;
  }
  else{
    var array=[];
    for(var i=start;i<=end;i+=step){
    array.push(i);
  }
  array.push(end);
  if(array[array.length-1]==array[array.length-2]){
    array.pop();
  }
  return array;
};
};

var sizeRange=[]
var x=0
var y=0
var z=0
//storage array created and saved
function storagesizeoptions(){
  x=document.getElementById("minstr").value;
  y=document.getElementById("maxstr").value;
  z=document.getElementById("step").value;
  sizeRange=createarray(x,y,z);
}

//this function undo's the boxes created by the box
function undo(){
  document.getElementById('new pop').innerHTML=""
  document.getElementById('hiddenButton').style.backgroundColor='transparent';
}

//reading an excel file
//https://www.aspsnippets.com/Articles/Read-Parse-Excel-File-XLS-and-XLSX-using-JavaScript.aspx

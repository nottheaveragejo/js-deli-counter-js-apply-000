function takeANumber (katzDeliLine){
  counter = 0;
  counter += 1
  
  
return "Welcome, you are" counter 
}


function nowServing (x){
if(x.length === 0){
  return "There is nobody waiting to be served!"
}
  else{
  var name = x[0];
    x.splice(0, 1);
  return 'Currently serving ' + name + '.';   
}
}
function currentLine (katzDeliLine){
let line = [];
  if(katzDeliLine.length !== 0){
   for (var i = 0; i<katzDeliLine.length; i++){
     line += (i + 1) + ". " + katzDeliLine[i] + ", "
   } 
   line = line.slice(0, line.length-2)
   return "The line is currently: " + line;
  }
  else{
    return "The line is currently empty.";
  }
}
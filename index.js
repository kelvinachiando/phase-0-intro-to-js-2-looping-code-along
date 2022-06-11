// Code your solutions in this file
function writeCards (names, event){
  let thankYouCards =[]
    for (let i =0; i <names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return thankYouCards
}
function countDown( countDown){
  while (countDown>0){
    console.log (countDown);
  countDown --;
}
console.log (countDown)
}
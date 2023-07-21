"use strict"
function solveEquation(a, b, c) {
  let arr = [];
   let discr = b**2-4*a*c;
  //return arr;
   if (discr < 0) {
    arr = [];
  } else if (discr === 0){
    let root = -b/(2*a);
     arr.push(root);     
  } else if (discr > 0) {
    let oneroot = (-b + Math.sqrt(discr))/(2*a);
    let tworoot = (-b - Math.sqrt(discr))/(2*a);
     arr.push(oneroot);
     arr.push(tworoot);     
  }
  return (arr);
  

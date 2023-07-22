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
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }

  percent = percent/100/12;
let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let Amountofdebt = monthlyPayment * countMonths;

  Amountofdebt = num (Amountofdebt.toFixed(2));

  return Amountofdebt;
}


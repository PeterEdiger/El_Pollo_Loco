


function calculateBonus(paygrade, salary, performance) {
  let bonus = 0

  if (paygrade === 1 || paygrade === 2) {
    bonus = (salary * 0.2) + (salary * 0.5);
  } else if (paygrade === 3 || paygrade === 4) {
      bonus = (salary * 0.5);
  } else if (paygrade === 5 || paygrade === 6) {
    bonus = salary * 0.4;
  } else if (paygrade === 7){
    bonus =  (salary * 0,4) + (salary * 0,1)
  } else if (paygrade > 7){
    bonus = (salary * 0,1)
  }

  if((paygrade === 3 || paygrade === 4 || paygrade === 5 || paygrade === 6) && 
    (performance != undefined)){
    bonus = addBasedOnPerformance(bonus, salary, performance)
  }
  return bonus
}

function addBasedOnPerformance(bonus, salary, performance) {
  if (performance == 1) {
    bonus = bonus + (salary * 0.1);
  } else if (performance === 2) {
    bonus = bonus + (salary * 0.5);
  }
  return bonus
  }

console.log(calculateBonus(1, 1000, 2));
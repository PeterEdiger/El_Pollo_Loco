
function calculateBonus(paygrade, salary, performance) {
  let bonus = 0;
  let { paygradesWithBonuses } = getPaygradeConditions(paygrade);
  bonus = bonusBasedOnPaygrade(salary);
  if (paygradesWithBonuses && (performance === 1 || performance === 2)) {
    bonus = bonusBasedOnPerformance(bonus, salary, performance);
  }
  return bonus;
}


function getPaygradeConditions(paygrade) {
  return {
    paygradeIsOneOrTwo: (paygrade === 1 || paygrade === 2),
    paygradeIsThreeOrFour: (paygrade === 3 || paygrade === 4),
    paygradeIsFiveOrSix: (paygrade === 5 || paygrade === 6),
    paygradeIsSeven: (paygrade === 7),
    paygradeIsBiggerSeven: (paygrade > 7),
    paygradesWithBonuses: (paygrade === 3 || paygrade === 4 || paygrade === 5 || paygrade === 6)
  };
}


function bonusBasedOnPaygrade(salary) {
  let bonus = 0;
  let { paygradeIsOneOrTwo, paygradeIsThreeOrFour
    , paygradeIsFiveOrSix, paygradeIsSeven, paygradeIsBiggerSeven } = getPaygradeConditions();
  if (paygradeIsOneOrTwo) {
    bonus = (salary * 0.7);
  } else if (paygradeIsThreeOrFour) {
    bonus = (salary * 0.5);
  } else if (paygradeIsFiveOrSix) {
    bonus = salary * 0.4;
  } else if (paygradeIsSeven) {
    bonus = (salary * 0, 5);
  } else if (paygradeIsBiggerSeven) {
    bonus = (salary * 0, 1);
  }
  return bonus;
}


function bonusBasedOnPerformance(bonus, salary, performance) {
  if (performance == 1) {
    bonus = bonus + (salary * 0.1);
  } else if (performance === 2) {
    bonus = bonus + (salary * 0.5);
  }
  return bonus;
}

console.log(calculateBonus(1, 1000, 1));
export function calculateSplits(friends, expenses) {
    if (!friends.length || !expenses.length) return [];
  
    const balances = {};
    friends.forEach(f => (balances[f] = 0));
  
    const sharePerExpense = expenses.map(exp => {
      const split = exp.amount / friends.length;
      friends.forEach(f => {
        if (f === exp.payer) {
          balances[f] += exp.amount - split;
        } else {
          balances[f] -= split;
        }
      });
    });
  
    // Simplify balances to transactions
    const owes = [];
    const debtors = Object.entries(balances).filter(([_, val]) => val < 0);
    const creditors = Object.entries(balances).filter(([_, val]) => val > 0);
  
    let i = 0,
      j = 0;
  
    while (i < debtors.length && j < creditors.length) {
      const [debtor, debtAmt] = debtors[i];
      const [creditor, creditAmt] = creditors[j];
  
      const amount = Math.min(-debtAmt, creditAmt);
      owes.push({ from: debtor, to: creditor, amount });
  
      balances[debtor] += amount;
      balances[creditor] -= amount;
  
      if (balances[debtor] === 0) i++;
      if (balances[creditor] === 0) j++;
    }
  
    return owes;
  }
  
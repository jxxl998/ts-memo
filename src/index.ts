function calculateTax(income: number): number {
  // warn bc unused 
  // "noUnusedLocals": true,
  const tax = 1;
  if (income < 50_000) {
    return income * 1.2
  }
  return income * 1.3;
}
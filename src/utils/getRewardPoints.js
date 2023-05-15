export function getPointsForSingleTransaction(transaction) {
  const transactionAmount = Math.floor(transaction.transactionAmount);
  let rewardPoints = 0;
  if (transactionAmount > 100) {
    rewardPoints += 50; //50 points for 50-100 portion of the purchase
    rewardPoints += (transactionAmount - 100) * 2; //2 points for every dollar spent over 100
  } else if (transactionAmount > 50 && transactionAmount <= 100) {
    rewardPoints += transactionAmount - 50;
  }
  return rewardPoints;
}

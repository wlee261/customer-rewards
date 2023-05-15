function generateRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function generateUniqueIds(length) {
  const ids = new Set();
  while (ids.size < length) {
    ids.add(Math.random().toString(36).substring(2, 14).toUpperCase());
  }
  return Array.from(ids);
}

const customerIds = generateUniqueIds(7);
const currentDate = new Date();

const startOfRange = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() - 6,
  currentDate.getDate()
);
const endOfRange = currentDate;

const transactions = [];

for (let i = 0; i < 150; i++) {
  const transaction = {
    customerId: customerIds[i % 7],
    transactionId: Math.random().toString(36).substring(2, 14).toUpperCase(),
    transactionAmount: (Math.random() * 1000).toFixed(2),
    transactionDate: generateRandomDate(startOfRange, endOfRange),
  };
  transactions.push(transaction);
}

const output = JSON.stringify(transactions, null, 2);
console.log(output);

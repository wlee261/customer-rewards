export default function getLastThreeMonths() {
  const currentDate = new Date();
  const lastThreeMonths = [];

  for (let i = 0; i < 3; i++) {
    const monthYear = formatMonthYear(currentDate);
    lastThreeMonths.push(monthYear);

    currentDate.setMonth(currentDate.getMonth() - 1);
  }
  return lastThreeMonths;
}

function formatMonthYear(date) {
  return date.toISOString().substring(0, 7);
}

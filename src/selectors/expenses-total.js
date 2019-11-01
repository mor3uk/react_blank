export default (expenses = []) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((amount, sum) => amount + sum, 0);
};
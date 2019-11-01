import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should count total expenses amount', () => {
    const totalAmount = getExpensesTotal(expenses);
    expect(totalAmount).toBe(113695);
});

test('should count 0 if no expenses', () => {
    expect(getExpensesTotal()).toBe(0);
});
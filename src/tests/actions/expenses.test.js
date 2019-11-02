import { addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '12345' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12345'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('12345', { note: 'note of 12345' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345',
        updates: {
            note: 'note of 12345'
        }
    });
});

test('should setup add expense action object with provided data', () => {
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    });
});
import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

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
    const expenseData = {
        description: 'new expense',
        note: 'new expense',
        amount: 1000,
        createdAt: 170
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object without provided data', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            createdAt: 0,
            amount: 0
        }
    });
});
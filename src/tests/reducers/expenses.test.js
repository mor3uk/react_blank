import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expenses state', () => {
    const result = expensesReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual([]);
});

test('should remove an expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[2].id
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should not remove an expense by not found id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'not found'
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    };
    const result = expensesReducer(undefined, action);
    expect(result).toEqual([expenses[1]]);
});

test('sholud edit an expense', () => {
    const updates = {
        description: 'descr to update',
        note: 'note to update'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const result = expensesReducer(expenses, action);
    expect(result[1]).toEqual({
        ...expenses[1],
        ...updates
    });
});

test('should not edit an expense with not found id', () => {
    const updates = {
        description: 'descr to update',
        note: 'note to update'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'not found',
        updates
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});
import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, removeExpense, editExpense, history;

beforeEach(() => {
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[1]}
            removeExpense={removeExpense}
            editExpense={editExpense}
            history={history}
        />
    )
});

test('should redner EditExpensePage component', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenCalledWith({ id: expenses[1].id });
    expect(history.push).toHaveBeenCalledWith('/');
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[2]);
    expect(history.push).toHaveBeenCalledWith('/');
});
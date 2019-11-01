import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm component correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm component with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error message with invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
});

test('should setup description on input change', () => {
    const value = 'description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should setup note on textarea change', () => {
    const value = 'note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should setup amount if input valid', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not setup amount if input invalid', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit width correct arguments', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[1].description,
        amount: +expenses[1].amount,
        createdAt: +expenses[1].createdAt,
        note: expenses[1].note
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should setup calendarFocused correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
    expect(wrapper.state('calendarFocused')).toBe(true);
}); 
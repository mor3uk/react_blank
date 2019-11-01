import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1500} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with a single expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={23450} />);
    expect(wrapper).toMatchSnapshot();
});

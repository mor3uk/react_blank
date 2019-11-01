import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { filters, altFilters } from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

let setStartDate,
    setEndDate,
    editTextFilter,
    sortByDate,
    sortByAmount,
    wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    editTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            editTextFilter={editTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            filters={filters}
        />);
});

test('should render ExpenseListFilters with no filters provided', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with provided filters', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'some value';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(editTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment().subtract(3, 'days');
    const endDate = moment().add(3, 'days');
    wrapper.find('DateRangePicker')
        .prop('onDatesChange')({
            startDate,
            endDate
        });
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus changes', () => {
    wrapper.find('DateRangePicker')
        .prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toBe('startDate');
});
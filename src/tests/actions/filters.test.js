import moment from 'moment';
import {
    editTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';

test('sholud generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('sholud generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('sholud generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('sholud generate sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('sholud generate edit text filter with provided text', () => {
    const action = editTextFilter('fish text');
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text: 'fish text'
    });
});

test('sholud generate edit text filter without provided text', () => {
    const action = editTextFilter();
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text: ''
    });
});
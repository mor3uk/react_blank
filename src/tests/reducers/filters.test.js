import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filters state', () => {
    const result = filterReducer(undefined, { type: '@@INIT'});
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const result = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(result.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = filterReducer(state, { type: 'SORT_BY_DATE' });
    expect(result.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = {
        type: 'EDIT_TEXT_FILTER',
        text: 'hey'
    };
    const result = filterReducer(undefined, action);
    expect(result.text).toBe('hey');
});

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    };
    const result = filterReducer(undefined, action);
    expect(result.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    };
    const result = filterReducer(undefined, action);
    expect(result.endDate).toEqual(moment(0));
});
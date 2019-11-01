import moment from 'moment';

export default [{
    id: '1',
    description: 'Gym walk',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109000,
    createdAt: +moment(0).subtract(4, 'days')
}, {
    id: '3',
    description: 'Credit Cart',
    note: '',
    amount: 4500,
    createdAt: +moment(0).add(4, 'days')
}
];
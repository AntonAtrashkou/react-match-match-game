import axios from 'axios';

export const getScore = () => axios.get('http://mmg-score.herokuapp.com').then(res => res.data);

export const postScore = params => axios.post('http://mmg-score.herokuapp.com', params).then(res => res.data);

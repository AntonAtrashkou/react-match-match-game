import { getScore, postScore } from '../services/httpService';


export const gotScore = score => ({
  type: 'GOT_SCORE',
  score,
});

export const getScoreAsync = () => (dispatch) => {
  getScore()
    .then(res => dispatch(gotScore(res)));
};

export const postScoreAsync = params => (dispatch) => {
  postScore(params);
};

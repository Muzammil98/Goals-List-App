import {GOAL_ADD, GOAL_DELETE} from './types';

export const addGoal = (data) => {
  return {
    type: GOAL_ADD,
    payload: data,
  };
};
export const deleteGoal = (id) => {
  return {
    type: GOAL_DELETE,
    payload: id,
  };
};

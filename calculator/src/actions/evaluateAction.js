import { create, all } from 'mathjs';

export const evaluateAction = (exp) => {
  const math = create(all, {});
  const val = math.evaluate(exp);
  return {
    type: 'EVALUATE',
    payload: val,
  };
};

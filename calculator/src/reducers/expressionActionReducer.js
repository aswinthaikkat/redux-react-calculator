const initialState = {
  expression: '',
  expressed: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'EXPRESS':
      return {
        ...state,
        expression: action.payload,
      };

    default:
      return state;
  }
}

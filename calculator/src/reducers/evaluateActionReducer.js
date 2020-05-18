const initialState = {
  result: '',
  evalated: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'EVALUATE':
      return {
        ...state,
        result: action.payload,
      };

    default:
      return state;
  }
}

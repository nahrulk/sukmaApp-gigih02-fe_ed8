export const initialState = {
  user: null,
  fav: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        fav: [...state.fav, action.item],
      };

    case "EMPTY_FAV":
      return {
        ...state,
        fav: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

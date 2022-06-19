export const initialState = {
  user: null,
  fav: [],
};

const reducer = (state, action) => {
  // console.log(action);
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

    case "REMOVE_FAV":
      const index = state.fav.findIndex((favItem) => favItem.id === action.id);
      let newFav = [...state.fav];

      if (index >= 0) {
        newFav.splice(index, 1);
      } else {
        console.warn(`Cant remove fav (id: ${action.id}) as its not in list!`);
      }

      return {
        ...state,
        fav: newFav,
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

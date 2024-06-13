import { ADD_ITEM, DELETE_ITEM, GET_ITEM, GET_ITEM_ID, UPDATE_ITEM } from "./Type";

const initialState = {
  items: [],
  selectedItem: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case GET_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case GET_ITEM_ID:
      return {
        ...state,
        selectedItem: state.items.find((item) => item.id === action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;

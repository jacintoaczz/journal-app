import { types } from "../../../../types/types";

const initialState = {
  loading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setLoading:
      break;

    default:
      return state;
  }
};

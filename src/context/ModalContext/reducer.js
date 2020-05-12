import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleModal": {
      return { ...state, open: !state.open };
    }
    case "openModal": {
      return { ...state, open: true };
    }
    case "closeModal": {
      return { ...state, open: false };
    }

    default:
      return state;
  }
};

const initState = {
  open: false,
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return [state, dispatch];
};

export default Reducer;

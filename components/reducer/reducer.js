export const Reducervalue = {
  loading: false,
  error: "",
  username: "",
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "loadingstop":
      return { ...state, loading: true };
    case "error":
      return { ...state, loading: false, error: action.value };
    case "login":
      return { ...state, loading: false, username: action.value };
    default:
      return state;
  }
};

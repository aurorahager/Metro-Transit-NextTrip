function SearchReducer(state, action) {
  switch (action.type) {
    case "setRoutes":
      return { ...state, routes: action.payload };
    case "setDirections":
      return { ...state, directions: action.payload };
    case "setStops":
      return { ...state, stops: action.payload };
    case "setTimes":
      return { ...state, times: action.payload };
    default:
      throw new Error(`invalid action type: ${action.type}`);
  };
};

export default SearchReducer;
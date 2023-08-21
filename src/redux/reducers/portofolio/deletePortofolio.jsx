const initialState = {
  data: null,
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const deletePortofolio = (state = initialState, action) => {
  if (action.type === "DELETE_PORTOFOLIO_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "DELETE_PORTOFOLIO_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "DELETE_PORTOFOLIO_FAILED") {
    return {
      ...state,
      data: null,
      errorMessage: action.payload,
      isLoading: false,
      isError: true,
    };
  } else {
    return state;
  }
};

export default deletePortofolio;

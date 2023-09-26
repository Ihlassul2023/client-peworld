const initialState = {
  data: null,
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const postPortofolio = (state = initialState, action) => {
  if (action.type === "POST_PORTOFOLIO_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "POST_PORTOFOLIO_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "POST_PORTOFOLIO_FAILED") {
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

export default postPortofolio;

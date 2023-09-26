const initialState = {
  data: null,
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const postExperience = (state = initialState, action) => {
  if (action.type === "POST_EXPERIENCE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "POST_EXPERIENCE_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "POST_EXPERIENCE_FAILED") {
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

export default postExperience;

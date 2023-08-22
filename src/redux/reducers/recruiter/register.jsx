const initialState = {
  data: null,
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const registerRecruiter = (state = initialState, action) => {
  if (action.type === "RECRUITER_REGISTER_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "RECRUITER_REGISTER_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "RECRUITER_REGISTER_FAILED") {
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

export default registerRecruiter;

const initialState = {
  data: null,
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const updateRecruiter = (state = initialState, action) => {
  if (action.type === "RECRUITER_UPDATE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "RECRUITER_UPDATE_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "RECRUITER_UPDATE_FAILED") {
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

export default updateRecruiter;

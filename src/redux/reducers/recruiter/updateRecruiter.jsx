const initialState = {
  data: null,
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const updateRecruiter = (state = initialState, action) => {
  switch (action.type) {
    case "RECRUITER_UPDATE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: "",
      };
    case "RECRUITER_UPDATE_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "RECRUITER_UPDATE_FAILED":
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default updateRecruiter;

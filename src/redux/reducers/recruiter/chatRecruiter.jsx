const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const chatRecruiter = (state = initialState, action) => {
    if (action.type === "RECRUITER_CHAT_PENDING") {
      return {
        ...state,
        isLoading: true,
      };
    } else if (action.type === "RECRUITER_CHAT_SUCCESS") {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        errorMessage: "",
        isError: false,
      };
    } else if (action.type === "RECRUITER_CHAT_FAILED") {
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
  
  export default chatRecruiter;
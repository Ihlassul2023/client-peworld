const initialState = {
  data: null,
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const loginWorker = (state = initialState, action) => {
  if (action.type === "WORKER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "WORKER_LOGIN_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "WORKER_LOGIN_FAILED") {
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

export default loginWorker;

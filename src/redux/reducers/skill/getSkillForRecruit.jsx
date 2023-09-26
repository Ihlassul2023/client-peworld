const initialState = {
  data: null,
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const getSkillForRecruit = (state = initialState, action) => {
  if (action.type === "GET_SKILLRECRUITER_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "GET_SKILLRECRUITER_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "GET_SKILLRECRUITER_FAILED") {
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

export default getSkillForRecruit;

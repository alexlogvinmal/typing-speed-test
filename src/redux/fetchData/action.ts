export interface UsersListTypeNew {
    id: string,
    name: string,
    words: number,
    chars: number,
    accuracy: number
  }
 export interface UsersState {
    data: UsersListTypeNew[];
    loading: boolean;
    error: string | null;
  }
  
   enum FilesActionTypes {
    FETCH_FILES_REQUEST = 'FETCH_FILES_REQUEST',
    FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS',
    FETCH_FILES_FAILED = 'FETCH_FILES_FAILED',
  }

const initialState: UsersState = {
    data: [],
    loading: false,
    error: null,
  };
  
  export const fetchReducer = (state = initialState, action: any): UsersState => {
    switch (action.type) {
      case FilesActionTypes.FETCH_FILES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FilesActionTypes.FETCH_FILES_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case FilesActionTypes.FETCH_FILES_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
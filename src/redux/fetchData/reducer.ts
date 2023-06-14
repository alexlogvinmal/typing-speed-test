import { Dispatch } from 'redux';
import { getDocs } from 'firebase/firestore';
import { databaseCollection } from '../../api/firebase'; 


enum FilesActionTypes {
  FETCH_FILES_REQUEST = 'FETCH_FILES_REQUEST',
  FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS',
  FETCH_FILES_FAILED = 'FETCH_FILES_FAILED',
}

export const fetchFilesRequest = () => ({
  type: FilesActionTypes.FETCH_FILES_REQUEST,
});

export const fetchFilesSuccess = (data: any) => ({
  type: FilesActionTypes.FETCH_FILES_SUCCESS,
  payload: data,
});

export const fetchFilesFailed = (error: string) => ({
  type: FilesActionTypes.FETCH_FILES_FAILED,
  payload: error,
});

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchFilesRequest()); 
    try {
      const data = await (await getDocs(databaseCollection)).docs.map((users) => ({ ...users.data(), id: users.id }))
      dispatch(fetchFilesSuccess(data));
    } catch (error:any) {
      dispatch(fetchFilesFailed(error.message));
    }
  };
};
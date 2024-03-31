
import { Dispatch } from "redux";
import { Action, Order, Tag, Value, tagsInitialState } from "../types";
import axios from "axios";
import { ThunkAction } from "redux-thunk";


export const getTags = ({tags}: tagsInitialState) => tags
export const getError = ({request}: tagsInitialState) => request

const reducerName = 'tags';
const createActionName = (name: string) => `app/${reducerName}/${name}`;


const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_TAGS = createActionName('LOAD_TAGS');


export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (payload: Object) => ({ payload, type: ERROR_REQUEST });

export const loadTags = (payload: Tag[]) => ({ payload, type: LOAD_TAGS })


export const loadTagsRequest = (page: number, pageSize: number, order: Order, sort: Value, ): ThunkAction<void, tagsInitialState, undefined, Action> => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`https://api.stackexchange.com/2.3/tags?page=${page+1}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`, {headers: {"Access-Control-Allow-Origin": "*"}})
      dispatch(loadTags(res.data.items))
      dispatch(endRequest())
    } catch (e) {
      dispatch(errorRequest((e as Error).message))
    }
  }
}

const initialState: tagsInitialState = {
  tags: [],
  request: {
    pending: false,
    error: null,
    success: false,
  }

}

export default function tagsReducer(state = initialState, action: Action) {

  switch (action.type) {
    case LOAD_TAGS:
      return {
        ...state, tags: [...(action.payload || [])]
      }
    case START_REQUEST:
      return {
        ...state,
        request: { pending: true, error: null, success: false },
      };
    case END_REQUEST:
      return {
        ...state,
        request: { pending: false, error: null, success: true },
      };
    case ERROR_REQUEST:
      return {
        ...state,
        request: { pending: false, error: action.payload || null, success: false },
      };
    default:
      return state
  }
}
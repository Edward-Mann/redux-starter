import * as actions from './actionTypes';

let lastId = 0;

export default function reducer(state = [], action) {
      if (actions.BUG_ADDED === action.type) {
            return [
                  ...state,
                  {
                        id: ++lastId,
                        description: action.payload.description,
                        resolved: false
                  }  
            ];
      } else if (actions.BUG_REMOVED === action.type) {
            return state.filter(bug => bug.id != action.payload.id);
      } else if (actions.BUG_RESOLVED === action.type) {
            return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true });
      }

      return state;
}
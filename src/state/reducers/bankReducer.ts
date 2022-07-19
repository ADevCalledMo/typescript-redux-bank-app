import { Action } from "../actions/index";
import { ActionType } from "../action-types/index";

const iniitalState = 0;



const bankReducer = (state: number = iniitalState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducer;

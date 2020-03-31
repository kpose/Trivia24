import { combineReducers, createStore } from "redux";
import initialState from './initialState';
import {
    gameDataReducer, leaderboardReducer, modalsReducer, playerInfoReducer, questionReducer
} from "./reducers";

const rootReducer = combineReducers({
    leaderboard : leaderboardReducer,
    question : questionReducer,
    modals : modalsReducer,
    playerInfo : playerInfoReducer,
    gameData : gameDataReducer
});

export default createStore(rootReducer, initialState);
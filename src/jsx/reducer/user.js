import { combineReducers } from 'redux';
import Immutable from 'immutable';
import {
    LOAD_USER,
    REMOVE_USER,
    FETCH_MESSAGE,
    READ_MESSAGE,
    FOLLOW_USER,
    UNFOLLOW_USER,
    FETCH_FOLLOW_USER,
    FETCH_FOLLOW_BOARD,
    LOAD_PROFILE,
    SET_PROFILE,
    FETCH_BORAD,
    FOLLOW_BOARD,
    CREATE_BOARD,
    DELETE_BOARD,
    UNFOLLOW_BOARD
} from '../constant/actionType';
//sign in 这些可以控制整个user对象，所以，不能把她作为单独的
const info = (state = Immutable.Map({}), action) => {
    switch (action.type) {
        case LOAD_USER:
            if (!action.user) {
                return state;
            } else {
                return state.merge(action.user.info);
            }
        case REMOVE_USER:
            return Immutable.Map({});
        case READ_MESSAGE:
            return state.merge({ "msgCnt": (state.get("msgCnt") - 1) });
        case FOLLOW_USER:
            return state.merge({ "followCnt": (state.get("followCnt") + 1) });
        case UNFOLLOW_USER:
            return state.merge({ "followCnt": (state.get("followCnt") - 1) });
        default:
            return state;
    }
};
const profile = (state = Immutable.Map({}), action) => {
    switch (action.type) {
        case LOAD_PROFILE:
            return state.merge(action.profile);
        case REMOVE_USER:
            return Immutable.Map({});
        case SET_PROFILE:
            return state.merge(action.profile);
        default:
            return state;
    }
};
const messages = (state = Immutable.List([]), action) => {
    switch (action.type) {
        case REMOVE_USER:
            return Immutable.List([]);
        case FETCH_MESSAGE:
            return state.merge(messages);
        case READ_MESSAGE:
            if (!action.index) {
                return state;
            }
            let message = state.get(action.index).merge({ status: 1 });
            return state.set(action.index, message);
        default:
            return state;
    }
};
//action:{pinId,boardId}
const boards = (state = Immutable.Set(), action) => {
    switch (action.type) {
        case REMOVE_USER:
            return Immutable.List({});
        case FETCH_BORAD:
            if (!action.boards) {
                return state;
            }
            let boardIds = Immutable.Set(action.boards.keys());
            return state.union(boardIds);
        case CREATE_BOARD:
            return state.add(action.board.get("id"));
        case DELETE_BOARD:
            return state.delete(action.id);
        default:
            return state;
    }
};
const follows = (state = Immutable.Map({}), action) => {
    switch (action.type) {
        case REMOVE_USER:
            return Immutable.Map({});
        case FETCH_FOLLOW_USER:
            return state.merge(action.follows);
        case FOLLOW_USER:
            let id = action.id;
            return state.merge({ id: action.username });
        case UNFOLLOW_USER:
            return state.delete(action.id);
        default:
            return state;
    }
};
const follow_boards = (state = Immutable.Set(), action) => {
    switch (action.type) {
        case REMOVE_USER:
            return Immutable.Set({});
        case FETCH_FOLLOW_BOARD:
            return state.merge(action.boards);
        case FOLLOW_BOARD:
            return state.add(action.id);
        case UNFOLLOW_BOARD:
            return state.delete(action.id);
        default:
            return state;
    }
};
const user = combineReducers({
    info,
    profile,
    messages,
    boards,
    follows,
    follow_boards
});

export {user};

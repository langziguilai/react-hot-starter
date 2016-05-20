import {
    LOAD_USER,
    REMOVE_USER,
    LOAD_PROFILE,
    SET_PROFILE,
    FETCH_MESSAGE,
    READ_MESSAGE,
    FETCH_BORAD,
    CREATE_BOARD,
    DELETE_BOARD,
    FETCH_FOLLOW_USER,
    FOLLOW_USER,
    UNFOLLOW_USER,
    FETCH_FOLLOW_BOARD,
    FOLLOW_BOARD,
    UNFOLLOW_BOARD
} from '../constant/actionType';
import Immutable from 'immutable';
//user
export const loadUser = (user) => {
    let immu_user = Immutable.Map(user);
    return { type: LOAD_USER, user: immu_user };
};
export const removeUser = () => {
        return { type: REMOVE_USER };
    }
    //profile
export const loadProfile = (proflie) => {
    let immu_profile = Immutable.Map(profile);
    return { type: LOAD_PROFILE, profile: immu_profile };
}
export const setProfile = (profile) => {
        let immu_profile = Immutable.Map(profile);
        return { type: SET_PROFILE, profile: immu_profile };
    }
    //message
export const fetchMessage = (messages) => {
    let immu_messages = Immutable.List(action.messages).map(msg => { Immutable.Map(msg) });
    return { type: FETCH_MESSAGE, messages: immu_messages };
}
export const readMessage = (index) => {
        return { type: READ_MESSAGE, index: index };
    }
    //boards
export const fetchBoard = (boards) => {
    let immu_boards = Immutable.Map(boards).map(board => {
        let board = Immutable.Map(board);
        let pins = Immutable.Set(board.get("pins"));
        return board.set("pins", pins);
    });
    return { type: FETCH_BORAD, boards: immu_boards };
}
export const createBoard = (board) => {
    let constBoard = Immutable.Map(board);
    let pins = Immutable.Set(constBoard.get("pins"));
    let immu_board = constBoard.set("pins", pins);
    return { type: CREATE_BOARD, board: immu_board };
}
export const deleteBoard = (id) => {
        let immu_id = id;
        return { type: DELETE_BOARD, id: immu_id };
    }
    //follows
export const fetchFollowUser = (users) => {
    let immu_users = Immutable.Map(users);
    return { type: FETCH_FOLLOW_USER, follows: immu_users };
}
export const followUser = (id, username) => {
    return { type: FOLLOW_USER, id: id, username: username };
}
export const unFollowUser = (id) => {
        let immu_id = id;
        return { type: UNFOLLOW_USER, id: immu_id };
    }
    //follow boards
export const fetchFollowBoard = (boards) {
    let immu_boards = Immutable.Set(boards);
    return { type: FETCH_FOLLOW_BOARD, boards: immu_boards };
}
export const followBoard = (id) => {
    return { type: FOLLOW_BOARD, id: id };
}
export const unFollowBoard = (id) => {
        return { type: UNFOLLOW_BOARD, id: id };
    }
    // export {
    //     loadUser:loadUser,
    //     removeUser:removeUser,
    //     loadProfile:loadProfile,
    //     setProfile:setProfile,
    //     fetchMessage:fetchMessage,
    //     readMessage:readMessage,
    //     fetchBoard:fetchBoard,
    //     createBoard:createBoard,
    //     deleteBoard:deleteBoard,
    //     fetchFollowUser:fetchFollowUser,
    //     followUser:followUser,
    //     unFollowUser:unFollowUser,
    //
    // }

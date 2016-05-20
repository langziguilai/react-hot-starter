import Immutable from 'immutable';
import {
    FETCH_BORAD,
    CREATE_BOARD,
    DELETE_BOARD,
    SET_BOARD,
    FOLLOW_BOARD,
    UNFOLLOW_BOARD,
    PIN,
    UNPIN,
    LIKE,
    UNLIKE,
    FETCH_BOARD_DETAIL,
    FETCH_PINS_BY_BOARD
} from '../constant/actionType';
//action:{pinId,boardId}
const boardCache = (state = Immutable.Map({}), action) => {
        switch (action.type) {
            case FETCH_BORAD:
                if (!action.boards) {
                    return state;
                }
                return state.merge(boards);
            case CREATE_BOARD:
                let id1= action.board.get("id");
                return state.merge({id1: board});
            case DELETE_BOARD:
                return state.delete(action.id);
            case SET_BOARD:
                let board2= state.get(action.board.get("id")).merge(action.board);
                let id2=board.get("id");
                return state.merge({id2: board2});
            case FOLLOW_BOARD:
                let boardCurrent3 = state.get(action.id);
                let board3 = boardCurrent3.set("followCnt", (boardCurrent3.get("followCnt") + 1));
                let id3=board.get("id");
                return state.merge({id3: board3 });
            case UNFOLLOW_BOARD:
                let boardCurrent4 = state.get(action.id);
                let board4 = boardCurrent4.set("followCnt", (boardCurrent4.get("followCnt") - 1));
                let id4=board4.get("id");
                return state.merge({id4:board4 });
            case PIN:
                let board5 = state.get(action.boardId).get("pins").add(action.pinId);
                let id5=board5.get("id");
                return state.merge({id5:board5});
            case UNPIN:
                let board6 = state.get(action.boardId).get("pins").delete(action.pinId);
                let id6=board6.get("id");
                return state.merge({id6:board6 });
            case LIKE:
                let board7 = state.get(action.boardId).get("pins").add(action.pinId);
                let id7=board7.get("id");
                return state.merge({id7:board7 });
            case UNLIKE:
                let board8 = state.get(action.boardId).get("pins").delete(action.pinId);
                let id8=board8.get("id");
                return state.merge({id8:board8 });
            case FETCH_BOARD_DETAIL:
                let boardCurrent9 = Immutable.Map(action.board);
                let pins9 = Immutable.Set(boardCurrent9.get("pins")).map(pin => {
                    return pin.get("id"); });
                let board9 = boardCurrent9.set("pins", pins);
                let id9=board.get("id");
                return state.merge({id9:board9 });
            case FETCH_PINS_BY_BOARD:
                let boardId = action.boardId;
                let pinsGet = action.pins.map(pin => { pin.id });
                let pins = state.get(boardId).get("pins").union(pinsGet);
                let board = state.get(boardId).set("pins", pins);
                let id=board.get("id");
                return state.set(id, board);
            default:
                return state;
        }
};
export {boardCache};

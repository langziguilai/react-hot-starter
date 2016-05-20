import {
    SET_BOARD,
    PIN,
    UNPIN,
    LIKE,
    UNLIKE,
    FETCH_BOARD_DETAIL,
    FETCH_PINS_BY_BOARD
} from '../constant/actionType';
export const setBoard = (board) => {
    let constBoard = Immutable.Map(board);
    let pins = Immutable.Set(constBoard.get("pins"));
    let immu_board = constBoard.set("pins", pins);
    return { type: SET_BOARD, board: immu_board };
};
export const pin = (boardId, pinId) => {
    return { type: PIN, boardId: boardId, pinId: pinId };
};
export const unpin = (boardId, pinId) => {
    return { type: PIN, boardId: boardId, pinId: pinId };
};
export const like = (boardId, pinId) => {
    return { type: PIN, boardId: boardId, pinId: pinId };
};
export const unlike = (boardId, pinId) => {
    return { type: PIN, boardId: boardId, pinId: pinId };
};

export const fetchBoardDetail = (board) => {
    let boardCurrent = Immutable.Map(board);
    let pins = Immutable.Set(board.get("pins")).map(pinIn => {
        let pinOut = Immutable.Map(pinIn);
        return pinOut;
    });
    let immu_board = boardCurrent.set("pins", pins);
    return { type: FETCH_BOARD_DETAIL, board: immu_board };
};
export const fetchPinsByBoard = (boardId, pins) => {
    let immu_pins = Immutable.Set(pins).map(pinIn => {
        let pinOut = Immutable.Map(pinIn);
        return pinOut;
    });
    return { type: FETCH_PINS_BY_BOARD, boardId: boardId, pins: immu_pins };
};

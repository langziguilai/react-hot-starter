import Immutable from 'immutable';
import {
    FETCH_PINS_BY_FIND,
    FETCH_PINS_BY_TIME,
    FETCH_PINS_BY_POPULAR,
    FETCH_PINS_BY_CATEGORY,
    FETCH_PINS_BY_TAG,
    FETCH_PINS_BY_SEARCH,
    FETCH_PINS_BY_BOARD,
    FETCH_BOARD_DETAIL,
    PIN,
    UNPIN,
    LIKE,
    UNLIKE
} from '../constant/actionType';
const pinCache = (state = Immutable.Map({}), action) => {
    switch (action.type) {
        case FETCH_PINS_BY_FIND:
            let pinsByFind = action.pins.map(pinIn => {
                let pinOut = Immutable.Map(pinIn);
                return [pinOut.get("id"), pinOut];
            });
            return state.merge(Immutable.Map(pinsByFind));
        case FETCH_PINS_BY_TIME:
            let pinsByTime = action.pins.map(pinIn => {
                let pinOut = Immutable.Map(pinIn);
                return [pinOut.get("id"), pinOut];
            });
            return state.merge(Immutable.Map(pinsByTime));
        case FETCH_PINS_BY_POPULAR:
            let pinsByPopular = action.pins.map(pinIn => {
                let pinOut = Immutable.Map(pinIn);
                return [pinOut.get("id"), pinOut];
            });
            return state.merge(Immutable.Map(pinsByPopular));
        case FETCH_PINS_BY_CATEGORY:
            let pinsByCategory = action.pins.map(pinIn => {
                let pinOut = Immutable.Map(pinIn);
                return [pinOut.get("id"), pinOut];
            });
            return state.merge(Immutable.Map(pinsByCategory));
        case FETCH_PINS_BY_TAG:
            let pinsByTag = action.pins.map(pinIn => {
                let pinOut = Immutable.Map(pinIn);
                return [pinOut.get("id"), pinOut];
            });
            return state.merge(Immutable.Map(pinsByTag));
        case FETCH_PINS_BY_SEARCH:
            let pinsBySearch = action.pins.map(pinIn => {
                let pinOut = Immutable.Map(pinIn);
                return [pinOut.get("id"), pinOut];
            });
            return state.merge(Immutable.Map(pinsBySearch));
        case FETCH_PINS_BY_BOARD:
            let pins = action.pins.map(pinIn => {
                let pinOut = Immutable.Map(pinIn);
                return [pinOut.get("id"), pinOut];
            });
            return state.merge(Immutable.Map(pins));
        case FETCH_BOARD_DETAIL:
            let pinsByBoard = action.board.get("pins").map(pinIn => {
                let pinOut = Immutable.Map(pinIn);
                return [pinOut.get("id"), pinOut];
            });
            return state.merge(Immutable.Map(pinsByBoard));
        case PIN:
            let pinCurrent1 = state.get(action.id);
            let pin1 = pinCurrent1.set("repinCnt", (pinCurrent1.get("repinCnt") + 1));
            let id1= pin.get("id");
            return state.merge({id1: pin1});
        case UNPIN:
            let pinCurrent2 = state.get(action.id);
            let pin2 = pinCurrent2.set("repinCnt", (pinCurrent2.get("repinCnt") - 1));
            let id2=pin.get("id");
            return state.merge({id2: pin2 });
        case LIKE:
            let pinCurrent3 = state.get(action.id);
            let pin3 = pinCurrent3.set("likeCnt", (pinCurrent3.get("likeCnt") + 1));
            let id3= pin3.get("id");
            return state.merge({id3: pin3 });
        case UNLIKE:
            let pinCurrent4 = state.get(action.id);
            let pin4 = pinCurrent4.set("likeCnt", (pinCurrent4.get("likeCnt") - 1));
            let id4= pin4.get("id");
            return state.merge({id4: pin4 });
        default:
            return state;
    }
};
export {pinCache};

import { combineReducers } from 'redux';
import Immutable from 'immutable';
import {
    FETCH_PINS_BY_TIME,
    FETCH_PINS_BY_POPULAR,
    FETCH_PINS_BY_CATEGORY,
    FETCH_PINS_BY_TAG,
    FETCH_PINS_BY_SEARCH,
    FETCH_PINS_BY_FIND
} from '../constant/actionType';
const find = (state = Immutable.Set([]), action) => {
    switch (action.type) {
        case FETCH_PINS_BY_FIND:
            return state.union(action.pins.map(pin => { pin.id }))
        default:
            return state;
    }
};
const recent = (state = Immutable.Set([]), action) => {
    switch (action.type) {
        case FETCH_PINS_BY_TIME:
            return state.union(action.pins.map(pin => { pin.id }))
        default:
            return state;
    }
};
const popular = (state = Immutable.Set([]), action) => {
    switch (action.type) {
        case FETCH_PINS_BY_POPULAR:
            return state.union(action.pins.map(pin => { pin.id }))
        default:
            return state;
    }
};
const categories = (state = Immutable.Map({}), action) => {
    switch (action.type) {
        case FETCH_PINS_BY_CATEGORY:
            let category = action.category;
            let pinsGet = action.pins.map(pin => { pin.id });
            let pins = state.get(category).get("pins").union(pinsGet);
            return state.set(category, pins);
        default:
            return state;
    }
};
const tags = (state = Immutable.Map({}), action) => {
    switch (action.type) {
        case FETCH_PINS_BY_TAG:
            let tag = action.tag;
            let pinsGet = action.pins.map(pin => { pin.id });
            let pins = state.get(tag).get("pins").union(pinsGet);
            return state.set(tag, pins);
        default:
            return state;
    }
};
const search = (state = Immutable.Map({}), action) => {
    switch (action.type) {
        case FETCH_PINS_BY_SEARCH:
            let search = action.search;
            let pinsGet = action.pins.map(pin => { pin.id });
            let pins = state.get(search).get("pins").union(pinsGet);
            return state.set(search, pins);
        default:
            return state;
    }
};
const cache = combineReducers({
    find,
    recent,
    popular,
    categories,
    tags,
    search
});
export {cache};

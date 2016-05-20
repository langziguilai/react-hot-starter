import {
    FETCH_PINS_BY_TIME,
    FETCH_PINS_BY_POPULAR,
    FETCH_PINS_BY_CATEGORY,
    FETCH_PINS_BY_TAG,
    FETCH_PINS_BY_SEARCH,
    FETCH_PINS_BY_FIND
} from '../constant/actionType';
import Immutable from 'immutable';
export const fetchPinsByFind = (pins) => {
    let immu_pins = Immutable.Set(pins).map(pin => {
        return Immutable.Map(pin);
    });
    return { type: FETCH_PINS_BY_FIND, pins: immu_pins };
};
export const fetchPinsByTime = (pins) => {
    let immu_pins = Immutable.Set(pins).map(pin => {
        return Immutable.Map(pin);
    });
    return { type: FETCH_PINS_BY_TIME, pins: immu_pins };
};
export const fetchPinsByPopular = (pins) => {
    let immu_pins = Immutable.Set(pins).map(pin => {
        return Immutable.Map(pin);
    });
    return { type: FETCH_PINS_BY_POPULAR, pins: immu_pins };
};
export const fetchPinsByCategory = (category, pins) => {
    let immu_pins = Immutable.Set(pins).map(pin => {
        return Immutable.Map(pin);
    });
    return { type: FETCH_PINS_BY_CATEGORY, pins: immu_pins, category: category };
};
export const fetchPinsByTag = (pins, tag) => {
    let immu_pins = Immutable.Set(pins).map(pin => {
        return Immutable.Map(pin);
    });
    return { type: FETCH_PINS_BY_TAG, pins: immu_pins, tag: tag };
};
export const fetchPinsBySearch = (pins, search) => {
    let immu_pins = Immutable.Set(pins).map(pin => {
        return Immutable.Map(pin);
    });
    return { type: FETCH_PINS_BY_SEARCH, pins: immu_pins, search: search };
};
// export {
//    fetchPinsByFind:fetchPinsByFind,
//    fetchPinsByTime:fetchPinsByTime,
//    fetchPinsByPopular:fetchPinsByPopular,
//    fetchPinsByCategory:fetchPinsByCategory,
//    fetchPinsByTag:fetchPinsByTag,
//    fetchPinsBySearch:fetchPinsBySearch
// }

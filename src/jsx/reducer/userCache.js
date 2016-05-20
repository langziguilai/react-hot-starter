import Immutable from 'immutable';
import { FETCH_USER } from '../constant/actionType';
const userCache = (state = Immutable.Map({}), action) => {
    switch (action.type) {
        case FETCH_USER:
            let user = action.user;
            let id=user.get("id");
            return state.merge({id:user});
        default:
            return state;
    }
};
export {userCache};
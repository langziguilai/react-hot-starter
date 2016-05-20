import { FETCH_USER } from '../constant/actionType'
export const fetchUser = (user) => {;
        let userCurrent = Immutable.Map(user);
        let boards = Immutable.List(user.get("boards")).map(board => {
            return Immutable.Map(board);
        });
        let immu_user = userCurrent.set("boards", boards);
        return { type: FETCH_USER, user: immu_user };
    }

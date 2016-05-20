//action必须对状态有改变 才有存在的理由
//基本的action
export const LOAD_USER = "LOAD_USER"; //登录或者注册成功的时候
export const REMOVE_USER = "REMOVE_USER"; //登出之后执行
//采集的时候用到
export const PIN = "PIN_IT"; //PIN THE PIN
export const UNPIN = "UNPIN_IT"; //UNPIN THE PIN
export const LIKE = "LIKE_IT";
export const UNLIKE = "UNLIKE_IT";
//操作board
export const FETCH_BORAD = "FETCH_BORAD";
export const CREATE_BOARD = "CREATE_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";
export const SET_BOARD = "SET_BOARD";
export const FOLLOW_BOARD = "FOLLOW_BOARD";
export const UNFOLLOW_BOARD = "UNFOLLOW_BOARD";
export const FETCH_FOLLOW_BOARD = "FETCH_FOLLOW_BOARD";
export const FETCH_BOARD_DETAIL = "FETCH_BOARD_DETAIL";
export const FETCH_PINS_BY_BOARD = "FETCH_PINS_BY_BOARD";
//操作个人资料
export const LOAD_PROFILE = "LOAD_PROFILE";
export const SET_PROFILE = "SET_PROFILE";
//操作MESSAGE
export const FETCH_MESSAGE = "FETCH_MESSAGE";
export const READ_MESSAGE = "READ_MESSAGE";
export const SEND_MESSAGE = "SEND_MESSAGE";
//与人相关
export const FETCH_FOLLOW_USER = "FETCH_FOLLOW_USER";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
//PINS
export const FETCH_PINS_BY_FIND = "FETCH_PINS_BY_FIND";
export const FETCH_PINS_BY_TIME = "FETCH_PINS_BY_TIME";
export const FETCH_PINS_BY_POPULAR = "FETCH_PINS_BY_POPULAR";
export const FETCH_PINS_BY_CATEGORY = "FETCH_PINS_BY_CATEGORY";
export const FETCH_PINS_BY_TAG = "FETCH_PINS_BY_TAG";
export const FETCH_PINS_BY_SEARCH = "FETCH_PINS_BY_SEARCH";

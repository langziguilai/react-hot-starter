import { combineReducers } from 'redux';
import { user } from './user';
import { cache } from './cache';
import { pinCache } from './pinCache';
import { boardCache } from './boardCache';
import { userCache } from './userCache';

export const AppReducer = combineReducers({
    user,
    cache,
    pinCache,
    boardCache,
    userCache
});

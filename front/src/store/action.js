export const AUTHOR_CHANGE = 'AUTHOR_CHANGE';
export const TEXT_CHANGE = 'TEXT_CHANGE';
export const POSTS_SET = 'POSTS_SET';

export const authorChange = value => ({type: AUTHOR_CHANGE, payload: value});
export const textChange = value => ({type: TEXT_CHANGE, payload: value});
export const postsSet = value => ({type: POSTS_SET, payload: value});

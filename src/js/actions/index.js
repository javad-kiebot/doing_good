export const INCREMENTCOUNTER = 'INCREMENTCOUNTER';

// Action to add article to store
export const addCounter = count => ({
    type: INCREMENTCOUNTER,
    payload: count
});
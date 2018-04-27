export const seed = (state = 'default-seed', action) => {
  switch (action.type) {
    case 'CHANGE_SEED':
      return action.seed;
    default:
      return state
  }
}

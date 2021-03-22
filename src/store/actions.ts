export const ActionType = {
  DELETE_STUFF: "DELETE_STUFF",
};

export const deleteStuff = (type: string, id: string): object => ({
  type: ActionType.DELETE_STUFF,
  payload: {type, id},
});

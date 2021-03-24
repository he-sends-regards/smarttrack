export const ActionType = {
  DELETE_STUFF: "DELETE_STUFF",
  ADD_STUFF: "ADD_STUFF",
};

export const deleteStuff = (
  type: string,
  id: string
): {type: string; payload: {type: string; id: string}} => ({
  type: ActionType.DELETE_STUFF,
  payload: {type, id},
});

export const addStuff = (
  type: string,
  data: object
): {type: string; payload: {type: string; data: object}} => ({
  type: ActionType.ADD_STUFF,
  payload: {type, data},
});


export default function saveGroup(group) {
  return {
    type: 'SAVE_GROUP_DETAIL',
    payload: { group },
  };
}

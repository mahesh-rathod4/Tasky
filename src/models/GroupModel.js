export default class GroupModel {
  constructor(createAt, createBy, id, members, groupName) {
    this.createAt = createAt;
    this.createBy = createBy;
    this.id = id;
    this.members = members;
    this.groupName = groupName;
  }
}

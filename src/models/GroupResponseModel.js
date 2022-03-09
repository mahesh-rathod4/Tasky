export default class GroupResponseModel {
  constructor(
    createAt,
    createBy,
    id,
    members,
    groupName,
    recentMsg,
    lastMsgTime
  ) {
    this.createAt = createAt;
    this.createBy = createBy;
    this.id = id;
    this.members = members;
    this.groupName = groupName;
    this.recentMsg = recentMsg;
    this.lastMsgTime = lastMsgTime;
  }
}

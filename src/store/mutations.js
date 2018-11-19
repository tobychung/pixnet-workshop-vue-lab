export const SET_LOADED_STATUS = (state, { target, loaded }) => state.loaded[target] = loaded;

export const SET_MEMBERS_DATA = (state, membersData) => state.membersData = membersData;
export const SET_USER_INFO = (state, userInfo) => state.userInfo = userInfo;
export const SET_MEMBER_PROFILE = (state, memberProfile) => state.memberProfile = memberProfile;
export const SET_AVERAGE_POWER = (state, averagePower) => state.averagePower = averagePower;
export const SET_PROFILE_LIKES = (state, profileLikes) => state.profileLikes = profileLikes;

export const CLAP_INCREMENT = (state, profileLikes) => state.profileLikes.data.num_liked = profileLikes;
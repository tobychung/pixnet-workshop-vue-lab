import axios from 'axios';
import { API_URL } from '../constants'
import { MY_ID, MY_TOKEN } from '../my-config'


export const getMembersData = async ({ commit, state }) => {
    try {
        const res = await axios.get(`${API_URL}/v1/userprofiles`);

        if (res.data.error) {
            errorMessage(commit, res.data.message);
            return;
        }

        const { data } = res.data;

        // 篩掉尚未註冊完成的民眾
        const availableData = data.filter(member => member.created_at !== null);

        console.log('availableData', availableData);
        commit('SET_MEMBERS_DATA', {
            target: 'membersData',
            data: availableData,
        });

        commit('SET_LOADED_STATUS', {
            target: 'membersData',
            loaded: true,
        });

    } catch (e) {
        errorMessage(commit);
    }
};

export const getUserInfo = async ({ commit, state }) => {
    try {
        const res = await axios.get(`${API_URL}/v1/userprofiles/${MY_ID}`);

        if (res.data.error) {
            errorMessage(commit, res.data.message);
            return;
        }

        const { data } = res.data;

        commit('SET_USER_INFO', {
            target: 'userInfo',
            data,
        });

        commit('SET_LOADED_STATUS', {
            target: 'userInfo',
            loaded: true,
        });

    } catch (e) {
        errorMessage(commit);
    }
};



export const getMemberProfile = async ({ commit, state }, { memberId }) => {
    try {
        const res = await axios.get(`${API_URL}/v1/userprofiles/${memberId}`);

        if (res.data.error) {
            errorMessage(commit, res.data.message);
            return;
        }

        const { data } = res.data;
        console.log('data',data);

        commit('SET_MEMBER_PROFILE', {
            target: 'memberProfile',
            data,
        });

        commit('SET_LOADED_STATUS', {
            target: 'memberProfile',
            loaded: true,
        });

    } catch (e) {
        errorMessage(commit);
    }
};


export const updateMemberProfile = async ({ commit, state }, { submitData }) => {
    try {
        const res = await axios.put(`${API_URL}/v1/userprofile`, submitData, { headers: { 'Authorization': MY_TOKEN }});

        if (res.data.error) {
            errorMessage(commit, res.data.message);
            return;
        }
        const { data } = res.data;
    } catch (e) {
        errorMessage(commit);
    }
};


// 獲得平均讚數

export const getAveragePower = async ({ commit, state }) => {
    try {
        const res = await axios.get(`${API_URL}/v1/power/avg`);

        if (res.data.error) {
            errorMessage(commit, res.data.message);
            return;
        }

        const { data } = res.data;

        commit('SET_AVERAGE_POWER', {
            target: 'averagePower',
            data,
        });

        commit('SET_LOADED_STATUS', {
            target: 'averagePower',
            loaded: true,
        });

    } catch (e) {
        errorMessage(commit);
    }
};




// 顯示讚數

export const getProfileLikes = async ({ commit, state }, { userId }) => {
    try {
        const res = await axios.get(`${API_URL}/v1/like/${userId}`);

        if (res.data.error) {
            errorMessage(commit, res.data.message);
            return;
        }

        const { data } = res.data;

        commit('SET_PROFILE_LIKES', {
            target: 'profileLikes',
            data,
        });

        commit('SET_LOADED_STATUS', {
            target: 'profileLikes',
            loaded: true,
        });

    } catch (e) {
        errorMessage(commit);
    }
};



// 拍拍手

export const giveAClap = async ({ commit, state }, { likedId }) => {
    try {
        const res = await axios.put(`${API_URL}/v1/like`,{ liked_id: likedId }, { headers: { 'Authorization': MY_TOKEN }});

        if (res.data.error) {
            errorMessage(commit, res.data.message);
            return;
        }

        const { data } = res.data;
        console.log('data',data);


    } catch (e) {
        errorMessage(commit);
    }
};


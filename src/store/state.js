import { AVATAR_INITIAL } from '../constants'

export const loaded = {
    membersData: false,
    userInfo: false,
    memberProfile: false,
    profileLikes: false
}

export const membersData = {
    data: []
};

export const userInfo = {
    data: {
        avatar_url: AVATAR_INITIAL,
        name: '無名氏',
        title: '未填',
        group: '未填',
        hobby: '未填',
        motto: '未填',
        power: {
            influence: 0,
            adapt: 0,
            imagine: 0,
            force: 0,
            karma: 0
        },
        createAt: null
    }
};

export const memberProfile = {
    data: {
        avatar_url: AVATAR_INITIAL,
        name: '無名氏',
        title: '未填',
        group: '未填',
        hobby: '未填',
        motto: '未填',
        power: {
            influence: 0,
            adapt: 0,
            imagine: 0,
            force: 0,
            karma: 0
        },
        createAt: null
    }
};


export const averagePower = {
    data: {
        adapt: 0,
        force: 0,
        imagine: 0,
        karma: 0,
        social: 0
    }
}



export const profileLikes = {
    data: {
        num_liked: 0
    }
}

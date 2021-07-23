'use strict';
const { githubInstance } = require('../utils/axios.util');

module.exports = {
    getProfile: async (username) => {
        const {data} = await githubInstance.get(`/users/${username}`);

        if(data && !data.message) {
            return data;
        }

        return null;
    }
};
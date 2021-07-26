'use strict';
import { githubInstance } from '../utils/axios.util';

export default {
    async getProfile(username) {
        const {data} = await githubInstance.get(`/users/${username}`);

        if(data && !data.message) {
            return data;
        }

        return null;
    }
};
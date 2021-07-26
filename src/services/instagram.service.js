'use strict';
import { instagramInstance } from '../utils/axios.util';

export default {
    async getProfile(username) {
        const { data } = await instagramInstance.get(`/${username}/?__a=1`);

        if(data && data.graphql && data.graphql.user) {
            return data.graphql.user;
        }

        return null;
    }
};
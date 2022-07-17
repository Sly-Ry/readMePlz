const axios = require('axios');

const api = {
    async getUser(input) {
        try { let response = await axios
            .get(`http://api.github.com/users/${input.username}`);
            return response.data;
        }
        catch(error) {
            console.log(error);
        }
    }
};

module.exports(api);
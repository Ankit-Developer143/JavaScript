class Github {
    constructor() {

        //multiRequest coming at a same time that's why we use c_id and C_secret
        this.client_id = '34a22324ebfc9ff900dd ';
        this.client_secret = 'd4cd69b2a89597476e5d4d76baef56e7613bd653';
    }
    async getUser(user) {
        const profileResponse = await fetch
            (`https://api.github.com/users/${user}? client_id =${this.client_id}&client_secret${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
} 




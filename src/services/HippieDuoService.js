class HippieDuoService {
    baseUrl = ''
    constructor() {
        this.baseUrl = "https://hippieduo-backend.herokuapp.com";
    }

    async sendRSVP(data) {
        const response = await fetch(`${this.baseUrl}/rsvp`,{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await response.json()
    }

}

export default new HippieDuoService();
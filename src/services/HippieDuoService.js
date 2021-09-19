class HippieDuoService {
    baseUrl = ''
    constructor() {
        this.baseUrl = "http://localhost:9090";
    }

    async sendRSVP(data) {
        const response = await fetch(`${this.baseUrl}/contact`,{
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
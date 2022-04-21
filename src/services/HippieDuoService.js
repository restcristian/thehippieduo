class HippieDuoService {
    baseUrl = ''
    constructor() {
        this.baseUrl = process.env.NODE_ENV === "production" ? "https://hippieduo-backend.herokuapp.com" : "http://localhost:9090";
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

    async getInstagramFeed(){
        try {
            const response = await fetch(`${this.baseUrl}/instagram-posts`,{
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            return await response.json();
        }catch (error){
            console.error(error);
        }
    }

}

export default new HippieDuoService();
const contentful = require("contentful");

const client = contentful.createClient({
    accessToken: 'VadmiruFCGtfK9jQFjuF32qNEy3zacf5kETgDuueb8I',
    space: `i15a8mijupxg`
});

class ContentfulService {
    async getAllEntries() {
        try {
            const response = await client.getEntries();
            this.entries = response;
            return response.items;

        }catch(error){
            console.error(error);
            return null;
        }
    }
    
}
export default new ContentfulService();


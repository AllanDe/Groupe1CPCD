import config from "../config"
let contentful = require("contentful");
const client = contentful.createClient(config.contentful);

export default{
    getCategories: function (){
        return client.getEntries({
            'content_type': 'catgorie'
        })
    },
    getLastFiveCategories: function (){
        return client.getEntries({
            'content_type': 'catgorie',
            'fields.nom[ne]': 'lait',
            limit: 5,
            order: 'sys.createdAt'
        })
    }
}
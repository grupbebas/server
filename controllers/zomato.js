const axios = require('axios')
require('dotenv').config()

module.exports = {
    searchByLocation: function(req, res){
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/locations?query=${req.params.key}`,
            headers: {
                'user-key': process.env.ZOMATO_KEY
            }
        })
        .then((result) => {
            let id = result.data.location_suggestions[0].entity_id
            let type = result.data.location_suggestions[0].entity_type
            axios({
                method: 'GET',
                url: `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=${type}&count=20&sort=rating&order=desc`,
                headers: {
                    'user-key': process.env.ZOMATO_KEY
                }
            })
            .then((restos) => {
                // console.log(restos);
                res.send(restos.data.restaurants)
            })
        })
        .catch((err) => {
            res.status(500).json({err: err})
        });
    }
}
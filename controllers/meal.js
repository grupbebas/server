const axios = require('axios');

class MealController {

    static search(req, res) {
        axios({
            url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${req.params.nameSearch}`,
            method: "GET"
        })
            .then(function(resolve) {
                res.status(200).json({data: resolve.data});
            })
            .catch(function(reject) {
                res.status(500).json(reject)
            });
    }

}

module.exports = MealController;
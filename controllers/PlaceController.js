const axios = require('axios')
require('dotenv').config()

class PlaceController {

  static getNearbyPlace (req, res) {
    let query = req.params.place
    let lat = req.params.lat
    let lng = req.params.lng
    axios({
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${lat},${lng}&radius=1500&query=${query}&key=${process.env.GOOGLE_PLACE_API_KEY}`,
      method: 'get'
    })
      .then(data => {
        let results = data.data
        res.status(200).json({
          status: 'success',
          data: results 
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          message: err.message
        })
      })
  }

}

module.exports =PlaceController
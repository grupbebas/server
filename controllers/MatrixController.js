const axios = require('axios')
require('dotenv').config()

class MatrixController {

  static getDistance(req, res) {
    let latOrigin = req.body.lat
    let lngOrigin = req.body.lng
    let address = req.body.address

    axios({
      url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${latOrigin},${lngOrigin}&destinations=${address}&key=${process.env.GOOGLE_PLACE_API_KEY}`,
      method: 'get'
    })
      .then(response => {
        let data = response.data.rows
        console.log('data::', response.data)
        res.status(200).json({
          status: 'success',
          data: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

}

module.exports = MatrixController
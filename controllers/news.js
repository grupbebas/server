const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e135cfe3ae9e490892460c6a9dc7783c');

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

class newsController {

  static getHighlight(req, res) {
    console.log('masuk pake eko');
    
    newsapi.v2.topHeadlines({
      country: 'id'
    }).then(response => {
      res.status(200).json(response.articles);
    }).catch(err => {
      res.status(500).json({
        msg : err
      })
    })
  }

  static getNewsByCategory(req, res) {
    console.log('masuk pak koko');
    
    newsapi.v2.topHeadlines({
      category: req.params.category,
      country: 'id'
    }).then(response => {
      res.status(200).json(response.articles);
    }).catch(err => {
      res.status(500).json({
        msg : err
      })
    })
  }

  static getNewsByQuery(req, res) {
    newsapi.v2.topHeadlines({
      q: req.params.query,
      country: 'id'
    }).then(response => {
      res.status(200).json(response.articles);
    }).catch(err => {
      res.status(500).json({
        msg : err
      })
    })
  }

  static getNewsByTitle(req, res) {
    newsapi.v2.topHeadlines({
      q: req.params.query,
      country: 'id'
    }).then(response => {
      res.status(200).json(response.articles[0]);
    }).catch(err => {
      res.status(500).json({
        msg : err
      })
    })
  }

}

module.exports = newsController
**Title**
----
  <_Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple)._>

* **URL**

  Route | HTTP | Description
------------ | ------------- | -------------
/news/ | GET | Get all news highlight info
/news/:category | GET | Get all news based on category
/news/search/:query  | GET  | Get all news based on search parameter query
/news/read/:title  | GET  | Get a single news info search by title parameter

* **Method:**

  `GET` |
  
*  **URL Params**

  **Required:** 
  :category | STRING | 
  :query  | STRING  | 
  :title  | STRING  | 

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `[articlesObject]`
 
* **Error Response:**


  * **Code:** 500 Internal Server Error <br />


class API {

  static getSymptoms(bodypart) {
   return fetch ('http://localhost:3000/api/v1/filtersymptoms/', {
        method: 'POST',
        headers: { 
          'content-type': 'application/json', 
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            category: bodypart
          })
    }).then(res => res.json())
    }

}


export default API


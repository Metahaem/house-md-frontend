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

    static getSymptomsOfIssue(issueID) {
        return fetch ('http://localhost:3000/api/v1/getissuesymptoms/', {
             method: 'POST',
             headers: { 
               'content-type': 'application/json', 
               'Authorization': localStorage.getItem('token')
             },
             body: JSON.stringify({
                 id: issueID
               })
         }).then(res => res.json())
         }



    static getDiagnoses(idArray) {
        return fetch ('http://localhost:3000/api/v1/filterdiagnoses/', {
             method: 'POST',
             headers: { 
               'content-type': 'application/json', 
               'Authorization': localStorage.getItem('token')
             },
             body: JSON.stringify({
                 ids: idArray
               })
         }).then(res => res.json())
        }

 }


export default API


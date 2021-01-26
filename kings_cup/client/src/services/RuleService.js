const baseURL = 'http://localhost:3000/api/houserules'


export default {

    updateRule(rule) {
        return fetch(baseURL + rule._id, {
          method: 'PUT',
          body: JSON.stringify(rule),
          headers: { 
            'Content-Type': 'application/json' 
          }
        })
          .then(res => res.json());
      },
}
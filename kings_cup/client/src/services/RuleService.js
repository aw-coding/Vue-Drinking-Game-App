const baseURL = 'http://localhost:3000/api/houserules/'


export default {

    updateRule(rule) {
        const updatedRule = {
            name:rule.name,
            text:rule.text,
            value:rule.value
        }
        return fetch(baseURL + rule._id, {
          method: 'PUT',
          body: JSON.stringify(updatedRule),
          headers: { 
            'Content-Type': 'application/json' 
          }
        })
          .then(res => res.json());
      }
}
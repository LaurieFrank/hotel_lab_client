const baseURL = 'http://localhost:3000/api/rooms'

export default {
  getRooms(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postRoom(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteRoom(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }

}

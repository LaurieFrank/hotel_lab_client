const baseURL = 'http://localhost:3000/api/rooms/'

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
  },

  getOneRoom(id){
    return fetch(baseURL + id)
    .then(res => res.json())
  },

  updateRoom(payload){
    return fetch(baseURL + payload._id {
      method: 'PUT',
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
  }

}

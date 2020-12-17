export const getRooms = () => fetch("http://localhost:4000/").then(res => res.json())

export const createRoom = (room) => fetch("http://localhost:4000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(room)
})  

export const updateRoom = (room, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(room)
})

export const deleteRoom = (id) => fetch(`http://localhost:4000/Edit/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(id)
})

export const getRoom = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())
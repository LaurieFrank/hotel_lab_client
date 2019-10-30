<template lang="html">
<div id="roomsGrid">
  <div class="room" v-for="room in rooms">
    <h2>{{room.name}}</h2>
    <p>E-mail: {{room.email}}</p>
    <p>Checked In: {{room.checkIn}}</p>
    <button v-on:click="handleDelete(room._id)">Delete Booking</button>
    <button v-on:click="handleUpdate(room)">Change Check In Status</button>
  </div>

</div>
</template>

<script>
import RoomService from '../services/roomService.js'
import {eventBus} from '../main.js';

export default {
  name: "rooms-grid",
  props: ["rooms"],

  methods: {
    handleDelete(id){
      RoomService.deleteRoom(id)
      .then(response => eventBus.$emit('room-deleted', id));
    },
    handleUpdate(payload){
      payload.checkIn = !payload.checkIn;
      console.log("Payload checkin: ",payload);
      RoomService.updateRoom(payload)
      .then(response => eventBus.$emit('room-updated', payload))
    }
  }

}
</script>

<style lang="css" scoped>
#roomsGrid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.room {
  background-color: #A499B3;
  padding: 10px;
  font-family: arial;
}
</style>

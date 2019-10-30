<template lang="html">
<div id="roomsGrid">
  <div class="room" v-for="room in rooms">
    <h2>{{room.name}}</h2>
    <p>E-mail: {{room.email}}</p>
    <p>Checked In: {{room.checkIn}}</p>
    <button v-on:click="handleDelete(room._id)">Delete Booking</button>
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
    }
  }

}
</script>

<style lang="css" scoped>
</style>

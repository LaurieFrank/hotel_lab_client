<template lang="html">
<div id="roomsGrid">
  <div class="room" v-for="room in rooms">
    <h2>{{room.name}}</h2>
    <p>E-mail: {{room.email}}</p>
    <p>Checked In: {{room.checkIn}}</p>
  </div>

</div>
</template>

<script>
import RoomService from '../services/roomService.js'

export default {
  name: "rooms-grid"
}
</script>

<style lang="css" scoped>
</style>

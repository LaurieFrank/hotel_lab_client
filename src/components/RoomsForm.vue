<template lang="html">
  <form class="" action="index.html" method="post">
      <h2>Add a Booking</h2>
      <div class="formWrap">
        <label for="name">Name: </label>
        <input type="text" id="name" v-model="name" >
      </div>
      <div class="formWrap">
        <label for="email">Email: </label>
        <input type="text" id="email" v-model="email" >
      </div>
      <div class="formWrap">
        <label for="checkIn">Are they checked in? </label>
        <input type="checkbox" id="checkbox" value="true" v-model="checkIn">
      </div>

      <input type="submit" value="Submit Guest" id="save">
  </form>
</template>

<script>
import {eventBus} from '../main';
import RoomService from '../services/roomService.js';
export default {
  name: "room-form",

  data(){
    return {
      name: "",
      email: "",
      checkIn: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>

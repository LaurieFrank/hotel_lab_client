<template>
<!-- <room-form></room-form> -->
<rooms-grid :rooms="rooms"></rooms-grid>
</template>

<script>
import RoomsGrid from './components/RoomsGrid';
import RoomService from './services/roomService';

export default {
  name: 'app',
  components: {
    'rooms-grid': RoomsGrid
  },
  data (){
    return {
      rooms: []
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData(){
      RoomService.getRooms()
      .then(rooms => this.rooms = rooms);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

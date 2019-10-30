<template>
  <div>
    <room-form />
    <rooms-grid :rooms="rooms"></rooms-grid>
  </div>
</template>

<script>
import RoomsGrid from './components/RoomsGrid';
import RoomService from './services/roomService';
import RoomsForm from './components/RoomsForm';

export default {
  name: 'app',
  components: {
    'rooms-grid': RoomsGrid,
    'room-form': RoomsForm
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

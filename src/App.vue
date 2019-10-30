<template>
  <div id="title">
    <h1>M&L's Hotel</h1>
    <div>
      <room-form />
      <br>
      <rooms-grid :rooms="rooms"></rooms-grid>
    </div>
  </div>
</template>

<script>
import RoomsGrid from './components/RoomsGrid';
import RoomService from './services/roomService';
import RoomsForm from './components/RoomsForm';
import {eventBus} from './main.js';

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

    eventBus.$on('room-added', room => this.rooms.push(room));

    eventBus.$on('room-deleted', id => {
      const index = this.rooms.findIndex(room => room._id === id);
      this.rooms.splice(index, 1);
    });

    eventBus.$on('room-updated', newRoom => {
      const index = this.rooms.findIndex(room => room._id === newRoom._id);
      this.rooms.splice(index, 1, newRoom);

    })
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

h1 {
  text-align: center;
}
</style>

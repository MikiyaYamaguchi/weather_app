<template>
  <div class="card">
    <router-link :to="{name: 'Detail', query: {id: city}}">
      <div class="city">{{ city }}</div>
      <div class="temp">{{ temp }}&#8451;</div>
      <div class="condition">{{ condition }}</div>
      <div class="condition_img">
        <figure v-if="condition == 'Rain'">
          <img src="../assets/rain.png" :alt="condition" />
        </figure>
        <figure v-else-if="condition == 'Sun'">
          <img src="../assets/sun.png" :alt="condition" />
        </figure>
        <figure v-else-if="condition == 'Clouds'">
          <img src="../assets/cloudy.png" :alt="condition" />
        </figure>
        <figure v-else-if="condition == 'Mist'">
          <img src="../assets/mist.png" :alt="condition" />
        </figure>
        <figure v-else-if="condition == 'Drizzle'">
          <img src="../assets/drizzle.png" :alt="condition" />
        </figure>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      conditionImg: ""
    }
  },
  props: {
    city: {
      type: String
    },
    temp: {
      type: Number
    },
    condition: {
      type: []
    },
  }
}
</script>

<style scoped>
.card {
  width: 23.5%;
  margin-left: 2%;
  -moz-box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.2);
}
.card > a {
  display: block;
  padding: 15%;
  box-sizing: border-box;
  text-decoration: none;
  color: #222;
  background: rgba(255, 255, 255, 0.5);
  transition: 0.2s;
}
.card > a:hover {
  background: #fff;
  transition: 0.2s;
}
.card:first-child {
  margin-left: 0;
}
.city {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0.5em;
}
.temp {
  font-size: 20px;
  margin-bottom: 0.5em;
}
.condition_img figure img {
  width: 90%;
  max-width: 130px;
}
@media screen and (max-width: 767px) {
  .card {
    width: 49%;
    margin-bottom: 2%;
  }
  .card:nth-child(2n + 1) {
    margin-left: 0;
  }
  .condition_img figure img {
    width: 100%;
  }
}
</style>

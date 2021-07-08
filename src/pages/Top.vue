<template>
  <div class="container">
    <div class="cardWrap" :class="animated">
      <WeatherCard
        v-for="(item, i) in prefectures"
        :key="item"
        :city="prefecturesData.city[i]"
        :temp="prefecturesData.temp[i]"
        :condition="prefecturesData.condition[i].main"
      />
    </div>
  </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard.vue'
export default {
  data () {
    return {
      animated: "",
      prefectures: ["Tokyo,jp", "Osaka,jp", "Aichi,jp", "Fukuoka,jp"],
      prefecturesData: {
        city: [],
        temp: [],
        condition: [{
          main: "Sun"
        }, {
          main: "Sun"
        }, {
          main: "Sun"
        }, {
          main: "Sun"
        }]
      }
    }
  },
  components: {
    WeatherCard
  },
  methods: {
    getWeatherData: async function (count) {
      await this.axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: this.prefectures[count],
          units: 'metric',
          appid: '64ecb065b2b08878e61593c989ee71e5'
        }
      })
        .then(response => {
          this.prefecturesData.city[count] = response.data.name
          this.prefecturesData.temp[count] = response.data.main.temp
          this.prefecturesData.condition[count].main = response.data.weather[0].main;
          this.count++;
        })
        .catch(error => {
          console.error(err)
        })
    },
    settingXxx: async function (count) {
      await this.getWeatherData(count)
    },
  },
  mounted () {
    for (let i = 0; i < this.prefectures.length; i++) {
      this.settingXxx(i);
    }
    setTimeout(() => {
      this.animated = "animated";
    }, 500)
  }
}
</script>

<style scoped>
.container {
  padding: 0 2%;
  width: 100%;
}
.cardWrap {
  display: flex;
  flex-wrap: wrap;
}
.cardWrap > * {
  opacity: 0;
  transform: translateY(15px);
}
.cardWrap.animated > * {
  opacity: 1;
  transform: translateY(0);
  transition: 0.7s;
}
.cardWrap.animated > *:nth-child(1) {
  transition-delay: 0s;
}
.cardWrap.animated > *:nth-child(2) {
  transition-delay: 0.4s;
}
.cardWrap.animated > *:nth-child(3) {
  transition-delay: 0.8s;
}
.cardWrap.animated > *:nth-child(4) {
  transition-delay: 1.2s;
}
</style>

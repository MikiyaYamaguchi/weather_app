<template>
  <div class="container">
    <div class="detail_wrap" :class="animated">
      <h2>{{ city }}</h2>
      <div class="content">
        <p class="condition_txt">{{ condition.main }}</p>
        <div class="condition_img">
          <figure v-if="condition.main == 'Rain'">
            <img src="../assets/rain.png" :alt="condition" />
          </figure>
          <figure v-else-if="condition.main == 'Sun'">
            <img src="../assets/sun.png" :alt="condition" />
          </figure>
          <figure v-else-if="condition.main == 'Clouds'">
            <img src="../assets/cloudy.png" :alt="condition" />
          </figure>
          <figure v-else-if="condition.main == 'Mist'">
            <img src="../assets/mist.png" :alt="condition" />
          </figure>
          <figure v-else-if="condition.main == 'Drizzle'">
            <img src="../assets/drizzle.png" :alt="condition" />
          </figure>
        </div>
      </div>
      <div class="content">
        <p>気温：{{ temp }}&#8451;</p>
        <p>最高気温：{{ tempMax }}&#8451;</p>
        <p>最低気温：{{ tempMin }}&#8451;</p>
        <p>体感温度：{{ feelsLike }}&#8451;</p>
        <p>気圧：{{ pressure }}mmHg</p>
        <p>湿度：{{ humidity }}％</p>
      </div>
      <div class="content">
        <p>風速：{{ windSpeed }}m/s</p>
        <p>風向き：{{ windDeg }}（北=0, 東=90, 南=180, 西=270）</p>
        <p>雲量：{{ clouds }}％</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city_key: String
  },
  data () {
    return {
      animated: "",
      city: String,
      temp: Number,
      tempMax: Number,
      tempMin: Number,
      feelsLike: Number,
      pressure: Number,
      humidity: Number,
      windSpeed: Number,
      windDeg: Number,
      clouds: Number,
      condition: {
        main: String
      }
    }
  },
  methods: {
    getWeatherData: async function () {
      await this.axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: this.$route.query.id,
          units: 'metric',
          appid: '64ecb065b2b08878e61593c989ee71e5'
        }
      })
        .then(response => {
          this.city = response.data.name
          this.condition = response.data.weather[0];
          this.temp = response.data.main.temp
          this.tempMax = response.data.main.temp_max
          this.tempMin = response.data.main.temp_min
          this.feelsLike = response.data.main.feels_like
          this.pressure = response.data.main.pressure
          this.humidity = response.data.main.humidity
          this.windSpeed = response.data.wind.speed
          this.windDeg = response.data.wind.deg
          this.clouds = response.data.clouds.all
        })
        .catch(error => {
          console.error(err)
        })
    },
    settingXxx: async function () {
      await this.getWeatherData()
    },
  },
  mounted () {
    this.settingXxx();
    setTimeout(() => {
      this.animated = "animated";
    }, 500)
  },
  watch: {
    '$route' (to, from) {
      this.getWeatherData(to.params.id)
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
}
.detail_wrap {
  background: rgba(255, 255, 255, 0.5);
  margin: 0 3%;
  padding: 4% 8%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}
.detail_wrap > * {
  opacity: 0;
  transform: translateY(15px);
}
.detail_wrap.animated > * {
  opacity: 1;
  transform: translateY(0);
  transition: 0.7s;
}
.detail_wrap.animated > *:first-child {
  transition-delay: 0s;
}
.detail_wrap.animated > *:nth-child(2) {
  transition-delay: 0.4s;
}
.detail_wrap.animated > *:nth-child(3) {
  transition-delay: 0.8s;
}
.detail_wrap.animated > *:nth-child(4) {
  transition-delay: 1.2s;
}
.detail_wrap h2 {
  margin: 0;
  margin-bottom: 0.7em;
  font-size: 50px;
  width: 100%;
}
.detail_wrap p {
  font-size: 18px;
}
.detail_wrap .content {
  width: 32%;
  margin-left: 2%;
}
.detail_wrap .content .condition_txt {
  font-size: 30px;
  font-weight: bold;
}
.detail_wrap .content .condition_img img {
  max-width: 200px;
}
.detail_wrap .content:nth-child(2) {
  margin-left: 0;
}
@media screen and (max-width: 767px) {
  .detail_wrap {
    flex-direction: column;
    margin: 0 3% 3% 3%;
  }
  .detail_wrap .content {
    width: 100%;
  }
  .detail_wrap .content:last-child p:first-child {
    margin-top: 0;
  }
  .detail_wrap .condition_img figure {
    text-align: center;
  }
  .detail_wrap .content .condition_txt {
    margin-top: 0;
  }
}
</style>

<template>
  <header>
    <div class="container">
      <div class="header_wrap">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/logo.png" alt="How is the weather in JP" />
          </router-link>
        </div>
        <div class="nav_wrap">
          <div class="gnav_wrap">
            <router-link to="/">Top</router-link>
            <router-link to="/by_area">By area</router-link>
          </div>
          <div class="search_wrap">
            <select name="prefecture" id="prefecture" v-model="selectedValue">
              <option
                v-for="prefecture in selectPrefecture"
                :key="prefecture.id"
                :value="prefecture.value"
              >{{ prefecture.name }}</option>
            </select>
            <router-link :to="{name: 'Detail', query: {id: selectedValue}}" class="search"></router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      selectedValue: "Hokkaido",
      selectPrefecture: [
        { id: 1, value: "Hokkaido", name: "北海道" },
        { id: 2, value: "Aomori", name: "青森県" },
        { id: 3, value: "Iwate", name: "岩手県" },
        { id: 4, value: "Miyagi", name: "宮城県" },
        { id: 5, value: "Akita", name: "秋田県" },
        { id: 6, value: "Yamagata", name: "山形県" },
        { id: 7, value: "Fukushima", name: "福島県" },
        { id: 8, value: "Ibaraki", name: "茨城県" },
        { id: 9, value: "Tochigi", name: "栃木県" },
        { id: 10, value: "Gunma", name: "群馬県" },
        { id: 11, value: "Saitama", name: "埼玉県" },
        { id: 12, value: "Chiba", name: "千葉県" },
        { id: 13, value: "Tokyo", name: "東京都" },
        { id: 14, value: "Kanagawa", name: "神奈川県" },
        { id: 15, value: "Nigata", name: "新潟県" },
        { id: 16, value: "Toyama", name: "富山県" },
        { id: 17, value: "Ishikawa", name: "石川県" },
        { id: 18, value: "Fukui", name: "福井県" },
        { id: 19, value: "Yamanashi", name: "山梨県" },
        { id: 20, value: "Nagano", name: "長野県" },
        { id: 21, value: "Gifu", name: "岐阜県" },
        { id: 22, value: "shizuoka", name: "静岡県" },
        { id: 23, value: "Aichi", name: "愛知県" },
        { id: 24, value: "Mie", name: "三重県" },
        { id: 25, value: "Shiga", name: "滋賀県" },
        { id: 26, value: "Kyoto", name: "京都府" },
        { id: 27, value: "Osaka", name: "大阪府" },
        { id: 28, value: "Hyogo", name: "兵庫県" },
        { id: 29, value: "Nara", name: "奈良県" },
        { id: 30, value: "Wakayama", name: "和歌山県" },
        { id: 31, value: "Tottori", name: "鳥取県" },
        { id: 32, value: "Shimane", name: "島根県" },
        { id: 33, value: "Okayama", name: "岡山県" },
        { id: 34, value: "Hiroshima", name: "広島県" },
        { id: 35, value: "Yamaguchi", name: "山口県" },
        { id: 36, value: "Tokushima", name: "徳島県" },
        { id: 37, value: "Kagawa", name: "香川県" },
        { id: 38, value: "Ehime", name: "愛媛県" },
        { id: 39, value: "Kochi", name: "高知県" },
        { id: 40, value: "Fukuoka", name: "福岡県" },
        { id: 41, value: "Saga", name: "佐賀県" },
        { id: 42, value: "Nagasaki", name: "長崎県" },
        { id: 43, value: "Kumamoto", name: "熊本県" },
        { id: 44, value: "Oita", name: "大分県" },
        { id: 45, value: "Miyazaki", name: "宮崎県" },
        { id: 46, value: "Kagoshima", name: "鹿児島県" },
        { id: 47, value: "Okinawa", name: "沖縄県" },
      ]
    }
  },
  head: {
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' }]
  }
}
</script>

<style scoped>
header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
header .container {
  width: 100%;
}
header .header_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 4%;
  box-sizing: border-box;
}
header .header_wrap .logo img {
  max-width: 478px;
}
header .header_wrap .search_wrap select {
  min-width: 150px;
  border: none;
  border-bottom: 1px solid #222;
  font-size: 15px;
  padding: 0.2em;
  background: transparent;
  -moz-box-shadow: 3px 3px 5pz 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 3px 3px 5pz 2px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 3px 3px 5pz 2px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 5pz 2px rgba(0, 0, 0, 0.2);
}
header .header_wrap .nav_wrap {
  display: flex;
  align-items: flex-end;
}
header .header_wrap .search_wrap a {
  border: none;
  font-size: 16px;
  padding: 0.2em 0.6em;
}
header .header_wrap .gnav_wrap {
  min-width: 150px;
}
.gnav_wrap a {
  text-decoration: none;
  color: #222;
  font-size: 18px;
  margin-left: 10%;
}
.gnav_wrap a:first-child {
  margin-left: 0;
}
.gnav_wrap a:hover {
  text-decoration: underline;
  transition: 0.2s;
}
header .header_wrap .search_wrap .search {
  width: 10px;
  height: 10px;
  background: url(../assets/search.png) no-repeat center/contain;
  margin-left: 10px;
}
@media screen and (max-width: 767px) {
  header {
    margin-bottom: 5%;
  }
  header .header_wrap .logo img {
    max-width: 250px;
  }
  header .header_wrap .search_wrap select {
    min-width: 100px;
  }
  header .header_wrap {
    flex-direction: column;
  }
  .gnav_wrap a {
    font-size: 16px;
  }
  header .header_wrap .search_wrap .search {
    widows: 5px;
    height: 5px;
  }
}
</style>

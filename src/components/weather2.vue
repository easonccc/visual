<template>
  <div class="container">
    <div class="page">
      <div class="bottom">
        <div class="wL">
          <div class="weatherBox" v-if="weather">
            <div>
              <span>{{ forecast.ymd }}</span>
              <span>{{ forecast.week }}</span>
            </div>
            <div class="flex">
              <div>
                <img :src="forecast.type | filterType" />
              </div>
            </div>

            <div class="sh">
              {{ weather.wendu }}
              <span class="desc">{{ forecast.type }}(实时)</span>
            </div>
            <div>
              {{ forecast.low | filterWd2 }}~{{ forecast.high | filterWd }}
            </div>

            <div>{{ forecast.fx }} {{ forecast.fl }}</div>
            <div>PM2.5:{{ weather.pm25 }} {{ weather.quality }}</div>

            <div>出行:{{ weather.ganmao }}</div>
          </div>
        </div>
        <div class="wR">
          <div class="forecastAll">
            <div v-for="(item, index) in forecastAll">
              <div>{{ item.week }}</div>
              <div>{{ item.ymd }}</div>
              <img :src="item.type | filterType" />
              <div>{{ item.low | filterWd2 }}~{{ item.high | filterWd }}</div>
              <div>{{ item.type }}</div>
              <div>{{ item.fx }} {{ item.fl }}</div>
              <div>PM2.5:{{ item.aqi }}</div>
            </div>
          </div>
          <div class="wdesc" v-if="weather">
            <div>湿度:{{ weather.shidu }}</div>
            <div>{{ forecast.notice }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon1 from "../assets/img/cloud.png";
import icon2 from "../assets/img/sun.png";
import icon3 from "../assets/img/yin.png";
import icon4 from "../assets/img/xiaoyu.png";
import icon5 from "../assets/img/dayu.png";
import icon6 from "../assets/img/yjx.png";
import icon7 from "../assets/img/xx.png";
export default {
  data() {
    return {
      weather: null,
      forecast: null,
      forecastAll: null,
      active: 0,
      cityList: [
        {
          name: "伊川",
          id: 101180906,
        },
        {
          name: "郑州市",
          id: 101180101,
        },
        {
          name: "开封市",
          id: 101180801,
        },
        {
          name: "洛阳市",
          id: 101180901,
        },
        {
          name: "平顶山市",
          id: 101180501,
        },
        {
          name: "安阳市",
          id: 101180201,
        },
        {
          name: "鹤壁市",
          id: 101181201,
        },
        {
          name: "新乡市",
          id: 101180301,
        },
        {
          name: "焦作市",
          id: 101181101,
        },
        {
          name: "濮阳市",
          id: 101181301,
        },
        {
          name: "许昌市",
          id: 101180401,
        },
        {
          name: "漯河市",
          id: 101181501,
        },
        {
          name: "三门峡市",
          id: 101181701,
        },
        {
          name: "商丘市",
          id: 101181001,
        },
        {
          name: "周口市",
          id: 101181401,
        },
        {
          name: "驻马店市",
          id: 101181601,
        },
        {
          name: "南阳市",
          id: 101180701,
        },
        {
          name: "信阳市",
          id: 101180601,
        },
        {
          name: "济源市",
          id: 101181801,
        },
      ],
    };
  },
  filters: {
    filterWd(item) {
      return item.replace("高温", "");
    },
    filterWd2(item) {
      return item.replace("低温", "").replace("℃", "");
    },
    filterType(item) {
      switch (item) {
        case "多云":
          return icon1;
          break;
        case "晴":
          return icon2;
          break;
        case "阴":
          return icon3;
          break;
        case "小雨":
          return icon4;
          break;
        case "大雨":
          return icon5;
          break;
        case "雨夹雪":
          return icon6;
          break;
        case "小雪":
          return icon7;
          break;
      }
    },
  },
  created() {
    this.getWeather(this.cityList[0].id);
  },
  methods: {
    getWeather(cityId) {
      var that = this;
      let url = encodeURIComponent(
        `https://weather.zlyun168.com/api/weather/city/${cityId}`
      );
      url = `https://tool.58h.com.cn/agency?url=${url}`;
      // let url = 'https://weather.zlyun168.com/api/weather/city/101180906';
      console.log("---", url);
      this.common.http
        .get(url)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          console.log(res.data.data.forecast[0]);
          let forecastAll = res.data.data;
          that.weather = forecastAll;
          that.forecast = forecastAll.forecast[0];
          forecastAll.forecast.shift();
          that.forecastAll = forecastAll.forecast.slice(0, 6);
        })
        .catch((err) => {
          console.log(err);
        });
      let forecastAll = {
        message: "success感谢又拍云(upyun.com)提供CDN赞助",
        status: 200,
        date: "20200303",
        time: "2020-03-03 15:06:07",
        cityInfo: {
          city: "伊川县",
          citykey: "101180906",
          parent: "洛阳市",
          updateTime: "13:38",
        },
        data: {
          shidu: "34%",
          pm25: 34.0,
          pm10: 63.0,
          quality: "良",
          wendu: "11",
          ganmao: "极少数敏感人群应减少户外活动",
          forecast: [
            {
              date: "03",
              high: "高温 12℃",
              low: "低温 1℃",
              ymd: "2020-03-03",
              week: "星期二",
              sunrise: "06:58",
              sunset: "18:28",
              aqi: 65,
              fx: "西北风",
              fl: "<3级",
              type: "多云",
              notice: "阴晴之间，谨防紫外线侵扰",
            },
            {
              date: "04",
              high: "高温 11℃",
              low: "低温 0℃",
              ymd: "2020-03-04",
              week: "星期三",
              sunrise: "06:57",
              sunset: "18:29",
              aqi: 85,
              fx: "东南风",
              fl: "3-4级",
              type: "晴",
              notice: "愿你拥有比阳光明媚的心情",
            },
            {
              date: "05",
              high: "高温 13℃",
              low: "低温 1℃",
              ymd: "2020-03-05",
              week: "星期四",
              sunrise: "06:56",
              sunset: "18:29",
              aqi: 128,
              fx: "东南风",
              fl: "4-5级",
              type: "晴",
              notice: "愿你拥有比阳光明媚的心情",
            },
            {
              date: "06",
              high: "高温 16℃",
              low: "低温 4℃",
              ymd: "2020-03-06",
              week: "星期五",
              sunrise: "06:55",
              sunset: "18:30",
              aqi: 136,
              fx: "东南风",
              fl: "<3级",
              type: "多云",
              notice: "阴晴之间，谨防紫外线侵扰",
            },
            {
              date: "07",
              high: "高温 18℃",
              low: "低温 3℃",
              ymd: "2020-03-07",
              week: "星期六",
              sunrise: "06:53",
              sunset: "18:31",
              aqi: 98,
              fx: "东北风",
              fl: "3-4级",
              type: "多云",
              notice: "阴晴之间，谨防紫外线侵扰",
            },
            {
              date: "08",
              high: "高温 17℃",
              low: "低温 5℃",
              ymd: "2020-03-08",
              week: "星期日",
              sunrise: "06:52",
              sunset: "18:32",
              aqi: 129,
              fx: "东南风",
              fl: "3-4级",
              type: "多云",
              notice: "阴晴之间，谨防紫外线侵扰",
            },
            {
              date: "09",
              high: "高温 13℃",
              low: "低温 1℃",
              ymd: "2020-03-09",
              week: "星期一",
              sunrise: "06:51",
              sunset: "18:33",
              fx: "西北风",
              fl: "5-6级",
              type: "小雨",
              notice: "雨虽小，注意保暖别感冒",
            },
            {
              date: "10",
              high: "高温 9℃",
              low: "低温 -1℃",
              ymd: "2020-03-10",
              week: "星期二",
              sunrise: "06:49",
              sunset: "18:34",
              fx: "西风",
              fl: "<3级",
              type: "多云",
              notice: "阴晴之间，谨防紫外线侵扰",
            },
            {
              date: "11",
              high: "高温 15℃",
              low: "低温 1℃",
              ymd: "2020-03-11",
              week: "星期三",
              sunrise: "06:48",
              sunset: "18:34",
              fx: "东南风",
              fl: "<3级",
              type: "阴",
              notice: "不要被阴云遮挡住好心情",
            },
            {
              date: "12",
              high: "高温 20℃",
              low: "低温 5℃",
              ymd: "2020-03-12",
              week: "星期四",
              sunrise: "06:47",
              sunset: "18:35",
              fx: "东南风",
              fl: "<3级",
              type: "晴",
              notice: "愿你拥有比阳光明媚的心情",
            },
            {
              date: "13",
              high: "高温 16℃",
              low: "低温 5℃",
              ymd: "2020-03-13",
              week: "星期五",
              sunrise: "06:45",
              sunset: "18:36",
              fx: "东风",
              fl: "<3级",
              type: "多云",
              notice: "阴晴之间，谨防紫外线侵扰",
            },
            {
              date: "14",
              high: "高温 13℃",
              low: "低温 4℃",
              ymd: "2020-03-14",
              week: "星期六",
              sunrise: "06:44",
              sunset: "18:37",
              fx: "东风",
              fl: "<3级",
              type: "阴",
              notice: "不要被阴云遮挡住好心情",
            },
            {
              date: "15",
              high: "高温 15℃",
              low: "低温 3℃",
              ymd: "2020-03-15",
              week: "星期日",
              sunrise: "06:43",
              sunset: "18:38",
              fx: "东北风",
              fl: "<3级",
              type: "阴",
              notice: "不要被阴云遮挡住好心情",
            },
            {
              date: "16",
              high: "高温 15℃",
              low: "低温 3℃",
              ymd: "2020-03-16",
              week: "星期一",
              sunrise: "06:41",
              sunset: "18:39",
              fx: "西北风",
              fl: "<3级",
              type: "阴",
              notice: "不要被阴云遮挡住好心情",
            },
            {
              date: "17",
              high: "高温 17℃",
              low: "低温 4℃",
              ymd: "2020-03-17",
              week: "星期二",
              sunrise: "06:40",
              sunset: "18:39",
              fx: "西北风",
              fl: "<3级",
              type: "多云",
              notice: "阴晴之间，谨防紫外线侵扰",
            },
          ],
          yesterday: {
            date: "02",
            high: "高温 11℃",
            low: "低温 0℃",
            ymd: "2020-03-02",
            week: "星期一",
            sunrise: "07:00",
            sunset: "18:27",
            aqi: 54,
            fx: "南风",
            fl: "3-4级",
            type: "小雨",
            notice: "雨虽小，注意保暖别感冒",
          },
        },
      };
      forecastAll = forecastAll.data;
      that.weather = forecastAll;
      that.forecast = forecastAll.forecast[0];
      forecastAll.forecast.shift();
      that.forecastAll = forecastAll.forecast.slice(0, 6);
    },
    selCity(item, index) {
      this.active = index;
      this.getWeather(item.id);
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.bottom {
  flex: 1;
  display: flex;

  .wL {
    width: 24%;
  }

  .wR {
    flex: 1;
    color: #485673;
    display: flex;
    flex-direction: column;

    .forecastAll {
      display: flex;
      flex: 1;

      img {
        // width: 80px;
        height: 80px;
        margin: 0 auto;
      }

      > div {
        flex: 1;
        border-right: 1px solid rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
        > div:first-child {
          font-size: 30px;
        }
      }
    }

    .wdesc {
      flex: 1;
      display: flex;
      justify-content: space-around;
      font-size: 32px;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
  }
}

.cityList {
  display: flex;
  color: #a2b3a7;
  font-size: 20px;
  padding: 0 140px;
  flex-wrap: wrap;
  // background: url("../assets/img/topbg2.png") no-repeat;
  background-size: 100% 100%;

  > div {
    width: 8%;
    margin-bottom: 40px;
    padding: 3px 0;
    cursor: pointer;
  }
}

.sel {
  color: white;
  // background: url("../assets/img/bgtopicon.png") no-repeat;
  background-size: 100% 100%;
}

.weatherBox {
  color: #485673;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  font-size: 24px;

  img {
    width: 130px;
    height: 130px;
  }

  > div {
    margin-bottom: 22px;
  }

  > div:nth-child(1) {
    font-size: 24px;
  }

  > div:nth-child(2) {
    font-size: 36px;
  }

  > div:nth-child(3) {
    font-size: 24px;
    margin-bottom: 0;
  }

  > div:last-child {
    font-size: 32px;
    margin-bottom: 0;
  }

  .sh {
    font-size: 72px !important;
    line-height: 72px;
    position: relative;
    width: 2em;
    margin: 0 auto;

    &::before {
      content: "℃";
      position: absolute;
      right: 0;
      top: 0;
      color: rgba(0, 0, 0, 0.7);
      font-size: 24px;
      line-height: 24px;
    }

    .desc {
      position: absolute;
      right: -85%;
      bottom: 0;
      color: rgba(0, 0, 0, 0.7);
      font-size: 24px;
      line-height: 24px;
    }
  }
}
</style>

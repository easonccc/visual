<template>
  <div :style="{ height: height, width: width }" id="container1"></div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "数量",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    bindData: {
      type: Array,
      default: function(value) {
        return value;
      },
    },
  },
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  watch: {},
  methods: {
    initMap() {
      let that = this;

      this.map = new AMap.Map("container1", {
        resizeEnable: true,
        center: [111.37965306613158, 30.633859630797573],
        zoom: 15,
      });

      //实时路况图层
      var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 20,
      });

      trafficLayer.setMap(this.map);
    },
  },
};
</script>
<style scoped lang="less"></style>

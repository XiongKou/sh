<template>
  <div class="container">
    <HeaderSearch @enlargeText="doSomething" @doThis="reFresh"> </HeaderSearch>

    <div class="car-list">
      <div class="car-item" v-for="(item, index) in baoma" :key="index">
        <!-- v-for循环 -->
        <div class="car-left">
          <h3>{{ index + 1 }}、{{ item.cheMing }}</h3>
          <p>公里数：{{ item.gongLi }}</p>
          <p>车架号：{{ item.cheJia }}</p>
          <p>入场计时日期：{{ item.ruChang }}</p>
          <p>预计上市日期：{{ item.yuJi }}</p>
          <p>车辆位置：{{ item.cheLiang }}</p>
        </div>
        <div class="car-right">
          <p class="th-status-0" v-if="item.tuut">{{ item.leftOne }}</p>
          <!-- v-if我们要判断里面有没有元素，有就显示，没有就隐藏 -->
          <p class="quality-status-50" v-if="item.toon">
            {{ item.leftTwo }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderSearch from "../components/HeaderSearch.vue";
// 引入axios的
import axios from "axios";

export default {
  data() {
    return {
      // 第三步这里命名baoma
      baoma: {},
    };
  },
  created() {
    this.search();
  },
  methods: {
    isShow() {
      if (this.item.length > 0) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    doSomething(value) {
      this.search(value);
    },
    reFresh() {
      this.search();
    },
    search(value) {
      // value不传就是underful，underful加个!就是字符串，
      if (!value) {
        value = "";
      }
      axios.get("http://localhost:8081/baoma/" + value).then((res) => {
        // 判断有没有length属性，length属性就是数组
        if ("length" in res.data) {
          this.baoma = res.data;
        } else {
          this.baoma = [res.data];
        }

        for (var i = 0; i < this.baoma.length; i++) {
          console.log(this.baoma[i]);
          //
          if (this.baoma[i].leftOne) {
            this.baoma[i].tuut = true;
          } else {
            this.baoma[i].tuut = false;
          }
        }
        for (var i = 0; i < this.baoma.length; i++) {
          console.log(this.baoma[i]);
          //
          if (this.baoma[i].leftTwo) {
            this.baoma[i].toon = true;
          } else {
            this.baoma[i].toon = false;
          }
        }
      });
    },
  },

  components: {
    HeaderSearch,
  },
};
</script>

<style scoped type="css">

.container {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  height: 100%;
}
.car-list {
  margin: 0 5px;
  flex: auto;
  overflow-y: scroll;
}
.car-item {
  border-bottom: 1px solid #efefef;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.car-left {
  line-height: 28px;
  padding-top: 10px;
}

.car-right {
  margin-top: 5px;
}
.car-right p {
  position: relative;
  font-style: normal;
  font-weight: normal;
  padding: 3px 15px 3px 20px;
  margin-bottom: 5px;
  font-size: 15px;
  -webkit-clip-path: polygon(
    0 0,
    10px 50%,
    0 100%,
    calc(100% - 10px) 100%,
    calc(100% - 10px) calc(100% + 5px),
    100% calc(100% + 5px),
    100% 0
  );
  clip-path: polygon(
    0 0,
    10px 50%,
    0 100%,
    calc(100% - 10px) 100%,
    calc(100% - 10px) calc(100% + 5px),
    100% calc(100% + 5px),
    100% 0
  );
}

/* .car-right > p::after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: -5px;
  border-top: solid 0 transparent;
  border-bottom: solid 5px transparent;
  border-left: solid 10px #ababab;
  border-right: solid 10px transparent;
  width: 0;
  height: 0;
} */
.th-status-0 {
  color: white;
  background-color: #ff5200;
}
.quality-status-50 {
  color: white;
  background-color: firebrick;
}
</style>
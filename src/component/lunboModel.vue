<template>
  <div class="carousel-wrap" id="carousel">
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl">
          <img :src="list.image" :alt="list.desc">
        </a>
      </li>
    </transition-group>
    <div class="carousel-items">
      <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slideList: [
        {
          "clickUrl": "https://m.uhouzz.com/activities/liverpool21days?from=uhouzzapp&yycode_app",
          "desc": "图1",
          "image": "https://pic.uhouzz.com/thumbImages/84/3fbdc679161632e791c744ad6ab6b4ddb74636.jpg"
        },
        {
          "clickUrl": "https://m.uhouzz.com/general-pages/jd-staging-introduction?from=uhouzzapp&yycode_app",
          "desc": "图2",
          "image": "https://pic.uhouzz.com/thumbImages/e5/4dba3776a25b6e1b4be91ddb2e809a10b5fc7b.jpg"
        },
        {
          "clickUrl": "https://jinshuju.net/f/5Is2lq?from=yycode_app",
          "desc": "图3",
          "image": "https://pic.uhouzz.com/thumbImages/a8/a403d89aee536dbfc54d12e527d8ced0454f0f.jpg"
        }
      ],
      currentIndex: 0,
      timer: ''
    }
  },
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    })
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    },
    stop() {
      clearInterval(this.timer)
      this.timer = null
    },
    change(index) {
      this.currentIndex = index
    },
    autoPlay() {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
  },

}
</script>
<style lang="scss" scoped>
@import "../static/scss/common";
.carousel-wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 120px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
  li {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 105px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    height: 3px;
    width: 20px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .active {
    background-color: green;
  }
}

.list-enter-active {
  transition: all 1s ease;
  transform: translateX(0)
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>



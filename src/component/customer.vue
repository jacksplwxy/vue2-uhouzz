<template>
    <div v-if="customerShow" class="customer">
        <div class="head">
            <span>小居</span>
            <div @click="closeCustomer();closeWebsocket()">
                <i class="arrow"></i>
                关闭
            </div>
        </div>
        <ul class="chats">
            <li v-for="message in totalMessage" v-bind:class=" message.position">
                <span class='send'>{{ message.text }}</span>
            </li>
        </ul>
        <div class="bottom">
            <i class="iconfont icon-smile icon"></i>
           <i class="iconfont icon-chat1 icon"></i>
           <i class="iconfont icon-zanbian icon" style=" margin-top: -5px;"></i>
            <input type="text" placeholder="请输入" v-model="value">
            <button @click="sendMessage">发 送</button>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
//http://www.cnblogs.com/stoneniqiu/p/5402311.html
export default {
  data() {
    return {
      value: "",
      totalMessage: []
    };
  },
  created: function() {
    if ("WebSocket" in window) {
      var ws = new WebSocket("ws://localhost:3333");
      ws.onopen = function(e) {
        console.log("websocket连接成功。。");
      };
      ws.onmessage = res => {
        let received_msg = res.data;
        console.log("您收到一条消息：" + received_msg);
        this.totalMessage.push({ text: received_msg, position: "left" });
      };
    } else {
      alert("您的浏览器不支持 WebSocket!");
      return;
    }
    let sendMessage = message => {
      //发送消息
      ws.send(message);
    };
    let closeCunstomer = () => {
      ws.onclose = function() {
        console.log("连接已关闭...");
      };
    };
    this.websocket = {
      sendMessage,
      closeCunstomer
    };
  },
  computed: {
    ...mapState(["customerShow"])
  },
  methods: {
    ...mapMutations(["openCustomer", "closeCustomer"]),
    sendMessage() {
      this.websocket.sendMessage(this.value);
      this.totalMessage.push({ text: this.value, position: "right" }); //right:发送消息在右侧
      this.value = "";
    },
    closeWebsocket() {
      console.log("websocket通信已被关闭");
      this.websocket.closeCunstomer();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../static/scss/font_icon/iconfont.css";
.customer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 100;
}

.head {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #ff5a5f;
  color: white;
  font-size: 14px;
}

.arrow {
  display: inline-block;
  width: 0px;
  height: 0px;
  border: 10px solid transparent;
  border-top: 10px solid white;
  vertical-align: middle;
  margin-top: 5px;
}

.bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 50px;
  background: #efefef;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .icon {
    font-size: 22px;
  }
  input {
    width: 60%;
    padding: 2px 5px;
  }
}

.chats {
  padding: 20px;
  li {
    list-style: none;
    margin: 10px;
  }
}

.send {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background: greenyellow;
}

.right {
  text-align: right;
}

.left {
  span {
    background: #3b8be0;
  }
}
</style>



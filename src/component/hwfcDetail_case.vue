<template>
    <div>
        <ul>
            <li v-for="(caseList,index) in caseLists">
                <img :src='caseList.pic' style="width: 100px;height: 100px;margin-right:15px;"/>
                <div>
                    <p>{{caseList.title}}</p>
                    <p>阅读数：{{caseList.click}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            caseLists: [
                { pic: 'http://pcpic.uhouzz.com/webappbuyonline/images/505497b2367eeb003363147df1f95f81.jpg', title: '点点滴滴体现温情服务，美国买房无忧', click: '732' },
                { pic: 'http://pcpic.uhouzz.com/webappbuyonline/images/505497b2367eeb003363147df1f95f81.jpg', title: '点点滴滴体现温情服务，美国买房无忧', click: '732' },
                { pic: 'http://pcpic.uhouzz.com/webappbuyonline/images/505497b2367eeb003363147df1f95f81.jpg', title: '点点滴滴体现温情服务，美国买房无忧', click: '732' },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../static/scss/common";
ul {
    padding: 10px;
    background: #fff;
    li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        p{
            margin: 10px;
        }
    }
}
</style>

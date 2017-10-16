<template>
    <div>
        <ul>
            <li v-for="(caseList,index) in caseLists">
                <p>{{caseList. question}}</p>
                <p style="color:#999;">{{caseList.answer}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            caseLists: [
                { question: 'Q1:美国房产的产权年限？', answer: '土地及房屋都是永久产权。公寓一般是所有业主共同持有的一块土地，而独栋别墅则是个人永久拥有该土地' },
                { question: 'Q2:美国房产好出租吗？', answer: '比较好出租，美国人房屋自有率为60%' },
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
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        p {
            margin: 10px;
        }
    }
}
</style>

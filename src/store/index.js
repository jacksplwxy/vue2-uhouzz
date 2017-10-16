import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    customerShow:false,
}
const mutations={
    openCustomer(state){
        state.customerShow=true;
    },
    closeCustomer(state){
        state.customerShow=false;
    },
}
export default new Vuex.Store({
    state,
    mutations
});
<template>
   <select v-model="currentCat" @click="sendCat"   class = 'drop_down'>
<option disabled value="" >Chose category</option>
<option :value="category.name" v-for="category in this.$store.state.categories" :key="category.id" >{{ category.name }}</option>
   </select>
</template>
<script>
export default {
 data(){
    return{
        currentCat: '',
    }
 }, methods:{
  sendCat(){
   this.$emit('sendCat', this.currentCat);
  }
 }
}
</script>
<style scoped>
.drop_down{
    border: 2px solid #646669;
    border-radius: 5px;
    outline: none;
    margin-top: 20px;
    height: 7%;
    width: 35%;
    }
</style>
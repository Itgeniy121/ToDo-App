<template >
    <div v-if="this.$store.state.categories.length > 0" class = 'CatList'>
    <h3 class=" h">Category List:</h3>
    <CategoryItem class ='task' v-for="category in this.$store.state.categories" :key="category.id" :category = 'category' @removeCat = 'removeCat'/>
   </div>
   <div v-else >
    <h3 class = 'h' style = "color: #D1D0C5;"> Категорий пока что нет</h3>
   </div> 
</template>
<script>
import CategoryItem from '@/components/CategoryItem';

export default {
    components: { CategoryItem },
    methods:{
        removeCat(elem){
            console.log(elem);
            this.$store.commit('removeCat', elem);
        }
    }

}
</script>
<style scoped>
.CatList{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 100%;
}
.h{
    margin-left: 20px;
}
    
</style>
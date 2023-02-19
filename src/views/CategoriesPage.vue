<template >
    <div class="cat_main_block">
    <router-link to="/" class = 'main_page_btn'>🡸 Main Page</router-link>
    <CategoryList></CategoryList>
    </div>
   
</template>
<script>
import CategoryList from '@/components/CategoryList.vue';

export default {
    components: { CategoryList, 
    }
}
</script>
<style>
.cat_main_block{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
.main_page_btn{
        color: #E2B714;
        transition: 0.4s;
        cursor: pointer;
        font-size: 25px;
        text-decoration: none;
        transition: 0.5s;
        font-weight: bold;
        margin-left: 20px;
        
}
.main_page_btn:hover{
        color: aliceblue;
        font-size: 27px;  
}

</style>
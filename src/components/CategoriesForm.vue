<template >
    <div class="category_block">
        <input class = 'new_category' placeholder="write a new category" v-model="cat">
        <button class = 'add_category_btn' @click="addСategory">Add Category</button>
        <router-link to="/Categories" class = 'categories_btn'> All categories 🡺</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cat: '',
            
        }
    }, 
    methods:{
        addСategory(){
            let newObj = {};
            newObj.id = Date.now();
            newObj.name = this.cat;
            // console.log(newObj);
            this.$emit('addCategory', newObj);
            this.cat = '';
        }
    }
}
</script>
<style scoped>
.category_block{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100%;
    width: 100%;
}
.new_category{
        margin-top: 30px;
        border: 2px solid #646669;
        border-radius: 10px;
        height: 10%;
        width: 60%;
        color: #E2B714;
        outline: none;
    }
    .new_category::placeholder{
        text-align: center;
        color: #C1A33F;
        font-size: 15px;
    }

    .add_category_btn{
        border: 2px solid #646669;
        border-radius: 5px;
        margin-top: 20px;
        color: #E2B714;
        width: 40%;
        height: 10%;
        transition: 0.4s;
        cursor: pointer;
        font-size: 15px;
    }
    .add_category_btn:hover{
        background-color: #E2B714;
        color: aliceblue;
        border: none;
    }
    .categories_btn{
        margin-top: 10px;
        color: #E2B714;
        transition: 0.4s;
        cursor: pointer;
        font-size: 25px;
        text-decoration: none;
        transition: 0.5s;
        font-weight: bold;
        margin-left: 20px;
        transition: 0.4s;
    }
    .categories_btn:hover{
        
        color: aliceblue;
        font-size: 27px;
    }
    
</style>
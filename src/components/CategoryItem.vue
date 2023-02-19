<template >
    <div class = 'Category'>
        <div class = 'Category_Block'>
        <div class="name">{{ category.name}}</div>
        </div>
        <button class = 'remove' @click="removeCat">✖</button>
    </div>
</template>
<script>
export default {
    props:{
        category:{
            type: Object,
            required: true,
        }
    },
    methods: {
        removeCat(){
            this.$emit('removeCat', this.category);
        }
    }
}
</script>
<style scoped>
.Category{
    display: flex;
    flex-direction: row;
    background-color: #2C2E31;
    border-radius: 15px;
    height: 10%;
    width: 40%;
    margin-left: 20px;
}
.Category_Block{
    background-color: #2C2E31;
}
    
</style>
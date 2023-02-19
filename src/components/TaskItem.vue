<template >
    <div class = 'task'>
        <div class = 'task_Block'>
        <div class="category">{{ task.category }}</div>
        <div class="name">{{ task.name}}</div>
        </div>
        <button class = 'remove' @click="removeTask">✖</button>
    </div>
</template>
<script>
export default {
    props:{
        task:{
            type: Object,
            required: true,
        }
    },
    methods: {
        removeTask(){
            this.$emit('removeTask', this.task);
        }
    }
}
</script>
<style >
    .name{
        background-color: #2C2E31;
        color: #D1D0C5;
        font-size: 20px;
        margin-left: 15px;
    }
    .category{
        background-color: #2C2E31;
        color: #D1D0C5;
        font-size: 12px;
        margin-left: 10px;
    }
    .task{
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        justify-content: space-between;
        border-radius: 10px;
        width: 100%;
        height: 10%;
        background-color: #2C2E31;
    }
    .task_Block{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #2C2E31;
        height: 100%;
        width: 80%;
        border-radius: 20px;
    }
    .remove{
        border: none;
        color: gray;
        cursor: pointer;
        transition: 0.4s;
        background-color: #2C2E31;
        font-size: 20px;
        margin-right: 10px;
    }
    .remove:hover{
        color: red;

    }
</style>
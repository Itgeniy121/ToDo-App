<template >
    <div class = 'dialog' v-if="show" @click.stop="hideDialog">
        <div class="content" @click.stop>
            <TaskForm @AddTask = "proverka"></TaskForm>
        </div>
    </div>
</template>
<script>
import TaskForm from '@/components/TaskForm';

export default {
    components:{
        TaskForm, 
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods:{
        hideDialog(){
            this.$emit('update:show', false);
        },
        proverka(elem){
            console.log(elem);
            this.$emit('sendCat', elem);
        }
    }
    
}
</script>
<style scoped>
    .dialog{
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }
    .content{
        margin: auto;
        background-color: #2C2E31;
        border-radius: 20px;
        height: 65%;
        width: 70%;
    }
</style>
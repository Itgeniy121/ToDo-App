<template>
    <div v-if="this.$store.state.tasks.length > 0" class = 'list'>
    <h3>Task List:</h3>
    <TaskItem class ='task' v-for="task in this.$store.state.tasks" :key="task.id" :task = 'task' @removeTask = 'removeTask'/>
   </div>
   <div v-else >
    <h3 style = "color: #D1D0C5;"> Заданий пока что нет</h3>
   </div> 
</template>
<script>
import TaskItem from '@/components/TaskItem';
export default {
    components:{
        TaskItem,
    },
    methods:{
        removeTask(elem){
            this.$store.commit('removeTask', elem);
        }
    }

}
</script>
<style scoped>
.list{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    height: 100%;
    width: 80%;

}
    
</style>
<template >
    <div class = 'page'>
        <div class="task_block">
            <button class = 'add_task_btn' @click = 'OpenDialog'>Add Task</button>
            <Dialog v-model:show="dialogVisible" @sendCat ='AddTask'></Dialog>
            <TaskList></TaskList>
        </div>
        <div class="categories_block">
            <CategoriesForm @addCategory="addСategory"></CategoriesForm>
        </div>
       
    </div>
</template>
<script>
import Dialog from '@/components/Dialog';
import CategoriesForm from '@/components/CategoriesForm';
import TaskList from '@/components/TaskList';
export default {
    components:{
        Dialog, CategoriesForm, TaskList,
    },
    data(){
        return{
            dialogVisible: false,
        }
    },
    methods:{
        addСategory(elem){
            console.log(elem);
            this.$store.commit('addcategory', elem);
        }, 
        OpenDialog(){
            this.dialogVisible = true;
        },
        AddTask(elem){
            console.log(elem);
            this.$store.commit('AddTask', elem);
            this.dialogVisible = false;
        }

    }
    
}
</script>
<style >
    .page{
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
         width: 100%;
         height: 100vh;
    }
    .task_block{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        height: 100%;
        width: 50%;
    }
    .categories_block{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        height: 100%;
        width: 50%;
    }
    .add_task_btn{
        border: 2px solid #646669;
        border-radius: 5px;
        margin-top: 20px;
        color: #E2B714;
        width: 60%;
        height: 13%;
        transition: 0.4s;
        cursor: pointer;
        font-size: 20px;
    }
    .add_task_btn:hover{
        background-color: #E2B714;
        color: aliceblue;
        border: none;
    }
    
</style>
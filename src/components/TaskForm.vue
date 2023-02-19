<template >
    <div class = 'form'>
        <input class = 'input_task' placeholder="write a task" v-model="task">
        <Select @sendCat ='sendCat'></Select>
        <button class = 'btn'  @click="addTask">Create</button>
    </div>
</template>
<script>
import Select from '@/components/Select';
export default {
    components:{
        Select, 
    },
    data(){
    return{
      task: '',
      currentCat: '',
      
    }
},

methods:{
    addTask(){
        let newObj = {};
        newObj.id = Date.now();
        newObj.name = this.task;
        newObj.category = this.currentCat;
        console.log(newObj);
        this.$emit('AddTask', newObj);
    },
    sendCat(elem){
        this.currentCat = elem;
    }
    
}
}
</script>
<style >
    .form{
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    .input_task{
        margin-top: 30px;
        border: 2px solid #646669;
        border-radius: 10px;
        height: 5%;
        width: 60%;
        color: #E2B714;
        outline: none;
    }
    .input_task::placeholder{
        text-align: center;
        color: #C1A33F;
    }
    .btn{
        border: 2px solid #646669;
        border-radius: 5px;
        margin-top: 20px;
        color: #E2B714;
        width: 35%;
        height: 7%;
        transition: 0.4s;
        cursor: pointer;
    }
    .btn:hover{
        background-color: #E2B714;
        color: aliceblue;
        border: none;
    }
</style>
<template >
  <div class = 'app'>
    <h3>ToDo List</h3>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;700&display=swap');
*{
  background-color: #323437;
  font-family: 'Nunito', sans-serif;
}
.app{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
}
h3{
  text-align: center;
  color: #E2B714;
  font-weight: bold;
  font-size: 25px;
}
  


</style>

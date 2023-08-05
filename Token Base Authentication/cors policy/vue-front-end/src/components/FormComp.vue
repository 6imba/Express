<template>
  <div class="hello">
    <form action="" @submit.prevent="onSubmit">
      <input type="email" id="email" placeholder="Email" v-model="email" required><br>
      <input type="password" id="password" placeholder="Password" v-model="password" required><br>
      <button>Log In</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;
export default {
  name: 'FormComp',
  data(){
    return{
        email: '',
        password: '',
    }
  },
  methods: {
    async onSubmit(){
      console.log("111111111111111111111111*****")
      try{
        // let response = await axios.post("http://localhost:8006/login-user/", {email: this.email})
        let response = await axios.post("/api/login-user/", {email: this.email, password: this.password}, {withCredentials: false })
        console.log("Response ==> ",response)
      }catch(e){
        console.log("error ==> ", e)
      }
      console.log("333333333333333333333333")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

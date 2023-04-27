<template>
<div class="container" >
    <form ref="myForm">
      <input type="text" name="user" id="userID" v-model="userId"/>
      <input type="file" name="file-name" id="fileID" ref="fileInput" multiple v-bind="$attrs" @change="handleFileChange"/><br><br>
    </form>
    <button class="button" @click="fileUpload"><RouterLink to="/show">上传文件</RouterLink></button>
</div>
</template>

<script setup>
import axios from  '../utils/index'
import {RouterLink} from "vue-router"
import { ref, onMounted } from 'vue'
import { FileUpload } from '../api/fileUpload'

const myForm = ref(null)
const userId = ref('')
const fileInput = ref(null)
const data = ref(new FormData())

const handleFileChange = () => {
    const files = fileInput.value.files
    data.value.set("user", userId.value)
    for (let i = 0; i < files.length; i++) {
        data.value.append('files', files[i])
    }
    data.value.forEach(function(value, key){
            console.log(key,value);
    })
}

const fileUpload = async () => {

    let res = await FileUpload(data.value)
    console.log(res);
//   try {
//     const response = await axios.post('http://localhost:5173/', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//     console.log(response.data)
//   } catch (error) {
//     console.log(error)
//   }
}

onMounted(() => {
  fileInput.value = document.getElementById('fileID')
})

</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    margin-top: 100px !important;
    flex-direction: column;
    align-items: center;
}

.container input {
    margin-right: 5px;
}

.button {
    margin-left: -10%;
}

.button a {
    text-decoration: none;
    color: black;
}
</style>
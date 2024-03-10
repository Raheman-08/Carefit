const axios = require("axios");

const loginUser = async(email,password)=>{
    const user = await axios.post("http://localhost:3000/api/users/login",{email,password})
}
loginUser("ali@example.com",12345678)
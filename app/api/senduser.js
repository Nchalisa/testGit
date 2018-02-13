const Router = require('koa-router')
const User = new Router()

// ------คำนวน age2------
User.post('/senduser', async function(context){
  let data =  context.request.body //เอา data ทั้งก้อนมาใส่ในตัวแปร data
  var d = 2561-data.age

  if(d<18){
    context.body = "dek"
  }else {context.body = "puyai"}

})


module.exports = User

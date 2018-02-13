// console.log("Hello World")

const Koa = require('koa') //ดึง koa มาใช้
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const User = require('./app/api/senduser')
const app = new Koa() //สร้าง class จาก class Koa
const router = new Router()

app.use(bodyParser())
router.use('/user' ,User.routes())

// router.post('/senduser',async function(context){
//   let data =  context.request.body
//   context.body = data
// })



// ------คำนวน age1------

// router.post('/chkage',async function(context){
//   let data =  context.request.body //เอา data ทั้งก้อนมาใส่ในตัวแปร data
//   var d = 2561-data.age
//
//   if(d<18){
//     context.body = "dek"
//   }else {context.body = "puyai"}
//
// })

//
// router.post('/senduser',async function(context){
//   let date =  new Date()
//   let data =  context.request.body
//   let res =  data.name
//
//   if(date.getFullYear() - (data.year-543) >=20)  res += "adult"
//   else res += "dek"
//   context.body = res
//
// })


// ------รับค่าตัวแปร 1 ตัวแปร แบบ get------

// router.get('/:name',async function (context){ //ถ้าส่ง 1 ตัวแปรให้เข้าอันนี้
//   console.log(context.params.name)
//   context.body = context.params.name
// })

// ------รับค่าตัวแปร 2 ตัวแปร แบบ get------
// router.get('/:name/:age',async function (context){ //ถ้าส่ง 2 ตัวแปรให้เข้าอันนี้
//   console.log(context.params.name + context.params.age) //แสดง 2 อันใน cmd
//   context.body = context.params.name + context.params.age //แสดง 2 อันใน หน้าจอ
// })

// router.get('/:name/:age',async function (context){ //ถ้าส่ง 2 ตัวแปรให้เข้าอันนี้
//   let data = {
//     name: context.params.name,
//     age: context.params.age
//   }
//   context.body = data
// })



app.use(router.routes())//routต้้องมี2บรรทัดนี้
app.use(router.allowedMethods())//routต้้องมี2บรรทัดนี้

// app.use(async ctx => {
//   ctx.body = 'Hello World'
// });



app.listen(3000); //เลขคือ port ของคอม ที่ว่าง

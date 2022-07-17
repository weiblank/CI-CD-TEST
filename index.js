const Koa = require('koa');
const router = require('koa-router')()
const app = new Koa();

// router.get('/student',async(ctx, next)=>{
//     ctx.body={
//         student: {
//             name:'tom',
//             age: 18
//         }
//     }
// })
// app.use(router.routes())
app.use(require('koa-static')('./public/dist'))
app.listen(3000,()=>{
    console.log('服务器启动在了3000端口')
})
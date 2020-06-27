const seq = require('./seq')
// require('./model')

// 测试连接
seq.authenticate().then(() => {
  console.log('ok')
}).catch(() => {
  console.log('err')
})

seq.sync({force: true}).then(() => {
  process.exit()
})

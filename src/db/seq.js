const Sequelize = require('sequelize')
const {MYSQL_CONF} = require('../conf.db')

const {isProd, isTest} = require('../utils/env')

const {host, user, password, databse} = MYSQL_CONF

const conf = {
  host,
  dialect: 'mysql'
}

if (isTest) {
  conf.logging = () => {}
}

if (isProd) {
  conf.pool ={
    max: 5,
    min: 0,
    idle: 10000 // 如果一个连接池 10s之内没有被使用，则释放
  }
}

const seq = new Sequelize(databse, user, password, conf)


// seq.authenticate().then(() => {
//   console.log('ok')
// }).catch(() => {
//   console.log('err')
// })

module.exports = seq

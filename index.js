const fs = require('fs')

module.exports = (api, options) => {
  api.registerCommand(
    'reg',
    {
      description: '生成目录...',
      usage: 'vue-cli-service reg'
    },
    () => {
      console.log('Hello reg 命令执行了:', api, options)
      fs.mkdirSync('reg')
    }
  )
}

// 指定模式下可运行
module.exports.defaultModes = {
  reg: 'development'
}

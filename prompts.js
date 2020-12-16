module.exports = [
  {
    type: 'list',
    name: 'importEnv',
    message: '你想要导入文件 env 文件吗？?',
    choices: [
      { name: '完全导入', value: 'full' },
      { name: '导入部分', value: 'partial' }
    ],
    default: 'full'
  }
]

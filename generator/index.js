module.exports = (api, opts, root) => {
  if (opts.import === 'partial') {
    api.extendPackage({
      devDependencies: {
        'yxt-plugin-component': '^1.1.1'
      }
    })
  }
}
module.exports = (api, opts, rootOptions) => {
  //  辅助操作
  // ...

  api.injectImports(api.entryFile, `import yxtDeom from './yxtDeom'`)
  //   api.render({
  //     './src/App.vue': './template/src/App.vue'
  //   })

  api.render('./template', options => {
    console.log('generator:', api, opts, rootOptions, options)
  })
}

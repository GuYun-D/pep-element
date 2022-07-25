const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const fsExtra = require('fs-extra')
const fs = require('fs')

const entryDir = path.resolve(__dirname, '../package')
const outDir = path.resolve(__dirname, '../lib')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

// rollup
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 全量打包
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'pep-element',
        fileName: 'pep-element',
        formats: ['es', 'umd']
      },
      outDir
    }
  })
}

/**
 * 单组件打包
 * @param {*} name 组件名字 
 */
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outDir, name)
    }
  })
}

// 每个组件生成package.json 文件
const createPackageJSON = name => {
  const fileStr = `
  {
    "name": "${name}",
    "main": "index.umd.js",
    "moudle": "index.es.js",
    "style": "style.css"
  }
  `
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  )
}

// 打包成库
const buildLib = async () => {
  await buildAll()

  const components = fs.readdirSync(entryDir).filter(name => {
    const commonentDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(commonentDir).isDirectory()
    return isDir && fs.readdirSync(commonentDir).includes('index.ts')
  })

  for (const name of components) {
    await buildSingle(name)
    createPackageJSON(name)
  }
}

buildLib()
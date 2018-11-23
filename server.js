const path = require('path')
const express = require('express')

module.exports = {
  app:  () => {
    const app = express()
    const indexPath = path.join(__dirname, './dist/index.html')
    app.use(express.static(path.resolve(__dirname, './dist')));
    app.get('*',  (_, res) => { res.sendFile(indexPath) })

    return app
  }
}
import express from 'express'
import {database} from './database'
import {adminJs, adminJsRouter} from './adminjs/index'

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, async ()=>{
    await database.authenticate().then(()=>{
        console.log('Conectou com o banco de dados')
    })
    console.log('O servidor está no ar')
})
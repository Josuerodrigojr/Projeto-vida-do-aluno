import express from 'express'
import {database} from './database'

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    database.authenticate().then(()=>{
        console.log('Conectou com o banco de dados')
    })
    console.log('O servidor está no ar')
})
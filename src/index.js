import express from 'express'
import morgan from 'morgan'
import router from './routes/task.routes.js'
import * as url from 'url';
import path from 'path';
import './database.js'


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app=express()




//config
app.set('port',process.env.PORT || 3000)

//middlewares

app.use(morgan('dev'))
app.use(express.json())


//routes

app.use('/api/tasks',router)


//archivos estaticos

app.use(express.static(path.join(__dirname + 'public')));





//inicio del server

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`)
})
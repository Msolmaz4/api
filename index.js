const express =require('express');
const app = express();
const cors =require('cors')
import {Users} from './users'


app.use(cors())
app.get('/',(req,res)=>{
    res.json(Users)

})

app.listen(5000, ()=>console.log('api geldi beyler'))
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hellod World!')
  });

const CONNECTION_URL ='mongodb+srv://memers:memers@cluster0.2lvk6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
.then(() => app.listen(PORT,()=>console.log(`SERVER RUNNING ON PORT: ${PORT}`)) )
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);


import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
   res.send('Hello API connection');
})

app.listen(port, ()=>{
   console.log(`server listening on port ${port}`)
});
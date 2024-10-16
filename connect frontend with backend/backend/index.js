import express from 'express'
const app=express()
import 'dotenv/config'
const port=process.env.PORT;


app.use(express.static('dist'));

app.get('/',(req,res)=>{
    res.send('server is running')
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Why don't skeletons fight each other?",
          content: "Because they don't have the guts!"
        },
        {
          id: 2,
          title: "What do you call fake spaghetti?",
          content: "An impasta!"
        },
        {
          id: 3,
          title: "Why was the math book sad?",
          content: "Because it had too many problems."
        },
        {
          id: 4,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 5,
          title: "What do you call a bear with no teeth?",
          content: "A gummy bear!"
        }
      ];
      res.send(jokes);
})

app.get('/api/aditya',(req,res)=>{
    res.send('Aditya yadav')
})

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
    
})
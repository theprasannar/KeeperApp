const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const Note = require('./models/nodeModel')

const app = express();
app.use(express.urlencoded())
app.use(express.json());
app.use(cors())

//database connection
mongoose.connect("mongodb+srv://admin:test1234@cluster0.snkbh.mongodb.net/keeper");

app.get("/display", async(req, res) => {
    const notes = await Note.find()
    res.send(notes) //getting notes from DB to
})

app.post("/addNote", async (req, res) => {
        const {title,content} = req.body
        const noteObj = new Note({title: title, content: content})
        noteObj.save();
        const notes = await Note.find()
        res.send(notes)
    })
app.post("/delete", async (req, res) => {
    const {id} = req.body
    await Note.deleteOne({_id:id})
    const notes = await Note.find()
    res.send(notes) //getting notes from DB to
    
})

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join("frontend/build")))
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


/*
GET     /notes      : all notes
GET     /notes/:id  : get note with specific ID
POST    /notes      : create new note
PATCH   /notes/:id  : update an existing note
DELETE  /notes/:id  : delete an existing note
*/


const express = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');
const {v4: genId} = require('uuid');
const methodOverride = require('method-override');

app.set('views', path.join( __dirname, "/views"));
app.set('view engine', 'ejs');

app.use(express.json());                        // parse incoming body json into req.body 
app.use(express.urlencoded({extended: true}));  // parse incoming form submission fields into req.body 
app.use(methodOverride('_method'));


// Notes Data Structure
let notes = []


// Routes

    // Root
app.get("/", (req, res) => {
    res.send('Welcome to root, please use route "/notes"');
});

    // Index 
app.get("/notes", (req, res) => {
    res.render("notes/index.ejs", {notes})
});

    // New : Retrieve form to create a new note
app.get("/notes/new", (req, res) => {
    res.render("notes/new.ejs");
});
    
    // Create 
app.post("/notes", (req, res) => {
    let {nameInp, textInp} = req.body;
    let currId = genId();
    notes.push({id: currId, name: nameInp, text: textInp});
    res.redirect("/notes");
});
    
    // Show
app.get("/notes/:id", (req, res) => {
    let id = req.params['id'];
    let note = notes.find(n=>n.id === id);
    res.render("notes/show.ejs", {note});
});

    // Edit : Retrieve form to edit
app.get("/notes/:id/edit", (req, res) => {
    let id = req.params['id'];
    let note = notes.find(n=>n.id === id);
    res.render("notes/edit.ejs", {note});
});

    // Update
app.patch("/notes/:id", (req, res) => {
    let id = req.params['id'];
    let note = notes.find(n=>n.id === id);
    let {editNote} = req.body;
    note.text = editNote;
    res.redirect("/notes");
    
});
    
    // Destroy
app.delete("/notes/:id", (req, res) => {
    let id = req.params['id'];
    notes = notes.filter(n=>n.id !== id);
    res.redirect("/notes");
});



port = 3000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});


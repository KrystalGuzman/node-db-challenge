const express =require('express');
// const projects=require('./projects/project-model.js');

const router = express.Router();

router.get("/", (req,res) => res.status(200).json({message:"server running"}))


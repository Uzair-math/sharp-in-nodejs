const express = require('express')
const app = express()
const sharp = require("sharp")

async function getMetadata(){
    try {
        const width = 750;
    const height = 483;
    const text = "Sammy the Shark";

    const svgImage = `
    <svg width="${width}" height="${height}">
    </svg>
    `;
    
    } catch (error) {
        console.log("error");
    }
}
getMetadata()

app.listen(3000, ()=>{
    console.log("connect");
})
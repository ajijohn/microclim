const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const Models = require('./Models/requestModel');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Microclim",{
    useNewUrlParser: true,
})

app.post('/insert', async (req,res) => {
    const Email = req.body.emailInput;
    const source = req.body.sourceInput;
    const shade = req.body.shadeInput;
    const hod = req.body. hodInput;
    const latN = req.body.latNInput;
    const latS = req.body.latSInput;
    const longW = req.body.lonWInput;
    const longE = req.body.lonEInput;
    const variable = req.body.variableInput;
    const interval = req.body.intervalInput;
    const aggregation = req.body.aggregationInput;
    const outputFormat = req.body.outputFormatInput;
    const startDate = req.body.stdateInput;
    const endDate = req.body.eddateInput;

    const request1 = new Models({
        email:Email,
        status:"OPEN",
        timelogged:new Date().toString(),
        sourcetype:source,
        latN:latN,
        latS:latS,
        lonW:longW,
        lonE:longE,
        variable:variable,
        shadelevel:shade,
        hod:hod,
        interval:interval,
        aggregation:aggregation,
        startDate:startDate,
        endDate:endDate,
        status_message:"----",
        outputformat:outputFormat    
    });
    try {
        await request1.save();
        res.send("Data inserted") 
    }catch(err){
        console.log("err",err)
    }
})

app.listen(3001, ()=> {
    console.log("Server running on port 3001")
})
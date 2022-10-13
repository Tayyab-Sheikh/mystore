const express = require(`express`);
const mongoose = require(`mongoose`);

const PORT = 3000;
const app = express();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send(`<h1>Services are Running</h1>`)
});

mongoose.connect(`mongodb+srv://sarahasim4:123Jigsaw123@grocerystore.zwedtr5.mongodb.net/?retryWrites=true&w=majority`)
.then(result => console.log("Database connected")).catch(err => console.error(err));


const express = require(`express`);
const mongoose = require(`mongoose`);
const adminRouter = require(`./api/routers/admin`);
const outletRouter = require(`./api/routers/outlet`);

const PORT = 3000;

const app = express();

app.use(express.json());


app.listen(PORT,() =>{
  console.log(`Server is running on port ${PORT}`);
});

app.get(`/`, (req,res) =>{
  res.send(`<h1>Services are Running</h1>`)
});

app.use(`/admin`,adminRouter);
app.use(`/outlet`,outletRouter);

mongoose.connect(`mongodb+srv://sarahasim4:123Jigsaw123@grocerystore.zwedtr5.mongodb.net/?retryWrites=true&w=majority`).then(result => console.log(`Database Connected`)).catch(err =>console.log(err));


const express = require("express");
const exphbs = require('express-handlebars');
const path = require('path')
const router = require('./routes')



const app = express();
const PORT = process.env.PORT || 5050;


// app.use('/', (req, res) => {
//   res.send('Funciona en Index');
// })

// habilitar handlebars como view
app.engine('handlebars', 
  exphbs.engine({
    defaultLayout: 'layout',
  })
)

app.set('view engine', 'handlebars');

// static file
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", router());

// Arranque del proyecto
app.listen(PORT, () => {
  console.log(`El Servidor esta funcionando en el puero http://localhost:${PORT}`);
})

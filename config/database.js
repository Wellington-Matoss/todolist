const mongoose = require ("mongoose")
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost:27017/metal").then(()=>console.log('Conectado ao Metal...')).catch((err) => console.error(err));

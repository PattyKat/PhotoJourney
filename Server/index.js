const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', (req, res, next) => {
  console.log(`now processing ${req.method} from ${req.path}`)
})

app.listen(port, ()=> {
  console.log(`server now listening on port ${port}`)
})
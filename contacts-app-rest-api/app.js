const express = require('express');
const app = express();
const port = 3005;

// Routes 
// GET method
app.get('/', (req, res) => {
  res.send('<div>Success</div>');
});

app.get('/contacts', (req, res) => {
  res.send(`[{firstName:'John'}, {firstName: 'Steve'}]`);
});

app.post('/contacts', (req, res) => {
  console.log('POST req received');
  res.json(`[{firstName:'John'}, {firstName: 'Steve'}, {firstName: 'Kevin'}]`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
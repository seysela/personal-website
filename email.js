const express = require('express');
const app = express();
const port = 5500;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {

res.sendFile(__dirname + "/contact.html"); // send HTML file on GET request

});
app.get('/', (req, res) => {
    res.redirect('/contact.html'); // Redirect to contact.html or any other page
  });
app.post('/submit-form', (req, res) => {

const fullname = req.body.fullname; // access form data
const email = req.body.email;
const phone = req.body.phone;
const message = req.body.message;
// Add validation logic here
res.send('Your form has been sumbitted correctly.');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
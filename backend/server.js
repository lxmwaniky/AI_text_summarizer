const express = require('express');
const app = express();

const PORT = 3000

app.use(express.json());
app.use(express.static('../public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/'));
});

app.get('/summarize', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
})
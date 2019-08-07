const trains = [
    { name: 'Thomas', color: 'Blue' },
    { name: 'Gordon', color: 'Blue' },
    { name: 'Henry', color: 'Green' },
    { name: 'James', color: 'Red' }
];

const express = require('express'); 

const app = express(); 
const port = 5000; 

app.use(express.static('server/public'));

// Start up our server
app.listen(port, () => {
  console.log('listening on port', port);
});

app.get('/train', (req,res) => {
    res.send(trains); 
}); 

app.get('/first-train', (req,res) => {
    res.send(trains[0]); 
}); 

app.get('/last-train', (req,res) => {
    res.send(trains[trains.length-1]);
});

// counts number of trains and returns the object
app.get('/count', (req,res) => {
    res.send({totalCount: trains.length}); 
});

app.get('/random', (req,res) => {
    let rand = trains[Math.floor(Math.random() * trains.length)];
    res.send(rand); 
}); 
import express from 'express'

const app = express()

const PORT = process.env.PORT || 3001
app.use(express.json());
app.use(express.static('dist'))

const data = 
    [
      {
        "id": "c0a5",
        "content": "abc",
        "votes": 83
      },
      {
        "id": "8f66",
        "content": "asdasda",
        "votes": 0
      }
    ]
  

app.get('/api/anecdotes', (req, res) => {
    res.json(data);
});

app.post('/api/anecdotes', (req, res) => {
    const newAnecdote = req.body;
    data.push(newAnecdote);
    res.status(201).json(newAnecdote);
  });

  app.put('/api/anecdotes/:id', (req, res) => {
    const { id } = req.body;
    const updatedAnecdote = req.body;

    const index = data.findIndex(a => a.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedAnecdote };
      res.json(data[index]);
    } else {
      res.status(404).send('Anecdote not found');
    }
  });
  
app.get('/api/health', (req, res) => {
res.send('ok');
});


app.listen(PORT, () => {
console.log(`Server started on port ${PORT}`);
});
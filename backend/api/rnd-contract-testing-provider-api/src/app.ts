import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import Repository from './repository';
import data from './data/clientData.json';
const app: Express = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8")
  next()
})

export const clientRepository = new Repository()

// Load client data into a repository object
export const importData = () => {
  // a is the accumulator, v is the current value
  // v is the current value, a is the accumulator
  data.reduce((acc, currentValue) => {
    currentValue.id = acc + 1
    clientRepository.add(currentValue)
    return acc + 1
  }, 0)
}

// Get all clients
app.get("/clients", (req, res) => {
  res.json(clientRepository.fetchAll())
})

// Find client by ID
app.get("/clients/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const response = clientRepository.getById(id ? id : -1)
  if (response) {
    res.end(JSON.stringify(response))
  } else {
    res.status(404)
    res.send({message: 'Client not found!'})
    res.end()
  }
})

// Add a new Client
app.post("/clients", (req, res) => {
  const client = req.body

  // Basic validation for missing first name field
  if (!client || !client.firstName) {
    res.status(400)
    res.send({message:'Missing first name!', body: req.body})
    res.end()

    return
  }

  client.id = clientRepository.fetchAll().length
  clientRepository.add(client)

  res.json(client)
})

importData()

export default app;
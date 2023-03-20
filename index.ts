import express, { Request, Response, Express } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { test } from './test/test'
import { CreateAdmin } from './src/CreateAdmin'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome to bamadar')
})

app.get('/test', () => {
  console.log('hello ')
})
app.get('/test/test', test)
app.post('/CreateAdmin', CreateAdmin)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

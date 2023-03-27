import express, { Request, Response, Express } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { test } from './test/test'
import { CreateAdmin } from './src/CreateAdmin'
import { CreateCat } from './src/CreateCat'
import { CreateProd } from './src/CreateProd'
import { GetOrders, GetOrderById } from './src/GetOrders'
import { GetCat, GetSubCat, GetSubCatById } from './src/GetCat'
import { GetProd, GetProdByCat, GetProdById } from './src/GetProd'
import { login } from './src/login'

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
app.post('/CreateCat', CreateCat)
app.post('/CreateProd', CreateProd)
app.post('/GetOrders', GetOrders)
app.post('/GetOrderById', GetOrderById)
app.post('/GetSubCatById', GetSubCatById)
app.post('/GetCat', GetCat)
app.post('/GetSubCat', GetSubCat)
app.post('/GetProd', GetProd)
app.post('/GetProdByCat', GetProdByCat)
app.post('/GetProdById', GetProdById)
app.post('/login', login)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

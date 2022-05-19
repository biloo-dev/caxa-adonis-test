/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'
Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.post('login', async ({ auth, request }) => {
  const email = request.input('email')
  const password = request.input('password')

  await auth.use('web').attempt(email, password)
})

Route.get('/getUsers', async () => {
  const users = await User.all();

 return users;
})

Route.get('/setUsers', async ({ }) => { 
  const user = await User.createMany([
    { 
      email: 'virk@adonisjs.com',
      password: 'secret',
    },
    {
      email: 'romain@adonisjs.com',
      password: 'secret',
    },
  ])
  return user;
})
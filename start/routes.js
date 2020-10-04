'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route
  .group(() => {    
    Route.get('/ping', 'PingController.index').as('client.ping.index')
    Route.get('/commnunites/categories', 'CommunityCategoryController.index').as('client.community-category.index')
    Route.get('/commnunites/categories/:slug', 'CommunityCategoryController.findBySlug').as('client.community-category.findBySlug')
  })
  .prefix('api/v1')
  .namespace('Client')

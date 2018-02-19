//init express
const app = require('express')()

const posts = [
    {
      id: 1,
      author: 'John',
      title: 'this shit is awesome!',
      body: 'Lorem 1 ipsum dolor amet fanny pack meggings fashion axe drinking vinegar VHS, plaid sriracha green juice ethical trust fund.'
    },
    {
      id: 2,
      author: 'Drake',
      title: 'Hello World!',
      body: 'Lorem 2 ipsum dolor amet fanny pack meggings fashion axe drinking vinegar VHS, plaid sriracha green juice ethical trust fund.'
    },
    {
      id: 3,
      author: 'Bud',
      title: 'Fumkwa!',
      body: 'Lorem 3 ipsum dolor amet fanny pack meggings fashion axe drinking vinegar VHS, plaid sriracha green juice ethical trust fund.'
    },
    {
      id: 4,
      author: 'Cody',
      title: 'WootWoot!',
      body: 'Lorem 4 ipsum dolor amet fanny pack meggings fashion axe drinking vinegar VHS, plaid sriracha green juice ethical trust fund.'
    }
  ]

  // set view to ejs

  app.set('view engine', 'ejs')

  //home page
  app.get('/', (req, res) =>{
    //render home.ejs with list of posts
    res.render('home', {posts: posts})
  })

  //blog post
  app.get('/post/:id', (req, res) => {
    const post = posts.filter((post) => {
      return post.id == req.params.id
    })[0]
    //render post.ejs templates with content
    res.render('post', {
      author: post.author,
      title: post.title,
      body: post.body,
    })
  })

  app.listen(8080)

  console.log('Docked atPort: 8080')
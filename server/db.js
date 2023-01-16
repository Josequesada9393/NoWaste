 const db = {
  users: [
    {
      id: '1',
      email: 'test1@test.com',
      password: 'test1',
      posts: [
        {
          postId: '1',
          title: 'homemade burguers',
          date: new Date(),
          address: 'current location',
          photos: ["https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"]
        },
        {
          postId: '2',
          title: 'vegan sandwiches',
          date: new Date(),
          address: 'pick up address',
          photos: ["https://www.budgetbytes.com/wp-content/uploads/2021/08/Ultimate-Veggie-Sandwich-hand.jpg"]
        }
      ]

    },
     {
      id: '2',
      email: 'test2@test.com',
      password: 'test2',
      posts: [
        {
          postId: '1',
          title: 'homemade burguers',
          date: 'date posted',
          address: 'Mountain street',
          photos: ["https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"]
        },
        {
          postId: '2',
          title: 'vegan sandwiches',
          date: 'date posted',
          address: 'BeverlyHills',
          photos: ["https://cdn.https://hurrythefoodup.com/wp-content/uploads/2021/03/Vegan-Sandwich-Recipes-image.jpg.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"]
        }
      ]

    },
     {
      id: '3',
      email: 'test2@test.com',
      password: 'test2',
      posts: [
        {
          postId: '1',
          title: 'homemade burguers',
          date: 'date posted',
          address: 'Mountain street',
          photos: ["https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"]
        },
        {
          postId: '2',
          title: 'vegan sandwiches',
          date: 'date posted',
          address: 'BeverlyHills',
          photos: ["https://cdn.https://hurrythefoodup.com/wp-content/uploads/2021/03/Vegan-Sandwich-Recipes-image.jpg.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"]
        }
      ]

    }
]
 }


 module.exports = db
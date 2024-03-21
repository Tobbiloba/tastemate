const options = [
    {
      category: 'Diet',
      subCategories: ['Vegetarian', 'Non-Vegetarian', 'Vegan'],
    },
    {
      category: 'Cuisines',
      subCategories: ['Indian', 'Mediterranean', 'Nigerian'],
    },
    {
      category: 'Proteins',
      subCategories: ['Chicken', 'Beef', 'Vegan'],
    },
  ];

  const menus = [
    {
      id: 1,
      name: 'Chicken Chettinad',
      location: 'Sheffield',
      category: 'Non-Vegetarian',
      types: ['Indian', 'Chicken', 'West'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      location: 'Rome',
      category: 'Vegetarian',
      types: ['Italian', 'South'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 3,
      name: 'Sushi Platter',
      location: 'Tokyo',
      category: 'Non-Vegetarian',
      types: ['Japanese', 'East'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 4,
      name: 'Mushroom Risotto',
      location: 'Milan',
      category: 'Mediterranean',
      types: ['Italian', 'North'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 5,
      name: 'Tacos Al Pastor',
      location: 'Mexico City',
      category: 'Mediterranean',
      types: ['Mexican', 'North America'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 6,
      name: 'Paneer Tikka Masala',
      location: 'Delhi',
      category: 'Vegetarian',
      types: ['Indian', 'North'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 7,
      name: 'Peking Duck',
      location: 'Beijing',
      category: 'Vegan',
      types: ['Chinese', 'East'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 8,
      name: 'Greek Salad',
      location: 'Athens',
      category: 'Vegetarian',
      types: ['Greek', 'South'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 9,
      name: 'Pad Thai',
      location: 'Bangkok',
      category: 'Chicken',
      types: ['Thai', 'South East'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 10,
      name: 'Margherita Pizza',
      location: 'Naples',
      category: 'Indian',
      types: ['Italian', 'South'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 11,
      name: 'BBQ Ribs',
      location: 'Texas',
      category: 'Mediterranean',
      types: ['American', 'Beef', 'North America'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 12,
      name: 'Falafel Wrap',
      location: 'Tel Aviv',
      category: 'Vegan',
      types: ['Middle Eastern', 'West Asia'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 13,
      name: 'Pho',
      location: 'Hanoi',
      category: 'Mediterranean',
      types: ['Vietnamese', 'East Asia'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 14,
      name: 'Caprese Salad',
      location: 'Capri',
      category: 'Vegetarian',
      types: ['Italian', 'South'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      id: 15,
      name: 'Fish and Chips',
      location: 'London',
      category: 'Indian',
      types: ['British', 'West'],
      img: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
  ];
  const tabs = ['Resturants', 'Cooking'];

  export {
    options,
    menus,
    tabs
  }
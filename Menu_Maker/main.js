const menu = {
  _courses: {
  appetizers: [],
  mains: [],
  desserts: []
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

set appetizers(appetizers) {
  return this._courses.appetizers = appetizers;
},
set mains(mains) {
  return this._courses.mains = mains;
},
set desserts(desserts) {
  return this._courses.desserts = desserts;
},

get _courses() {
  return {
    appetizer: this.appetizers,
    mains: this.mains,
    desserts: this.desserts 
  }
},

get courses() {
  return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts
  }
},

addDishToCourse(courseName, dishName, dishPrice) {
  const dish = {
    name: dishName,
    price: dishPrice
  }
  this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName) {
  const dishes = this._courses[courseName];
  const randomNumber = Math.floor(Math.random() * dishes.lenght);
  return dishes[randomNumber];
},

generateRandomMeal() {
  const f = this.getRandomDishFromCourse;
  let a, b, c;
  [a, b, c] = [f('appetizers'), f('mains'), f('desserts')];
  return `Your appetizer is ${a.name}, your main ${b.name}, and your dessert is ${c.name}. Enjoy! `
}
};

menu.addDishToCourse('appetizers', 'Fried Fish', 4.30)
menu.addDishToCourse('appetizers', 'Fried Onion', 5.20)
menu.addDishToCourse('appetizers', 'Calamary', 7.50)
menu.addDishToCourse('mains', 'Pasta', 12.30)
menu.addDishToCourse('mains', 'Orange Chiken', 15.10)
menu.addDishToCourse('mains', 'Broccoli', 9.80)
menu.addDishToCourse('desserts', 'Cookies', 3.50)
menu.addDishToCourse('desserts', 'Flan', 5.70)
menu.addDishToCourse('desserts', 'Fruit Salad', 5.90)

let meal = menu.generateRandomMeal()
console.log(meal);

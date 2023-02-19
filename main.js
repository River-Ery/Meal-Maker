const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice,
        };
        this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function (courseName) {
        let dishes = this.courses[courseName];
        let randomCourses = Math.floor(Math.random() * dishes.length);
        return dishes[randomCourses];
    },
    getRandomMeal: function () {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is $${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'chips', 1.50);
menu.addDishToCourse('appetizers', 'Queso', 4.50);
menu.addDishToCourse('appetizers', 'Street Corn', 4.00);

menu.addDishToCourse('mains', 'Taco Dinner', 10.50);
menu.addDishToCourse('mains', 'Grand Burrito', 13.00);
menu.addDishToCourse('mains', 'Fajitas', 13.50);

menu.addDishToCourse('desserts', 'Churros', 5.50);
menu.addDishToCourse('desserts', 'Ice Cream', 3.20);
menu.addDishToCourse('desserts', 'Baklava', 4.50);

const meal = menu.getRandomMeal();
console.log(meal);

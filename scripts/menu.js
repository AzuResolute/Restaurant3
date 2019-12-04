// classes

class MenuItem {
    constructor(name, eyeCatcher, description, price){
        this._name = name;
        this._eyeCatcher = eyeCatcher;
        this._description = description;
        this._price = price;
    }

    GetDescription = () => {
        return this._description.map(desc => `<div class="card-text">${desc}</div>`).join(' ');
    }

    Render = () => {
        return `<div class="card col-12 col-md-6 col-lg-4 text-center">
            <div class="card-body">
                <h4 class="card-title">${this._name}</h4>
                <p class="card-subtitle">${this._eyeCatcher}</p>
                ${this.GetDescription()}
                <p class="card-text">$${this._price.toFixed(2)}</p>
            </div>
        </div>`
    }
}

class DrinkItem {
    constructor(name, price){
        this._name = name;
        this._price = price;
    }

    Render = () => {
        return `<tr>
            <td>${this._name}</td>
            <td>$${this._price.toFixed(2)}</td>
        </tr>`
    }
}

//store

let menu = [
    new MenuItem(
        "Burger and Fries",
        "An American Classic!",
        [
            "Your choice - with or without cheese",
            "Pickle, onion, tomato, and lettuce",
            "Served with our famous thick cut",
            "french fries"
        ],
        7.95
    ),
    new MenuItem(
        "Hot Dog and Chips",
        "An Summer Classic!",
        [
            "Your choice - white or wheat bun",
            "Relish, mustard, and ketchup",
            "Served with our house-made chips"
        ],
        7.95
    ),
    new MenuItem(
        "Italian Sausage and Peppers",
        "An All-Time Favorite!",
        [
            "Your choice - mild or spicy Cole Slaw",
            "Served with garlic mashers"
        ],
        10.95
    ),

    new MenuItem(
        "Tenderloin Sandwich and Chips",
        "Really Hits the Spot!",
        [
            "Plain or Sesame Seed Bun",
            "Pickle, onion, tomato, and lettuce",
            "Served with our house-made chips"
        ],
        8.95
    ),

    new MenuItem(
        "House Salad",
        "On the Lighter Side!",
        [
            "Your choice - with or without cheese",
            "Iceberg Lettuce, tomatoes, peppers",
            "Thousand Island or Ranch Dressing",
            "Served with a dinner roll"
        ],
        6.95
    ),

    new MenuItem(
        "Brisket Sandwich and Fries",
        "A Taste of Texas!",
        [
            "Smoked Brisket on thick-cut",
            "Texas Toast",
            "Cole Slaw",
            "Served with our famous thick-cut",
            "french fries"
        ],
        7.95
    ),

]

let drinks = [
    new DrinkItem("Root Beer", 3),
    new DrinkItem("Bottled Water", 1.25),
    new DrinkItem("Lemonade", 1),
    new DrinkItem("Iced Tea", 1.25)
]

// program

let menuItems = menu.map(item => item.Render()).join(' ');
let drinkItems = ["<tr><th colspan=\"2\">Beverages</th></tr>"].concat(drinks.map(item => item.Render())).join(' ');

document.querySelector("#menu").innerHTML = menuItems;
document.getElementById("drinks").innerHTML = drinkItems;

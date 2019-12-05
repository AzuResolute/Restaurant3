// classes

class Announcement {
    constructor(title, description, background, isMain = false){
        this._title = title;
        this._description = description;
        this._background = background;
        this._isMain = isMain;
    }

    renderIndicator = (index) => {
        return `<li data-target="#announcements" data-slide-to="${index}" ${index === 0 ? `class="active"` : ' '}></li>`
    }

    renderInCarousel = (index) => {
        return `<div class="carousel-item ${index === 0 ? `active` : ` `}">
            <h3 class="d-block w-100 text-center">${this._title}</h3>
            <div class="d-block w-100 text-center">${this._description}</div>
        </div>`
    }
}

class Restaurant {
    constructor(name, description, address, phone, announcements) {
        this._name = name;
        this._description = description;
        this._address = address;
        this._phone = phone;
        this._announcements = announcements
    }
    
    renderHeader = () => {
        document.getElementById("title").innerText = this._name;
        this.renderNav();
        this.renderCarousel();
    }
    
    renderFooter = () => {
        let footer = document.getElementsByTagName("footer")[0];
        footer.innerHTML=
            `<div class="text-center">${this._address}</div>
            <div class="text-center">${this._phone}</div>`;
    }

    renderHome = () => {
        document.querySelector("#description").innerText = this._description;
        this.renderJumbo();
    }

    renderNav = () => {
        let nav = document.getElementsByTagName("nav")[0];
        nav.innerHTML = 
        `<a href="home.html" class="nav-item nav-link">
            <i class="fa fa-lg fa-home"></i>
        </a>
        <a href="menu.html" class="nav-item nav-link">
            <div>Menu</div>
        </a>
        <a href="contact.html" class="nav-item nav-link">
            <div>Contact Us</div>
        </a>`;
    }

    renderCarousel = () => {
        let header = document.getElementsByTagName("header")[0];
        header.innerHTML += `<div id="announcements" class="carousel slide mt-2" data-ride="carousel">
        <ol class="carousel-indicators">
        ${this._announcements.map((a, i) => a.renderIndicator(i)).join(' ')}
        </ol>
        <div class="carousel-inner">
        ${this._announcements.map((a, i) => a.renderInCarousel(i)).join(' ')}
        </div>
        <a class="carousel-control-prev" href="#announcements" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#announcements" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`
    }

    renderJumbo = () => {
        let highlight = this._announcements.find(a => a._isMain);
        let header = document.getElementsByTagName("header")[0];
        header.innerHTML += `<div class="jumbotron jumbotron-fluid py-4">
            <div class="container">
            <h1 class="display-4">${highlight._title}</h1>
            <p class="lead">${highlight._description}</p>
            </div>
        </div>`
    }

    highlightActive = (current) => {
        let pages = document.getElementsByTagName("a");
        for(let x = 0; x < pages.length; x++){
            if(current === pages[x].getAttribute("href")){
                pages[x].classList.add("active");
            }
        }
    }
}

// store

let announcements = [
    new Announcement(
        "New Location!",
        "Rockefeller Center, the Heart of NYC!",
        "thing",
        true
    ),
    new Announcement(
        "Winter Menu!",
        "Yakitori, Miso Ramen, and Rib Eye",
        "thing"
    ),
    new Announcement(
        "Drink of the Month",
        "The SG Special Brew",
        "thing"
    )
];

let InakinKita = new Restaurant(
    "Inakin Kita",
    "Bacon ipsum dolor amet beef sausage swine doner porchetta, pig bacon t-bone alcatra drumstick ribeye boudin strip steak. Fatback kevin burgdoggen ground round corned beef, chislic porchetta pork chop pancetta. Beef ribs filet mignon buffalo jowl leberkas burgdoggen. Tenderloin bresaola cupim chislic meatball frankfurter. Pork chop porchetta swine shank biltong, corned beef ground round ribeye bresaola. Swine andouille pork loin jowl beef ribs bresaola.",
    "8642 Nebula Street, Earth, Galaxy, Universe 00000",
    "123-456-7890",
    announcements);

// index program
InakinKita.renderHeader();
InakinKita.renderFooter();

let currentPage = document.URL.split('/').find(entry => entry.indexOf("html") > 0);
InakinKita.highlightActive(currentPage);

// page program
switch(currentPage)
{
    case("home.html"):
        InakinKita.renderHome();
        break;
    case("menu.html"):
        break;
    case("contact.html"):
        break;
    default:
        break;
}

// classes

class Restaurant {
    constructor(name, description, address, phone) {
        this._name = name;
        this._description = description;
        this._address = address;
        this._phone = phone;
    }
    
    renderHeader = () => {
        document.getElementById("title").innerText = this._name;
        let nav = document.getElementsByTagName("nav")[0];
        nav.classList.add("navbar");
        nav.classList.add("nav-tabs");
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
    
    renderFooter = () => {
        let footer = document.getElementsByTagName("footer")[0];
        footer.innerHTML=
            `<div class="text-center">${this._address}</div>
            <div class="text-center">${this._phone}</div>`;
    }

    renderHome = () => {
        document.getElementById("description").innerText = this._description;
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

let InakinKita = new Restaurant(
    "Inakin Kita",
    "Bacon ipsum dolor amet beef sausage swine doner porchetta, pig bacon t-bone alcatra drumstick ribeye boudin strip steak. Fatback kevin burgdoggen ground round corned beef, chislic porchetta pork chop pancetta. Beef ribs filet mignon buffalo jowl leberkas burgdoggen. Tenderloin bresaola cupim chislic meatball frankfurter. Pork chop porchetta swine shank biltong, corned beef ground round ribeye bresaola. Swine andouille pork loin jowl beef ribs bresaola.",
    "8642 Nebula Street, Earth, Galaxy, Universe 00000",
    "123-456-7890");

// index program
InakinKita.renderHeader();
InakinKita.renderFooter();

let currentPage = document.URL.split('/').find(entry => entry.indexOf("html") > 0);
InakinKita.highlightActive(currentPage);

// page program
switch(currentPage)
{
    case("home.html"):
        console.log("At home");
        InakinKita.renderHome();

        break;
    case("menu.html"):
        console.log("At menu");
        break;
    case("contact.html"):
        console.log("At contact");
        break;
    default:
        console.log("do nothing");
        break;
}
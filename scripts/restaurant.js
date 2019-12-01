// classes

class Restaurant {
    constructor(name, description, pictureUrl, address, phone) {
        this._name = name;
        this._description = description;
        this._pictureUrl = pictureUrl;
        this._address = address;
        this._phone = phone;
    }
    
    renderGeneral = () => {
        document.getElementById("title").innerText = this._name;
        let footer = document.getElementsByTagName("footer")[0];
        footer.innerHTML=
            `<h4 class="text-center">${this._address}</h4>
            <h4 class="text-center">${this._phone}</h4>`;
    }

}

// store

let InakinKita = new Restaurant(
    "Inakin Kita ",
    "Bacon ipsum dolor amet beef sausage swine doner porchetta, pig bacon t-bone alcatra drumstick ribeye boudin strip steak. Fatback kevin burgdoggen ground round corned beef, chislic porchetta pork chop pancetta. Beef ribs filet mignon buffalo jowl leberkas burgdoggen. Tenderloin bresaola cupim chislic meatball frankfurter. Pork chop porchetta swine shank biltong, corned beef ground round ribeye bresaola. Swine andouille pork loin jowl beef ribs bresaola.",
    "pictureURL",
    "8642 Nebula Street, Earth, Galaxy, Universe 00000",
    "123-456-7890");

// index program
InakinKita.renderGeneral();

// page program
switch(document.URL.split('/').find(entry => entry.indexOf("html") > 0))
{
    case("home.html"):
        console.log("At home");
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
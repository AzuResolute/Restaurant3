let FormConfig = {
    label: "col-4",
    input: "col-8",
}

// program


Object.keys(FormConfig).forEach(k => {
    let tagged = document.getElementsByTagName(k);
    let disinclude = ['radio', 'checkbox', 'submit']
    for(let x = 0; x < tagged.length; x++){
    let inputtype = tagged[x].getAttribute("type");
        switch(inputtype){
            case("radio"):
            case("checkbox"):
            case("submit"):
            break;
            case("label"):
            tagged[x].classList.add(FormConfig[k]);
            break;
            default:
            tagged[x].classList.add(FormConfig[k]);
            tagged[x].classList.add("form-control");
            break;
        }
    }
});

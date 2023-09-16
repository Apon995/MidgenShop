const getItemStroge = () => {
    let item = localStorage.getItem("cart");

    if (item) {
        return JSON.parse(item);
    }

    return [];
};


const SavetoLs = (cart) => {
    let string = JSON.stringify(cart);

    localStorage.setItem("cart", string);
}

const SaveToStroge = (id) => {
    let cart = getItemStroge();

    cart.push(id);

    SavetoLs(cart);
};

const removeTostroge = (id) => {

    let cart = getItemStroge();

    let reamining = cart.filter(element => element !== id)

    SavetoLs(reamining);

}

export { getItemStroge, SaveToStroge, removeTostroge };
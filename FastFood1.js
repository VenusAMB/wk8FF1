id="menu";
id2="outputname";
id3="Menu3";

    const menu = [
        {name: 'Hamburger:', qty: 5},
        {name: 'Cheeseburger:', qty: 2},
        {name: 'Vegetarian Burger:', qty: 3},
        {name: 'Vegan Burger:', qty: 10},
        {name: 'Fish Burger:', qty: 6},
        {name: 'French Fries:', qty: 9},
        {name: 'Sweet Potato Fries:', qty: 8},
        {name: 'Onion Rings:', qty: 6},
        {name: 'House Salad:', qty: 2},
        {name: 'Sweet Iced Tea:', qty: 5},
        {name: 'Unsweet Iced Tea:', qty: 10},
        {name: 'Lemonade:', qty: 7},
        {name: 'Sprite Soda:', qty: 7},
        {name: 'Orange Soda:', qty: 1},
        {name: 'Coke Soda:', qty: 7}
    ];
    let displayMenu = document.getElementById('menu');
    for(item of menu) {
        displayMenu.innerHTML += `<h3>$item.name)</h3>`;
    };

    let submitBtn = document.getElementById('submitBtn');
    let showOrder = document.getElementById('showOrder');
    submitBtn.addEventListener('click', () => {
        let customerOrder = document.getElementById('order');
        showOrder.innerHTML = (customerOrder.value);
        let order = parseOrder(customerOrder.value);

        customerOrder.value = '';
    });

    function parsOrder(customerOrder) {
        const parseObj = [];
        let parseInput = customerOrder
            .split(',')
            .map(x => x.trim())
            .map(y => y.split(','))
            .map(z => z.map(q => q.trim()))

        for(item of parsedInput) {
            let obj = {
                name: item[0],
                qty: item[1]
            };
            parsedObj.push(obj);
        };

        return parseObject;
    };

boolean; isOrdered = true;

for(q = 0; q < 10; q++) {
    if (values[q]>=values[q+1]){
        menu = "In Stock";
   
    } else {
        isOrdered = fales;
        break;

    }

} if (isOrdered) {
    menu = "Not on menu";

}

const object = {Hamburger: 5, Cheeseburger: 2, Vegetarian_Burger: 3, Vegan_Burger: 10, Fish_Burger: 6, French_Fries: 9,
Sweet_Potato_Fries: 8, Onion_Rings: 6, House_Salad: 2, Sweet_Iced_Tea: 5, Unsweet_Iced_Tea: 10, Lemonade: 7, Sprite_Soda: 7,
Ora: 1, Coke_Soda: 7};

for (const property in object) {      
console.log(`${property}: ${object[property]}`);

}

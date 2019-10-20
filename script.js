function copyObj(obj) {
    return obj;
}
var items = [
    {
        item_name: "Book1",
        category: "book",
    },
    {
        item_name: "Book2",
        category: "book"
    },
    {
        item_name: "Book3",
        category: "book"
    },
    {
        item_name: "Book4",
        category: "book"
    },
    {
        item_name: "Book5",
        category: "book"
    },
    {
        item_name: "Book6",
        category: "book"
    },
    {
        item_name: "cd1",
        category: "cd"
    },
    {
        item_name: "cd2",
        category: "cd"
    },
    {
        item_name: "cd3",
        category: "cd"
    },
    {
        item_name: "cd4",
        category: "cd"
    }
];
var itemsAvailable = [
    {
        item_name: "Harry Potter and the Socerer's Stone",
        category: "book",
        imgUrl: "images/book1.jpg",
        item_name2:"Harry Potter à l'école des sorciers"
    },
    {
        item_name: "Harry Potter and the chamber of Secrets",
        category: "book",
        imgUrl: "images/book2.jpg",
        item_name2:"Harry Potter et la Chambre des Secrets"

    },
    {
        item_name: "Harry Potter and the Prisoner of Azkaban",
        category: "book",
        imgUrl: "images/book3.jpg",
        item_name2:"Harry Potter Et le Prisonnier D'Azkaban"

    },
    {
        item_name: "Harry Potter and the Goblet of Fire",
        category: "book",
        imgUrl: "images/book4.jpg",
        item_name2:"Harry Potter et la coupe de feu"
    },
    {
        item_name: "Harry Potter and the Order of the Phoenix",
        category: "book",
        imgUrl: "images/book5.jpg",
        item_name2:"Harry Potter Et L'Ordre Du Phenix"
    },
    {
        item_name: "Harry Potter and the Half Blood Prince",
        category: "book",
        imgUrl: "images/book6.jpg",
        item_name2:"Harry Potter et le Sang Mele "
    },
    {
        item_name: "Frozen",
        category: "cd",
        imgUrl: "images/cd1.jpg",
        item_name2:"La Reine des neiges"
    },
    {
        item_name: "Toy Story Film series",
        category: "cd",
        imgUrl: "images/cd2.jpg",
        item_name2:"Toy Story (série de films)"
    },
    {
        item_name: "How to Train Your Dragon",
        category: "cd",
        imgUrl: "images/cd3.jpg",
        item_name2:"Dragons  français"
    },
    {
        item_name: "Zootopia",
        category: "cd",
        imgUrl: "images/cd4.jpg",
        item_name2:"Zootopia français"
    }
]
var dueDatesObj = { book: 30, cd: 10 }
var checkoutItem = [];
var adminLogoutFlag = false;
var node;
var itemName;
var dueDate;
var innerText;
var date = new Date();
var availItems = document.getElementById("available-items");
var basket = document.getElementById("basket");
var totalItemsAvail;
var button;
var imgtag;
var secLangflag;



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


function checkout() {
    var checkoutFlag
    if(checkoutItem.length > 0) {
        checkoutFlag = confirm("Total No of Items:" + checkoutItem.length + "\n" + "Click Ok to proceed checkout");
        if (checkoutFlag == true) {
            removeFromCart(undefined, "success")
        } else {
            removeFromCart(undefined, "cancel")
        }
    }
    else {
        alert("Cart is empty. Please add to check out")
    }
    
}


function uservalidation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var year = document.getElementById("birth-year").value;
    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var errFLag = false;
    var adminFlag = false;
    var infomsg = document.getElementById("info");
    var message;
    var currentYear = new Date().getFullYear();
    infomsg.innerText = "";

        if (name.length > 100) {
            errFLag = true;
            alert("enter name less than 100 characters");
        }
        
        if (name !== "admin") {
            if (Number(year) < 1900) {
                errFLag = true;
                alert("Year should be after 1900");
            }
            if (Number(year) > currentYear) {
                errFLag = true;
                alert("Year should not be after current year");
            }
            if (validEmail.test(email) === false) {
                errFLag = true;
                alert("Enter valid email id")
            }
            if (errFLag === false) {
                if(!document.getElementById("login-page").classList.contains("display-none")){
                    document.getElementById("login-page").classList.add("display-none")
                }
                message = name + " (" + email + ") " + "[" + ((currentYear - year) >= 18 ? "Adult" : "Child") + "]";
                infomsg.innerText = message;
                document.getElementById("library-items-details").classList.remove("display-none");
                document.getElementById("library-checkout-details").classList.remove("display-none");
            }
        }
        else {
            if (name === "admin" && Number(year) === 1867) {
                if(!document.getElementById("login-page").classList.contains("display-none")){
                    document.getElementById("login-page").classList.add("display-none")
                }
                if (document.getElementById("admin-ops").classList.contains("display-none")) {
                    document.getElementById("admin-ops").classList.remove("display-none");
                    document.getElementById("bookdue").innerText = dueDatesObj.book;
                    document.getElementById("cddue").innerText = dueDatesObj.cd;
                    message = "Librarian";
                    infomsg.innerText = message;
                    if(document.getElementById("library-items-details").classList.contains("display-none")) {
                        document.getElementById("library-items-details").classList.remove("display-none")
                    }
                }
    
            }
            else {
                if (!document.getElementById("admin-ops").classList.contains("display-none")) {
                    document.getElementById("admin-ops").classList.add("display-none");
                }
                alert("enter valid details");
                errFLag = true;
            }
        }
    
        if (errFLag === true) {
            document.getElementById("library-items-details").classList.add("display-none");
            document.getElementById("library-checkout-details").classList.add("display-none");
        }
    

}

function addItem() {
    if (!document.getElementById("library-checkout-details").classList.contains("display-none")) {
        document.getElementById("library-checkout-details").classList.add("display-none");
    }
    if (document.getElementById("library-items-details").classList.contains("display-none")) {
        document.getElementById("library-items-details").classList.remove("display-none")
    }
    var addItemName = document.getElementById("item-name").value;
    var addItemCategory = document.getElementById("category").value;
    var addItemName2 = document.getElementById("item-name2").value;
    var itemObj = { item_name: "", category: "" , imgUrl:"",item_name2:""};
    itemObj.item_name = addItemName;
    itemObj.category = addItemCategory;
    itemObj.imgUrl = "img/"+addItemName+".jpg";
    itemObj.item_name2 = addItemName2;
    itemsAvailable.push(itemObj);
    alert("item Added successfully" + "\n" + "See the updated list below");
    deleteAvailNodes("#available-items");
    loadAvailableItems(secLangflag);

}
function removeItem() {
    if (!document.getElementById("library-checkout-details").classList.contains("display-none")) {
        document.getElementById("library-checkout-details").classList.add("display-none");
    }
    if (document.getElementById("library-items-details").classList.contains("display-none")) {
        document.getElementById("library-items-details").classList.remove("display-none")
    }
    var addItemName = document.getElementById("item-name").value;
    var addItemCategory = document.getElementById("category").value;
    var itemLen = itemsAvailable.length;
    var removeFlag = false;
    for (var i = 0; i < itemLen; i++) {
        if ((addItemName === itemsAvailable[i].item_name || addItemName === itemsAvailable[i].item_name2) && addItemCategory === itemsAvailable[i].category) {
            itemsAvailable.splice(i, 1);
            removeFlag = true;
            break;
        }
    }
    if (removeFlag == false) {
        alert("Item not found");
    }
    else {
        alert("removed successfully" + "\n" + "See the updated list below");
        deleteAvailNodes("#available-items");
        loadAvailableItems(secLangflag);
    }
}

function updateDueDate() {
    if (!document.getElementById("library-checkout-details").classList.contains("display-none")) {
        document.getElementById("library-checkout-details").classList.add("display-none");
    }
    if (document.getElementById("library-items-details").classList.contains("display-none")) {
        document.getElementById("library-items-details").classList.remove("display-none")
    }
    var name = document.getElementById("name").value;
    var year = document.getElementById("birth-year").value;
    var dueItemCategory = document.getElementById("due-category").value;
    var newDueday = document.getElementById("due-value").value;

    if (name === "admin" && Number(year) === 1867) {
        dueDatesObj[dueItemCategory] = Number(newDueday);
    }
    document.getElementById("bookdue").innerText = dueDatesObj.book;
    document.getElementById("cddue").innerText = dueDatesObj.cd;
    alert("Due date updated successfully" + "\n" + "See the updated list below");
    deleteAvailNodes("#available-items");
    loadAvailableItems(secLangflag);
}

function logoutAdmin() {
    var name = document.getElementById("name").value;
    var year = document.getElementById("birth-year").value;
    if (name === "admin" && Number(year) === 1867) {
        if (!document.getElementById("admin-ops").classList.contains("display-none")) {
            document.getElementById("admin-ops").classList.add("display-none");
            document.getElementById("name").value = "";
            document.getElementById("birth-year").value = "";
            document.getElementById("email").value = "";
            document.getElementById("info").innerText ="";
        }
        if (!document.getElementById("library-checkout-details").classList.contains("display-none")) {
            document.getElementById("library-checkout-details").classList.add("display-none");
        }
        if (!document.getElementById("library-items-details").classList.contains("display-none")) {
            document.getElementById("library-items-details").classList.add("display-none");
        }
        if(document.getElementById("login-page").classList.contains("display-none")){
            document.getElementById("login-page").classList.remove("display-none")
        }
        adminLogoutFlag = true;
    }
}
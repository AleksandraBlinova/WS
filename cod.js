$(document).ready(function () {
    function item(name, type, img_src, cost) {
        this.name = name;
        this.type = type;
        this.img_src = img_src;
        this.cost = cost;
    }

    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null) {
        for(i = 0; i < cart.length; i++)
        {
            AddToCart(cart[i]);
        }
    }
    else {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    $(".add").each(function () {
        $(this).click(function () {
            console.log(2);
            var cart = JSON.parse(localStorage.getItem("cart"));

            var name = $(this).parent().find("#name").text();
            var type = $(this).parent().find("#type").text();
            console.log(type + "thisfsdfadsf");
            var img_src = $(this).parent().find("#image").attr("src");
            var cost = $(this).parent().find("#cost").text();

            var itemToAdd = new item(name, type, img_src, cost);

            if (HasInCart(cart, itemToAdd)) {
                alert("Уже имеется в корзине");
            }
            else {
                cart.push(itemToAdd);
                localStorage.setItem("cart", JSON.stringify(cart));
                AddToCart(itemToAdd);
            }

            

        });
    });
});

function HasInCart(cart, item) {
    for (i = 0; i < cart.length; i++) {
        if (cart[i].name == item.name)
            return 1;
    }
    return 0;
}

function AddToCart(itemToAdd){
    var type = itemToAdd.type.replace(/\s+/g, ' ').trim();
    if(type == "Футболки")
    {
        var string = "<div class='column t-shirts show'> <div class='content'><img id='image'src='"+itemToAdd.img_src+"' id='a' alt='t-shirts' style='width:100%'><a id='type' href=''class='grey-text'><h5>Футболки</h5></a><h5><strong><a id='name'href='#'class='dark-grey-text'>"+itemToAdd.name+"</a></strong></h5><h4 class='font-weight-bold blue-text'><strong id='cost'>"+ itemToAdd.cost +"</strong></h4></div></div>";
        $("#cart .row").append(string);
        
    }
    else if(type == "Шорты")
    {
        var string = "<div class='column shorts show'> <div class='content'><img id='image'src='"+itemToAdd.img_src+"' id='a' alt='shorts' style='width:100%'><a id='type' href=''class='grey-text'><h5>Шорты</h5></a><h5><strong><a id='name'href='#'class='dark-grey-text'>"+itemToAdd.name+"</a></strong></h5><h4 class='font-weight-bold blue-text'><strong id='cost'>"+ itemToAdd.cost +"</strong></h4></div></div>";
        $("#cart .row").append(string);
        
    }
    else if(type == "Головные уборы")
    {
        $("#cart .row").append('<div class="column hats show"> <div class="content"><img id="image"src="'+itemToAdd.img_src+'" id="a" alt="hats" style="width:100%"><a id="type" href=""class="grey-text"><h5>Головные уборы</h5></a><h5><strong><a id="name"href="#"class="dark-grey-text">'+itemToAdd.name+'</a></strong></h5><h4 class="font-weight-bold blue-text"><strong id="cost">'+ itemToAdd.cost +'</strong></h4></div></div>');
    }
}


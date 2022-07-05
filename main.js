menu_list_array = ["Pizza margarita ",
                    "Pizza de peperoni",
                    "Pizza de coliflor",
                    "Pizza hawaiana",
                    "Pizza italiana",
                    "Pizza napolitana"];
    
    function getmenu(){
        var pizza="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            pizza=pizza+ menu_list_array[i] + '<br>'
        }
        document.getElementById("declarar_arrays").innerHTML = pizza;
        //escribe un nombre de id apropiado como display_menu 
    }

    function add_item(){
        var pizza;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        // utiliza la función sort como menu_list_array.sort();
        pizza="";
        for(var i=0;i<menu_list_array.length;i++){
            pizza=pizza+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = pizza;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

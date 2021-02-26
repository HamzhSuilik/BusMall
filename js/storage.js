'use strict'
    let show_num_array = [];
    let select_num_array = [];  

    let old_shown = [];
    let old_selected = [];

    let new_result_shown = [];
    let new_result_selected = [];
    

function storage_data(){

    if(localStorage.length == 0)
{
    alert('This visit number:1')
    for (let i = 0; i < all_product.length ; i++) {
        show_num_array.push(all_product[i].shown);
        select_num_array.push(all_product[i].selected);
      }
      localStorage.setItem("show_num",JSON.stringify(show_num_array));
      localStorage.setItem("select_num",JSON.stringify(select_num_array));
      localStorage.setItem("vist",1);

      new_result_shown=show_num_array;
      new_result_selected=select_num_array;
}else{

    let  visit_num =1*localStorage.getItem("vist")+1;
    localStorage.setItem("vist",visit_num);
    alert('This visit number :'+visit_num);
    
    old_shown = JSON.parse(localStorage.getItem("show_num"));
    old_selected = JSON.parse(localStorage.getItem("select_num"));

    for (let i = 0; i < all_product.length ; i++) {
        show_num_array.push(all_product[i].shown);
        select_num_array.push(all_product[i].selected);
      }

      for (let i = 0; i < all_product.length ; i++) {
        new_result_shown.push(show_num_array[i]+old_shown[i]);
        new_result_selected.push(select_num_array[i]+old_selected[i]);
        
      }

      localStorage.setItem("show_num",JSON.stringify(new_result_shown));
      localStorage.setItem("select_num",JSON.stringify(new_result_selected));
      
}
   
}





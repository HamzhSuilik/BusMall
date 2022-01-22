'use strict'


/// *******************************
function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
  
    const Names = [];
    const show_num = JSON.parse(localStorage.getItem("show_num"));
    const select_num = JSON.parse(localStorage.getItem("select_num"));  

  
    // for (let i = 0; i < all_product.length; i++) {
    //     Names.push(all_product[i].name);
    //     show_num.push(all_product[i].shown);
    //     select_num.push(all_product[i].selected);
    //   }


    for (let i = 0; i < all_product.length; i++) {
      Names.push(all_product[i].name);
    }


    console.log('Votes', show_num);
    new Chart(ctx, {
      
      type: 'bar',
  
      data: {
        labels: Names,
        datasets: [
          {
            barPercentage: 0.8,
            borderWidth: 2,
            label: '# shown:',
            backgroundColor: '#ec0d0d',
            borderColor: '#6a0174',
            data: show_num,
          },
          {
            barPercentage: 0.8,
            borderWidth: 2,
            label: '# select:',
            backgroundColor: 'green',
            borderColor: '#eccb0f',
            data: select_num,
          },
        ],
      },
    });
  }
  
const context = document.getElementById('pieChart').getContext('2d');
const myChart2 = new Chart(context, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [10, 20, 30]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },
    options: {
        responsive: true

    }
});
const context2 = document.getElementById('lineChart').getContext('2d');
const myChart3 = new Chart(context2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Jun', 'Jul'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
    },
    options: {
        responsive: true

    }
});
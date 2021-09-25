

// -------- ALERT BANNER -------- //
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML =
  `
    <div class="alert">
      <p>ALERT: You have <strong>3</strong> new notifications.</p>
      <p class="alert-close">x</p>
    </div>
  `
alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains('alert-close')) {
    alertBanner.style.display = 'none'
  }
});


// -------- WEEKLY DATA CHART -------- //

let hourlyCtx = document.getElementById('traffic-chart');

const hours = ["8am-9am", "9am-10am", "11am-12pm", "12pm-1pm", "1pm-2pm", "2pm-3pm", "4pm-5pm",
  "5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm", "9pm-10pm"];
const hourlyUsers = [781, 423, 652, 842, 762, 415, 625, 1075, 874, 745, 847, 912]

var hourlyChart = new Chart(hourlyCtx, {
  type: 'line',
  data: {
    labels: hours,
    datasets: [{
      label: 'Users',
      data: hourlyUsers,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderWidth:3,
      fill: true,
      lineTension: .2
    }]
  },
  options: {
    aspectRatio: 1.5,
    animation: {
        duration: 0
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

// -------- DAILY DATA CHART -------- //

var dailyBarCtx = document.getElementById('daily-bar-chart');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dailyUsers = [8056, 3258, 4586, 6781, 4236, 7319, 9912]

var hourlyChart = new Chart(dailyBarCtx, {
  type: 'bar',
  data: {
    labels: days,
    datasets: [{
      label: 'days',
      data: dailyUsers,
      backgroundColor: "rgba(255, 99, 132)",
      borderWidth:3,
      fill: true,
      lineTension: .2
    }]
  },
  options: {
    aspectRatio: 1.5,
    animation: {
        duration: 0
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

// -------- MOBILE USERS CHART -------- //


var mobileCtx = document.getElementById('mobile-chart');

var devicePercent = [27, 19, 54];
var devices = ["Desktop", "Tablet", "Mobile"];

var myChart = new Chart(mobileCtx, {
  type: "doughnut",
  data: {
    labels: devices,
    datasets: [
      {
        label: "% of Mobile Users",
        data: devicePercent,
        backgroundColor: [
          "purple",
          "blue",
          "green"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
      // responsive: true,
      aspectRatio: 3,
      animation: {
          duration: 0
      },
    },
    legend: {
      position: 'right',
      labels: {
        fontColor: 'purple',
      }
    }
});

// -------- MOBILE USERS CHART -------- //

const user = document.getElementById('user_name');
const message = document.getElementById('message');
const send = document.getElementById('send');

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Don't forget to fill out the user and message fields!");
  } else if (user.value === '') {
    alert("You forgot about the user field!");
  } else if (message.value === '') {
    alert("You forgot about the message!");
  } else {
    alert("The owls are on their way with your message!");
  }
});

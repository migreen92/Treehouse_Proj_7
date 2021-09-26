

// -------- ALERT BANNER -------- //
const alertBanner = document.getElementById('alert');
const headerAlert = document.getElementById('header-alert');

alertBanner.innerHTML =
  `
    <div class="alert">
      <p>ALERT: You have <strong>3</strong> new notifications.</p>
      <p class="alert-close">x</p>
    </div>
  `;
alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains('alert-close')) {
    alertBanner.style.display = 'none';
    headerAlert.style.display = 'inline';
  }
});

const bell = document.getElementById('notifications');
bell.addEventListener('click', e => {
  const element = e.target;
  alertBanner.style.display = 'block';
  headerAlert.style.display = 'none';
});



// -------- HOURLY DATA CHART -------- //

let hourlyCtx = document.getElementById('traffic-chart');

const hours = ["8am-9am", "9am-10am", "11am-12pm", "12pm-1pm", "1pm-2pm", "2pm-3pm", "4pm-5pm",
  "5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm", "9pm-10pm"];
const hourlyUsers = [781, 423, 652, 842, 762, 415, 625, 1075, 874, 745, 847, 912];

const hourlyChart = new Chart(hourlyCtx, {
  type: 'line',
  data: {
    labels: hours,
    datasets: [{
      label: 'Users',
      data: hourlyUsers,
      backgroundColor: "rgba(135, 206, 235, 0.2)",
      borderWidth:3,
      fill: true,
      lineTension: .2
    }]
  },
  options: {
    aspectRatio: 2.5,
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
const dailyUsers = [8056, 3258, 4586, 6781, 4236, 7319, 9912];

const dailyChart = new Chart(dailyBarCtx, {
  type: 'bar',
  data: {
    labels: days,
    datasets: [{
      label: 'days',
      data: dailyUsers,
      backgroundColor: "rgba(135, 206, 235)",
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

const mobileData = {
  labels: ["Desktop", "Tablet", "Mobile"],
  datasets: [{
    label: "% of Mobile Users",
    data: [27, 19, 54],
    borderWidth: 0,
    backgroundColor: [
      "purple",
      "blue",
      "green"
    ]
  }]
};
const mobileOptions = {
  responsive: true,
        aspectRatio: 1.5,
        animation: {
            duration: 0
        },
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
  }
};

const mobileChart = new Chart(mobileCtx, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
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

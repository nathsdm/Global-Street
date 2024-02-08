Notification.requestPermission().then(function(result) {
    console.log(result);
});

function sendNotification() {
    const message = "Hello World";
    const notification = new Notification("New message from Global Street", {
      body: message,
      icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    });
    notification.onclick = (e) => {
      window.location.href = "http://localhost:8080";
    };
    console.log(notification);
}
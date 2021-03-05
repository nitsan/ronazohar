function sendEvent(action, category, label, value) {
    gtag('event', action, {
        'event_category': category,
        'event_label': label,
        'value': value
    });
}

$("#sendEmail").click(function () {
    sendEvent("click", "contact", "email");
})
$("#phoneCall").click(function () {
    sendEvent("click", "contact", "phone");
})
$("#whatsappChat").click(function () {
    sendEvent("click", "contact", "whatsapp");
})
$("#facebookChat").click(function () {
    sendEvent("click", "contact", "facebook");
})

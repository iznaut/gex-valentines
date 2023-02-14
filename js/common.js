function load_image(id) {
    img = document.getElementById("card_image");
    url = "images/" + valentine_meta[id]["filename"];
    img.src = url;
}

function load_text(sender, recipient, id) {
    sender_preview = document.getElementById("sender_preview");
    recipient_preview = document.getElementById("recipient_preview");

    sender_styles = valentine_meta[id]["sender_style"]
    recipient_styles = valentine_meta[id]["recipient_style"]

    sender_preview.innerHTML = sender;
    recipient_preview.innerHTML = recipient;

    sender_preview.style = "";
    recipient_preview.style = "";

    for (var key in sender_styles) {
        style = sender_styles[key];
        sender_preview.style[key] = sender_styles[key]
    }
    for (var key in recipient_styles) {
        style = recipient_styles[key];
        recipient_preview.style[key] = recipient_styles[key]
    }
}
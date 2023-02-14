function get_card_object(url) {
  i = /\?i=([^&]+)/.exec(url);
  r = /\&rb=([^&]+)/.exec(url);
  s = /\&sb=([^&]+)/.exec(url);

  id = 0
  if (i) {
    id = decodeURI(window.atob(i[1]));
  }

  rb = "";
  if (r) {
    rb = decodeURI(window.atob(r[1]));
  }

  sb = "someone";
  if (s) {
    sb = decodeURI(window.atob(s[1]));
  }

  // window.card_image.src = img;
  card_obj = { "id":id, "r":rb, "s":sb }
  return card_obj;
}

function quick_api() {
  fetch("valentine-meta.json")
    .then(response => response.json())
    .then(json => {
      valentine_meta = json

      var url = location.href;
      if (/\?/.test(url) == true) {
        if (/\?i=/.test(url) == true) {
          card_obj = get_card_object(url);
          console.log(card_obj)
          load_image(card_obj.id);
          load_text(card_obj.s, card_obj.r, card_obj.id);
        }
      }
    });  
}

function view_card(card_obj) {
  load_image();
  load_text();
  card_image = document.getElementById("card_image");
  sender = document.getElementById("sender");
  recipient = document.getElementById("recipient");
  card_image.src = "images/" + card_obj.img;
  card = document.getElementById("card_container");
  sender.innerHTML = card_obj.s;
  spacer = "";
  if (!card_obj.r == "") {spacer = " "}
  recipient.innerHTML = spacer + card_obj.r + ", ";
  document.title = card_obj.s + " sent you a card!";

  recipient = document.getElementById("recipient").value;
  sender = document.getElementById("sender").value;
  selectedId = document.getElementById("bg_menu").value;

  sender_preview = document.getElementById("sender_preview");
  recipient_preview = document.getElementById("recipient_preview");

  sender_styles = valentine_meta[selectedId]["sender_style"]
  recipient_styles = valentine_meta[selectedId]["recipient_style"]

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

valentine_meta = []
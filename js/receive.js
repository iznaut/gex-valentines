function get_card_object(url) {
  i = /\?i=([^&]+)/.exec(url);
  r = /\&rb=([^&]+)/.exec(url);
  s = /\&sb=([^&]+)/.exec(url);

  img = ""
  if (i) {
    img = decodeURI(window.atob(i[1]));
  }

  rb = "";
  if (r) {
    rb = decodeURI(window.atob(r[1]));
  }

  sb = "someone";
  if (s) {
    sb = decodeURI(window.atob(s[1]));
  }

  window.card_image.src = img;
  card_obj = { "img":img, "r":rb, "s":sb }
  return card_obj;
}

function quick_api() {
  var url = location.href;
  if (/\?/.test(url) == true) {
    if (/\?i=/.test(url) == true) {
      card_obj = get_card_object(url);
      view_card(card_obj);
    }
  }
}

function view_card(card_obj) {
  card_image = document.getElementById("card_image");
  message_preview = document.getElementById("message_preview");
  sender = document.getElementById("sender");
  recipient = document.getElementById("recipient");
  card_image.src = card_obj.img;
  message_preview.innerHTML = card_obj.msg;
  card = document.getElementById("card_container");
  sender.innerHTML = card_obj.s;
  spacer = "";
  if (!card_obj.r == "") {spacer = " "}
  recipient.innerHTML = spacer + card_obj.r + ", ";
  document.title = card_obj.s + " sent you a card!";

  bp = "https://raw.githubusercontent.com/mike-hearn/transparent-textures/master/patterns/" + card_obj.bp + ".png";
  card.style.backgroundColor = card_obj.bc;
  card.style.backgroundImage = 'url("' + bp + '")';
  if (card_obj.bp == "No Background Pattern") {
    card.style.backgroundImage = "";
  }
}

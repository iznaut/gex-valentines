function get_card_object(url) {
  // i = /\?i=([^&]+)/.exec(url);
  // r = /\&rb=([^&]+)/.exec(url);
  // s = /\&sb=([^&]+)/.exec(url);

  // id = 0
  // if (i) {
  //   id = decodeURI(window.atob(i[1]));
  // }

  // rb = "";
  // if (r) {
  //   rb = decodeURI(window.atob(r[1]));
  // }

  // sb = "someone";
  // if (s) {
  //   sb = decodeURI(window.atob(s[1]));
  // }

  id = /\?id=([^&]+)/.exec(url);

  card_obj = JSON.parse(decodeURI(window.atob(id[1])));

  // window.card_image.src = img;
  // card_obj = { "id":id, "r":rb, "s":sb }
  return card_obj;
}

function quick_api() {
  fetch("valentine-meta.json")
    .then(response => response.json())
    .then(json => {
      valentine_meta = json

      var url = location.href;
      if (/\?/.test(url) == true) {
        if (/\?id=/.test(url) == true) {
          card_obj = get_card_object(url);
          console.log(card_obj)

          generate_image(card_obj.id, card_obj.s, card_obj.r);
          // load_text(card_obj.s, card_obj.r, card_obj.id);
        }
      }
    });  
}

valentine_meta = []
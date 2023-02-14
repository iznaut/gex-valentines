function load_ready() {
  select_bg = document.getElementById("select_bg");
  pattern = select_constructor("bg", valentine_options);
  select_bg.innerHTML = pattern;
}

function select_constructor(name, list) {
  menu_name = name + "_menu";
  initial = name.replace(/^(.).*/, "$1");
  action = "load_image();";
  drop_down = '<select name="' + menu_name + '" id="' + menu_name + '" accesskey="' + initial + '" onchange="' + action + '">\n';

  for (i = 0; i < list.length; i++) {
    p = list[i];
    drop_down += '  <option value="' + valentine_filenames[i] + '">' + p + '</option>\n';
  }
  drop_down += '</select>';
  return drop_down;
}

function load_image(u) {
  bg_menu = document.getElementById("bg_menu");
  img = document.getElementById("card_image");
  url = "images/" + bg_menu.value;
  img.src = url;
}

function show_preview() {
  load_image("url");

  i = document.getElementById("bg_menu");
  i = "images/" + bg_menu.value;
  s = document.getElementById("sender");
  r = document.getElementById("recipient");

  ib64 = window.btoa(encodeURI(i.value));
  sb64 = window.btoa(encodeURI(s.value));
  rb64 = window.btoa(encodeURI(r.value));

  card_url = document.getElementById("card_url");
  current_loc = location.href.replace(/\/[^\/]+$/, "/");
  receive = current_loc + 'receive.html';
  query_string = '?i=' + ib64 + '&rb=' + rb64 + '&sb=' + sb64;

  recipient = "";
  if (r.value) { recipient = " - Send this to " + r.value + "!" }
  card_url.innerHTML = '<a href="' + receive + query_string + '" target="_blank">Shareable link to your card</a>' + recipient;
}

valentine_options = [
  "--- Select a Valentine! ---",
  "Will you Enter the Gecko, Valentine?",
  "You can't spell SEX without 2/3rds of GEX!",
  "A little tongue now, a LOT of tail later!",
  "I'm addicted to watching you, Valentine!",
]

valentine_filenames = [
  "",
  "2023-1.jpg",
  "2023-2.jpg",
  "2023-3.jpg",
  "2023-4.jpg",
]
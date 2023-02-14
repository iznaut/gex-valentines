function load_ready() {
  fetch("valentine-meta.json")
    .then(response => response.json())
    .then(json => {
      valentine_meta = json
      select_bg = document.getElementById("select_bg");
      select_bg.innerHTML = select_constructor("bg", valentine_meta);
      show_preview();
    });  
}

function select_constructor(name, list) {
  menu_name = name + "_menu";
  initial = name.replace(/^(.).*/, "$1");
  action = "show_preview();";
  drop_down = '<select name="' + menu_name + '" id="' + menu_name + '" accesskey="' + initial + '" onchange="' + action + '">\n';

  for (i = 0; i < list.length; i++) {
    p = list[i];
    console.log(p)
    drop_down += '  <option value="' + i + '">' + valentine_meta[i]["text"] + '</option>\n';
  }
  drop_down += '</select>';
  return drop_down;
}

function show_preview() {
  selected_id = document.getElementById("bg_menu").value
  sender = document.getElementById("sender").value;
  recipient = document.getElementById("recipient").value;

  load_image(selected_id);
  // load_text(sender, recipient, selected_id);

  ib64 = window.btoa(encodeURI(selected_id));
  sb64 = window.btoa(encodeURI(sender));
  rb64 = window.btoa(encodeURI(recipient));

  card_url = document.getElementById("card_url");
  current_loc = "https://oralgex.com/v_send/";
  // current_loc = location.href.replace(/\/[^\/]+$/, "/");
  receive = 'https://oralgex.com/v_receive/';
  query_string = '?i=' + ib64 + '&rb=' + rb64 + '&sb=' + sb64;

  if (img != "" && sender != "" && recipient != "") {
    card_url.value = receive + query_string;
    document.getElementById("shareButton").style.display = ""
  }
  else {
    card_url.value = ""
    document.getElementById("shareButton").style.display = "none"
  }
}

function updatePreview() {
  selected_id = document.getElementById("bg_menu").value
  sender = document.getElementById("sender").value;
  recipient = document.getElementById("recipient").value;
  generate_image(selected_id, sender, recipient)
}

function copyShareLink() {
  // Get the text field
  var copyText = document.getElementById("card_url");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

valentine_meta = []
selected_id = 0

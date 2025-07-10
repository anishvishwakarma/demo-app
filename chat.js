// Chat contacts and chat list logic for alltext.html
const contacts = [
  { name: 'PayFast', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968701.png', online: true, history: [
    { from: 'them', text: 'Hi, your payment is successful.' },
    { from: 'me', text: 'Thanks! When will I get the receipt?' },
    { from: 'them', text: 'You will receive it in 5 minutes.' }
  ] },
  { name: 'Buried Hearts', img: 'https://randomuser.me/api/portraits/men/32.jpg', history: [
    { from: 'them', text: 'Hey, are you coming to the event?' },
    { from: 'me', text: 'Yes, I will be there at 7.' },
    { from: 'them', text: 'Great! See you soon.' }
  ] },
  { name: 'Cat', img: 'https://randomuser.me/api/portraits/men/33.jpg', history: [
    { from: 'them', text: 'Meow! Did you feed me?' },
    { from: 'me', text: 'Of course, check your bowl.' },
    { from: 'them', text: 'Purrfect, thank you!' }
  ] },
  { name: 'Unicorn', img: 'https://randomuser.me/api/portraits/women/44.jpg', history: [
    { from: 'them', text: 'Let’s go on a magical adventure!' },
    { from: 'me', text: 'Where to?' },
    { from: 'them', text: 'Rainbow Valley!' }
  ] },
  { name: 'The Hunter Palace', img: 'https://randomuser.me/api/portraits/men/45.jpg', online: true, history: [
    { from: 'them', text: 'Your table is reserved for tonight.' },
    { from: 'me', text: 'Thank you! See you at 8.' },
    { from: 'them', text: 'Looking forward to it.' }
  ] }
];

function renderChatList() {
  const list = document.querySelector('.messaging-list');
  if (!list) return;
  list.innerHTML = '';
  contacts.forEach(c => {
    const lastMsg = (c.history && c.history.length) ? c.history[c.history.length - 1].text : 'Say hi!';
    const item = document.createElement('div');
    item.className = 'message-item';
    item.innerHTML = `<img src="${c.img}" class="avatar" />
      <div class="msg-content">
        <div class="msg-name">${c.name}</div>
        <div class="msg-text">${lastMsg}</div>
      </div>
      ${c.online ? '<span class="msg-status online"></span>' : ''}`;
    item.onclick = function(e) {
      e.stopPropagation();
      openChatModal(c);
    };
    list.appendChild(item);
  });
}

function openChatModal(contact) {
  const modal = document.getElementById('chat-modal');
  modal.classList.add('active');
  document.getElementById('chat-avatar').src = contact.img;
  document.getElementById('chat-contact-name').textContent = contact.name;
  // Render unique chat thread for this contact
  const thread = document.getElementById('chat-thread');
  thread.innerHTML = '';
  (contact.history || []).forEach(msg => {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + (msg.from === 'me' ? 'from-me' : 'from-them');
    div.textContent = msg.text;
    thread.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderChatList();
  document.getElementById('close-chat').onclick = function() {
    document.getElementById('chat-modal').classList.remove('active');
  };
  document.getElementById('chat-input-bar').onsubmit = function(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if (!msg) return;
    const thread = document.getElementById('chat-thread');
    const div = document.createElement('div');
    div.className = 'chat-msg from-me';
    div.textContent = msg;
    thread.appendChild(div);
    input.value = '';
    thread.scrollTop = thread.scrollHeight;
  };
}); 
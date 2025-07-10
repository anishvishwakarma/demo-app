// Top tab switching and swipe logic
const topTabs = document.querySelectorAll('.top-tab');
const swipeContainer = document.querySelector('.swipe-container');
let currentTab = 0; // 0 = allinternet, 1 = alltext

function setTab(tabIdx) {
  currentTab = tabIdx;
  topTabs.forEach((t, i) => t.classList.toggle('active', i === tabIdx));
  swipeContainer.style.transform = `translateX(-${tabIdx * 100}%)`;
  // Toggle tab-section visibility
  const tabSections = document.querySelectorAll('.tab-section');
  tabSections.forEach((section, i) => section.classList.toggle('active', i === tabIdx));
  if (tabIdx === 1) renderChatList();
}

topTabs.forEach((tab, i) => {
  tab.addEventListener('click', () => setTab(i));
});

// On page load, render random chat list if alltext is active
window.addEventListener('DOMContentLoaded', () => {
  if (currentTab === 1 || document.querySelector('.top-tab.active[data-tab="alltext"]')) {
    renderChatList();
  }
});

// Improved swipe/drag logic: only allow swipe if started on swipe-container, not on a button or icon
function isSwipeAllowed(e) {
  // Only allow swipe if the target is the swipe-container or a tab-section (not a button, icon, or card)
  const tag = e.target.tagName.toLowerCase();
  if (tag === 'button' || tag === 'i' || tag === 'input' || tag === 'span' || tag === 'img' || tag === 'div' && e.target.classList.contains('icon-card')) {
    return false;
  }
  return true;
}
swipeContainer.addEventListener('touchstart', (e) => {
  if (!isSwipeAllowed(e)) return;
  dragging = true;
  startX = e.touches[0].clientX;
});
swipeContainer.addEventListener('touchmove', (e) => {
  if (!dragging) return;
  currentX = e.touches[0].clientX;
});
swipeContainer.addEventListener('touchend', () => {
  if (!dragging) return;
  let dx = currentX - startX;
  if (dx < -50 && currentTab === 0) setTab(1); // swipe left
  else if (dx > 50 && currentTab === 1) setTab(0); // swipe right
  dragging = false;
  startX = currentX = 0;
});

// Mouse drag for desktop
swipeContainer.addEventListener('mousedown', (e) => {
  if (!isSwipeAllowed(e)) return;
  dragging = true;
  startX = e.clientX;
});
swipeContainer.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  currentX = e.clientX;
});
swipeContainer.addEventListener('mouseup', () => {
  if (!dragging) return;
  let dx = currentX - startX;
  if (dx < -50 && currentTab === 0) setTab(1);
  else if (dx > 50 && currentTab === 1) setTab(0);
  dragging = false;
  startX = currentX = 0;
});
swipeContainer.addEventListener('mouseleave', () => { dragging = false; });

// Random messaging list for alltext
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
function shuffle(arr) {
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
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
      if (currentTab === 1) openChatModal(c);
    };
    list.appendChild(item);
  });
}

// Prevent Mini, Local, Posts, and services from opening alltext or chat
// (No event handlers needed for those, so nothing will happen)

// Chat modal logic
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

// Bottom nav logic (kept for future expansion)
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Section switching logic can be added here if needed
  });
});

// Booking form demo
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Booking submitted! (Demo)');
    bookingForm.reset();
  });
}

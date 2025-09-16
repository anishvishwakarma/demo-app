// Enhanced Chat contacts and chat list logic for alltext.html
const contacts = [
  { 
    name: 'PayFast', 
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968701.png', 
    online: true, 
    lastSeen: '2 minutes ago',
    history: [
      { from: 'them', text: 'Hi! Your payment of ₹1,250 has been processed successfully.', time: '10:30 AM' },
      { from: 'me', text: 'Thanks! When will I get the receipt?', time: '10:31 AM' },
      { from: 'them', text: 'You will receive the receipt via email within 5 minutes.', time: '10:32 AM' },
      { from: 'me', text: 'Perfect, thank you!', time: '10:33 AM' },
      { from: 'them', text: 'You\'re welcome! Is there anything else I can help you with?', time: '10:35 AM' }
    ] 
  },
  { 
    name: 'Buried Hearts', 
    img: 'https://randomuser.me/api/portraits/men/32.jpg', 
    online: false,
    lastSeen: '1 hour ago',
    history: [
      { from: 'them', text: 'Hey! Are you coming to our music event tonight?', time: '9:15 AM' },
      { from: 'me', text: 'Yes, I will be there at 7 PM. Looking forward to it!', time: '9:20 AM' },
      { from: 'them', text: 'Great! We\'re performing some new songs tonight.', time: '9:25 AM' },
      { from: 'me', text: 'Can\'t wait to hear them! What\'s the venue again?', time: '9:30 AM' },
      { from: 'them', text: 'It\'s at The Music Hall, downtown. Doors open at 6:30 PM.', time: '9:35 AM' }
    ] 
  },
  { 
    name: 'Cat', 
    img: 'https://randomuser.me/api/portraits/men/33.jpg', 
    online: true,
    lastSeen: 'now',
    history: [
      { from: 'them', text: 'Meow! Did you feed me this morning?', time: '8:45 AM' },
      { from: 'me', text: 'Of course! Check your bowl, it should be full.', time: '8:50 AM' },
      { from: 'them', text: 'Purrfect, thank you! The food is delicious.', time: '8:55 AM' },
      { from: 'me', text: 'You\'re welcome! Don\'t forget to drink water too.', time: '9:00 AM' },
      { from: 'them', text: 'Will do! 😸', time: '9:05 AM' }
    ] 
  },
  { 
    name: 'Unicorn', 
    img: 'https://randomuser.me/api/portraits/women/44.jpg', 
    online: false,
    lastSeen: '30 minutes ago',
    history: [
      { from: 'them', text: 'Let\'s go on a magical adventure today! ✨', time: '7:30 AM' },
      { from: 'me', text: 'Where to? I\'m ready for some magic!', time: '7:35 AM' },
      { from: 'them', text: 'Rainbow Valley! I heard there\'s a unicorn gathering.', time: '7:40 AM' },
      { from: 'me', text: 'Sounds amazing! What time should we meet?', time: '7:45 AM' },
      { from: 'them', text: 'How about 3 PM at the entrance? 🌈', time: '7:50 AM' }
    ] 
  },
  { 
    name: 'The Hunter Palace', 
    img: 'https://randomuser.me/api/portraits/men/45.jpg', 
    online: true,
    lastSeen: 'now',
    history: [
      { from: 'them', text: 'Your table for 4 is reserved for tonight at 8 PM.', time: '11:00 AM' },
      { from: 'me', text: 'Thank you! Can we get a window seat?', time: '11:05 AM' },
      { from: 'them', text: 'Absolutely! I\'ve noted your preference for a window table.', time: '11:10 AM' },
      { from: 'me', text: 'Perfect! See you at 8 PM.', time: '11:15 AM' },
      { from: 'them', text: 'Looking forward to serving you! Bon appétit! 🍽️', time: '11:20 AM' }
    ] 
  },
  { 
    name: 'John Driver', 
    img: 'https://randomuser.me/api/portraits/men/46.jpg', 
    online: true,
    lastSeen: 'now',
    history: [
      { from: 'them', text: 'Hi! I\'m your driver for today. I\'ll be there in 5 minutes.', time: '2:15 PM' },
      { from: 'me', text: 'Great! I\'ll be waiting outside the mall entrance.', time: '2:16 PM' },
      { from: 'them', text: 'Perfect! I\'m in a white Toyota Innova. Plate number DL-01-AB-1234.', time: '2:17 PM' },
      { from: 'me', text: 'Got it! See you soon.', time: '2:18 PM' },
      { from: 'them', text: 'I\'ve arrived. I can see you at the entrance.', time: '2:20 PM' }
    ] 
  }
];

let currentContact = null;

function renderChatList() {
  const list = document.querySelector('.messaging-list');
  if (!list) return;
  list.innerHTML = '';
  
  contacts.forEach(c => {
    const lastMsg = (c.history && c.history.length) ? c.history[c.history.length - 1].text : 'Say hi!';
    const lastTime = (c.history && c.history.length) ? c.history[c.history.length - 1].time : '';
    
    const item = document.createElement('div');
    item.className = 'message-item';
    item.innerHTML = `
      <img src="${c.img}" class="avatar" />
      <div class="msg-content">
        <div class="msg-header">
          <div class="msg-name">${c.name}</div>
          <div class="msg-time">${lastTime}</div>
        </div>
        <div class="msg-text">${lastMsg}</div>
        <div class="msg-status-text">${c.online ? 'online' : c.lastSeen}</div>
      </div>
      <span class="msg-status ${c.online ? 'online' : 'offline'}"></span>
    `;
    
    item.onclick = function(e) {
      e.stopPropagation();
      openChatModal(c);
    };
    list.appendChild(item);
  });
}

function openChatModal(contact) {
  currentContact = contact;
  const modal = document.getElementById('chat-modal');
  modal.classList.add('active');
  
  // Update header
  document.getElementById('chat-avatar').src = contact.img;
  document.getElementById('chat-contact-name').textContent = contact.name;
  
  // Add online status to header
  const headerName = document.getElementById('chat-contact-name');
  headerName.innerHTML = `
    ${contact.name}
    <span class="chat-status ${contact.online ? 'online' : 'offline'}">
      ${contact.online ? 'online' : contact.lastSeen}
    </span>
  `;
  
  // Render chat thread
  renderChatThread(contact);
  
  // Focus on input
  setTimeout(() => {
    document.getElementById('chat-input').focus();
  }, 100);
}

function renderChatThread(contact) {
  const thread = document.getElementById('chat-thread');
  thread.innerHTML = '';
  
  (contact.history || []).forEach(msg => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${msg.from === 'me' ? 'from-me' : 'from-them'}`;
    
    msgDiv.innerHTML = `
      <div class="msg-bubble">
        <div class="msg-text">${msg.text}</div>
        <div class="msg-time">${msg.time}</div>
      </div>
    `;
    
    thread.appendChild(msgDiv);
  });
  
  // Scroll to bottom
  thread.scrollTop = thread.scrollHeight;
}

function addMessage(text, from = 'me') {
  if (!currentContact) return;
  
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  
  const newMessage = {
    from: from,
    text: text,
    time: time
  };
  
  // Add to contact history
  currentContact.history.push(newMessage);
  
  // Add to chat thread
  const thread = document.getElementById('chat-thread');
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${from === 'me' ? 'from-me' : 'from-them'}`;
  
  msgDiv.innerHTML = `
    <div class="msg-bubble">
      <div class="msg-text">${text}</div>
      <div class="msg-time">${time}</div>
    </div>
  `;
  
  thread.appendChild(msgDiv);
  thread.scrollTop = thread.scrollHeight;
  
  // Simulate reply for demo
  if (from === 'me') {
    setTimeout(() => {
      const replies = [
        'Thanks for your message!',
        'Got it! I\'ll get back to you soon.',
        'Perfect! 👍',
        'I understand. Let me check on that.',
        'Great! Is there anything else you need?',
        'Noted! I\'ll update you shortly.',
        'Awesome! 😊',
        'I\'ll take care of that for you.',
        'Sure thing!',
        'Thanks for letting me know!'
      ];
      
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      addMessage(randomReply, 'them');
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  }
}

// Initialize chat functionality
document.addEventListener('DOMContentLoaded', () => {
  renderChatList();
  
  // Close chat modal
  document.getElementById('close-chat').onclick = function() {
    document.getElementById('chat-modal').classList.remove('active');
    currentContact = null;
  };
  
  // Send message
  document.getElementById('chat-input-bar').onsubmit = function(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    
    if (!msg || !currentContact) return;
    
    addMessage(msg, 'me');
    input.value = '';
  };
  
  // Add typing indicator
  const chatInput = document.getElementById('chat-input');
  chatInput.addEventListener('input', function() {
    if (this.value.trim()) {
      document.getElementById('chat-contact-name').innerHTML += ' <span class="typing">typing...</span>';
    } else {
      const typingIndicator = document.querySelector('.typing');
      if (typingIndicator) {
        typingIndicator.remove();
      }
    }
  });
}); 
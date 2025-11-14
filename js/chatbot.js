// Bloom Literacy Project Chatbot
// Free, no-login chatbot that uses site content to answer questions

(function() {
    'use strict';
    
    // Knowledge base from your site content
    const knowledgeBase = [
        {
            patterns: ['what is bloom', 'about bloom', 'who are you', 'what do you do', 'tell me about'],
            response: "Bloom Literacy Project is a 501(c)(3) nonprofit organization dedicated to improving literacy and educational opportunities for underprivileged girls aged 5-17 in Nepal. We raise funds, collect books, and spread awareness through our campaign 'An Iris for Education.'"
        },
        {
            patterns: ['donate', 'donation', 'contribute', 'give money', 'financial'],
            response: "You can donate through our Room to Read partner page: <a href='https://fundraise.roomtoread.org/fundraiseusd/bloom-literacy-project' target='_blank'>Donate Here</a>. We're raising $5,000 to support literacy programs in Nepal. All donations are 501(c)(3) tax-deductible!"
        },
        {
            patterns: ['nepal', 'literacy rate', 'statistics', 'stats', 'women literacy'],
            response: "In Nepal, 51% of women are illiterate. Only 49% of women are literate compared to 69% of men - that's a 20% gender gap. This inequality is why we focus our efforts on supporting girls aged 5-17 with educational resources."
        },
        {
            patterns: ['how can i help', 'volunteer', 'get involved', 'participate', 'support'],
            response: "You can help in several ways:<br>💝 <a href='donate.html'>Donate financially</a><br>📚 Donate books at our book drives<br>🎤 Attend our events and workshops<br>📢 Share our mission on social media<br>✉️ <a href='contact.html'>Contact us</a> to volunteer!"
        },
        {
            patterns: ['events', 'when', 'upcoming', 'calendar', 'activities'],
            response: "We have exciting events coming up! Check our <a href='events.html'>Events Page</a> for:<br>• Guest Speaker Zoom meetings (December)<br>• Book drives (January)<br>• Fundraisers with Key Club<br>• School presentations and workshops"
        },
        {
            patterns: ['campaign', 'iris for education', 'iris'],
            response: "'An Iris for Education' is our flagship campaign! We're raising $5,000, collecting 200+ books, and engaging 500+ participants through fundraisers, book drives, social media campaigns, and school presentations. All donations go to Room to Read and Pencils of Promise."
        },
        {
            patterns: ['book', 'books', 'book drive', 'donate books'],
            response: "We're collecting 200+ new or gently used children's books for ages 5-17! Our book drives start in January 2025. Bring books to our collection events and receive a free informative bookmark. Check our <a href='events.html'>Events Page</a> for locations and dates."
        },
        {
            patterns: ['room to read', 'pencils of promise', 'partners', 'ngos', 'organizations'],
            response: "We partner with two trusted NGOs:<br><strong>Room to Read</strong> - A global organization focused on literacy and gender equality in education. They've impacted 23+ million children across 20+ countries.<br><strong>Pencils of Promise</strong> - Has built 600+ schools worldwide with a community-centered approach."
        },
        {
            patterns: ['contact', 'email', 'reach', 'get in touch', 'message'],
            response: "You can reach us at:<br>📧 Email: info@bloomliteracyproject.org<br>📱 Instagram: <a href='https://www.instagram.com/bloomliteracyinitiative/' target='_blank'>@bloomliteracyinitiative</a><br>💼 LinkedIn: <a href='https://www.linkedin.com/company/bloom-literacy-project/' target='_blank'>Bloom Literacy Project</a><br><br>Or fill out our <a href='contact.html'>contact form</a>!"
        },
        {
            patterns: ['goal', 'target', 'fundraising goal', 'how much'],
            response: "Our campaign goals are:<br>💰 Raise $5,000 for Room to Read<br>📚 Collect 200+ books for ages 5-17<br>👥 Engage 500+ participants in workshops and events<br><br>Check our <a href='donate.html'>Donate Page</a> to see our current progress!"
        },
        {
            patterns: ['why nepal', 'why focus nepal', 'nepal why'],
            response: "Nepal faces significant educational inequality. More than half of women in Nepal are illiterate (51%), with only 49% literacy compared to 69% for men. Rural areas face even greater challenges due to economic hardship, geographic isolation, and cultural barriers. Our partner NGOs have proven track records there!"
        },
        {
            patterns: ['501', 'nonprofit', 'tax deductible', 'charity'],
            response: "Yes! Bloom Literacy Project is a certified 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent allowed by law. You'll receive a receipt immediately after donating through our Room to Read partner page."
        },
        {
            patterns: ['what donations provide', 'donation impact', 'where does money go'],
            response: "Your donations directly support girls in Nepal:<br>$25 = School supplies for one girl for a semester<br>$50 = A literacy kit with books and materials<br>$100 = Tuition assistance for one girl for a full term<br>$250+ = Comprehensive programs reaching multiple students<br><br>100% goes to literacy programs!"
        },
        {
            patterns: ['mission', 'vision', 'values', 'purpose'],
            response: "Our <strong>Mission</strong>: To improve literacy and educational opportunities for underprivileged girls aged 5-17 in Nepal through fundraising, partnerships, and awareness.<br><br>Our <strong>Vision</strong>: A world where every girl in Nepal has access to quality education, empowering them to reach their full potential and break the cycle of poverty."
        },
        {
            patterns: ['social media', 'instagram', 'linkedin', 'facebook', 'follow'],
            response: "Follow us on social media!<br>📸 Instagram: <a href='https://www.instagram.com/bloomliteracyinitiative/' target='_blank'>@bloomliteracyinitiative</a><br>💼 LinkedIn: <a href='https://www.linkedin.com/company/bloom-literacy-project/' target='_blank'>Bloom Literacy Project</a><br><br>We post weekly updates, infographics, and impact stories!"
        },
        {
            patterns: ['age', 'ages', 'who do you help', 'target'],
            response: "We support underprivileged girls aged 5-17 in Nepal. Our book drives collect books for this age range, and our fundraising supports literacy programs specifically designed for girls in primary and secondary education."
        }
    ];
    
    // Quick response buttons
    const quickResponses = [
        { label: "How can I donate?", query: "donate" },
        { label: "What are your events?", query: "events" },
        { label: "How can I help?", query: "volunteer" },
        { label: "About Bloom", query: "what is bloom" },
        { label: "Nepal statistics", query: "nepal stats" }
    ];
    
    // Find best matching response
    function findResponse(userInput) {
        const input = userInput.toLowerCase();
        
        // Check for greetings first
        if (input.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)$/)) {
            return "Hello! 👋 I'm here to help you learn about Bloom Literacy Project. Ask me anything about our mission, how to donate, upcoming events, or how you can get involved!";
        }
        
        // Check for thanks
        if (input.match(/(thank|thanks|appreciate)/)) {
            return "You're very welcome! Is there anything else you'd like to know about Bloom Literacy Project? 😊";
        }
        
        // Search knowledge base
        for (let item of knowledgeBase) {
            for (let pattern of item.patterns) {
                if (input.includes(pattern)) {
                    return item.response;
                }
            }
        }
        
        // Default response
        return "I'd love to help! I can answer questions about:<br>• Our mission and campaign<br>• How to donate or volunteer<br>• Upcoming events<br>• Nepal literacy statistics<br>• Our partner organizations<br><br>Try asking me something like 'How can I help?' or 'Tell me about your events'";
    }
    
    // Create chatbot UI
    function createChatbotUI() {
        const chatbotHTML = `
            <div id="bloom-chatbot" class="bloom-chatbot-container closed">
                <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Open chatbot">
                    <svg class="chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM7 9H17V11H7V9ZM7 6H17V8H7V6ZM7 12H14V14H7V12Z" fill="currentColor"/>
                    </svg>
                    <svg class="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
                    </svg>
                    <span class="chatbot-badge">Ask me!</span>
                </button>
                
                <div class="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-header-content">
                            <div class="chatbot-avatar">🌸</div>
                            <div class="chatbot-header-text">
                                <h4>Bloom Assistant</h4>
                                <span class="chatbot-status">Online</span>
                            </div>
                        </div>
                        <button id="chatbot-minimize" class="chatbot-minimize-btn" aria-label="Minimize chat">−</button>
                    </div>
                    
                    <div class="chatbot-messages" id="chatbot-messages">
                        <div class="chatbot-message bot-message">
                            <div class="message-content">
                                Hi! 👋 I'm the Bloom Assistant. I can answer questions about our mission, donations, events, and how you can help support girls' education in Nepal. What would you like to know?
                            </div>
                        </div>
                        <div class="quick-responses" id="quick-responses">
                            ${quickResponses.map(qr => 
                                `<button class="quick-response-btn" data-query="${qr.query}">${qr.label}</button>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="chatbot-input-container">
                        <input 
                            type="text" 
                            id="chatbot-input" 
                            class="chatbot-input" 
                            placeholder="Type your question..."
                            autocomplete="off"
                        />
                        <button id="chatbot-send" class="chatbot-send-btn" aria-label="Send message">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
    
    // Add message to chat
    function addMessage(message, isBot = false) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isBot ? 'bot-message' : 'user-message'}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = message;
        
        messageDiv.appendChild(contentDiv);
        
        // Remove quick responses when user sends first message
        if (!isBot) {
            const quickResponsesDiv = document.getElementById('quick-responses');
            if (quickResponsesDiv) {
                quickResponsesDiv.remove();
            }
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Handle user input
    function handleUserInput(input) {
        if (!input.trim()) return;
        
        addMessage(input, false);
        
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot-message typing-indicator';
        typingDiv.innerHTML = '<div class="message-content"><span></span><span></span><span></span></div>';
        document.getElementById('chatbot-messages').appendChild(typingDiv);
        
        // Simulate thinking time
        setTimeout(() => {
            typingDiv.remove();
            const response = findResponse(input);
            addMessage(response, true);
        }, 800);
        
        // Clear input
        document.getElementById('chatbot-input').value = '';
    }
    
    // Initialize chatbot
    function initChatbot() {
        createChatbotUI();
        
        const chatbot = document.getElementById('bloom-chatbot');
        const toggle = document.getElementById('chatbot-toggle');
        const minimize = document.getElementById('chatbot-minimize');
        const input = document.getElementById('chatbot-input');
        const sendBtn = document.getElementById('chatbot-send');
        
        // Toggle chatbot
        toggle.addEventListener('click', () => {
            chatbot.classList.toggle('closed');
            if (!chatbot.classList.contains('closed')) {
                input.focus();
            }
        });
        
        // Minimize chatbot
        minimize.addEventListener('click', () => {
            chatbot.classList.add('closed');
        });
        
        // Send message on button click
        sendBtn.addEventListener('click', () => {
            handleUserInput(input.value);
        });
        
        // Send message on Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleUserInput(input.value);
            }
        });
        
        // Quick response buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-response-btn')) {
                const query = e.target.getAttribute('data-query');
                handleUserInput(query);
            }
        });
    }
    
    // Start chatbot when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();


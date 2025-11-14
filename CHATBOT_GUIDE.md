# 🤖 Bloom Literacy Project Chatbot

## ✨ Features

Your website now has a **completely free, no-login chatbot** that appears in the lower right corner! 

### What it does:
- ✅ Answers questions about your organization
- ✅ Provides donation information
- ✅ Shares event details
- ✅ Explains how people can help
- ✅ Gives Nepal literacy statistics
- ✅ Links to partner organizations
- ✅ Works on mobile and desktop
- ✅ **100% free - no external services needed**

## 🎨 Design

The chatbot matches your website's pink and green color scheme with:
- Gradient pink-to-green button
- Beautiful animations
- Quick response buttons
- Typing indicators
- Mobile-responsive design

## 💬 What the Chatbot Knows

The chatbot can answer questions about:

1. **About Bloom Literacy Project**
   - Mission, vision, values
   - 501(c)(3) status
   - Why focus on Nepal

2. **Donations**
   - How to donate
   - Where donations go
   - Impact of different donation amounts
   - Tax deductibility

3. **Events**
   - Upcoming events
   - How to participate
   - Event types

4. **Getting Involved**
   - Volunteering opportunities
   - Book donation drives
   - Ways to support

5. **Statistics**
   - Nepal literacy rates
   - Gender gap information
   - Campaign goals

6. **Partner Organizations**
   - Room to Read
   - Pencils of Promise

7. **Contact Information**
   - Email address
   - Social media links

## 📝 How to Customize

### Add New Responses

Edit `/js/chatbot.js` and add new items to the `knowledgeBase` array:

```javascript
{
    patterns: ['keyword1', 'keyword2', 'phrase to match'],
    response: "Your answer here. You can use <br> for line breaks and <a href='url'>links</a>!"
}
```

**Example:**
```javascript
{
    patterns: ['school visit', 'visit school', 'presentation'],
    response: "We offer free presentations at schools! Email us at info@bloomliteracyproject.org to schedule a visit for your school."
}
```

### Change Quick Response Buttons

Edit the `quickResponses` array in `/js/chatbot.js`:

```javascript
const quickResponses = [
    { label: "Button text", query: "keyword to search" },
    // Add more buttons here
];
```

### Update Colors

The chatbot uses your existing CSS variables, so if you change your site colors in `/css/style.css`, the chatbot will automatically match!

### Change the Greeting Message

Find this section in `/js/chatbot.js` (around line 125):

```javascript
<div class="chatbot-message bot-message">
    <div class="message-content">
        Hi! 👋 I'm the Bloom Assistant...
    </div>
</div>
```

## 🚀 Testing the Chatbot

1. Open any page on your website
2. Look for the pink-green button in the lower right corner
3. Click it to open the chat
4. Try asking:
   - "How can I donate?"
   - "What are your events?"
   - "Tell me about Nepal"
   - "How can I help?"

## 📱 Mobile Support

The chatbot automatically adjusts for mobile devices:
- Smaller button size
- Full-screen chat window
- Touch-friendly interface

## 🔧 Troubleshooting

**Chatbot doesn't appear?**
- Make sure `<script src="js/chatbot.js"></script>` is in your HTML
- Check browser console for errors (F12)

**Answers not relevant?**
- Add more specific keywords to the `patterns` array
- Test with different phrasings of questions

**Want to disable on certain pages?**
- Remove `<script src="js/chatbot.js"></script>` from those pages

## 💡 Tips for Better Responses

1. **Use multiple patterns**: Add variations of how people might ask
   ```javascript
   patterns: ['donate', 'donation', 'contribute', 'give money', 'support financially']
   ```

2. **Include links**: Direct users to relevant pages
   ```javascript
   response: "Check our <a href='events.html'>Events Page</a> for details!"
   ```

3. **Format with HTML**: Use `<br>` for line breaks, `<strong>` for emphasis
   ```javascript
   response: "<strong>Important:</strong> All donations are tax-deductible.<br>We're a certified 501(c)(3) nonprofit!"
   ```

4. **Keep it friendly**: Use emojis and conversational tone
   ```javascript
   response: "Great question! 🎉 We'd love to have you volunteer..."
   ```

## 🎯 Example Questions It Handles

- "What is Bloom Literacy Project?"
- "How do I donate?"
- "Where does my money go?"
- "What are the Nepal statistics?"
- "When are your events?"
- "Can I volunteer?"
- "Who are your partners?"
- "How can I contact you?"
- "What's your fundraising goal?"
- "Can I donate books?"

## 📊 Advanced: Track Chatbot Usage

Want to see what people ask? Add Google Analytics tracking:

1. In `/js/chatbot.js`, find the `handleUserInput` function
2. Add this line after the user sends a message:
   ```javascript
   if (typeof gtag !== 'undefined') {
       gtag('event', 'chatbot_question', {
           'event_category': 'Chatbot',
           'event_label': input
       });
   }
   ```

## 🌟 Future Enhancements

Want to make it even better? Consider:
- Adding more conversation context memory
- Implementing FAQs from actual visitor questions
- Adding seasonal responses (holiday campaigns, etc.)
- Including images in responses
- Multi-language support

---

**Need help?** The chatbot code is well-commented. Just open `/js/chatbot.js` to see how it works!

**Questions?** Email info@bloomliteracyproject.org

Enjoy your new chatbot! 🌸


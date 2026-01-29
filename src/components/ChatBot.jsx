import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 I'm your EduMon assistant. How can I help you regarding admission or colleges today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Add User Message
        const newUserMsg = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, newUserMsg]);
        setInputText("");

        // Simulate Bot Response
        setTimeout(() => {
            let botResponseText = "Thanks for your query! Our counselors will get back to you shortly. Meanwhile, you can explore our 'Colleges' section.";

            const lowerInput = newUserMsg.text.toLowerCase();
            if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                botResponseText = "Hello! Looking for a specific course or college?";
            } else if (lowerInput.includes('exam') || lowerInput.includes('fee')) {
                botResponseText = "You can find detailed exam and fee information on the respective Exam/College pages. Do you want me to navigate you there?";
            } else if (lowerInput.includes('scholarship')) {
                botResponseText = "We have a great list of scholarships available. Check out the 'Utilities' -> 'Scholarships' section!";
            }

            const newBotMsg = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, newBotMsg]);
        }, 1000);
    };

    return (
        <div className="chatbot-container">
            {/* Thread Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>Student Assistant</h3>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                <div className="message-content">
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chat-input-area" onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Type a question..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}

            {/* Launcher Button */}
            <button
                className={`chat-launcher ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '↓' : '💬'}
            </button>
        </div>
    );
};

export default ChatBot;

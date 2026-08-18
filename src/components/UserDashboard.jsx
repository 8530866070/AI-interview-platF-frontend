import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Bot,
  Plus,
  MessageCircle,
  Send,
  Paperclip,
  Mic,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

import "./userDashboard.css";

const UserDashboard = () => {
    const [message, setMessage] = useState("");

  // All chat messages
  const [messages, setMessages] = useState([]);

  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto scroll whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Call API
  const sendMessageToApi = async (userMessage) => {
    if (!userMessage.trim() || loading) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userMessage,
      },
    ]);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:1414/ans",
        {
          message: userMessage,
        }
      );

      console.log("API Response:", res.data);

      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: res.data.response,
        },
      ]);

    } catch (error) {
      console.error("API Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Sorry Rohan, please try again !",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Send typed message
  const sendMessage = () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessage("");

    sendMessageToApi(userMessage);
  };

  // Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // New chat
  const newChat = () => {
    setMessages([]);
    setMessage("");
  };

  // Quick suggestion buttons
  const quickMessage = (text) => {
    sendMessageToApi(text);
  };
  return (
    <>
       <div className="app">

        {/* Mobile overlay */}
        {sidebar && (
          <div
            className="overlay"
            onClick={() => setSidebar(false)}
          />
        )}

        {/* SIDEBAR */}
        <aside className={`sidebar ${sidebar ? "show" : ""}`}>

          <div className="sidebar-header">

            <div className="logo">
              <Bot size={24} />
            </div>

            <span>Co<span style={{ color: "#29e4f2" }}>ACH</span>.ai</span>

            <button
              className="close-btn"
              onClick={() => setSidebar(false)}
            >
              <X size={20} />
            </button>

          </div>

          <button
            className="new-chat"
            onClick={newChat}
          >
            <Plus size={18} />
            New Chat
          </button>

          <div className="sidebar-section">
            <p>Quick chats</p>

            <button className="history-item">
             
              <span>Welcome to <span>Co<span style={{ color: "#29e4f2" }}>ACH</span>.ai</span>
</span>
            </button>

            <button className="history-item"  onClick={() =>
                      quickMessage("Explain Java OOP concepts")
                    }
                    disabled={loading} >
              <MessageCircle size={16} />
              Explain Java OOP
            </button>

            <button className="history-item"  onClick={() =>
                      quickMessage("Help me with React")
                    }
                    disabled={loading}>
              <MessageCircle size={16} />
              Help me with React
            </button>

            <button className="history-item"   onClick={() =>
                      quickMessage(
                        "Prepare me for an interview"
                      )
                    }
                    disabled={loading}>
              <MessageCircle size={16} />
              Prepare me for an interview
                </button>

                 <button className="history-item"   onClick={() =>
                      quickMessage(
                        "Give me career advice"                      )
                    }
                    disabled={loading}>
              <MessageCircle size={16} />
              Give me career advice
                      </button>

          </div>

          <div className="sidebar-bottom">
            <div className="user-avatar">RK</div>

            <div>
              <strong>Rohan Kanade</strong>
             
            </div>
          </div>

        </aside>

        {/* MAIN */}
        <main className="main">

          {/* HEADER */}
          <header className="header">

            <button
              className="menu-btn"
              onClick={() => setSidebar(true)}
            >
              <Menu size={22} />
            </button>

            <div className="mobile-title">
              <Bot size={20} />
              CoACH
            </div>

            <div className="header-right">
              <button>
                <Sparkles size={18} />
              </button>
            </div>

          </header>

          {/* CHAT */}
          <section className="chat">

            {messages.length === 0 ? (

              /* WELCOME */
              <div className="welcome">

                <div className="welcome-icon">
                  <Bot size={40} />
                </div>

                <h1>
                   Rohan, <br /><span style={{color:"#0b0b0b"}}>Co<span style={{ color: "#29e4f2" }}>ACH</span></span>
 &nbsp; &nbsp;is here!
                </h1>

                

                

              </div>

            ) : (

              /* MESSAGES */
              <div className="messages">

                {messages.map((item, index) => (

                  <div
                    key={index}
                    className={`message ${
                      item.type === "user"
                        ? "user-message"
                        : "bot-message"
                    }`}
                  >

                    {item.type === "bot" && (
                      <div className="small-bot">
                        <Bot size={16} />
                      </div>
                    )}

                    <div className="message-content">
                      {item.text}
                    </div>

                  </div>

                ))}

                {/* Loading message */}
                {loading && (
                  <div className="message bot-message">

                    <div className="small-bot">
                      <Bot size={16} />
                    </div>

                    <div className="message-content">
                      Thinking...
                    </div>

                  </div>
                )}

                <div ref={messagesEndRef} />

              </div>

            )}

          </section>

          {/* INPUT */}
          <div className="input-wrapper">

            <div className="input-box">

              <button className="input-icon">
                <Paperclip size={19} />
              </button>

              <textarea
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Message Coach..."
                rows="1"
              />

              <button className="input-icon">
                <Mic size={19} />
              </button>

              <button
                className={`send-btn ${
                  message.trim() ? "active" : ""
                }`}
                onClick={sendMessage}
                disabled={!message.trim() || loading}
              >
                <Send size={18} />
              </button>

            </div>

            <p className="disclaimer">
              Coach can make mistakes. Check important information.
            </p>

          </div>

        </main>

      </div>
    </>
  )
}

export default UserDashboard

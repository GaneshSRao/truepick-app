import React, { useState } from 'react';
import './Inbox.css';
import messagesData from './InboxItems.json';
import Hero from '../../Components/Hero/Hero';

const Inbox = () => {
  const [activeMessage, setActiveMessage] = useState(null);

  const handleMessageClick = (e, message) => {
    e.preventDefault(); // Prevents the page from reloading
    setActiveMessage(message);
  };

  const hideMessage = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    setActiveMessage(null);
  };

  const heroData = {
        name: "Inbox",
        tagline: "Manage messages from user to user and admin."
    };

  return (
    <div className="main-wrapper">
      <div className="container-wrapper">
        <div className="row">
          {/* Page Header */}
          <Hero {...heroData} />
          {/* Inbox Actions & Filters */}
          <div className="col s12">
            <div className="action-buttons-container">
              <a href="#!" className="btn waves-effect waves-light primary-action-btn" onClick={(e) => e.preventDefault()}>
                Compose
                <i className="material-icons right">edit</i>
              </a>
            </div>
          </div>

          {/* Main Content Row */}
          <div className="col s12">
            <div className="inbox-card-container">
              {/* Message List Column */}
              <div id="inboxList" className={`col s12 m4 ${activeMessage ? 'mobile-hide' : ''}`}>
                <h2 className="section-title">Message Threads</h2>
                <div className="message-list">
                  {messagesData.map((message) => (
                    <a
                      key={message.id}
                      href="#!"
                      className={`message-card ${message.unread ? 'unread' : ''} ${activeMessage?.id === message.id ? 'active' : ''}`}
                      onClick={(e) => handleMessageClick(e, message)}
                    >
                      <img src={message.senderAvatar} alt="User Avatar" className="sender-avatar" />
                      <div className="message-card-content">
                        <div className="message-sender">{message.senderName}</div>
                        <div className="message-subject">{message.subject}</div>
                        <div className="message-excerpt">{message.body.substring(0, 70)}...</div>
                      </div>
                      <div className="message-date">{message.date}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Message View Column */}
              <div id="messageViewContainer" className={`col s12 m8 ${activeMessage ? '' : 'mobile-hide'}`}>
                <div className="mobile-hide">
                  <h2 className="section-title">Conversation</h2>
                </div>
                <a href="#!" className="btn-flat waves-effect mobile-show message-view-mobile-back" onClick={hideMessage}>
                  <i className="material-icons left">arrow_back</i> Back to Inbox
                </a>
                <div className="thread-header">
                  <h4 id="threadSubject">
                    {activeMessage ? activeMessage.subject : 'Select a message to view the conversation'}
                  </h4>
                </div>
                <div className="thread-messages" id="threadMessages">
                  {activeMessage && (
                    <div className="message-bubble">
                      <div className="message-meta">
                        <strong>{activeMessage.senderName}</strong>
                        <span className="right">{activeMessage.date}</span>
                      </div>
                      <p>{activeMessage.body}</p>
                    </div>
                  )}
                  {activeMessage && activeMessage.senderName !== 'Admin Support' && (
                    <div className="message-bubble reply">
                      <div className="message-meta">
                        <strong>You</strong>
                        <span className="left">1m ago</span>
                      </div>
                      <p>Thank you for reaching out. I've received your message and will get back to you shortly.</p>
                    </div>
                  )}
                </div>
                <div className="reply-box">
                  <textarea id="replyInput" placeholder="Write a reply..."></textarea>
                  <a href="#!" className="btn waves-effect waves-light primary-action-btn" onClick={(e) => e.preventDefault()}>
                    Send
                    <i className="material-icons right">send</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
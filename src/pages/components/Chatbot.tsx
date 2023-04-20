import React from "react";

const Chatbot: React.FC = () => {
    return (
        <div>
            <h1>Chatbot</h1>
            <div className="iframe-container">
                <iframe
                    src="https://web.powerva.microsoft.com/environments/Default-04b6764c-f34a-4081-a495-1db70c288342/bots/new_bot_26f1d81ff5ba4bfdb287dc7d3f997b5c/webchat"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default Chatbot;

import React, { useEffect, useState } from "react";
import MessageService from "../../../../services/MessageService";
import { Messages } from "../../../../libs/types/message";
import "./styles.scss";


const ClientMessageList: React.FC = () => {
  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messageService = new MessageService();
        const data = await messageService.getMessages();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="message-list-table">
      <h2>Message List</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={message._id}>
              <td>{index + 1}</td>
              <td>{message.fullName}</td>
              <td>{message.phone}</td>
              <td>{new Date(message.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientMessageList;

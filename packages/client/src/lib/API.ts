import axios from 'axios';

class API {
  prefix = 'http://localhost:9999';

  async getConversations() {
    try {
      const res = await axios.get(`${this.prefix}/conversations`);
      return res.data;
    } catch (e) {
      return null;
    }
  }

  async createConversation(name: string) {
    const res = await axios.post(`${this.prefix}/conversations`, { name });
    return res.data;
  }

  async getConversation(id: string) {
    try {
      const res = await axios.get(`${this.prefix}/conversations/${id}`);
      return res.data;
    } catch (err) {
      return null;
    }
  }

  async getMessages(id: string) {
    const res = await axios.get(`${this.prefix}/conversations/${id}/messages`);
    return res.data;
  }

  async createMessage (conversationId: string, content: string) {
    const res = await axios.post(`${this.prefix}/messages`, {
      userId: "2ca24d06-8f3d-48c3-8c7b-4b1b075b938d",
      content,  // equivalent to content:content
      conversationId
    });
    return res.data;
  }

}

export const api = new API();

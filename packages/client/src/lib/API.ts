import axios from 'axios';

//why we using Class here?
class API {
  prefix = 'http://localhost:9999';

  async getConversation(id: string) {
    const res = await axios.get(`${this.prefix}/conversations/${id}`);
    return res.data;
  }

  async getMessages(id: string) {
    const res = await axios.get(`${this.prefix}/conversations/${id}/messages`);
    return res.data;
  }
}

export const api = new API();

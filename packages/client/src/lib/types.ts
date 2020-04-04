// typescript specific. Ensures we maintain Conversation object types
export interface Conversation {
  name: string;
  id: string;
}

export interface Message {
  /** This is the message content */
  content: string;
  id: string;
}

import { ChatMessageType } from './../components/pages/ChatPage/Messages/Messages';

type SubscribesType = (messages: ChatMessageType[]) => void

let subscribers = [] as Array<SubscribesType>

let ws: WebSocket | null = null;

const closeHandlers = () => {
  setTimeout(createChannel, 3000)
}

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandlers);
  ws?.removeEventListener('message', messageHendler);
}

const createChannel = () => {
  cleanUp();
  // ws?.close;
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  ws.addEventListener('close', closeHandlers);
  ws.addEventListener('message', messageHendler);
}

const messageHendler = () => {
  ws?.addEventListener('message', (e) => {
    let newMessage = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessage));
  })
}

export const chatAPI = {
  start() {
    createChannel();
  },
  stop() {
    cleanUp();
    ws?.close();
  },
  subscribe(callback: SubscribesType) {
    subscribers.push(callback)
    return () => {
      subscribers = subscribers.filter(s => s !== callback);
    }
  },
  sendMessage(message: string) {
    ws?.send(message);
  }
}
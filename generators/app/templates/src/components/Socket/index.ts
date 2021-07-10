export interface CallbackMap {
  [key: string]: (data: any)=> void
}

export interface GosSocket{
  socket: WebSocket | null,
  on(topic: string, listener: (data: any) => void): void,
  destroy(): void,
}

export function connectSocket(url:string, token: string = 'no_access_token', callbackMap?: CallbackMap) {
  let socket: WebSocket | null = new WebSocket(url, ['access_token', token]);
  socket.addEventListener('open', function (event) {
    console.log('即时通讯服务开启');
  });
  if (callbackMap) {
    socket.addEventListener('message', (event) => {
      let eventD = JSON.parse(event.data);
      if (eventD && callbackMap && callbackMap[eventD.topic]) {
        callbackMap[eventD.topic].call(socket, eventD)
      }
    });
  }
  socket.addEventListener('close', function (event) {
    console.log('即时通讯服务关闭');
  });

  const on = (topic: string, listener: (data: any)=> void) => {
    // console.log('开始监听' + topic)
    socket?.addEventListener('message', (event) => {
      let eventD = JSON.parse(event.data);
      if (eventD.topic === topic && listener) {
        // console.log('监听到' + eventD.topic)
        listener(eventD);
      }
    })
  }
  const destroy = () => {
    socket?.close();
    socket = null;
  }
  return { socket , on, destroy };
}

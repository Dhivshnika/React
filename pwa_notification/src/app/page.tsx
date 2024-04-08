'use client'

import React, { useCallback, useEffect } from "react";


export default function Home() {
  const sendNotification = useCallback(() => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Hello User!!', {
        body: "This is your notification message!!",
        icon: '/bell.png',
      });
    } else if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          sendNotification();
        }
      });
    }
  }, []);

  useEffect(() => {
    if ('Notification' in window) {
      sendNotification();
    }
  }, []);

  return (
    <div>
      <h1>PWA Notifications</h1>
      <div onClick={sendNotification}>Trigger Notification</div>
    </div>
  );
}

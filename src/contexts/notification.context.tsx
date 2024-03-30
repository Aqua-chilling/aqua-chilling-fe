import { INotification, NotificationComponent } from '@/components/notification/notification';
import { createContext, useContext, useState } from 'react';

export interface IDefaultNotificationContext {
  addNotification: (arg0: INotification) => void;
  removeNotification: (arg0: number) => void;
}
const NotificationContext = createContext<IDefaultNotificationContext | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: any }) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const addNotification = (notication: INotification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notication]);
  };
  const removeNotification = (id: number) => {
    setNotifications((prevNotifications) => prevNotifications.filter((item) => item.id !== id));
  };
  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification }}>
      {children}
      <div className='notifications-container'>
        {notifications?.map((noti: INotification, key) => {
          return <NotificationComponent {...noti} />;
        })}
      </div>
    </NotificationContext.Provider>
  );
};
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('Notification Context not found');
  }
  return context;
};

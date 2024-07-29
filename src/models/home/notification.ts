interface Notification {
  description: string;
  productId: string;
  title: string;
  url: string;
  show: boolean;
  date: string;
}

interface NotificationTypes {
  notifications: Notification[];
  pending: boolean;
  error: object;
}

export type {Notification, NotificationTypes};

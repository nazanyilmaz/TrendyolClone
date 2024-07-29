const convertPrice = (price: number) => {
  return ` $${price}`;
};

const countNotificationRead = (notifications: Array) => {
  return notifications.filter(item => !item.show).length;
};

export {convertPrice, countNotificationRead};

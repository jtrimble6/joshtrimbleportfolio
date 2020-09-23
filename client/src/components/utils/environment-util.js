export const getEnvironment = () => process.env.NODE_ENV
  ? process.env.NODE_ENV
  : 'development';

  export const getApiUrl = () => {
    switch (getEnvironment()) {
      case 'production':
        return 'https://www.googleapis.com/gmail/v1/users/jaytrim6@gmail.com/messages/id';
      case 'development':
      default:
        return 'http://localhost';
    }
  };

  export const getAppUrl = () => {
  switch (getEnvironment()) {
    case 'production':
      return 'https://joshuatrimble.com';
    case 'development':
    default:
      return 'http://localhost';
  }
};
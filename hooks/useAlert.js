import { useState } from 'react';
import { Alert } from 'react-native';

const useAlert = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = (message, title = 'Notificación') => {
    Alert.alert(title, message, [
      { text: 'OK', onPress: () => setAlertVisible(false) }
    ]);
    setAlertVisible(true);
  };

  return { showAlert, alertVisible };
};

export default useAlert;
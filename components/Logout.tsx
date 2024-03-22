import React from 'react';
import {Button} from 'react-native';

interface LogoutButtonProps {
  onLogout: () => void;
}

function Logout({onLogout}: LogoutButtonProps): React.JSX.Element {
  const handleLogout = () => {
    onLogout();
  };

  return <Button title="Logout" onPress={handleLogout} />;
}

export default Logout;

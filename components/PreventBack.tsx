import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';

function PreventBack(): React.JSX.Element {
  // Prevent going back to the previous screen
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return <></>;
}

export default PreventBack;

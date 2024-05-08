import React, {Component} from 'react';
import {View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures-plus';

export default function App() {
  const [myText, setMyText] = React.useState("I'm ready to get swiped!");
  const [gestureName, setGestureName] = React.useState('none');
  const [backgroundColor, setBackgroundColor] = React.useState('#fff');

  const onSwipeUp = (gestureState) => {
    setMyText('You swiped up!');
  };

  const onSwipeDown = (gestureState) => {
    setMyText('You swiped down!');
  };

  const onSwipeLeft = (gestureState) => {
    setMyText('You swiped left!');
  };

  const onSwipeRight = (gestureState) => {
    setMyText('You swiped right!');
  };

  const onPress = (gestureState) => {
    setMyText('You Clicked!');
  };

  const onLongPress = (gestureState) => {
    setMyText('You Long Pressed!');
  };

  const onLongPressRelease = (gestureState) => {
    setMyText('You Long Pressed Released!');
  };

  const onSwipe = (gestureName, gestureState) => {
    const {
      SWIPE_UP,
      SWIPE_DOWN,
      SWIPE_LEFT,
      SWIPE_RIGHT,
      ON_PRESS,
      ON_LONGPRESS,
      ON_LONGPRESS_RELEASE,
    } = swipeDirections;
    setGestureName(gestureName);
    switch (gestureName) {
      case SWIPE_UP:
        setBackgroundColor('red');
        break;
      case SWIPE_DOWN:
        setBackgroundColor('green');
        break;
      case SWIPE_LEFT:
        setBackgroundColor('blue');
        break;
      case SWIPE_RIGHT:
        setBackgroundColor('yellow');
        break;
      case ON_PRESS:
        setBackgroundColor('black');
        break;
      case ON_LONGPRESS:
        setBackgroundColor('pink');
        break;
      case ON_LONGPRESS_RELEASE:
        setBackgroundColor('pink');
        break;
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
    swipeEnabled: true,
    longpressDelay: 700,
  };

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      onSwipeUp={(state) => onSwipeUp(state)}
      onSwipeDown={(state) => onSwipeDown(state)}
      onSwipeLeft={(state) => onSwipeLeft(state)}
      onSwipeRight={(state) => onSwipeRight(state)}
      onPress={(state) => onPress(state)}
      onLongPress={(state) => onLongPress(state)}
      onLongPressRelease={(state) => onLongPressRelease(state)}
      config={config}
      gestureStyle={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: backgroundColor,
      }}
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}>
      <Text>{myText}</Text>
      <Text>callback received gesture: {gestureName}</Text>
    </GestureRecognizer>
  );
}
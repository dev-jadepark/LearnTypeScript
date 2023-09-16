import React, { useReducer } from 'react';
import { Button, Text, View } from 'react-native';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

type CounterAction = { type: 'increment' } | { type: 'decrement'; by: number }; 

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return {
        value: state.value + 1,
      }
    case 'decrement':
      return {
        value: state.value - action.by,
      }
    default:
      throw new Error('Unhandled action type');
  }
}

/*
`reducer` 함수는 그 이름 자체가 함수의 역할을 설명하는 데 사용되는 컴퓨터 과학 용어입니다. 이 용어는 특히 함수형 프로그래밍과 상태 관리 패턴에서 사용됩니다.

Redux 및 React의 `useReducer`와 같은 상태 관리 라이브러리 및 패턴에서 `reducer`라고 불리는 이 함수는 이전 상태와 액션을 받아서 새로운 상태를 생성하는 역할을 합니다. 이러한 함수는 매우 순수하며, 부수 효과(side effect)를 발생시키지 않아야 합니다. 즉, 동일한 입력에 대해 항상 동일한 출력을 반환해야 합니다.

`reducer`라는 이름은 이 함수가 상태를 "줄이는" 역할을 한다는 개념에서 비롯되었습니다. 이전 상태를 새로운 상태로 "줄여서" 반환하기 때문입니다. 이것은 함수형 프로그래밍에서 사용되는 맵/리듀스(map/reduce) 패턴의 일부이며, 상태 관리에서 변화를 관리하기 위한 중요한 요소 중 하나입니다.

따라서 `reducer`라는 용어는 이 함수의 주요 역할을 간결하게 설명하고자 사용되며, 많은 상태 관리 라이브러리와 프레임워크에서 일반적으로 이 용어를 채택하고 있습니다.
*/

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>{ state.value }</Text>
      <Button
        title="+1"
        onPress={() => {
          dispatch({
            type: 'increment',
          })
        }}
      />
      <Button
        title="-1"
        onPress={() => 
          dispatch({ type: 'decrement', by: 1 })}
      />
    </View>
  );
  
}

export default Counter;
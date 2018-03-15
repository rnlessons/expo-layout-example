# 리액트 네비게이션과 함께 플렉스 레이아웃 연습해보기

안녕하세요. 여러분 지금부터 EXPO XDE를 이용하여 앱에서의 페이지 전환을 담당하는 네비게이션과 플랙스 레이아웃을 연습해보는 시간을 갖겠습니다.
플랙스 레이아웃은 리액트 네이티브에서 앱의 모양새를 만들어나가는 핵심적인 방법입니다.

## 필요 환경 설치

여러분은 해당 강의를 시작하기 전에 아래의 두가지를 시작해야합니다.

1. Expo 통합 개발환경(XDE)

    - [expo.io](https://www.github.com/expo/xde/releases)

2. 모바일 클라이언트 앱 다운로드

    - [IOS App Store](https://itunes.apple.com/app/apple-store/id982107779)
    - [Google Play Sore](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

## 신규 프로젝트 생성

1. Expo XDE를 실행합니다.
2. 신규 프로젝트를 생성(create new project)합니다.

## 클라이언트에서 공유

1. Expo XDE에서 우측 상단의 Share 버튼을 클릭합니다.
2. 모바일에서 Expo 클라이언트 앱을 실행하고 Scan QR Code 버튼을 터치 합니다.
3. 컴퓨터 화면상의 QR Code를 스캔합니다.

## 리액트 네비게이션 설치

npm 도구를 사용해서 리액트 네비게이션을 설치해야 합니다.

```bash
npm install --save react-navigation 설치
```

## 홈 스크린 파일 생성

홈 스크린 파일을 아래의 경로에 생성합니다.

```
components/Home.js
```

기본 생성 되어 있는 App.js 파일의 전체 내용을 방금 만든 Home.js에 복사하여 붙여 넣기합니다.

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## 네비게이션 라우터 세팅

해당 파일을 열어줍니다.

```
App.js
```

모든 내용을 지우고 다음의 내용을 넣어줍니다.

```js
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/Home';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

```

이제 여러분은 네비게이션에 연결된 홈 스크린을 성공적으로 연결하였습니다. 홈 스크린은 앱이 처음으로 로드 될 때 사용자에게 보여질 첫 화면이 됩니다.

## Flex Layout의 Direction(방향)

리액트 네이티브의 레이아웃은 여러 UI요소는 기본적으로 트리 구조를 갖습니다. 이때 부모가 되는 UI요소에서 자식 요소을 배치시킬 때 해당 UI요소들이 어떤 방향으로 배치가 될지를 지정해줄 수 있습니다. 우리는 두가지 방향을 설정 할 수 있습니다.

- Column: 수직
- Row: 수평

또한 아래의 Position을 이용하요 레이아웃을 Floating(화면에 둥둥?) 시킬 수 있습니다.

- Absolute Position

## 스크린 파일 생성

우리는 UI요소의 Flex Direction을 실습해 보기 위해 아래의 경로에 3개의 스크린 파일을 만들도록 합니다.

```
components/Column.js
components/Row.js
components/Absolute.js
```

각 파일에는 다음과 같은 내용을 채워줍니다.

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          borderWidth: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
          <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

## 네비게이션 라우터 세팅

해당 파일을 열어줍니다.

```bash
App.js
```

위에서 만들 었던 3개의 스크린 파일을 라우터에 연결하여 줍니다.

```js
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/Home';
import ColumnScreen from './components/Column';
import RowScreen from './components/Row';
import AbsoluteScreen from './components/Absolute';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Column: {
    screen: ColumnScreen,
  },
  Row: {
    screen: RowScreen,
  },
  Absolute: {
    screen: AbsoluteScreen,
  },
});

```

## 버튼 만들기 및 링크

라우터에 등록된 각 스크린으로의 이동은 스크린 컴포넌트에 자동 주입된 navigation 객체를 통해 가능합니다.
아래의 파일을 열어 줍니다.

```bash
components/Home.js
```

각 스크린을 자유롭게 이동하기 위해 우리는 대표적으로 버튼을 이용할 수 있습니다.

```js
... 생략
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
            title="Column Layout"
            onPress={() => {
                this.props.navigation.navigate('Column');
            }}
        />
        <Button
            title="Row Layout"
            onPress={() => {
                this.props.navigation.navigate('Row');
            }}
        />
        <Button
            title="Absolute Layout"
            onPress={() => {
                this.props.navigation.navigate('Absolute');
            }}
        />
      </View>
    );
  }
}
... 생략

```

## Column(컬럼: 수직) 레이아웃 연습

이제 여러분은 컬럼 레이아웃을 연습 할 기본적인 준비가 되었습니다. 여러분이 보고 계신 앱의 화면에서 Column Layout 버튼을 터치해주세요.
그리고 아래의 파일을 열어줍니다.

```bash
components/Column.js
```

우리는 이제부터 alignItems와 justifyContent의 속성을 변경 하면  지정된 direction에 따라 어떻게 변하는지 확인하려 합니다.
render() 함수안의 return문 안에 다음의 내용을 추가해 줍니다. alignItems와 justifyContent의 값을 센터로 변경하여 줍니다.

```js
<View style={{
    flex: 1,
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}}>
    <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
</View>
```

수정 결과는 아래와 같습니다.

```js
...생략
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          borderWidth: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
          <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
...생략
```

우리는 이제부터 alignItems와 justifyContent의 flex-end 속성을 부여하고 이를 비교해 보기위해 다음의 코드를 한번더 추가해 줍니다.

```js
<View style={{
    flex: 1,
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
}}>
    <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
</View>
```

수정 결과는 아래와 같습니다.

```js
...생략
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          borderWidth: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
          <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        }}>
            <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
...생략
```

## Row(컬럼: 수평) 레이아웃 연습

여러분이 보고 계신 앱의 화면에서 Row Layout 버튼을 터치해주세요.
그리고 아래의 파일을 열어줍니다.

```bash
components/Row.js
```

컬럼 레이아웃에서 본 것과 같이 우리는 이제부터 flexDirection: 'row' 일때  alignItems와 justifyContent의 속성을 변경 하면 지정된 direction에 따라 어떻게 변하는지 확인하려 합니다. flexDirection의 값을 row로 변경해 봅니다.

```js
<View style={{
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
}}>
    <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
</View>
```

render() 함수안의 return문 안에 다음의 내용을 추가해 줍니다. alignItems와 justifyContent의 값을 센터로 변경하여 줍니다.
```js
<View style={{
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}}>
    <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
</View>
```

수정 결과는 아래와 같습니다.

```js
...생략
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
          <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
...생략
```

우리는 이제부터 alignItems와 justifyContent의 flex-end 속성을 부여하고 이를 비교해 보기위해 다음의 코드를 한번더 추가해 줍니다.
```js
<View style={{
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
}}>
    <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
</View>
```

수정 결과는 아래와 같습니다.

```js
...생략
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
          <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
          <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{
            flex: 1,
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        }}>
            <View style={{width: 30, height: 30, backgroundColor: 'powderblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'skyblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
...생략
```

## Absolute 레이아웃 연습

이제 우리는 간단하게 Absolute 레이아웃이 어떻게 UI 요소를 플로팅 요소로 변경 할 수 있는지 확인 해 볼 수 있습니다.
아래의 파일을 열어줍니다.

```bash
components/Absolute.js
```

파일의 내용을 다음 처럼 변경합니다.
```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          borderWidth: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
          <View style={{width: 30, height: 30, backgroundColor: 'powderblue', position: 'absolute', left: 30, top: 30, zIndex: 2}} />
          <View style={{width: 30, height: 30, backgroundColor: 'skyblue', position: 'absolute', left: 50, top: 50, zIndex: 1}} />
          <View style={{width: 30, height: 30, backgroundColor: 'steelblue', position: 'absolute', left: 70, top: 70, zIndex: 3}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

```
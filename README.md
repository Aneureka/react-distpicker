# react-distpicker

> <code>react-distpicker</code> is a **Chinese** district picker for react, inspiring from [Distpicker](https://github.com/fengyuanchen/distpicker) 



## Getting started

### Install

```
npm install react-distpicker -S
```

or

```
yarn add react-distpicker -S
```

### Create component

```javascript
import DistPicker from 'react-distpicker';

const App = () => (
    <DistPicker />
);

export default App;
```

You can have a glance in /examples.

### Options

| Property            | Description                                                  | Type   | Default value |
| ------------------- | ------------------------------------------------------------ | ------ | ------------- |
| placeholderProvince | placeholder for province selector                            | string | —— 省 ——      |
| placeholderCity     | placeholder for city selector                                | string | —— 市 ——      |
| placeholderDistrict | placeholder for district selector                            | String | —— 区 ——      |
| pickerClass         | class for the Distpicker, mainly used to change the style    | String |               |
| selectClass       | class for the select component in DistPicker, mainly used to change the style | String |               |
| onSelect            | the callback function while selecting, receiving an object including province, city and district | func   |               |



## Contributor

[Aneureka](https://github.com/aneureka)



## License

The plugin is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
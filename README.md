# react-3d-cube

>

[![NPM](https://img.shields.io/npm/v/react-3d-cube.svg)](https://www.npmjs.com/package/react-3d-cube) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-3d-cube
```

## Usage

[demo](https://codesandbox.io/s/ojvpllm87q)

```tsx
import * as React from 'react';

import Cube from 'react-3d-cube';

class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>react-3d-cube</h1>
        <h2>no children</h2>
        <div
          style={{
            width: 300,
            height: 300
          }}
        >
          <Cube size={300} index="front" />
        </div>
        <h2>set children</h2>
        <div
          style={{
            width: 300,
            height: 300
          }}
        >
          <Cube size={300} index="front">
            <div>front</div>
            <div>right</div>
            <div>back</div>
            <div>left</div>
            <div>top</div>
            <div>bottom</div>
          </Cube>
        </div>
      </div>
    );
  }
}
```

## License

MIT © [pjb0811](https://github.com/pjb0811)

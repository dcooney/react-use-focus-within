# react-use-focus-within

A react hook for detecting current DOM focus within an HTML element.

[![npm](https://img.shields.io/npm/v/react-use-focus-within)](https://www.npmjs.com/package/react-use-focus-within)

## Install

```bash
# With npm
npm i react-use-focus-within

# With Yarn
yarn add react-use-focus-within

```

## Usage

```javascript
import React from 'react'
import useFocusWithin from 'react-use-focus-within'

export default function App() {
   const ref = useRef()
   const isFocused = useFocusWithin(ref)
   // console.log(isFocused)

   return (
      <div ref={ref}>
         <ul>
            <li>
               <a href="https://github.com/">Github</a>
            </li>
            <li>
               <a href="https://npmjs.com/">NPM</a>
            </li>
            <li>
               <a href="https://react.dev/">React</a>
            </li>
         </ul>
      </div>
   )
}
```

## Contributing

1. Fork this repository.
2. Create your branch: git checkout -b my-new-feature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin my-new-feature.

After your pull request is merged, you can safely delete your branch.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/dcooney/react-npm-starter/blob/main/LICENSE) file for more information.

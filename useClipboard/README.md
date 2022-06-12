# @cecy/use-clipboard
React Hook to copy your text in clipboard

## installation
yarn
`yarn add @cecy/use-clipboard`

npm 
`npm i @cecy/use-clipboard`

## Usage

```
imoprt React from "react";
import useClipboard from "@cecy/use-clipboard";

export default function App() {
  const { element, handleCopyText } = useClipboard();

  return (
    <div>
      <h1 ref={element}>text to be copied</h1>
      <button onClick={handleCopyText}>COPY</button>
      <input placeholder="ctrl+v here" />
    </div>
  );
}
```

## Return
`useClipboard` returns an object containing the following:
| Name           | Type      | Description                                    |
|----------------|-----------|------------------------------------------------|
| element        | React Ref | A ref created to text to be copied the element |
| handleCopyText | function  | function to access the system clipboard 
# use-axios
React Hook to fetch and refetch APIs with axios

## installation
~~yarn~~
~~`yarn add @cecy/use-axios`~~

~~npm ~~
~~`npm i @cecy/use-axios`~~

## Usage

```
imoprt React from "react";
// import useAxios from "@cecy/use-axios";

export default function App() {
  const { loading, error, data ,refetch} = useAxios({
    url: "https://jsonplaceholder.typicode.com/todos/1"
  });
  return (
    <div>
      <h1>{loading ? "loading..." : "Loaded"}</h1>
      <button onClick={refetch}>refech</button>
    </div>
  );
}
```

## Argument
| Argument      | Type   | Description                                 | Required |
|---------------|--------|---------------------------------------------|----------|
| opts          | object | An object with request url                  | yes      |
| axiosInstance | object | axiosInstance has defaultAxios as a default | no       |

## Return
`useAxios` returns an object containing the following:
| Name    | Type     | Description                                                         |
|---------|----------|---------------------------------------------------------------------|
| state   | object   | An object containing `{loading:boolean, url:string, error: string}` |
| refetch | function | Function to refetch APIs                                            |
# Installation

### `npm i`

## Requirements

- nodejs >=14.19.1

## Running Development Mode

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.

# Components

## MainGrid

| Prop      | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| `columns` | number | Yes      | Specifies the number of columns in the grid |
| `rows`    | number | Yes      | Specifies the number of rows in the grid    |

## MainGridCell

| Prop | Type   | Required | Description                   |
| ---- | ------ | -------- | ----------------------------- |
| `id` | number | Yes      | Specifies the id for the cell |

## Sidebar

| Prop            | Type     | Required | Description                                                                  |
| --------------- | -------- | -------- | ---------------------------------------------------------------------------- |
| `getInputValue` | function | Yes      | A function that receives the number of rows and columns when they are valid. |
| `isOpen`        | boolean  | Yes      | Specifies the state of the sidebar                                           |
| `setIsOpen`     | function | Yes      | A function that toggles a boolean state to hide and reveal the sidebar .     |

## useDimensions Hook

The useDimensions hook is a custom hook that calculates the dimensions (width and height) of a ref object. It returns an object containing the dimensions.

# Example

```typescript
import React, { FC } from "react";
import { createRef } from "react";
import useDimensions from "../../hooks/useDimensions";

function MyComponent() {
  const divRef = createRef<HTMLDivElement>();
  const dimensions = useDimensions(divRef);

  return (
    <div ref={ref}>
      <p>Width: {dimensions.width}px</p>
      <p>Height: {dimensions.height}px</p>
    </div>
  );
}
```

# Viewport Grid

## Task

Using the provided project template (based off create-react-app), create single page application that contains a uniform Grid of Viewports, with a fixed Sidebar. The Sidebar shall contain the inputs "Rows" and "Columns" both of which must be in the range of 1-10, and a button to collapse and expand the Sidebar. The Grid must show the defined number of "Rows" and "Columns", with a Viewport at each position. The Grid must fill remaining space and fit all Viewports equally, with a small gutter between them, and efficiently adapt to browser resizes and Sidebar collapsing/expanding. Each Viewport must have a thin border. Viewports must also be aware of their size at all times and be printed at its center.
The example colours are just for reference and styling should be adjusted for a clean modern UX.

### Example

![](example.gif)

### Constraints

- Solution should be production quaility, documented, and reusable.
- Solution should contain appropriate unit testing.
- Solution should not require additional NPM packages.
- Solution should work against the latest version of Chrome, Firefox and Edge

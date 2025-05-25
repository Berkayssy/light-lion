# 📦 light-lion

A simple and customizable React button component with multiple styles (`primary`, `default`, `dashed`, `text`, `link`). Lightweight, modern and easy to use.

## 🚀 Installation

```bash
npm install light-lion

yarn add light-lion

## Usage

import React from 'react';
import { Button } from 'my-react-button';

function App() {
  return (
    <>
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </>
  );
}

## Props

Prop            Type                                                   Description                     Default

type            'primary' | 'default' | 'dashed' | 'text' | 'link'     Button style variant            -

onClick         () => void                                             Click handler                   -

children        ReactNode                                              Button label or inner content   -

## Customization

You can style the button by editing the src/Button.module.css (or any other styling strategy you used).

Example with Tailwind or CSS Modules is supported.

## Development

git clone https://github.com/yourusername/my-react-button.git
cd my-react-button
npm install
npm run dev

## Publishing

This package is published on npmjs.com

License

MIT
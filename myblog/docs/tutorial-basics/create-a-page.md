
---
id: doc-with-tags
title: 一篇包含标签的文档  
tags: 
  - 演示
  - 开始上手
---
# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).

:::note

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::tip

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。
tags:
  - 演示
  - 开始上手

:::

:::info

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::caution

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::danger

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '8px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

 <Highlight color="#25c2a0"> java green </Highlight> 
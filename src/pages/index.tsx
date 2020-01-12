import Head from "next/head";
import React from "react";

import { attributes, react as Content } from "../../content/home.md";

import { App } from "@/components";

interface Attributes {
  title: string;
  cats: Array<{
    name: string;
    description: string;
  }>;
}

export default class Home extends React.Component {
  render() {
    const { title, cats } = attributes as Attributes;

    return (
      <article>
        <h1>{title}</h1>
        <Content />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

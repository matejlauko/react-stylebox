import React from 'react';
import { Styler, createRenderer } from '../../fela/index';
import testRenderer from 'react-test-renderer';
import { renderToString } from 'fela-tools';

// splits the css string into a more readable format (credit: este's source)
const prettifyFelaString = str => str.replace(/\.[a-z]+/g, '\n    $&');

export default function renderFelaComponent(Component) {
  const felaRenderer = createRenderer();

  return {
    component: testRenderer.create(<Styler renderer={felaRenderer}>{Component}</Styler>).toJSON(),
    styles: prettifyFelaString(renderToString(felaRenderer)),
  };
}

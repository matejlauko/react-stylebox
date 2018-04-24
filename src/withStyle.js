// @flow
import * as React from 'react';
import { StyleContext } from './Styler';
import pick from 'ramda/src/pick';

const withStyle = (whichContext: string | string[]) => (Comp: React.ComponentType) => {
  whichContext = [].concat(whichContext);
  return (props: {}) => (
    <StyleContext.Consumer>
      {styleContext => <Comp {...props} {...pick(whichContext, styleContext)} />}
    </StyleContext.Consumer>
  );
};

export default withStyle;

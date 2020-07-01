/** @jsx jsx */

import { Editor } from 'slate';
import { jsx } from '../../../../__test-utils__/jsx';
import { getTextFromBlockStartToAnchor } from '../../../queries/index';

const input = ((
  <editor>
    <hp>
      te
      <cursor />
      st
    </hp>
  </editor>
) as any) as Editor;

const output: ReturnType<typeof getTextFromBlockStartToAnchor> = {
  text: 'te',
  range: {
    anchor: { path: [0, 0], offset: 0 },
    focus: { path: [0, 0], offset: 2 },
  },
};

it('should be', () => {
  expect(getTextFromBlockStartToAnchor(input)).toEqual(output);
});
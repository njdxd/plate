/** @jsx jsx */

import { createParagraphPlugin } from '@udecode/plate-paragraph';
import { jsx } from '@udecode/plate-test-utils';
import { createPlateEditor } from '../../../utils/createPlateEditor';
import { htmlBodyToFragment } from './htmlBodyToFragment';
import { parseHtmlElement } from './parseHtmlElement';

jsx;

describe('when element is a body', () => {
  it('should be a fragment with the children', () => {
    const output = (
      <fragment>
        <hp>
          <htext>test</htext>
        </hp>
      </fragment>
    );

    const body = document.createElement('body');
    body.appendChild(parseHtmlElement(`<p>test</p>`));

    expect(
      htmlBodyToFragment(
        createPlateEditor({ plugins: [createParagraphPlugin()] }),
        body
      )
    ).toEqual(output);
  });
});

describe('when element is not a body', () => {
  const output = undefined;

  it('should be undefined', () => {
    expect(
      htmlBodyToFragment(
        createPlateEditor(),
        parseHtmlElement(`<div>test</div>`)
      )
    ).toEqual(output);
  });
});

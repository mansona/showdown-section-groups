/**
 * Showdown's Extension boilerplate
 *
 * A boilerplate from where you can easily build extensions
 * for showdown
 */

import showdown from 'showdown';

// This is the extension code per se

// Here you have a safe sandboxed environment where you can use "static code"
// that is, code and data that is used accros instances of the extension itself
// If you have regexes or some piece of calculation that is immutable
// this is the best place to put them.

// The following method will register the extension with showdown
showdown.extension('section-groups', () => ({
  type: 'output',
  filter(inputText /**, converter, options */) {
    let text = inputText;

    text = text.replace(/<h2/g, '</section><h2').replace(/<\/h2>/g, '</h2><section>');

    if (text.startsWith('</section>')) {
      text = text.replace('</section>', '');
    } else if (!text.startsWith('<h2')) {
      text = `<section>${text}`;
    }

    if (!text.endsWith('</section>')) {
      text = `${text}</section>`;
    }

    return text;
  },
}));

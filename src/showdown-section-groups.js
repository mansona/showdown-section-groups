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
  type: 'output', // or output
  filter(html) {
    let outputString = '';
    let sectionOpen = false;

    for (let i = 0; i < html.length; i += 1) {
      if (html.substring(i, i + 3).match(/<h\d/)) {
        if (sectionOpen) {
          outputString += '</section>\n';
        }

        outputString += '<section>\n';
        sectionOpen = true;
      }

      outputString += html[i];
    }

    if (sectionOpen) {
      outputString += '\n</section>';
    }

    return outputString;
  },
}));

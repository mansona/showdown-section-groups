import showdown from 'showdown';

export default function showdownSectionGroups() {
  return {
    type: 'output', // or output
    filter(html) {
      let outputString = '';
      let sectionOpen = false;
      let inHeader = false;
      let id = '';

      for (let i = 0; i < html.length; i += 1) {
        if (html.substring(i, i + 3).match(/<h\d/)) {
          inHeader = true;

          if (sectionOpen) {
            outputString += '</section>\n';
          }
        }

        if (inHeader && html.substring(i, i + 4).match(/id="/)) {
          [, id] = html.substring(i, html.length).match(/^id="(.*)"/);
        }

        // console.log(html.substring(i - 4, i), html.substring(i - 4, i).match(/<\/h\d>/))

        if (html.substring(i - 5, i).match(/<\/h\d>/)) {
          outputString += `\n<section aria-labelledby="${id}">`;
          id = '';
          inHeader = false;
          sectionOpen = true;
        }

        outputString += html[i];
      }

      if (sectionOpen) {
        outputString += '\n</section>';
      }

      return outputString;
    },
  };
}

// register the extension with showdown
showdown.extension('section-groups', showdownSectionGroups);

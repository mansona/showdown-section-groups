# Showdown Section Groups

A showdown extension that wraps headers and paragraphs in sections.


## Installation

```sh
npm install showdown-section-groups
```


## Descrption

You can see more examples in the tests but the simple explanation of what this does is that it turns this Markdown: 

```markdown
## First heading

one paragraph

## Second heading
one paragraph

one paragraph
```

Into this output: 

```html
<h2 id="firstheading">First heading</h2>
<section aria-labelledby="firstheading">
  <p>one paragraph</p>
</section>
<h2 id="secondheading">Second heading</h2>
<section aria-labelledby="secondheading">
  <p>one paragraph</p>
  <p>one paragraph</p>
</section>
```

The normal output for this Markdown would usually be more like this: 

```html
<h2 id="firstheading">First heading</h2>
<p>one paragraph</p>
<h2 id="secondheading">Second heading</h2>
<p>one paragraph</p>
<p>one paragraph</p>
```
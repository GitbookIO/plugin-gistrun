# plugin-gistrun

A gitbook plugin to embed gists using gist.run

### Install

Simply add `gistrun` to the list of `plugins` in your `book.json`:

```js
{
    "plugins": ["gistrun"]
}
```

### Use it

Once you've added the plugin you'll now be able to use the `gistrun` tag in your markdown:

```
{% gistrun id="e57fa69d4697091a20cec1f240bfaa0f" %}
{% endgistrun %}

```

This will render as:

<TODO: add screenshot>

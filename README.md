#Knockout Link Accept Binding

> Knockout binding to make an ajax request for a link using the given accept header.

Read a [Q&A](http://stackoverflow.com/a/20361958/316108) which describes the problem and the reason for a binding like this.

##Install with [Bower](http://bower.io/)

```
bower install knockout-link-accept
```

Then add `knockout.link-accept.js` to your project.

##How to Use

Include the script on your page (either via a normal script tag or via an AMD loader). Then bind it to a link with an appropriate media type.

```html
<a href="/api/endpoint/that/usually/returns/json" data-bind="linkAccept: 'text/csv'"></a>
```

The binding will intercept the link click and perform an ajax request to the URL specified in the `href` with the specified `Accept` header. It will then present this to the browser using a data URL. The end result is that the result of the request is downloaded to the browser like a normal link click.
# HTML Tutorial
---

## 1. HTML Introduction

#### What is HTML?
  - HTML stands for Hyper Text Markup Language
  - HTML is the standard markup language for creating Web pages
  - HTML describes the structure of a Web page
  - HTML consists of a series of elements
  - HTML elements tell the browser how to display the content
  - HTML elements label pieces of content such as "this is a heading", "this is a button", "this is an image", "this is a link", etc.
  - Typically, HTML files must end with a `.html` file extension before they can be displayed on the browser.

#### What is an HTML Element?
An HTML element is defined by a start tag, some content, and an end tag:

```
<tagname attribute1="value" attribute2="value" > Content goes here... </tagname>
```
Or
```
<tagname attribute1="value" attribute2="value" > Content goes here... </tagname>
```
The HTML element is **everything** from the start tag to the end tag:
```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

| Start tag |	Element content |	End tag |
| --------- |	--------------- |	------- |
| `<h1>` |	My First Heading |	`</h1>` |
| `<p>` |	My First Heading |	`</p>` |
| `<br>` |	none |	none |


```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<hr/>
<p>My first paragraph.</p>

</body>
</html>
```
Example Explained:
  - The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document
  - The `<html>` element is the root element of an HTML page
  - The `<head>` element contains meta information about the HTML page
  - The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
  - The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
  - The `<h1>` element defines a large heading
  - The `<hr/>` element defines a horizontal divider
  - The `<p>` element defines a paragraph
  - The `<br>` element defines a line break

Some HTML elements have no content (like the `<br>` and `<hr/>` element). These elements are called empty elements or self closing elements. They do not have an end tag!

#### Web Browsers
The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.

A browser does not display the HTML tags, but uses them to determine how to display the document:

![How the Web Works](../assets/images/img_chrome.png "How the Web Works")

#### HTML Page Structure
Below is a visualization of an HTML page structure:

<div class="ws-grey" style="width:99%;border:1px solid grey;padding:3px;margin:0;">&lt;html&gt;
<div style="width:90%;border:1px solid grey;padding:3px;margin:20px">&lt;head&gt;
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;title&gt;Page title&lt;/title&gt;
</div>
&lt;/head&gt;
</div>
<div class="ws-grey" style="width:90%;border:1px solid grey;padding:3px;margin:20px;">&lt;body&gt;
<div class="w3-white" style="width:90%;border:1px solid grey;padding:3px;margin:20px;">
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;h1&gt;This is a heading&lt;/h1&gt;</div>
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;p&gt;This is a paragraph.&lt;/p&gt;</div>
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;p&gt;This is another paragraph.&lt;/p&gt;</div>
</div>
&lt;/body&gt;
</div>
&lt;/html&gt;
</div>

The content inside the `<body>` section (the white area above) will be displayed in a browser. The content inside the `<title>` element will be shown in the browser's title bar or in the page's tab.

#### HTML History
Since the early days of the World Wide Web, there have been many versions of HTML:

| Year | Version |
| ---- | ------- |
| 1989	| Tim Berners-Lee invented www |
| 1991	| Tim Berners-Lee invented HTML |
| 1993	| Dave Raggett drafted HTML+ |
| 1995	| HTML Working Group defined HTML 2.0 |
| 1997	| W3C Recommendation: HTML 3.2 |
| 2008	| WHATWG HTML5 First Public Draft |
| 2012	| [WHATWG HTML5 Living Standard](http://whatwg.org/html/) |
| 2014	| [W3C Recommendation: HTML5](http://www.w3.org/TR/html5/) |
| 2016	| W3C Candidate Recommendation: HTML 5.1 |
| 2017	| [W3C Recommendation: HTML5.1 2nd Edition](http://www.w3.org/TR/html51/) |
| 2017	| [W3C Recommendation: HTML5.2](http://www.w3.org/TR/html52/) |


## 2. HTML Editors

Web pages can be created and modified by using professional HTML editors.

However, for learning HTML we recommend a simple text editor like Notepad (PC), Sublime Text, TextEdit (Mac), or VSCode. In This tutorial, we'll be using VSCode (Visual Studio Code).  

Follow the steps below to create your first web page with VSCode.

1. Download the Visual Studio Code installer from [VSCode download page]((https://code.visualstudio.com/download))

2. Once it is downloaded, run the installer (VSCodeUserSetup-{version}.exe). This will only take a minute.

3. Launch the application and Go to File > New File

4. Write some HTML
5. Save the HTML page.  Select File > Save as. Save with a `.html` or `.htm` extension. (You can use either `.htm` or `.html` as file extension. There is no difference; it is up to you.)
6. To view the HTML Page in Your Browser. Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").

## 3. HTML Elements and their Attributes

All HTML documents must start with a document type declaration: `<!DOCTYPE html>`.

The HTML document itself begins with `<html>` and ends with `</html>`.

The visible part of the HTML document is between `<body>` and `</body>`.

##### The `<!DOCTYPE>` Declaration

The `<!DOCTYPE>` declaration represents the document type, and helps browsers to display web pages correctly.

It must only appear once, at the top of the page (before any HTML tags).

The `<!DOCTYPE>` declaration is not case sensitive.

The `<!DOCTYPE>` declaration for HTML5 is:
`<!DOCTYPE html>`


#### HTML Elements
Here we look into a list of commonly used html elements and tags before dissecting them. See the full list/reference [here](https://www.w3schools.com/tags/default.asp)

| Tag	| Description |
| ---	| ----------- |
| `<!--whatever--> `	| Defines the document type |
| `<!DOCTYPE>` 	| Defines the document type |
| `<a>`	| Defines a hyperlink |
| `<a>` |	Defines a hyperlink |

#### The `<head>` Element and it's children
Some tags are meant to be used only between the `<head>` ... `</head>` tag. Some are:

| Tag	| Description |
| ---	| ----------- |
| <`<head>` | Contains metadata/information for the document |
| `<title>` | Defines a title for the document on browser tab |
| `<style>` | Defines style information for a document |
| `<meta>` | Defines "metadata" about an HTML document |
| `<link>` | Defines the relationship between a document and an external resource (mostly used to link to style sheets) |
| `<script>` | Defines a client-side script |
| `<noscript>` | Defines an alternate content for users that do not support client-side scripts |
| `<base>` | Specifies the base URL/target for all relative URLs in a document |

##### A closer look at the tags

##### `<head>` :

The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag.

Metadata is data about the HTML document. Metadata is not displayed.

Metadata typically define the document title, character set, styles, scripts, and other meta information.

##### `<title>`:

The `<title>` element:
- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites/bookmarks.
- displays a title for the page in search-engine results
You can NOT have more than one `<title>` element in an HTML document.

```html
<title> HTML Tutorial By Ilodigwe Chinaza</title>
```

##### `<style>`:
The `<style>` tag is one of the ways of adding style information (CSS) to a document.

Inside the `<style>` element you specify how HTML elements should render in a browser.

```html
<style>
  h1{background-color:"red"}
</style>
```

##### `<meta>`:
The `<meta>` tag defines metadata about an HTML document. Metadata is data (information) about data.

`<meta>` tags always go inside the `<head>` element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

Metadata will not be displayed on the page, but is machine parsable.

Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.

There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the `<meta>` tag (See "Setting The Viewport" example below).

| Attribute	| Value	| Description |
| --------	| -----	| ----------- |
| charset	| character_set	| Specifies the character encoding for the HTML document |
| content	| text	| Specifies the value associated with the http-equiv or name attribute |
| http-equiv	| content-security-policy, content-type, default-style, refresh	| Provides an HTTP header for the information/value of the content attribute |
| name	| application-name, author, description, generator, keywords, viewport	| Specifies a name for the metadata |

Examples
```html
<!-- Define keywords for search engines: -->
<meta name="keywords" content="HTML, CSS, JavaScript">

<!-- Define a description of your web page: -->
<meta name="description" content="Free Web tutorials for HTML and CSS">

<!-- Define the author of a page: -->
<meta name="author" content="John Doe">

<!-- Refresh document every 30 seconds: -->
<meta http-equiv="refresh" content="30">

<!-- Setting the viewport to make your website look good on all devices: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
`meta` is an empty element, it contains attributes only.

##### `<link>`:
  - defines the relationship between the current document and an external resource.
  - is most often used to link to external style sheets or to add a favicon to your website.

  - is an empty element, it contains attributes only.

| Attribute	| Value	| Description |
| --------	| -----	| ----------- |
| crossorigin	| anonymous, use-credentials	| Specifies how the element handles cross-origin requests |
| href	| `URL`	| Specifies the location of the linked document either as an **absolute URL** - points to another web site (like href="http://www.example.com/theme.css") or a **relative URL** - points to a file within a web site (like href="/themes/theme.css") |
| hreflang	| [language_code](https://www.w3schools.com/tags/ref_language_codes.asp) (e.g "en" for english)	| Specifies the language of the text in the linked document |
| media	| print, screen, speech, all(default) | Specifies on what device the linked document will be displayed. [more](https://www.w3schools.com/tags/att_link_media.asp) |
| referrerpolicy	| no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url	| Specifies the reference information that will be sent to the server when the user clicks on a hyperlink or resource, [more](https://www.w3schools.com/tags/att_iframe_referrerpolicy.asp) |
| rel	| alternate, author, dns-prefetch, help, icon, license, next, pingback, preconnect, prefetch, preload, prerender, prev, search, stylesheet	Required. | Specifies the relationship between the current document and the linked document. [more](https://www.w3schools.com/tags/att_link_rel.asp) |
| sizes	| HeightxWidth, any	| Specifies the size of the linked resource. Only for rel="icon". [more](https://www.w3schools.com/tags/att_link_sizes.asp) |
| type	| [media_type](http://www.iana.org/assignments/media-types/) e,g "text/css"	| Specifies the media type of the linked document |

```html

<!-- "hreflang" attribute tells the browser to interpret resource in english: -->
<link rel="stylesheet" href="styles.css" hreflang="en">

<!-- "rel" attribute specifies resource as an icon (favicon): -->
<link rel="icon" type="image/x-icon" href="favicon.ico">

<!-- the "type" attribute indicates that the linked document is an a text file of css format -->
<link rel="stylesheet" type="text/css" href="styles.css">

<!-- "size" attribute to specify size of icon resource: -->
<link rel="icon" href="demo_icon.gif" type="image/gif" sizes="16x16">

<!-- "media" attribute - Two different style sheets for two different media types (screen and print): -->
<link rel="stylesheet" type="text/css" href="theme.css">
<link rel="stylesheet" type="text/css" href="print.css" media="print">



```

##### `<script>`:

- used to embed a client-side script (JavaScript).

- contains scripting statements, or it points to an external script file through the src attribute.

- common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.

```html
<!-- inline script -->
<script>
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>

<!-- async attribute -->
<script src="demo_async.js" async></script>

<!-- defer attribute -->
<script src="demo_defer.js" defer></script>


<!-- integrity attribute -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
crossorigin="anonymous"></script>

<!-- type attribute -->
<script type="application/javascript">
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>

<!--  -->

```
| Attribute	| Value	| Description |
| --------	| -----	| ----------- |
| async	| boolean attribute	| postpone execution till full script is downloaded (only for external scripts and if the `src` attribute is present) |
| crossorigin	| anonymous, use-credentials	| Sets the mode of the request to an HTTP CORS Request |
| defer	| defer	| postpone execution till the whole page is parsed/interpreted (only for external scripts) |
| integrity	| filehash to check	| Allows a browser to check the fetched script to ensure that the code is never loaded if the source has been manipulated. The webpage holds the hash and the server holds the file (the .js file in this case). The browser downloads the file, then checks it, to make sure that it is a match with the hash in the integrity attribute. If it matches, the file is used, and if not, the file is blocked |
| nomodule	| True
False	| Specifies that the script should not be executed in browsers supporting ES2015 modules |
| referrerpolicy	| (...check `<link>` attributes)	| ----------- |
| src	| `URL`	| Specifies the URL of an external script file (just like "href" ) |
| type	| [scripttype](http://www.iana.org/assignments/media-types/) e.g ( "text/javascript" )	| Specifies the media type of the script |

#####  `<noscript>`
Display stuff for users that have disabled scripts in their browser, or have a browser that doesn't support client-side scripting.

##### `<base>`:
- Specifies the base URL and/or target for all relative URLs in a document.

- Must have either an href or a target attribute present, or both.

- There can only be one single <base> element in a document, and it must be inside the <head> element.

```html
<head>
  <base href="https://www.w3schools.com/" target="_blank">
</head>

<body>
<img src="images/stickman.gif" width="24" height="39" alt="Stickman">
<a href="tags/tag_base.asp">HTML base Tag</a>
</body>
```
`target` atttribute specifies the default target for all hyperlinks and forms in the page. This attribute can be overridden by using the target attribute for each hyperlink/form.
  - `_blank` -	Opens the link in a new window or tab
  - `_self` -	Default. Opens the link in the same frame as it was clicked
  - `_parent` -	Opens the link in the parent frame
  - `_top` -	Opens the link in the full body of the window


#### HTML Element Attributes
Before moving on lets talk a little more about attributes.

In HTML, elements can have attributes that further modifies their behaviour. 
```
<tagname attribute1="value" attribute2="value" > Content goes here... </tagname>
```
Some attribute only applies to some elements but global attributes can be applied to any element.

**List of Global attributes**:

| Attribute	| Description |
| --------	| ----------- |
| accesskey	| Specifies a shortcut key to activate/focus an element |
| class	| Specifies one or more classnames for an element (refers to a class in a style sheet). Must begin with a letter. No whitespace|
| contenteditable	| Specifies whether the content of an element is editable or not. When the contenteditable attribute is not set on an element, the element will inherit it from its parent. |
| data-*	| Used to store custom data private to the page or application |
| dir	| Specifies the text direction for the content in an element e.g "ltr" (left-to-right) or "rtl" (right-to-left) |
| draggable	| Specifies whether an element is draggable or not |
| hidden	| Specifies that an element is not yet, or is no longer, relevant |
| lang	| Specifies the language of the element's content |
| spellcheck	| Specifies whether the element is to have its spelling and grammar checked or not |
| style	| Specifies an inline CSS style for an element |
| tabindex	| Specifies the tabbing order of an element |
| title	| Specifies extra information about an element |
| translate	| Specifies whether the content of an element should be translated or not |

**Example**:
```html
<!-- To avoid conflict with other key standards, most browsers will use accesskeys only if pressed together with the "Alt" key. -->
<a href="https://www.w3schools.com/html/" accesskey="h">HTML</a><br>
<a href="https://www.w3schools.com/css/" accesskey="c">CSS</a>

<!-- "class" attribute -->
<h1 class="intro">Header 1</h1>
<!-- "id" attribute -->
<h1 id="myHeader">Hello World!</h1>

<!-- "contenteditable" attribute: An editable paragraph -->
<p contenteditable="true">This is an editable paragraph.</p>

<!-- data-* attribute: An editable paragraph -->
<ul>
  <li data-animal-type="bird">Owl</li>
  <li data-animal-type="fish">Salmon</li>
  <li data-animal-type="spider">Tarantula</li>
</ul>
<!-- "dir"  attribute: A paragraph with a right-to-left direction: -->
<p dir="rtl">Write this text right-to-left!</p>

<!-- "draggable" attribute  -->
<p draggable="true">This is a draggable paragraph.</p>

<!-- "hidden" attribute: Some French text in a paragraph -->
<p hidden>This paragraph should be hidden.</p>

<!-- "fr" attribute -->
<p lang="fr">Ceci est un paragraphe.</p>

<!-- "spellcheck" attribute -->
<textarea spellcheck="true">This is a paragraph.</textarea>

<!-- "style" attribute -->
<h1 style="color:blue;text-align:center;">This is a header</h1>

<!-- "title" attribute -->
<p><abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
<p title="Free Web tutorials">W3Schools.com</p>

<!-- "translate" attribute -->
<p translate="no">Don't translate this!</p>
<p>This can be translated to any language.</p>

```
























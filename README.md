# How to add projects to your portfolio

## Quick Rundown of Markdown
All of the project pages are "Markdown" files. Markdown is a markup language with useful shortcuts to format the different elements of your text. Simply put, it is like Google Docs, but instead of hitting Ctrl-B to bold you can simply surround the word you desire to bolden with two asterisks (or underscores if you'd prefer); such as: `**words to bolden**`.

**NOTE:** The underscores and asterisks would normally disappear, I just forced them to show up in this example so that I could demonstrate what I was talking about.

While Markdown has a ton of awesome features (and can be found [here](https://www.markdownguide.org/cheat-sheet/), there are four main features you will *probably* use in your project pages.

### Number 1: Bold
As previously mentioned, in order to enbolden a selection of text, simply surround it in two asterisks or underscores.

_For example_,

`**I want this phrase to be bold**` will get turned into **I want this phrase to be bold**.

---

### Number 2: Italics
Similar to bold, any selection of text can be italicized using a singular asterisk or underscore.

_For example_,

`*I want this phrase to be italicized*` will get turned into *I want this phrase to be italicized*.

---

### Number 3: Page Divider
This one is super simple, to add a line dividing the page, you can simply add three dashes: `---`

_For example_,

`---` will turn into:

---

### Number 4: Headers

__Headers__: To declare a header in Markdown all you have to do is place a hashtag (\#) at the beginning of your line, add a space, and then write the header you desire.

Importantly, the level of the header depends entirely on the number of hashtags you place at the beginning of the line. One hashtag will be the biggest header (Header 1). If you add two (\#\#), it will be Header 2, and so on.

_For example_,

```
# Example Header
## Example Subheader
```
will get turned into larger headers.

---

## Creating a new project
All projects listed in the portfolio page of your website are stored in the folder path of `/src/projects`. Alternatively, this can be found in GitHub at https://github.com/oixel/isa-design/tree/main/src/projects.

While in this folder, you can simply create a new project by clicking Add File > Create new file. Then, in the new file page type in your file's name and end it with `.md`. (MAKE SURE THE FILE ENDS IN `.md`, otherwise it will not show up in your portfolio.

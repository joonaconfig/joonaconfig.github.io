## Browser start page

![](https://user-images.githubusercontent.com/35720395/64944768-c3407500-d877-11e9-9a94-cac567efbe6d.png)

<br/>

If you use and work on multiple devices with different platforms and browsers, syncing bookmarks and pages can be quite tedious. The goal of this page is to be a starting point on each device with most common pages & bookmarks.

You can have the files locally with a browser bookmark or homepage set to that, host it on your own server or on Github Pages.

<br/>

**Features:**

- Filter bookmarks
- Search for Google (local and English versions, if you travel a lot this is useful), DuckDuckGo, Wikipedia, Hinta.fi and YouTube.
- Hotkeys for input fields (in order from 1 to 7). This functionality uses [Mousetrap](https://github.com/ccampbell/mousetrap) library.

___

To add your own pages, just edit the `index.html` file and add your own links. For easy copy pasting, you can use the snippet below:

```
<a class="b" href="UrlHere">NameHere</a>
```

___

**Parse Chrome's Bookmarks.html file into this template**  
Export bookmarks from Chrome into the same folder as the script below and run the script. You can also just copy, paste & run it straight in your shell client.

```
#!/usr/bin/env bash

cat bookmarks.html | \
sed -e '1,6d' | \
sed -e 's/ICON=.*"//' | \
sed -e 's/ADD_DATE=.*"//' | \
awk '{gsub("<DT>","");print}' | \
awk '{gsub("</DT>","");print}' | \
awk '{gsub("<DL>","");print}' | \
awk '{gsub("</DL>","");print}' | \
awk '{gsub("<p>","");print}' | \
awk '{gsub("<A","<a class=\"button\"");print}' | \
awk '{gsub("</A>","</a>");print}' | \
sed 's/^[[:space:]]*//' | \
awk NF > out.txt
```

___

[Preview of the page can be found here](https://joonikko.github.io/browser-start-page/)

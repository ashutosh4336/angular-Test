### get working everything of bootstrap

npm i bootstrap
npm i jquery
npm i popper.js
npm i font-awesome

Replace `popper.min.js` with
`https://getbootstrap.com/docs/4.1/assets/js/vendor/popper.min.js` this file

add this to `angular.json` under `architect > build`

```
 "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/font-awesome/css/font-awesome.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/popper.js/dist/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          },
```

If font-awesome doesn't work Try adding `node_modules/font-awesome/css/font-awesome.min.css` instead of regular CSS file.

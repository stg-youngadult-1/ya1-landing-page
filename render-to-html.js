const dotenv = require('dotenv');
dotenv.config({path: '.env.script'});

require('@babel/register')({
    extensions: ['.js', '.jsx'],
    ignore: [/node_modules/]
});

const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require("./src/App").default;

const html = ReactDOMServer.renderToStaticMarkup(React.createElement(App));

const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <meta charset="UTF-8" />
  <title>Image Gallery</title>
</head>
<body>
  ${html}
</body>
</html>
`;

const outputPath = path.join(__dirname, 'public/static/html');
fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(path.join(outputPath, 'result.html'), fullHtml);

console.log('✅ HTML 생성 완료: static/html/result.html');

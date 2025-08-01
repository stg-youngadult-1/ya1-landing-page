require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [/node_modules/]
});

const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ImageList = require('./src/ImageList.jsx').default;

const html = ReactDOMServer.renderToStaticMarkup(React.createElement(ImageList));

const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Image Gallery</title>
</head>
<body>
  ${html}
</body>
</html>
`;

const outputPath = path.join(__dirname, 'public/static/html');
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(path.join(outputPath, 'result.html'), fullHtml);

console.log('✅ HTML 생성 완료: static/html/result.html');

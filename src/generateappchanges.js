const fs = require('fs');
const path = require('path');

const pagesFolderPath = path.join(__dirname, 'pages');
const appJSPath = path.join(__dirname, 'App.js');

const generateRoutes = () => {
    const pages = fs.readdirSync(pagesFolderPath)
        .filter(file => file.endsWith('.js') && file !== 'index.js')
        .map(file => {
            const componentName = path.basename(file, '.js');
            return {
                componentName,
                routePath: `/${componentName.toLowerCase()}`
            };
        });

    let appJSContent = '';
    appJSContent += `import Home from './Home';\n`;
    appJSContent += `import React from 'react';\n`;
    appJSContent += `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';\n`;

    pages.forEach(({ componentName }) => {
        appJSContent += `import ${componentName} from './pages/${componentName}';\n`;
    });

    appJSContent += `\nfunction App() {\n`;
    appJSContent += `    return (\n`;
    appJSContent += `        <Router>\n`;
    appJSContent += `            <Routes>\n`;
    appJSContent += `                <Route path="/" element={<Home />}/>\n`

    pages.forEach(({ routePath, componentName }) => {
        appJSContent += `                <Route path="${routePath}" element={<${componentName} />} />\n`;
    });

    appJSContent += `            </Routes>\n`;
    appJSContent += `        </Router>\n`;
    appJSContent += `    );\n`;
    appJSContent += `}\n\n`;
    appJSContent += `export default App;\n`;

    console.log(appJSContent);
};

generateRoutes();

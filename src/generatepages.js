const fs = require('fs');
const path = require('path');

const jsonData = require('./data.json');

const generateComponentFiles = () => {
    const { menuItems } = jsonData;

    const pagesFolderPath = path.join(__dirname, 'pages');

    // Check if the pages folder exists, if not, create it
    if (!fs.existsSync(pagesFolderPath)) {
        fs.mkdirSync(pagesFolderPath);
    }

    menuItems.forEach((menuItem) => {
        const { label } = menuItem;
        const pageContent = `
      import React from 'react';
      
      const ${label} = () => {
        return (
          <div>
            <h1>${label} Page</h1>
            {/* Add your content */}
          </div>
        );
      };
      
      export default ${label};
    `;

        const filePath = path.join(pagesFolderPath, `${label}.js`);

        // Write content to file
        fs.writeFileSync(filePath, pageContent, 'utf-8');
    });
};

generateComponentFiles();

const fs = require('fs');
const path = require('path');
const sass = require('sass');

const SRC_DIR = path.resolve(__dirname, '..', 'src');
const DIST_DIR = path.resolve(__dirname, '..', 'lib');
const NODE_ENV = process.env.NODE_ENV || 'development';

const types = { components: ['atoms', 'molecules', 'organisms'], system: ['templates', 'pages'] };

const getComponents = () => {
    const groups = {
        components: [],
        system: [],
    };

    Object.keys(types).forEach((type) => {
        types[type].forEach((component) => {
            const allFiles = fs
                .readdirSync(path.resolve(SRC_DIR, type, component))
                .filter((file) => !file.includes('.md'))
                .map((file) => ({
                    input: `${SRC_DIR}/${type}/${component}/${file}`,
                    output: `${DIST_DIR}/${type}/${component}/${file.replace('.scss', '.css')}`,
                }));
            groups[type] = [...groups[type], ...allFiles];
        });
    });
    return [...groups.components, ...groups.system];
};

const compile = (inputFile, outputFile) => {
    const result = sass.compile(inputFile, {
        style: NODE_ENV === 'production' ? 'compressed' : 'expanded',
    });

    if (!fs.existsSync(path.dirname(outputFile))) {
        fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    }

    fs.writeFileSync(outputFile, result.css);

    console.log(`[ scss ] ${outputFile} - ${(result.css.length / 1024).toFixed(2)} Kb`);
};

const init = () => {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }

    // compile(`${SRC_DIR}/global.scss`, `${DIST_DIR}/global.css`);

    getComponents().forEach(({ input, output }) => {
        compile(input, output);
    });
};

init();

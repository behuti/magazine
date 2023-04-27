module.exports = {
    // The root of your source code, typically /src

    // `<rootDir>` is a token Jest substitutes

    // roots: ["<rootDir>/src"],

    // Jest transformations -- this adds support for TypeScript

    // using ts-jest

    transform: {
        "^.+\\.tsx?$": ["ts-jest", { rootDir: "." }],
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    },

    // Runs special logic, such as cleaning up components

    // when using React Testing Library and adds special

    // extended assertions to Jest

    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

    // Test spec file resolution pattern

    // Matches parent folder `__tests__` and filename

    // should contain `test` or `spec`.

    testRegex: "(/__tests__/.*|(\\.|/)(test))\\.tsx?$",

    // Module file extensions for importing

    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "scss"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^@tests(.*)$": "<rootDir>/src/tests$1",
    },
    moduleDirectories: ["node_modules", "<rootDir>"],
};

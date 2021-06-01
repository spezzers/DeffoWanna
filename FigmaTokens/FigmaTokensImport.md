# Figma Tokens

- A [Figma Plugin](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) for creating JSON code from Figma design styles
- [Docs](https://docs.tokens.studio/)

## Importing tokens into themes

1. Export `tokens.json` file from the Figma Tokens plugin into `./FigmaTokens` folder (replace file or contents if `./FigmaTokens/tokens.json` already exists).
2. Run command: `yarn run figma-tokens`
3. If successful, `./src/styles/themes.js` will be created/updated with token data
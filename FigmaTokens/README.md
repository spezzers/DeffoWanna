# Importing Figma Tokens

[Figma Tokens](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) is a [Figma](https://www.figma.com/) plugin that creates JSON code from Figma design styles. *For more on Figma Tokens, check out the [Documentation](https://docs.tokens.studio/)*

## Using the script

1. **In Figma**, export `tokens.json` file from the Figma Tokens plugin into the directory `[this repository]/FigmaTokens`.
2. Now the data is **in the repository**, use the **terminal** command: `yarn figma-tokens`
3. If successful, `./src/styles/themes.js` will be created/updated

### Notes
 - Currently the script only imports colors. I may add the ability to import typography styles at a later date.
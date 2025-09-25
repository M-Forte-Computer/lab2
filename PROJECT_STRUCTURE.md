# Project Structure Documentation

## Overview
This project is organized for clarity and scalability. Below is a description of the folder structure and configuration files.

## Folder Structure
```
src/
  components/      # Reusable UI components
  screens/         # App screens/views
  utils/           # Utility/helper functions
  assets/          # Images, fonts, etc.
  constants/       # App-wide constants
  context/         # React context providers
  hooks/           # Custom React hooks
  navigation/      # Navigation setup
  services/        # API and business logic
  styles/          # Shared styles
```

## Index Files
- Each main folder contains an `index.js` for clean imports.

## Configuration Files
- `.eslintrc.js`: ESLint config for code quality
- `.prettierrc`: Prettier config for code formatting
- `.vscode/launch.json`: VS Code debugging setup
- `.env`: Environment variables
- `.gitignore`: Files/folders to ignore in Git

## Custom npm Scripts
- Defined in `package.json` for linting, formatting, testing, etc.

## How to Use
- Import components/screens via their folder index files for cleaner code.
- Use npm scripts for development tasks.
- Store secrets and config in `.env` (never commit sensitive info).

## Notes
- See the lab report PDF for screenshots and troubleshooting documentation.

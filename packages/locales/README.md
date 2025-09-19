# Locales

This directory contains internationalization (i18n) files for the React Hooks library.

## Available Locales

- `en.json` - English (base locale)
- `nl-be.json` - Dutch (Belgium)
- `fr-be.json` - French (Belgium)

## Structure

Each locale file follows the same JSON structure:

```json
{
  "errors": {
    "noHandlerDefined": "Translated error message"
  }
}
```

## Usage

```javascript
import { locales } from './packages/locales';

// Get specific locale
const dutchLocale = locales['nl-be'];
const frenchLocale = locales['fr-be'];

// Access translated strings
const errorMessage = dutchLocale.errors.noHandlerDefined;
```

## Adding New Translations

1. Create a new JSON file with the appropriate locale code (e.g., `de.json` for German)
2. Follow the existing structure
3. Add the import and export in `index.js`
4. Update this README with the new locale information
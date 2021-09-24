# poke-dex

GraphQL Pokedex

![](https://lucid.app/publicSegments/view/6c8b3481-36a2-4b71-b7da-4fd4efc6be11/image.png)

## Getting Started

### Pre-requisites

- node >= 16
- npm >= 7.20.x

### Local Development

```bash
# Install Dependencies
$ npm i

# Start Apollo Server
$ npm run dev
```

### Unit Tests

```bash
# Run All Unit Tests
$ npm test

# Run Specific Unit Test
$ npm run jest <path of test>
```

### Generate Schema Types

```bash
$ npm run generate
```

### Linters

```bash
# Lint Source Code (including the GraphQL Schema)
$ npm run lint

# Make the linter fix the Source Code
$ npm run lint:fix

# Lint Only the GraphQL Schema
$ npm run lint:schema
```

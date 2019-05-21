# messageformat.js [issue #239 reproduction](https://github.com/messageformat/messageformat/issues/239)

Minimal Angular project reproducing messageformat.js [issue #239 reproduction](https://github.com/messageformat/messageformat/issues/239).

## Usage

**Installation**

```bash
git clone git@github.com:frankie567/messageformat-issue-239.git
cd messageformat-issue-239
npm install
```

**Start the project in development mode (working)**

```bash
npm start
```

**Launch a production build (get stuck)**

```bash
npm run build -- --prod
```

## Tried cases

| aot/buildOptimizer | sourceMap | messageformat.js' package.json browser value | Working |
|--------------------|-----------|----------------------------------------------|---------|
| `true`             | `true`    | `messageformat.js`                           | ❌       |
| `true`             | `false`   | `messageformat.js`                           | ✅       |
| `false`           | `true`    | `messageformat.js`                           | ✅       |
| `true`             | `true`    | `index.js`                                   | ✅       |

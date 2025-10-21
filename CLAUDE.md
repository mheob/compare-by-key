# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript utility library that provides a comparison function for sorting arrays of objects by key, supporting nested
keys via dot notation (e.g., "name.first") and both ascending/descending sort directions.

## Architecture

**Single-file library**: The entire implementation is in [src/index.ts](src/index.ts) (~40 lines). The function:

- Accepts a key path string (e.g., "name.last") and optional direction ("ASC" or "DESC")
- Splits the key path by "." to traverse nested objects
- Performs case-insensitive string comparison by uppercasing string values
- Returns a standard comparison function compatible with Array.sort() and Array.toSorted()

## Development Commands

### Building

```bash
pnpm build              # Build with tsdown (ESM, minified, generates types)
```

### Testing

```bash
pnpm test               # Run all tests with Vitest
pnpm test:watch         # Run tests in watch mode
pnpm test:cov           # Run tests with coverage report
```

### Linting & Type Checking

```bash
pnpm lint               # Run ESLint with auto-fix
pnpm typecheck          # Type check without emitting files
pnpm cspell             # Spell check the codebase
```

### Testing Single Files

```bash
pnpm vitest src/index.test.ts          # Run specific test file
pnpm vitest src/index.test.ts --watch  # Watch specific test file
```

## Build Configuration

- **tsdown** ([tsdown.config.ts](tsdown.config.ts)): Bundles to ESM format with minification and type declarations
- **TypeScript**: Extends `@mheob/tsconfig/base` with output to `dist/`
- **Vitest**: Tests are colocated as `*.test.ts` files in `src/`

## Package Manager

Uses pnpm (version 10.18.3). The `onlyBuiltDependencies` config limits builds to esbuild and unrs-resolver only.

## Git Workflow

- Uses husky for git hooks
- lint-staged runs ESLint on all staged files
- Commits follow conventional commits (commitizen with cz-git)
- Changesets for version management

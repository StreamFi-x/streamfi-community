# Commit Message Guide

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

## Format

```
type: description
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **ci**: Changes to CI configuration files and scripts
- **build**: Changes that affect the build system or external dependencies
- **revert**: Reverts a previous commit

## Examples

### ✅ Correct Examples

```bash
git commit -m "feat: add user authentication system"
git commit -m "fix: resolve login button not working"
git commit -m "docs: update README with setup instructions"
git commit -m "style: format code with prettier"
git commit -m "refactor: simplify user validation logic"
git commit -m "perf: optimize database queries"
git commit -m "test: add unit tests for user service"
git commit -m "chore: update dependencies"
git commit -m "ci: add GitHub Actions workflow"
git commit -m "build: update webpack configuration"
git commit -m "revert: revert to previous stable version"
```

### ❌ Incorrect Examples

```bash
git commit -m "test"                    # Missing description
git commit -m "added new feature"       # Missing type
git commit -m "FIX: bug fix"            # Wrong case
git commit -m "feat:Add new feature"    # Missing space after colon
git commit -m "feat: add new feature."  # Ends with period
```

## Rules

1. **Type is required**: Every commit must start with a type
2. **Type must be lowercase**: Use `feat` not `FEAT`
3. **Description is required**: Provide a clear, concise description
4. **No period at the end**: Don't end the description with a period
5. **Use imperative mood**: Write as if you're giving a command
6. **Keep it under 72 characters**: For the header line

## Breaking Changes

For breaking changes, add `!` after the type and `BREAKING CHANGE:` in the body:

```bash
git commit -m "feat!: remove deprecated API"
```

Or with a body:

```bash
git commit -m "feat: add new API

BREAKING CHANGE: The old API has been removed and replaced with the new one."
```

## Scopes (Optional)

You can add a scope to provide more context:

```bash
git commit -m "feat(auth): add OAuth2 support"
git commit -m "fix(ui): resolve button alignment issue"
git commit -m "docs(api): update endpoint documentation"
```

## Body and Footer (Optional)

For more detailed commits, you can add a body and footer:

```bash
git commit -m "feat: add user authentication

This commit adds a complete authentication system with JWT tokens,
password hashing, and session management.

Closes #123
Fixes #456"
```

## Quick Commands

```bash
# Quick feature commit
git commit -m "feat: add new feature"

# Quick bug fix
git commit -m "fix: resolve issue"

# Quick documentation update
git commit -m "docs: update documentation"

# Quick style fix
git commit -m "style: format code"
```

## Need Help?

If you're unsure about the commit message format, you can:

1. Check this guide
2. Use the examples above
3. Ask your team members
4. Use `git commit` without `-m` to open an editor for a more detailed message

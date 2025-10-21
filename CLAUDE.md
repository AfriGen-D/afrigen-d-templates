# Claude Code Guidelines for AfriGen-D Templates

This file contains guidelines for Claude Code when working on this repository.

## Git Commit Guidelines

### DO NOT Include Attribution

When creating git commits, **DO NOT** include the following attribution lines:

```
🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Commit Message Format

Use clear, descriptive commit messages following conventional commit format:

```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, CSS, etc.)
- `refactor`: Code refactoring
- `test`: Test updates
- `chore`: Maintenance tasks

### Example Commit Message

```
style: Update VitePress theme to match AfriGen-D brand colors

- Replace neutral grey colors with AfriGen-D brand palette
- Implement red (#C94234) for links and primary buttons
- Add yellow/gold (#F4A535) accent for feature cards
- Maintain clean white header with black text for readability
- Add comprehensive dark mode support for all components

All three documentation templates updated:
- nextflow-pipeline-docs
- data-resource-docs
- genomics-tool-docs
```

## Code Style

### CSS/Styling
- Use AfriGen-D brand colors consistently
- Maintain clean, minimal design
- Ensure dark mode support
- Follow the Style Guide in README.md

### Documentation
- Keep documentation clear and concise
- Include examples where helpful
- Update README when adding new features
- Maintain consistency across all templates

## Best Practices

1. **Test Before Committing**: Ensure all changes work as expected
2. **Atomic Commits**: Each commit should represent one logical change
3. **Clear Messages**: Write commit messages that explain the "why" not just the "what"
4. **No Attribution**: Keep commits clean without AI attribution
5. **Review Changes**: Always review `git diff` before committing

# Contributing to {{ PROJECT_NAME }}

Thank you for your interest in contributing to {{ PROJECT_NAME }}! We welcome contributions from researchers, developers, and the broader genomics community.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please treat all community members with respect and create a welcoming environment for everyone.

## Getting Started

### Prerequisites

- {{ LANGUAGE }} >= {{ MIN_VERSION }}
- {{ DEPENDENCY_MANAGER }} for dependency management
- Git for version control
- Basic understanding of {{ DOMAIN_KNOWLEDGE }}

### Development Environment Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/{{ REPO_NAME }}.git
   cd {{ REPO_NAME }}
   ```
3. Set up the development environment:
   ```bash
   {{ DEV_SETUP_COMMANDS }}
   ```
4. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title**: Summarize the problem concisely
- **Steps to reproduce**: Detailed steps to recreate the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment details**: OS, software versions, etc.
- **Sample data**: If applicable, provide minimal reproducible examples

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:

- Use a clear, descriptive title
- Explain the current behavior and desired behavior
- Describe why this enhancement would benefit users
- Consider implementation complexity and maintenance burden

### Code Contributions

#### Pull Request Process

1. **Update documentation**: Ensure README, API docs, and comments are updated
2. **Add tests**: Include tests for new functionality
3. **Follow coding standards**: Maintain consistency with existing code
4. **Update changelog**: Add entry describing your changes
5. **Provide clear commit messages**: Use conventional commit format

#### Coding Standards

- **Style**: Follow {{ STYLE_GUIDE }} conventions
- **Documentation**: Document all public functions and classes
- **Testing**: Aim for >{{ TEST_COVERAGE }}% test coverage
- **Performance**: Consider computational efficiency for genomic data
- **Dependencies**: Minimize new dependencies, justify additions

#### Testing

Run the full test suite before submitting:

```bash
{{ TEST_COMMAND }}
{{ COVERAGE_COMMAND }}
{{ LINT_COMMAND }}
```

## Types of Contributions

### Code Contributions
- Bug fixes
- New features
- Performance improvements
- Code refactoring

### Documentation
- API documentation improvements
- Tutorial development
- Example workflows
- Translation of documentation

### Testing
- Unit test development
- Integration test creation
- Performance benchmarking
- Testing with diverse datasets

### Research Contributions
- Algorithm improvements
- Validation studies
- Comparative analyses
- Novel applications

## Genomics-Specific Guidelines

### Data Handling
- Follow FAIR data principles
- Respect privacy and ethical considerations
- Use appropriate file formats (VCF, PLINK, etc.)
- Consider scalability for large genomic datasets

### Algorithm Development
- Validate against established benchmarks
- Document computational complexity
- Consider population diversity in testing
- Provide statistical validation

### Reproducibility
- Use version pinning for dependencies
- Provide containerized environments
- Document random seeds and parameters
- Include provenance tracking

## Review Process

1. **Automated checks**: CI/CD pipeline runs tests and style checks
2. **Code review**: Maintainers review technical implementation
3. **Scientific review**: Domain experts validate scientific correctness
4. **Testing**: Contributors and reviewers test with real data
5. **Documentation review**: Ensure clarity and completeness

## Recognition

Contributors will be:
- Listed in the AUTHORS file
- Acknowledged in release notes
- Invited to co-author relevant publications
- Recognized in project presentations

## Communication

- **GitHub Discussions**: General questions and ideas
- **GitHub Issues**: Bug reports and feature requests
- **Helpdesk**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org) for private matters
- **Monthly meetings**: Virtual contributor meetings (contact maintainers)

## Resources

### Learning Resources
- [AfriGen-D Documentation](https://docs.afrigen-d.org)
- [Genomics Best Practices]({{ GENOMICS_GUIDE_URL }})
- [{{ LANGUAGE }} Style Guide]({{ STYLE_GUIDE_URL }})

### Development Tools
- **IDE Setup**: [Development environment guide](docs/dev-setup.md)
- **Debugging**: [Debugging genomic workflows](docs/debugging.md)
- **Profiling**: [Performance optimization guide](docs/performance.md)

## Questions?

Don't hesitate to ask questions! You can:
- Open a discussion on GitHub
- Contact the maintainers directly
- Join our community calls
- Check the FAQ in our documentation

Thank you for contributing to advancing African genomics research!

---

**AfriGen-D Development Team**  
[afrigen-d.org](https://afrigen-d.org)
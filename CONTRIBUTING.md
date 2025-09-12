# Contributing to AfriGen-D GitHub Templates

Thank you for your interest in contributing to AfriGen-D GitHub Templates! We welcome contributions from researchers, developers, and the broader genomics community.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please treat all community members with respect and create a welcoming environment for everyone.

## Getting Started

### Prerequisites

- Git for version control
- Basic understanding of GitHub repositories and workflows
- Familiarity with template systems and documentation
- Knowledge of genomics project structures (helpful but not required)

### Development Environment Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/afrigen-d-templates.git
   cd afrigen-d-templates
   ```
3. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Reporting Issues

Before creating issue reports, please check the existing issues to avoid duplicates. When creating an issue report, include:

- **Clear title**: Summarize the problem concisely
- **Template type**: Which template(s) are affected
- **Steps to reproduce**: Detailed steps to recreate the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment details**: OS, GitHub settings, etc.

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:

- Use a clear, descriptive title
- Explain the current behavior and desired behavior
- Describe why this enhancement would benefit users
- Consider implementation complexity and maintenance burden

### Template Contributions

#### Pull Request Process

1. **Update documentation**: Ensure README and guides are updated
2. **Test templates**: Test with sample projects
3. **Follow naming conventions**: Use consistent variable naming
4. **Update guides**: Include new templates in setup guides
5. **Provide clear commit messages**: Use conventional commit format

#### Template Standards

- **Variable naming**: Use `{{ VARIABLE_NAME }}` format
- **Documentation**: Document all template variables
- **Structure**: Follow established directory patterns
- **Branding**: Maintain AfriGen-D branding consistency
- **Accessibility**: Ensure templates work across different project types

#### Testing Templates

Test your templates by:

```bash
# Create test project using template
cp -r repository-templates/your-template/ /tmp/test-project/
cd /tmp/test-project/

# Replace template variables with sample values
# Test that resulting project structure is valid
```

## Types of Contributions

### Template Development
- New repository templates
- New documentation templates
- Workflow template improvements
- Issue template enhancements

### Documentation
- Setup guide improvements
- Tutorial development
- Template variable documentation
- Usage examples

### Testing
- Template validation scripts
- Integration testing with real projects
- Cross-platform compatibility testing
- User experience testing

### Community
- User support in discussions
- Feature request triage
- Documentation translation
- Workshop and training materials

## Template-Specific Guidelines

### Repository Templates
- Follow established project structure patterns
- Include comprehensive README templates
- Provide appropriate LICENSE templates
- Include GitHub Actions workflows where applicable

### Documentation Templates
- Use modern documentation frameworks (VitePress preferred)
- Ensure responsive design and accessibility
- Include navigation and search functionality
- Maintain AfriGen-D branding consistency

### Organization Templates
- Follow GitHub best practices
- Include appropriate automation
- Consider security and permissions
- Document usage instructions clearly

## Review Process

1. **Automated checks**: Basic validation of template structure
2. **Template review**: Maintainers review template consistency
3. **Documentation review**: Ensure clarity and completeness
4. **User testing**: Test templates with sample projects
5. **Integration testing**: Verify templates work with existing systems

## Recognition

Contributors will be:
- Listed in the AUTHORS file
- Acknowledged in release notes
- Recognized in project presentations
- Invited to contribute to related projects

## Communication

- **GitHub Discussions**: General questions and ideas
- **GitHub Issues**: Bug reports and feature requests
- **Helpdesk**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org) for private matters
- **Community meetings**: Virtual contributor meetings (contact maintainers)

## Resources

### Learning Resources
- [AfriGen-D Documentation](https://docs.afrigen-d.org)
- [GitHub Templates Guide](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
- [VitePress Documentation](https://vitepress.dev/)

### Development Tools
- **Template Testing**: [Testing guide](docs/testing.md)
- **Variable Reference**: See README.md for complete variable lists
- **Style Guide**: Maintain consistency with existing templates

## Questions?

Don't hesitate to ask questions! You can:
- Open a discussion on GitHub
- Contact the maintainers directly
- Check the documentation and guides
- Join our community discussions

Thank you for contributing to standardizing African genomics research projects!

---

**AfriGen-D Development Team**  
[afrigen-d.org](https://afrigen-d.org)
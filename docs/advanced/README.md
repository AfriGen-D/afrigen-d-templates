# Advanced Guides - Full Development Setup

Comprehensive guides for developers who want complete control over their AfriGen-D projects. These guides assume familiarity with command-line tools and local development environments.

## 🎯 Who These Guides Are For

- **Developers** comfortable with Git and command-line
- **Advanced users** who need local development environments
- **Teams** requiring complex workflows
- **Projects** needing extensive customization

## 📚 Available Guides

### [Creating New Documentation Repository](CREATE_NEW_DOCS_REPO.md)

Create a standalone documentation repository with full local development setup.

**What you'll learn:**
- Clone and set up repositories locally
- Work with Git branches and commits
- Run local development servers
- Test changes before deployment
- Use npm/Node.js for dependencies

**Time to complete:** 30-40 minutes

**Prerequisites:**
- Git installed locally
- Node.js 18+ and npm
- Command-line experience
- Code editor (VS Code recommended)

**Best for:**
- Large documentation sites
- Multi-project documentation hubs
- Organization-wide documentation
- Projects needing frequent updates

---

### [Comprehensive Setup Guide](SETUP_GUIDE.md)

Complete technical reference for VitePress documentation sites with advanced features.

**What you'll learn:**
- Full VitePress configuration options
- Custom theme development
- Advanced markdown features
- Performance optimization
- Deployment strategies
- Troubleshooting complex issues

**Time to complete:** 1-2 hours for full implementation

**Prerequisites:**
- Strong command-line skills
- Node.js development experience
- Understanding of static site generators
- Git workflow knowledge

**Best for:**
- Developers needing full control
- Custom theme requirements
- Performance-critical projects
- Complex documentation needs

## 🔧 What Makes These Guides "Advanced"?

✅ Local development environment required
✅ Command-line proficiency needed
✅ Git workflow knowledge expected
✅ Node.js and npm familiarity required
✅ More customization options available
✅ Greater control over configuration

## 🚀 Quick Start

Choose based on your needs:

1. **Creating new docs repo?** → [Creating New Documentation Repository](CREATE_NEW_DOCS_REPO.md)
2. **Need complete reference?** → [Comprehensive Setup Guide](SETUP_GUIDE.md)
3. **Just getting started?** → Try [Basic Guides](../basic/) first

## 💻 Development Environment Setup

Before starting these guides, ensure you have:

### Required Tools

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

### Recommended Tools

- **Code Editor**: VS Code with extensions:
  - VitePress
  - Vue Language Features (Volar)
  - Markdown All in One
  - ESLint
- **Terminal**: iTerm2 (macOS), Windows Terminal, or similar
- **GitHub CLI**: `gh` for easier repository management

### Quick Installation Check

```bash
# Test Node.js and npm
npm create vitepress@latest test-docs
cd test-docs && npm install && npm run docs:dev

# If successful, you're ready for these guides!
```

## 🎨 Advanced Features Covered

### Custom Theming
- Brand colors and styling
- Custom components
- Layout modifications
- Font customization

### Advanced Markdown
- Math equations with KaTeX
- Mermaid diagrams
- Custom containers
- Code group tabs

### Performance Optimization
- Bundle analysis
- Image optimization
- Lazy loading
- SEO optimization

### Deployment Options
- GitHub Pages (automated)
- Netlify
- Vercel
- Custom servers

## 📊 Comparison with Basic Guides

| Feature | Basic Guides | Advanced Guides |
|---------|--------------|-----------------|
| **Setup Time** | 10-20 min | 30-120 min |
| **Prerequisites** | Browser only | Git, Node.js, npm |
| **Customization** | Limited | Extensive |
| **Local Testing** | No | Yes |
| **Learning Curve** | Easy | Moderate-High |
| **Control Level** | Basic | Complete |

## 🛠️ Common Advanced Workflows

### Local Development Workflow
```bash
# Clone repository
git clone your-repo-url
cd your-repo

# Install dependencies
cd docs && npm install

# Start dev server
npm run docs:dev

# Make changes and test
# Build for production
npm run docs:build

# Commit and push
git add .
git commit -m "Update documentation"
git push origin main
```

### Branch-Based Development
```bash
# Create feature branch
git checkout -b feature/new-docs

# Make changes
# ...

# Push branch
git push origin feature/new-docs

# Create pull request via GitHub
gh pr create --title "Add new documentation" --body "Description"
```

## 🎓 Learning Path

### Beginner → Advanced Progression

1. **Start**: [Basic Guides](../basic/) - Get comfortable with GitHub UI
2. **Next**: [Creating New Docs Repo](CREATE_NEW_DOCS_REPO.md) - Learn local workflow
3. **Master**: [Comprehensive Setup](SETUP_GUIDE.md) - Deep dive into all features

### Recommended Order

1. Complete at least one basic guide first
2. Set up local development environment
3. Follow the Creating New Docs Repo guide
4. Use Comprehensive Setup as reference
5. Experiment with customization
6. Contribute improvements back to templates

## 📖 Additional Resources

### Documentation
- **[VitePress Official Docs](https://vitepress.dev)**: Complete VitePress documentation
- **[GitHub Actions Docs](https://docs.github.com/actions)**: CI/CD workflow documentation
- **[Node.js Docs](https://nodejs.org/docs)**: Node.js and npm documentation

### Templates
- **[Repository Templates](../../repository-templates/)**: Project structure templates
- **[GitHub Pages Templates](../../github-pages-templates/)**: VitePress site templates
- **[Organization Templates](../../organization-templates/)**: Workflow and issue templates

### Reference
- **[Template Variables](../../README.md#template-variables-reference)**: All customizable placeholders
- **[Best Practices](../../README.md#best-practices)**: Recommended approaches
- **[Contributing](../../CONTRIBUTING.md)**: How to contribute improvements

## 🐛 Troubleshooting

### Common Issues

**Node.js version conflicts**
```bash
# Use nvm to manage Node.js versions
nvm install 18
nvm use 18
```

**Port conflicts**
```bash
# Use different port for dev server
npm run docs:dev -- --port 3000
```

**Module not found errors**
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```

**Git conflicts**
```bash
# Stash changes before pulling
git stash
git pull origin main
git stash pop
```

## 💬 Get Help

- **Technical Issues**: [GitHub Issues](https://github.com/AfriGen-D/afrigen-d-templates/issues)
- **Questions**: [GitHub Discussions](https://github.com/AfriGen-D/afrigen-d-templates/discussions)
- **Community**: Join our Slack/Discord (if available)
- **Support**: [AfriGen-D Helpdesk](https://helpdesk.afrigen-d.org)

## 🚀 Next Steps

Ready to dive into advanced development?

1. **Ensure prerequisites are met** (Git, Node.js, code editor)
2. **Choose your guide** based on project needs
3. **Follow step-by-step** - don't skip sections
4. **Experiment freely** - you can always start over
5. **Share your experience** - help improve the guides

---

**Ready for advanced workflows?** Pick a guide above and unlock the full power of AfriGen-D templates!

# GitHub Pages Setup Guide for AfriGen-D Projects

A comprehensive guide to setting up professional documentation sites using the AfriGen-D GitHub Pages templates.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Quick Setup](#quick-setup)
4. [Template Types](#template-types)
5. [Detailed Setup Process](#detailed-setup-process)
6. [Customization](#customization)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)
9. [Maintenance](#maintenance)

---

## Overview

The AfriGen-D GitHub Pages templates provide modern, fast documentation sites optimized for technical documentation. These templates offer:

- **Fast Performance**: Lightning-fast development server and optimized builds
- **Modern UI**: Clean, responsive design with dark/light mode support
- **Built-in Search**: Full-text search across all documentation
- **Easy Navigation**: Automatic sidebar generation and page navigation
- **Markdown Enhanced**: Support for code highlighting, math, and diagrams
- **SEO Optimized**: Built-in meta tags and social sharing support

### Why These Templates?

✅ **Performance**: Extremely fast loading and navigation  
✅ **Developer Experience**: Hot reload, modern development workflow  
✅ **Maintenance**: Minimal configuration, automatic optimization  
✅ **Features**: Built-in search, responsive design, accessibility  
✅ **Consistency**: Matches existing AfriGen-D documentation sites  

---

## Prerequisites

### System Requirements

- **Node.js**: Version 18+ (check with `node --version`)
- **Package Manager**: npm (comes with Node.js) or yarn
- **Git**: For version control and deployment
- **Text Editor**: VS Code, Sublime Text, or similar

### Optional Tools

- **GitHub CLI**: For easier repository management (`gh`)
- **VS Code Extensions**: VitePress, Vue Language Features, Markdown All in One

### Quick Installation Check

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Test basic functionality
npm create vitepress@latest test-docs
cd test-docs && npm install && npm run docs:dev
```

---

## Quick Setup

For users who want immediate results:

```bash
# 1. Copy template to your project
cp -r /path/to/afrigen-d-templates/github-pages-templates/genomics-tool-docs/ ./docs

# 2. Install dependencies
cd docs && npm install

# 3. Customize basic settings
sed -i 's/{{ PROJECT_NAME }}/YourProject/g' .vitepress/config.ts index.md
sed -i 's/{{ REPO_NAME }}/your-repo-name/g' .vitepress/config.ts

# 4. Start development server
npm run docs:dev

# 5. Visit http://localhost:5173 to preview
```

---

## Template Types

Choose the appropriate template for your project:

### 1. Genomics Tool Documentation
**Path**: `github-pages-templates/genomics-tool-docs/`

**Best for**:
- Bioinformatics software packages
- Command-line tools and APIs
- Python/R packages
- Analysis utilities

**Features**:
- API reference documentation
- Installation and usage guides
- Code examples and tutorials
- Parameter documentation

### 2. Nextflow Pipeline Documentation  
**Path**: `github-pages-templates/nextflow-pipeline-docs/`

**Best for**:
- Nextflow/nf-core pipelines
- Bioinformatics workflows
- Multi-step analysis pipelines
- Container-based tools

**Features**:
- Pipeline usage documentation
- Parameter reference
- Execution profiles
- Output descriptions

### 3. Data Resource Documentation
**Path**: `github-pages-templates/data-resource-docs/`

**Best for**:
- Genomic datasets
- Reference panels
- Database releases
- Data repositories

**Features**:
- Dataset descriptions
- Access instructions
- Data formats and schemas
- Usage examples

---

## Detailed Setup Process

### Step 1: Choose Your Template

```bash
# Navigate to your project repository
cd /path/to/your-project

# Create docs directory
mkdir docs
cd docs

# Copy the appropriate template
# For a genomics tool:
cp -r ~/afrigen-d-templates/github-pages-templates/genomics-tool-docs/* .

# For a Nextflow pipeline:
cp -r ~/afrigen-d-templates/github-pages-templates/nextflow-pipeline-docs/* .

# For a data resource:
cp -r ~/afrigen-d-templates/github-pages-templates/data-resource-docs/* .
```

### Step 2: Install Dependencies

```bash
# Install VitePress and dependencies
npm install

# Verify installation
npm run docs:dev --help
```

### Step 3: Configure Your Site

**Edit `.vitepress/config.ts`**:

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AfriGenQC',  // Your project name
  description: 'A comprehensive quality control toolkit for African genomics data',
  base: '/afrigen-qc/',  // Repository name with leading/trailing slashes
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API Reference', link: '/api/' }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AfriGen-D/afrigen-qc' }
    ]
  }
})
```

**Key configurations to customize**:
- `title` - Your project name
- `description` - Brief project description
- `base` - Repository name (format: `/repo-name/`)
- Navigation links and sidebar structure
- Social links (GitHub repository)

### Step 4: Customize Content

**Edit `index.md` (Homepage)**:

```markdown
---
layout: home

hero:
  name: "AfriGenQC"
  text: "Quality Control Toolkit"
  tagline: "Comprehensive QC for African genomics data"
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/AfriGen-D/afrigen-qc

features:
  - icon: 🧬
    title: Population-Specific Analysis
    details: Optimized for African ancestry populations with specialized reference data.
  - icon: ⚡
    title: High Performance
    details: Efficient processing of large-scale genomic datasets.
---
```

### Step 5: Create Content Pages

**Basic page structure**:

```markdown
# Page Title

Introduction paragraph with overview of the content.

## Section Header

Content with examples:

```bash
# Code example
command --input file.vcf --output results/
```

### Subsection

More detailed information with:

- Bullet points
- **Bold text**
- `inline code`
- [Links to other pages](/guide/advanced)
```

### Step 6: Test Locally

```bash
# Start development server
npm run docs:dev

# View site at http://localhost:5173
# Changes are reflected in real-time
```

### Step 7: Build for Production

```bash
# Build static files
npm run docs:build

# Preview production build
npm run docs:preview
```

---

## Customization

### Theme Configuration

**Colors and Styling**:

```typescript
// .vitepress/config.ts
export default defineConfig({
  themeConfig: {
    // Custom CSS variables
    cssVars: {
      '--vp-c-brand-1': '#2E7D32',  // AfriGen-D primary color
      '--vp-c-brand-2': '#1B5E20',  // Darker shade
      '--vp-c-brand-3': '#4CAF50',  // Lighter shade
    }
  }
})
```

**Custom CSS** (create `.vitepress/theme/custom.css`):

```css
:root {
  /* AfriGen-D brand colors */
  --vp-c-brand-1: #2E7D32;
  --vp-c-brand-2: #1B5E20;
  --vp-c-brand-3: #4CAF50;
  --vp-c-brand-soft: rgba(46, 125, 50, 0.14);
}

/* Custom hero styling */
.VPHero .name {
  background: linear-gradient(120deg, #2E7D32 30%, #4CAF50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Navigation Structure

**Sidebar configuration**:

```typescript
sidebar: {
  '/guide/': [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/getting-started' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Quick Start', link: '/guide/quick-start' }
      ]
    },
    {
      text: 'Advanced',
      collapsed: true,
      items: [
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'API Integration', link: '/guide/api' }
      ]
    }
  ]
}
```

### Custom Components

**Create `.vitepress/theme/index.ts`**:

```typescript
import DefaultTheme from 'vitepress/theme'
import CustomComponent from './components/CustomComponent.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomComponent', CustomComponent)
  }
}
```

### Advanced Features

**Math Support**:
```typescript
// .vitepress/config.ts
export default defineConfig({
  markdown: {
    math: true
  }
})
```

**Mermaid Diagrams**:
```bash
npm install mermaid
```

```typescript
// .vitepress/config.ts
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-mermaid'))
    }
  }
})
```

---

## Deployment

### GitHub Pages Deployment

**1. Add workflow file** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy VitePress site to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: docs/package-lock.json

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: npm ci
        working-directory: docs

      - name: Build with VitePress
        run: npm run docs:build
        working-directory: docs

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**2. Configure GitHub Pages**:
1. Go to repository Settings > Pages
2. Set source to "GitHub Actions"
3. Workflow will deploy automatically on push to main

### Alternative Deployment Options

**Netlify**:
```bash
# Build command: npm run docs:build
# Publish directory: docs/.vitepress/dist
```

**Vercel**:
```json
{
  "buildCommand": "npm run docs:build",
  "outputDirectory": "docs/.vitepress/dist",
  "framework": "vitepress"
}
```

**Custom Server**:
```bash
# Build and deploy
npm run docs:build
rsync -av docs/.vitepress/dist/ user@server:/var/www/docs/
```

---

## Troubleshooting

### Common Issues

#### Build Failures

::: details "Module not found" errors
**Cause**: Missing dependencies or incorrect paths

**Solutions**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check import paths in config files
# Verify all referenced files exist
```
:::

::: details TypeScript errors in config
**Cause**: Type mismatches or incorrect configuration

**Solutions**:
```typescript
// Use proper types
import type { DefaultTheme } from 'vitepress'

export default defineConfig({
  themeConfig: {
    // Ensure all properties match expected types
    nav: [...] as DefaultTheme.NavItem[]
  }
})
```
:::

#### Development Server Issues

::: details Port conflicts
**Cause**: Port 5173 already in use

**Solutions**:
```bash
# Use different port
npm run docs:dev -- --port 3000

# Kill existing processes
lsof -ti:5173 | xargs kill -9
```
:::

::: details Hot reload not working
**Cause**: File system watchers or permission issues

**Solutions**:
```bash
# Increase file watcher limit (Linux)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

# Restart development server
npm run docs:dev
```
:::

#### Deployment Issues

::: details GitHub Pages not updating
**Cause**: Workflow failures or caching issues

**Solutions**:
1. Check Actions tab for workflow errors
2. Verify `base` config matches repository name
3. Clear GitHub Pages cache in repository settings
4. Check workflow permissions are correct
:::

::: details Missing assets or broken links
**Cause**: Incorrect base URL or asset paths

**Solutions**:
```typescript
// .vitepress/config.ts
export default defineConfig({
  base: '/repository-name/',  // Must match GitHub repository name
  
  // Use absolute paths for assets
  head: [
    ['link', { rel: 'icon', href: '/repository-name/favicon.ico' }]
  ]
})
```
:::

### Getting Help

**Debugging checklist**:
1. ✅ Node.js version 18+ installed
2. ✅ All dependencies installed (`npm install`)
3. ✅ Configuration file syntax correct
4. ✅ All referenced files exist
5. ✅ Base URL matches repository name
6. ✅ Workflow permissions set correctly

**Support resources**:
- **GitHub Pages Documentation**: [docs.github.com/pages](https://docs.github.com/pages)
- **GitHub Issues**: Project-specific issues
- **AfriGen-D Helpdesk**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org)
- **Community Discussions**: GitHub Discussions in your repository

---

## Maintenance

### Regular Updates

**Update dependencies**:
```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific packages if needed
npm update @package/name
```

**Update content**:
- Review and update outdated information
- Add new features and examples
- Check and fix broken links
- Update version numbers and badges

### Content Management

**Adding new pages**:
1. Create markdown file in appropriate directory
2. Add to sidebar configuration
3. Update navigation if needed
4. Test locally before deploying

**Organizing content**:
```
docs/
├── index.md                    # Homepage
├── guide/                      # User guides
│   ├── getting-started.md
│   ├── installation.md
│   └── advanced.md
├── api/                        # API documentation
│   ├── index.md
│   ├── cli.md
│   └── python.md
├── examples/                   # Usage examples
│   ├── index.md
│   ├── basic.md
│   └── advanced.md
└── .vitepress/
    ├── config.ts              # Site configuration
    └── theme/                  # Custom theme files
```

### Performance Optimization

**Optimize images**:
```bash
# Optimize images before adding
npx imagemin images/*.png --out-dir=public/images
```

**Bundle analysis**:
```bash
# Analyze bundle size
npm run docs:build -- --mode=analyze
```

**SEO optimization**:
```typescript
// .vitepress/config.ts
export default defineConfig({
  head: [
    ['meta', { name: 'keywords', content: 'genomics, bioinformatics, african, research' }],
    ['meta', { property: 'og:title', content: 'AfriGenQC Documentation' }],
    ['meta', { property: 'og:description', content: 'Quality control for African genomics' }]
  ]
})
```

### Backup and Version Control

**Git workflow**:
```bash
# Regular commits
git add docs/
git commit -m "Update documentation: add new API examples"
git push origin main

# Tag releases
git tag -a v1.0.0 -m "Documentation v1.0.0"
git push origin v1.0.0
```

**Backup content**:
- Keep documentation in version control
- Export/backup any external dependencies
- Document custom configurations and modifications

This comprehensive guide provides everything needed to successfully set up and maintain VitePress documentation sites for AfriGen-D projects, ensuring professional, fast, and maintainable documentation that matches the existing organizational standards.
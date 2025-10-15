# Create New Documentation Repository

A simple step-by-step guide to create a standalone documentation repository using AfriGen-D templates.

## Prerequisites

- GitHub account
- Basic knowledge of Git commands

## Step 1: Get the Templates

First, clone the AfriGen-D templates:

```bash
# Clone the templates repository
git clone https://github.com/AfriGen-D/afrigen-d-templates.git
```

## Step 2: Create New Repository on GitHub

1. **Go to GitHub.com** and sign in
2. **Click the "+" button** in the top right corner
3. **Select "New repository"**
4. **Fill in repository details**:
   - Repository name: `my-project-docs` (choose your own name)
   - Description: `Documentation for My Project`
   - Make it **Public**
   - **Do NOT** check "Add a README file"
   - **Do NOT** check "Add .gitignore" 
   - **Do NOT** check "Choose a license"
5. **Click "Create repository"**

## Step 3: Clone Your New Repository

```bash
# Clone your new empty repository
git clone https://github.com/AfriGen-D/my-project-docs.git
cd my-project-docs
```

## Step 4: Copy Template Files

Choose the template that matches your project:

```bash
# Copy genomics tool template
cp -r ../afrigen-d-templates/github-pages-templates/genomics-tool-docs/* .

# OR copy pipeline template
cp -r ../afrigen-d-templates/github-pages-templates/nextflow-pipeline-docs/* .

# OR copy data resource template  
cp -r ../afrigen-d-templates/github-pages-templates/data-resource-docs/* .
```

## Step 5: Customize Your Site

Navigate to your repository and edit the main configuration file:

```bash
# Make sure you're in your repository
cd my-project-docs

# Edit .vitepress/config.ts
nano .vitepress/config.ts
```

Replace these key values:

```typescript
export default defineConfig({
  title: 'My Project Documentation',        // Change this
  description: 'Documentation for my project', // Change this
  base: '/my-project-docs/',               // Must match your GitHub repo name
  
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AfriGen-D/my-project-docs' } // Change this
    ]
  }
})
```

**Important**: The `base` field must exactly match your GitHub repository name with slashes: `/repo-name/`

## Step 6: Edit Homepage Content

```bash
# Edit the main page (make sure you're in your repository directory)
nano index.md
```

Update the hero section:

```markdown
---
layout: home

hero:
  name: "My Project"
  text: "Documentation Site"  
  tagline: "Comprehensive documentation for my project"
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View Project on GitHub
      link: https://github.com/YourUsername/your-main-project
---
```

## Step 7: Commit and Push Initial Version

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial documentation site setup"

# Push to GitHub
git push origin main
```

## Step 8: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click "Settings" tab**
3. **Scroll down to "Pages" section (left sidebar)**
4. **Under "Source"**:
   - Select "GitHub Actions"
   - Leave all other settings as default
5. **Click "Save"**

## Step 9: Wait for Deployment

1. **Go to "Actions" tab** in your repository
2. **Wait for the workflow to complete** (usually 2-5 minutes)
3. **Look for green checkmark** ✅

## Step 10: View Your Documentation Site

Your site will be available at:
```
https://afrigen-d.github.io/my-project-docs/
```

## Repository Structure

Your documentation repository will look like this:

```
my-project-docs/
├── .vitepress/
│   └── config.ts           # Site configuration
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deployment workflow
├── guide/                  # Documentation pages
│   ├── getting-started.md
│   └── ...
├── api/                    # API documentation (if applicable)
├── examples/               # Usage examples
├── index.md               # Homepage
├── package.json           # Dependencies
└── README.md              # Repository README
```

## Making Updates

To update your documentation:

```bash
# Edit your content
nano index.md
nano guide/getting-started.md

# Commit and push (GitHub will automatically rebuild)
git add .
git commit -m "Update documentation"
git push origin main
```

GitHub will automatically redeploy your site within a few minutes.

## Link to Your Main Project

If this documentation is for another project, add links:

**In your main project README**:
```markdown
## Documentation

📚 **Complete Documentation**: https://afrigen-d.github.io/my-project-docs/

## Quick Links
- [Getting Started](https://afrigen-d.github.io/my-project-docs/guide/getting-started)
- [API Reference](https://afrigen-d.github.io/my-project-docs/api/)
- [Examples](https://afrigen-d.github.io/my-project-docs/examples/)
```

**In your documentation site** (edit `index.md`):
```markdown
- theme: alt
  text: View Source Code
  link: https://github.com/YourUsername/your-main-project
```

## Use Cases

This approach is great for:
- **Large documentation sites** that would clutter your main repository
- **Multi-project documentation** covering several related tools
- **Organization-wide documentation** hubs
- **Tutorial sites** with extensive examples
- **API documentation** that needs frequent updates

## Quick Reference

| Action | Command |
|--------|---------|
| **Edit Content** | `nano index.md` |
| **Deploy** | `git push origin main` |
| **View Site** | Visit `https://afrigen-d.github.io/repo-name/` |

## Support

- **Template Issues**: [AfriGen-D Templates Issues](https://github.com/AfriGen-D/afrigen-d-templates/issues)
- **GitHub Pages Help**: [docs.github.com/pages](https://docs.github.com/pages)
- **AfriGen-D Support**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org)

---

**That's it!** You now have a dedicated documentation repository that automatically deploys to GitHub Pages whenever you make changes.
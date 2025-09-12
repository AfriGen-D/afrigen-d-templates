# Add Documentation to Existing Repository

A simple step-by-step guide to add AfriGen-D documentation to your existing GitHub repository.

## Prerequisites

- Existing GitHub repository with your project code
- Basic knowledge of Git commands

## Step 1: Get the Templates

First, clone the AfriGen-D templates:

```bash
# Clone the templates repository
git clone https://github.com/AfriGen-D/afrigen-d-templates.git
```

## Step 2: Copy Template to Your Repository

Choose the template that matches your project:

```bash
# Navigate to your repository
cd /path/to/your-repository

# Copy genomics tool template
cp -r ../afrigen-d-templates/github-pages-templates/genomics-tool-docs/* ./docs/

# OR copy pipeline template
cp -r ../afrigen-d-templates/github-pages-templates/nextflow-pipeline-docs/* ./docs/

# OR copy data resource template  
cp -r ../afrigen-d-templates/github-pages-templates/data-resource-docs/* ./docs/
```

## Step 3: Skip Installation (GitHub Will Handle It)

No need to install anything locally! GitHub Actions will automatically install dependencies and build your site.

## Step 4: Customize Your Site

Navigate to the docs directory and edit the main configuration file:

```bash
# Navigate to docs directory
cd docs

# Edit .vitepress/config.ts
nano .vitepress/config.ts
```

Replace these key values:

```typescript
export default defineConfig({
  title: 'Your Project Name',           // Change this
  description: 'Your project description', // Change this
  base: '/your-repository-name/',       // Must match your GitHub repo name
  
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AfriGen-D/your-repository-name' } // Change this
    ]
  }
})
```

**Important**: The `base` field must exactly match your GitHub repository name with slashes: `/repo-name/`

## Step 5: Edit Homepage Content

```bash
# Edit the main page (you should still be in the docs directory)
nano index.md
```

Update the hero section:

```markdown
---
layout: home

hero:
  name: "Your Project Name"
  text: "Your Project Type"  
  tagline: "Your project tagline"
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/AfriGen-D/your-repository-name
---
```

## Step 6: Skip Local Testing (Optional)

Local testing requires Node.js installation. Since GitHub Actions will build and deploy automatically, you can skip this step and test directly on GitHub Pages.

## Step 7: Commit Your Changes

```bash
# Go back to repository root
cd ..

# Add all files
git add docs/

# Commit changes
git commit -m "Add documentation site"

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

## Step 10: View Your Site

Your site will be available at:
```
https://afrigen-d.github.io/your-repository-name/
```

## Troubleshooting

### Site Shows 404 Error
**Problem**: Page not found when visiting the URL

**Solution**: Check that `base: '/your-repository-name/'` in `.vitepress/config.ts` exactly matches your repository name.

### Workflow Fails
**Problem**: GitHub Actions shows red X

**Solutions**:
1. Check that `docs/package.json` exists
2. Look at error logs in Actions tab for specific errors
3. Ensure all template files were copied correctly

### Changes Not Showing
**Problem**: Site doesn't update after pushing changes

**Solutions**:
1. Wait 2-5 minutes for deployment
2. Hard refresh browser (Ctrl+F5)
3. Check Actions tab for new deployment

## Making Updates

To update your documentation:

```bash
# Edit your content
nano docs/index.md

# Commit and push (GitHub will automatically rebuild)
git add docs/
git commit -m "Update documentation"
git push origin main
```

GitHub will automatically redeploy your site within a few minutes.

## Common File Structure

Your repository should look like this:

```
your-repository/
├── docs/                     # Documentation files
│   ├── .vitepress/
│   │   └── config.ts        # Site configuration
│   ├── index.md             # Homepage
│   ├── guide/               # Documentation pages
│   └── package.json         # Dependencies
├── src/                     # Your project code (optional)
├── README.md               # Repository README
└── other project files...
```

## Quick Reference

| Action | Command |
|--------|---------|
| **Edit Content** | `nano docs/index.md` |
| **Deploy** | `git push origin main` |
| **View Site** | Visit `https://afrigen-d.github.io/repo-name/` |

## Support

- **Template Issues**: [AfriGen-D Templates Issues](https://github.com/AfriGen-D/afrigen-d-templates/issues)
- **GitHub Pages Help**: [docs.github.com/pages](https://docs.github.com/pages)
- **AfriGen-D Support**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org)

---

**That's it!** Your documentation site is now live on GitHub Pages and will automatically update whenever you push changes to your repository.
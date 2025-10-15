# Create Repository from GitHub UI

The easiest way to create a new AfriGen-D project - no command line or local setup required! Create and customize your repository entirely through the GitHub web interface.

## Prerequisites

- GitHub account
- Web browser
- That's it!

## Why Use This Method?

✅ **No Installation Required**: Works entirely in your browser
✅ **Beginner Friendly**: No Git or command-line knowledge needed
✅ **Fast Setup**: Create and deploy in minutes
✅ **Visual Interface**: Edit files with GitHub's built-in editor

## Method 1: Use This Template (Recommended)

The fastest way - use GitHub's built-in template feature to create your project instantly.

### Step 1: Choose Your Template

Navigate to the appropriate AfriGen-D template repository:

- **[Genomics Tool Template](https://github.com/AfriGen-D/genomics-tool-template)** - For bioinformatics tools and software packages
- **[Nextflow Pipeline Template](https://github.com/AfriGen-D/nextflow-pipeline-template)** - For Nextflow/nf-core pipelines
- **[Data Resource Template](https://github.com/AfriGen-D/data-resource-template)** - For genomic datasets and references

### Step 2: Use This Template

1. Click the green **"Use this template"** button (top right of the page)
2. Select **"Create a new repository"**

### Step 3: Configure Your Repository

1. **Owner**: Select AfriGen-D organization (if you're a member) or your personal account
2. **Repository name**: Enter your project name (e.g., `afrigen-qc-toolkit`)
3. **Description**: Add a brief description
4. **Visibility**: Choose Public or Private
5. **Include all branches**: Leave unchecked
6. Click **"Create repository"**

GitHub creates your new repository with all template files instantly!

### Step 4: Customize Your Project

Edit files directly on GitHub:

1. Click on **README.md** in your new repository
2. Click the **pencil icon** (✏️ Edit this file)
3. Replace template placeholders:
   - `{{ PROJECT_NAME }}` → Your project name
   - `{{ PROJECT_DESCRIPTION }}` → Your description
   - `{{ REPO_NAME }}` → Your repository name
4. Preview changes (click "Preview" tab)
5. Scroll down and click **"Commit changes..."**
6. Enter commit message: "Customize README"
7. Click **"Commit changes"**

Repeat for other files as needed (LICENSE, CONTRIBUTING.md, etc.).

## Method 2: Manual Repository Creation

Create a completely new repository and manually add only the files you need from the templates.

### Step 1: Create New Repository

1. Go to **GitHub.com**
2. Click **"+"** button (top right) → **"New repository"**
3. Fill in details:
   - **Repository name**: `your-project-name`
   - **Description**: Your project description
   - **Visibility**: Public
   - **Initialize**: Check "Add a README file"
4. Click **"Create repository"**

### Step 2: Add Template Files

You'll need to manually create files from the templates:

1. **Create LICENSE file**:
   - Click **"Add file" → "Create new file"**
   - Name: `LICENSE`
   - Copy content from template LICENSE
   - Commit

2. **Create CONTRIBUTING.md**:
   - Same process
   - Copy from template

3. **Add GitHub Actions workflow**:
   - Create file: `.github/workflows/ci.yml`
   - Copy from template workflow

4. **Customize README.md**:
   - Edit the existing README
   - Add your project information

### Step 3: Add Documentation Site

1. **Create docs directory**:
   - Create file: `docs/index.md`
   - Add homepage content

2. **Add VitePress config**:
   - Create file: `docs/.vitepress/config.ts`
   - Copy config from template
   - Customize values

3. **Add package.json**:
   - Create file: `docs/package.json`
   - Copy dependencies from template

4. **Add deployment workflow**:
   - Create file: `.github/workflows/deploy.yml`
   - Copy from template

## Enable GitHub Pages

Once you have documentation files in your repository:

### Step 1: Go to Repository Settings

1. Click **"Settings"** tab in your repository
2. Scroll down to **"Pages"** in left sidebar

### Step 2: Configure Pages

1. **Source**: Select **"GitHub Actions"**
2. Leave other settings as default
3. Wait for confirmation message

### Step 3: Trigger Deployment

1. Make any small change (edit a doc file)
2. Commit the change
3. Go to **"Actions"** tab
4. Watch the deployment workflow run

### Step 4: View Your Site

1. Once workflow completes (green checkmark ✅)
2. Go back to **Settings → Pages**
3. Your site URL will be shown:
   ```
   https://afrigen-d.github.io/your-repo-name/
   ```
4. Click to visit your documentation site!

## Editing Files on GitHub

GitHub's web editor makes it easy to edit files without local setup:

### Quick Edit

1. Navigate to any file
2. Click **pencil icon** (Edit this file)
3. Make changes
4. Scroll down to "Commit changes"
5. Enter commit message
6. Click **"Commit changes"**

### Advanced Editor (github.dev)

For better editing experience:

1. While viewing your repository, press **`.`** (period key)
2. VS Code-like editor opens in browser
3. Edit multiple files
4. Use file explorer
5. Commit when done

### Upload Files

1. Click **"Add file" → "Upload files"**
2. Drag and drop files
3. Commit changes

## Customization Checklist

After creating your repository, customize these files:

- [ ] **README.md**: Update project name, description, badges
- [ ] **LICENSE**: Add your year and name
- [ ] **CONTRIBUTING.md**: Update contribution guidelines
- [ ] **docs/.vitepress/config.ts**: Update title, description, base URL
- [ ] **docs/index.md**: Customize homepage hero section
- [ ] **GitHub Actions workflows**: Update if needed
- [ ] **package.json** (if applicable): Update project metadata

## Template Variables to Replace

Search for and replace these placeholders:

| Placeholder | Replace With | Example |
|------------|--------------|---------|
| `{{ PROJECT_NAME }}` | Your project name | "AfriGenQC Toolkit" |
| `{{ REPO_NAME }}` | Repository name | "afrigen-qc-toolkit" |
| `{{ PROJECT_DESCRIPTION }}` | Brief description | "Quality control for genomic data" |
| `{{ YEAR }}` | Current year | "2025" |
| `{{ AUTHOR_NAMES }}` | Your name/org | "AfriGen-D Project" |
| `{{ LANGUAGE }}` | Programming language | "Python" |
| `{{ MIN_VERSION }}` | Minimum version | "3.8" |

**Tip**: Use GitHub's search feature:
1. Press **`/`** (forward slash)
2. Type your search term (e.g., `{{ PROJECT_NAME }}`)
3. Find and replace in each file

## When to Use Local Setup Instead

Consider switching to local development when you need:

- Complex file operations (moving, renaming many files)
- Testing changes before deployment
- Working with multiple files simultaneously
- Using specialized development tools
- Version control with branches and pull requests

See [Adding Documentation to Existing Repository](ADD_DOCS_TO_EXISTING_REPO.md) for local setup instructions.

## Troubleshooting

### Template Repository Not Available

**Problem**: "Use this template" button missing

**Solution**: The repository may not be set up as a template. Use Method 2 (Fork) or Method 3 (Manual) instead.

### GitHub Actions Not Running

**Problem**: Workflows don't trigger after commits

**Solution**:
1. Check **Settings → Actions → General**
2. Ensure "Allow all actions" is selected
3. Check workflow file syntax
4. Verify workflow is in `.github/workflows/` directory

### GitHub Pages Not Deploying

**Problem**: Site shows 404 or doesn't update

**Solution**:
1. Verify **Settings → Pages** source is "GitHub Actions"
2. Check **Actions** tab for workflow errors
3. Ensure `base` in config matches repository name exactly
4. Check workflow has Pages permissions

### Permission Denied

**Problem**: Can't commit or push changes

**Solution**:
1. Verify you have write access to repository
2. If in organization, check organization permissions
3. Contact repository administrator

## Next Steps

After creating your repository:

1. **Invite Collaborators**: Settings → Collaborators → Add people
2. **Set Up Branch Protection**: Settings → Branches → Add rule
3. **Configure Issue Templates**: Create `.github/ISSUE_TEMPLATE/`
4. **Add Project Board**: Projects → New project
5. **Enable Discussions**: Settings → Features → Discussions

## Support

- **Template Issues**: [AfriGen-D Templates Issues](https://github.com/AfriGen-D/afrigen-d-templates/issues)
- **GitHub Documentation**: [docs.github.com](https://docs.github.com)
- **AfriGen-D Helpdesk**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org)

---

**That's it!** You've created your AfriGen-D repository entirely through the GitHub web interface, no local setup required.

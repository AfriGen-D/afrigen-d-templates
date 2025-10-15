# Template Configuration Guide

All AfriGen-D templates now include an automated configuration system that makes customizing your project incredibly easy!

## How It Works

Instead of manually searching and replacing `{{ VARIABLE }}` placeholders throughout your project, you simply:

1. Edit ONE configuration file (`template.config.yml`)
2. Commit and push your changes
3. GitHub Actions automatically replaces all variables in all files
4. The configuration files delete themselves when done

## Quick Start

### Step 1: Create Your Repository

Use the "Use this template" button on any template repository:
- [Genomics Tool Template](https://github.com/AfriGen-D/genomics-tool-template)
- [Nextflow Pipeline Template](https://github.com/AfriGen-D/nextflow-pipeline-template)
- [Data Resource Template](https://github.com/AfriGen-D/data-resource-template)

### Step 2: Edit Configuration

Open `template.config.yml` in your new repository and fill in your values:

```yaml
project:
  name: "My Awesome Genomics Tool"
  description: "A powerful tool for analyzing African genomic data"
  repo_name: "my-awesome-tool"  # Must match your GitHub repo name
  version: "1.0.0"

author:
  name: "Your Name"
  email: "your.email@example.com"
  year: "2025"

technical:
  language: "Python"
  min_version: "3.8"
  install_command: "pip install my-awesome-tool"
  test_command: "pytest tests/"

genomics:
  analysis_type: "Variant calling"
  data_type: "VCF files"
  genome_build: "GRCh38"
  populations: "African ancestry populations"
```

### Step 3: Commit and Push

```bash
git add template.config.yml
git commit -m "Configure project variables"
git push origin main
```

### Step 4: Wait for Automation

GitHub Actions will:
- ✅ Read your configuration
- ✅ Replace all `{{ VARIABLE }}` placeholders in all files
- ✅ Commit the changes
- ✅ Delete `template.config.yml` and the workflow file
- ✅ Leave you with a fully configured project!

This takes about 30-60 seconds.

## Available Variables

### Project Information

| Variable | Description | Example |
|----------|-------------|---------|
| `PROJECT_NAME` | Full project name | "AfriGen QC Toolkit" |
| `PROJECT_DESCRIPTION` | Brief description | "Quality control tools for genomic data" |
| `REPO_NAME` | GitHub repository name | "afrigen-qc-toolkit" |
| `VERSION` | Version number | "1.0.0" |

### Author Information

| Variable | Description | Example |
|----------|-------------|---------|
| `AUTHOR_NAMES` | Author name(s) | "Jane Doe, John Smith" |
| `AUTHOR_EMAIL` | Contact email | "contact@example.com" |
| `YEAR` | Copyright year | "2025" |

### Technical Details

| Variable | Description | Example |
|----------|-------------|---------|
| `LANGUAGE` | Programming language | "Python", "R", "JavaScript" |
| `MIN_VERSION` | Minimum version required | "3.8" |
| `INSTALL_COMMAND` | Installation command | "pip install my-tool" |
| `TEST_COMMAND` | Testing command | "pytest tests/" |

### Genomics-Specific

| Variable | Description | Example |
|----------|-------------|---------|
| `ANALYSIS_TYPE` | Type of analysis | "Variant calling" |
| `DATA_TYPE` | Input data format | "VCF files" |
| `GENOME_BUILD` | Reference genome | "GRCh38" |
| `POPULATIONS` | Target populations | "African ancestry populations" |

### Optional

| Variable | Description | Example |
|----------|-------------|---------|
| `DOI` | Publication DOI | "10.5281/zenodo.123456" |
| `GOOGLE_ANALYTICS_ID` | Analytics tracking ID | "G-XXXXXXXXXX" |

## Files That Get Updated

The automation processes all files in your repository:

- ✅ **Markdown files** (README.md, CONTRIBUTING.md, etc.)
- ✅ **Configuration files** (.yml, .yaml, .json)
- ✅ **Source code** (.py, .r, .R, .sh)
- ✅ **Documentation** (all .md files)
- ✅ **LICENSE file**
- ✅ **Any text files** containing template variables

## Manual Trigger

If you need to re-run the configuration (before it deletes itself):

1. Go to **Actions** tab in your repository
2. Select **"Initialize Template"** workflow
3. Click **"Run workflow"**
4. Select branch and run

## Troubleshooting

### Workflow Doesn't Run

**Problem**: You committed but nothing happened

**Solutions**:
- Ensure your commit message includes "Configure project variables"
- Or manually trigger the workflow from Actions tab
- Check that Actions are enabled in repository Settings

### Some Variables Not Replaced

**Problem**: Some `{{ VARIABLE }}` placeholders remain

**Solutions**:
- Check that you filled in ALL values in `template.config.yml`
- Make sure you didn't leave any values as `{{ VARIABLE }}`
- The variable name must match exactly (case-sensitive)

### Workflow Failed

**Problem**: Red X in Actions tab

**Solutions**:
1. Click on the failed workflow run
2. Read the error message
3. Common issues:
   - Invalid YAML syntax in `template.config.yml`
   - Missing required values
   - Permission issues (check repo settings)

## Advanced: Custom Variables

If you need additional custom variables:

1. Add them to `template.config.yml`:
   ```yaml
   custom:
     my_variable: "my value"
   ```

2. Use them in your files:
   ```markdown
   This is {{ MY_VARIABLE }}.
   ```

3. Commit and the workflow will replace them!

Variable names are automatically converted to UPPERCASE and underscores.

## Best Practices

### ✅ Do:
- Fill in all values before committing
- Use descriptive, meaningful names
- Keep descriptions concise but informative
- Match `REPO_NAME` exactly with your GitHub repository name
- Review changes after the workflow runs

### ❌ Don't:
- Leave values as `{{ VARIABLE }}`
- Use special characters in variable values
- Edit files while the workflow is running
- Delete `template.config.yml` before the workflow runs

## Example Workflow

Here's a real example of the complete process:

```bash
# 1. Create repository from template (via GitHub UI)
# 2. Clone your new repository
git clone https://github.com/AfriGen-D/my-awesome-tool.git
cd my-awesome-tool

# 3. Edit configuration
nano template.config.yml
# (Fill in all your values)

# 4. Commit and push
git add template.config.yml
git commit -m "Configure project variables"
git push origin main

# 5. Watch the magic happen!
# Go to Actions tab on GitHub and watch the workflow run

# 6. Pull the changes
git pull origin main

# 7. Your project is now fully configured!
```

## FAQ

**Q: Can I manually edit files instead of using the config?**
A: Yes, but it's much more error-prone. The automated system ensures consistency.

**Q: What if I made a mistake in my configuration?**
A: You can fix it manually after the workflow runs, or you can edit the config and re-run before it deletes itself.

**Q: Does this work offline?**
A: No, it requires GitHub Actions. But you can run the Python script locally if needed.

**Q: Can I use this for private repositories?**
A: Yes! GitHub Actions work the same for private repos.

**Q: Will this overwrite my changes?**
A: The workflow only runs once. After it completes and deletes itself, your files are yours to edit freely.

## Support

- **Issues**: [Report problems](https://github.com/AfriGen-D/afrigen-d-templates/issues)
- **Questions**: [Ask in discussions](https://github.com/AfriGen-D/afrigen-d-templates/discussions)
- **Helpdesk**: [AfriGen-D Support](https://helpdesk.afrigen-d.org)

---

**Ready to configure your template?** Edit `template.config.yml` and let GitHub Actions do the rest!

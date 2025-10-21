<div align="center">
  <img src="https://raw.githubusercontent.com/AfriGen-D/afrigen-d-templates/main/assets/afrigen-d-logo.png" alt="AfriGen-D Logo" width="200" />
  <h1>AfriGen-D GitHub Templates</h1>
</div>

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/AfriGen-D/afrigen-d-templates)](https://github.com/AfriGen-D/afrigen-d-templates/issues)
[![GitHub Stars](https://img.shields.io/github/stars/AfriGen-D/afrigen-d-templates)](https://github.com/AfriGen-D/afrigen-d-templates/stargazers)

</div>

> A comprehensive collection of repository and GitHub Pages templates for the AfriGen-D project, designed to standardize and streamline project development in genomics research.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Template Categories](#template-categories)
  - [1. Repository Templates](#1-repository-templates)
    - [Genomics Tool Template](#genomics-tool-template)
    - [Nextflow Pipeline Template](#nextflow-pipeline-template)
    - [Data Resource Template](#data-resource-template)
  - [2. GitHub Pages Templates](#2-github-pages-templates)
    - [Genomics Tool Documentation](#genomics-tool-documentation)
    - [Nextflow Pipeline Documentation](#nextflow-pipeline-documentation)
    - [Data Resource Documentation](#data-resource-documentation)
  - [3. Organization Templates](#3-organization-templates)
    - [Workflow Templates](#workflow-templates)
    - [Issue Templates](#issue-templates)
- [Quick Start Guide](#quick-start-guide)
  - [Using Repository Templates](#using-repository-templates)
  - [Setting Up GitHub Pages](#setting-up-github-pages)
  - [Installing Organization Templates](#installing-organization-templates)
- [Customization Guide](#customization-guide)
  - [Branding and Styling](#branding-and-styling)
  - [Content Customization](#content-customization)
  - [Workflow Customization](#workflow-customization)
- [Style Guide](#style-guide)
  - [Brand Colors](#brand-colors)
  - [Typography](#typography)
  - [UI Components](#ui-components)
  - [Design Principles](#design-principles)
- [Template Variables Reference](#template-variables-reference)
- [Best Practices](#best-practices)
- [Maintenance and Updates](#maintenance-and-updates)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Citation](#citation)
- [Support](#support)
- [About AfriGen-D](#about-afrigen-d)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

AfriGen-D GitHub Templates is part of the AfriGen-D suite of resources designed to advance genomic research capabilities for African populations. This template collection provides standardized configurations and documentation to help AfriGen-D maintain consistency, quality, and best practices across all repositories and documentation sites.

## Features

- **Repository Templates**: Standardized project structures for genomics tools, Nextflow pipelines, and data resources
- **GitHub Pages Templates**: Professional VitePress-based documentation sites with AfriGen-D branding
- **Organization Templates**: Workflow templates and issue configurations for consistent project management
- **Automated Deployment**: GitHub Actions workflows for seamless CI/CD and documentation publishing

## Documentation

Browser-based guides - no installation required!

### [View All Documentation](docs/)

**Available Guides:**

- **[Creating Repository from GitHub UI](docs/CREATE_REPO_FROM_GITHUB_UI.md)** - Start a new project (10-15 min)
- **[Adding Documentation to Existing Repository](docs/ADD_DOCS_TO_EXISTING_REPO.md)** - Add docs to existing project (15-20 min)

### Quick Start

- **New project?** → [Create from GitHub UI](docs/CREATE_REPO_FROM_GITHUB_UI.md)
- **Existing project?** → [Add documentation](docs/ADD_DOCS_TO_EXISTING_REPO.md)

## Template Categories

### 1. Repository Templates

Use GitHub's "Use this template" button to instantly create new projects from these templates:

#### Genomics Tool Template
**GitHub**: [AfriGen-D/genomics-tool-template](https://github.com/AfriGen-D/genomics-tool-template)

Template for bioinformatics tools and software packages.

**Includes**:
- Comprehensive README with feature highlights and quick start
- Contributing guidelines with genomics-specific considerations
- MIT License template
- GitHub Actions CI/CD workflow
- Issue templates for bugs and feature requests
- Standard project structure

**Use for**: Command-line tools, Python packages, R packages, standalone software

#### Nextflow Pipeline Template
**GitHub**: [AfriGen-D/nextflow-pipeline-template](https://github.com/AfriGen-D/nextflow-pipeline-template)

Template for Nextflow-based bioinformatics pipelines following nf-core standards.

**Includes**:
- nf-core compatible README structure
- Parameter documentation tables
- Pipeline summary and workflow descriptions
- Container support (Docker, Singularity)
- Nextflow Tower integration

**Use for**: Genomic analysis pipelines, multi-step workflows, data processing pipelines

#### Data Resource Template
**GitHub**: [AfriGen-D/data-resource-template](https://github.com/AfriGen-D/data-resource-template)

Template for genomic datasets and reference resources.

**Includes**:
- Dataset description and metadata
- Data access instructions and requirements
- Quality metrics and validation information
- Usage examples in R and Python
- Citation and data use agreements
- Ethical considerations section

**Use for**: Reference panels, genomic datasets, curated resources, database releases

### 2. GitHub Pages Templates

#### Genomics Tool Documentation
**Path**: `github-pages-templates/genomics-tool-docs/`

VitePress-based documentation site template for genomics tools and software packages.

**Includes**:
- VitePress static site generator with modern design
- AfriGen-D branded styling and navigation
- Population-specific genomics features highlighting
- Responsive design with mobile support
- API reference and examples sections
- Automated GitHub deployment workflow

#### Nextflow Pipeline Documentation
**Path**: `github-pages-templates/nextflow-pipeline-docs/`

Specialized documentation template for Nextflow bioinformatics pipelines.

**Includes**:
- Pipeline workflow visualization support
- Parameter documentation tables
- Usage examples with sample data
- Performance benchmarking sections
- Integration with Nextflow Tower

#### Data Resource Documentation
**Path**: `github-pages-templates/data-resource-docs/`

Documentation template for genomic datasets and reference resources.

**Includes**:
- Dataset metadata and quality metrics
- Data access instructions and requirements
- Population diversity information
- Ethical considerations and data use agreements
- Citation guidelines and examples

### 3. Organization Templates

#### Workflow Templates
**Path**: `organization-templates/.github/workflow-templates/`

Pre-configured GitHub Actions workflows for common AfriGen-D project needs.

**Genomics CI Workflow**:
- Multi-version Python testing (3.8-3.11)
- Bioinformatics tool dependencies (bcftools, vcftools, PLINK)
- Code linting with flake8
- Test coverage reporting
- Docker image building and publishing
- Security scanning with Trivy

#### Issue Templates
**Path**: `organization-templates/.github/ISSUE_TEMPLATE/`

Standardized issue templates and configuration for the organization.

**Includes**:
- Contact links for different types of support
- Redirect to documentation and community resources
- Email contacts for specialized help

## Quick Start Guide

### Using Repository Templates

1. **Create New Repository from Template** (Recommended):
   - Visit one of our template repositories:
     - [Genomics Tool Template](https://github.com/AfriGen-D/genomics-tool-template)
     - [Nextflow Pipeline Template](https://github.com/AfriGen-D/nextflow-pipeline-template)
     - [Data Resource Template](https://github.com/AfriGen-D/data-resource-template)
   - Click the **"Use this template"** button
   - Name your repository and click "Create repository"
   - GitHub instantly creates your project with all template files!

2. **Customize Template Variables**:
   Replace the following placeholders in all files:
   
   ```bash
   # Basic project info
   {{ PROJECT_NAME }}          # e.g., "AfriGenImpute"
   {{ PROJECT_DESCRIPTION }}   # Brief description
   {{ REPO_NAME }}             # GitHub repository name
   {{ AUTHOR_NAMES }}          # Author list
   {{ YEAR }}                  # Current year
   
   # Technical details  
   {{ LANGUAGE }}              # e.g., "Python", "R"
   {{ MIN_VERSION }}           # Minimum version required
   {{ INSTALL_COMMAND }}       # Installation command
   {{ TEST_COMMAND }}          # Testing command
   
   # URLs and identifiers
   {{ DOI }}                   # DOI if available
   {{ GOOGLE_ANALYTICS_ID }}   # Analytics tracking ID
   ```

3. **Initialize Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit from AfriGen-D template"
   git remote add origin https://github.com/AfriGen-D/your-repo-name.git
   git push -u origin main
   ```

### Setting Up GitHub Pages

1. **Add Documentation to Existing Repository**:
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

2. **Customize VitePress Configuration**:
   Edit `docs/.vitepress/config.ts` and replace template variables:
   ```typescript
   export default defineConfig({
     title: 'Your Project Name',
     description: 'Your project description',
     base: '/your-repository-name/',  // Must match repo name
   })
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source
   - GitHub will automatically deploy using the included workflow

### Installing Organization Templates

For organization admins only:

1. **Workflow Templates**:
   ```bash
   # Copy to organization .github repository
   cp organization-templates/.github/workflow-templates/* \
      /path/to/.github-org-repo/.github/workflow-templates/
   ```

2. **Issue Templates**:
   ```bash
   # Copy to organization .github repository
   cp organization-templates/.github/ISSUE_TEMPLATE/* \
      /path/to/.github-org-repo/.github/ISSUE_TEMPLATE/
   ```

## Customization Guide

### Branding and Styling

#### Repository Templates
- Update logo references in README files
- Modify color schemes in documentation
- Customize footer information and links

#### GitHub Pages (VitePress)
- Edit theme configuration in `.vitepress/config.ts`:
  ```typescript
  export default defineConfig({
    themeConfig: {
      logo: '/logo.svg',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/AfriGen-D/your-repo' }
      ]
    }
  })
  ```
- Replace logo files in `docs/public/`
- Update navigation and sidebar configuration

### Content Customization

#### README Templates
- Add project-specific sections
- Include relevant badges and shields
- Customize installation instructions
- Add domain-specific examples

#### Documentation Structure (VitePress)
- Modify navigation in `.vitepress/config.ts`
- Add new markdown pages in appropriate directories
- Configure sidebar for different sections
- Update footer and social links

### Workflow Customization

#### CI/CD Pipelines
- Modify Python versions in matrix builds
- Add language-specific linting tools
- Configure deployment targets
- Add notification integrations

#### Issue Templates
- Add project-specific labels
- Create custom field types
- Modify validation requirements
- Add automated assignments

## Style Guide

### Brand Colors

The AfriGen-D brand uses a distinctive color palette inspired by the logo:

#### Primary Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **AfriGen Red** | `#C94234` | Primary brand color, links, primary buttons |
| **AfriGen Red Light** | `#D95C4E` | Hover states, lighter accents |
| **AfriGen Red Dark** | `#A33529` | Active states, darker accents |

#### Accent Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **AfriGen Yellow** | `#F4A535` | Accent highlights, feature cards |
| **AfriGen Yellow Light** | `#F6B854` | Lighter accents |
| **AfriGen Yellow Dark** | `#E89420` | Hover states for yellow elements |

#### Supporting Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **AfriGen Green** | `#2E7D32` | DNA helix accent, success states |
| **AfriGen Green Light** | `#4CAF50` | Lighter green accents |
| **AfriGen Green Dark** | `#1B5E20` | Darker green accents |

#### Neutral Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Black** | `#000000` | Text, headers (light mode) |
| **Dark Grey** | `#374151` | Secondary text, icons |
| **Medium Grey** | `#9ca3af` | Borders, inactive elements |
| **Light Grey** | `#e5e7eb` | Backgrounds, dividers |
| **White** | `#ffffff` | Backgrounds, cards (light mode) |

### Typography

#### Font Families

- **Primary Font**: System font stack for optimal performance
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  ```
- **Monospace Font**: For code blocks
  ```css
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
  ```

#### Font Sizes

| Element | Size | Usage |
|---------|------|-------|
| Hero Title | 48px | Homepage hero sections |
| H1 | 32px | Main page titles |
| H2 | 24px | Section headers |
| H3 | 20px | Subsection headers |
| Body | 16px | Main content |
| Small | 14px | Captions, metadata |

### UI Components

#### Buttons

**Primary Button (Red)**
- Background: `#C94234`
- Text: `#ffffff` (white)
- Hover: `#D95C4E`
- Use for: Primary actions, CTAs

**Secondary Button (Grey)**
- Background: Transparent
- Border: `#d1d5db`
- Text: `#374151`
- Hover: Background `#f3f4f6`
- Use for: Secondary actions, cancel buttons

#### Links

- Color: `#C94234` (AfriGen Red)
- No underline by default
- Hover: `#A33529` with underline
- Text underline offset: 2px

#### Feature Cards

- Border top: 2px solid `#F4A535` (Yellow)
- Hover: Border changes to `#E89420`
- Background: White or transparent

#### Navigation

**Light Mode:**
- Background: `#ffffff`
- Text: `#000000`
- Border bottom: 1px solid `#e5e7eb`

**Dark Mode:**
- Background: `#1f2937`
- Text: `#ffffff`
- Border: None

### Design Principles

#### 1. Clean and Minimal
- White space is intentional and important
- Remove unnecessary decorative elements
- Focus on content readability

#### 2. Accessible
- Maintain WCAG AA contrast ratios
- Provide text alternatives for images
- Ensure keyboard navigation works

#### 3. Consistent
- Use the same spacing scale throughout
- Apply colors consistently (red for links, yellow for accents)
- Maintain visual hierarchy

#### 4. Professional
- Clean header with subtle borders
- Subdued scrollbars that don't distract
- Thoughtful use of brand colors as accents

#### 5. Branded
- Strategic use of AfriGen-D colors from logo
- Balance brand identity with readability
- Header remains clean while links and buttons show brand colors

### CSS Variables (VitePress)

The documentation sites use CSS custom properties defined in `.vitepress/theme/style.css`:

```css
/* AfriGen-D brand colors from logo */
--afrigen-red: #C94234;
--afrigen-red-light: #D95C4E;
--afrigen-red-dark: #A33529;
--afrigen-yellow: #F4A535;
--afrigen-yellow-light: #F6B854;
--afrigen-yellow-dark: #E89420;
--afrigen-green: #2E7D32;
--afrigen-green-light: #4CAF50;
--afrigen-green-dark: #1B5E20;

/* VitePress brand color variables */
--vp-c-brand: #C94234;
--vp-c-brand-light: #D95C4E;
--vp-c-brand-dark: #A33529;
--vp-c-accent: #F4A535;
```

### Dark Mode Support

All templates include comprehensive dark mode support:

- **Background**: `#1f2937` (dark grey)
- **Text**: `#ffffff` (white)
- **Borders**: Darker variations
- **Brand colors**: Slightly adjusted for better visibility

### Spacing Scale

Use consistent spacing throughout:

| Size | Value | Usage |
|------|-------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Small gaps |
| md | 16px | Default spacing |
| lg | 24px | Section spacing |
| xl | 32px | Large section breaks |
| 2xl | 48px | Hero sections |

## Template Variables Reference

### Common Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ PROJECT_NAME }}` | Human-readable project name | "AfriGen Imputation Suite" |
| `{{ REPO_NAME }}` | GitHub repository name | "afrigen-imputation" |
| `{{ PROJECT_DESCRIPTION }}` | Brief project description | "Genomic imputation tools for African populations" |
| `{{ VERSION }}` | Current version | "1.0.0" |
| `{{ YEAR }}` | Current year | "2025" |
| `{{ DOI }}` | Digital Object Identifier | "10.5281/zenodo.123456" |

### Technical Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ LANGUAGE }}` | Primary programming language | "Python" |
| `{{ MIN_VERSION }}` | Minimum version requirement | "3.8" |
| `{{ INSTALL_COMMAND }}` | Installation command | "pip install afrigen-tools" |
| `{{ TEST_COMMAND }}` | Testing command | "pytest tests/" |

### Genomics-Specific Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `{{ ANALYSIS_TYPE }}` | Type of genomic analysis | "Genome-wide imputation" |
| `{{ DATA_TYPE }}` | Input data format | "VCF files" |
| `{{ GENOME_BUILD }}` | Reference genome | "GRCh38" |
| `{{ POPULATIONS }}` | Target populations | "African ancestry populations" |

## Best Practices

### Repository Setup
1. **Use semantic versioning** for all releases
2. **Include comprehensive tests** with >80% coverage  
3. **Document all public APIs** and command-line interfaces
4. **Provide working examples** with sample data
5. **Follow conventional commit messages**

### Documentation
1. **Keep README concise** but comprehensive
2. **Include visual examples** where helpful
3. **Maintain up-to-date installation instructions**
4. **Provide troubleshooting sections**
5. **Link to external resources** appropriately

### Genomics Projects
1. **Include data format specifications**
2. **Document computational requirements**
3. **Provide validation datasets**
4. **Consider population diversity** in examples
5. **Address ethical considerations** for data use

## Maintenance and Updates

### Template Updates
This template repository should be updated when:
- New GitHub features are available
- AfriGen-D branding changes
- Best practices evolve
- Community feedback suggests improvements

### Version Control
- Templates follow semantic versioning
- Breaking changes increment major version
- New features increment minor version
- Bug fixes increment patch version

## Contributing

We welcome contributions from the genomics community! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/AfriGen-D/afrigen-d-templates.git
cd afrigen-d-templates
# Test templates with sample projects
```

## Citation

If you use AfriGen-D GitHub Templates in your research or projects, please cite:

```bibtex
@software{afrigen_d_templates_2025,
  title = {AfriGen-D GitHub Templates},
  author = {AfriGen-D Project},
  year = {2025},
  url = {https://github.com/AfriGen-D/afrigen-d-templates},
  note = {Standardized templates for genomics research projects}
}
```

## Support

- **[Discussions](https://github.com/AfriGen-D/afrigen-d-templates/discussions)**: Community Q&A and feature requests
- **[Issues](https://github.com/AfriGen-D/afrigen-d-templates/issues)**: Bug reports and technical issues
- **Helpdesk**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org)
- **Website**: [afrigen-d.org](https://afrigen-d.org)

## About AfriGen-D

AfriGen-D is a project dedicated to enabling innovation in African genomics research through:

- **Research Tools**: Cutting-edge bioinformatics software
- **Data Resources**: Curated genomic datasets and reference panels
- **Community**: Collaborative research networks
- **Education**: Training and capacity building

Visit [afrigen-d.org](https://afrigen-d.org) to learn more about our mission and projects.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- AfriGen-D project members and collaborators
- Contributing researchers and developers
- Supporting institutions and funding agencies
- The broader genomics and open science communities

---

<div align="center">
  <p><strong>Enabling innovation in African genomics research</strong></p>
  <p>
    <a href="https://afrigen-d.org">Website</a> •
    <a href="https://twitter.com/AfriGenD">Twitter</a> •
    <a href="https://linkedin.com/company/afrigen-d">LinkedIn</a> •
    <a href="https://youtube.com/@afrigen-d">YouTube</a>
  </p>
</div>
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

## Template Categories

### 1. Repository Templates

#### Genomics Tool Template
**Path**: `repository-templates/genomics-tool-template/`

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
**Path**: `repository-templates/nextflow-pipeline-template/`

Template for Nextflow-based bioinformatics pipelines following nf-core standards.

**Includes**:
- nf-core compatible README structure
- Parameter documentation tables
- Pipeline summary and workflow descriptions
- Container support (Docker, Singularity)
- Nextflow Tower integration

**Use for**: Genomic analysis pipelines, multi-step workflows, data processing pipelines

#### Data Resource Template
**Path**: `repository-templates/data-resource-template/`

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

1. **Create New Repository from Template**:
   ```bash
   # Clone the desired template
   git clone https://github.com/AfriGen-D/afrigen-d-templates.git
   cd afrigen-d-templates
   
   # Copy template to new project
   cp -r repository-templates/genomics-tool-template/ /path/to/new-project/
   cd /path/to/new-project/
   ```

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

## Documentation

Comprehensive guides for all skill levels:

### [📚 View All Documentation](docs/)

- **[Basic Guides](docs/basic/)** - Browser-only, no installation (10-20 min)
- **[Advanced Guides](docs/advanced/)** - Full dev setup, command-line (30-120 min)

### Quick Start

- **New to GitHub?** → [Creating Repository from GitHub UI](docs/basic/CREATE_REPO_FROM_GITHUB_UI.md)
- **Have existing project?** → [Adding Documentation](docs/basic/ADD_DOCS_TO_EXISTING_REPO.md)
- **Need full control?** → [Comprehensive Setup Guide](docs/advanced/SETUP_GUIDE.md)

### Template Locations

- **Repository Templates**: `repository-templates/`
- **GitHub Pages Templates**: `github-pages-templates/`
- **Organization Templates**: `organization-templates/`

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
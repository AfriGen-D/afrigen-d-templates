# AfriGen-D GitHub Templates

A comprehensive collection of repository and GitHub Pages templates for the AfriGen-D project, designed to standardize and streamline project development in genomics research.

## Overview

This repository contains templates and configurations to help AfriGen-D maintain consistency, quality, and best practices across all repositories and documentation sites.

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

#### Project Site Template
**Path**: `github-pages-templates/project-site/`

Professional documentation site template for AfriGen-D projects.

**Includes**:
- Jekyll-based static site generator
- AfriGen-D branded styling and colors
- Responsive design with mobile support
- Navigation structure for documentation
- SEO optimization and social media integration
- Contact and support information

**Features**:
- Modern, clean design
- Grid-based layout for features and links
- Integrated GitHub repository information
- Footer with social links and license info
- CSS custom properties for easy theming

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

1. **Copy Pages Template**:
   ```bash
   cp -r github-pages-templates/project-site/* /path/to/your-repo/
   ```

2. **Customize Configuration**:
   Edit `_config.yml` and replace template variables:
   ```yaml
   title: "Your Project Name"
   description: "Your project description"
   baseurl: "/your-repo-name"
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

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

#### GitHub Pages
- Edit CSS custom properties in `assets/css/style.scss`:
  ```scss
  :root {
    --afrigend-primary: #2E7D32;    // Main brand color
    --afrigend-secondary: #FFA000;   // Accent color
    --afrigend-accent: #1976D2;     // Link color
  }
  ```
- Replace logo files in `assets/images/`
- Update social media links in `_config.yml`

### Content Customization

#### README Templates
- Add project-specific sections
- Include relevant badges and shields
- Customize installation instructions
- Add domain-specific examples

#### Documentation Structure
- Modify navigation in `_config.yml`
- Add new page templates
- Create custom collections for tutorials
- Update footer links and information

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

## Support and Contribution

### Getting Help
- **Template Issues**: [GitHub Issues](https://github.com/AfriGen-D/afrigen-d-templates/issues)
- **Usage Questions**: [GitHub Discussions](https://github.com/orgs/AfriGen-D/discussions)  
- **Helpdesk**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org)

### Contributing
1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Test with a sample project
5. Submit a pull request

### Feedback
We welcome feedback on these templates! Please:
- Report bugs or issues via our [helpdesk](https://helpdesk.afrigen-d.org)
- Suggest improvements through GitHub Issues
- Share usage experiences in Discussions
- Contribute new templates via pull requests

## License

This template collection is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- AfriGen-D project members and collaborators
- GitHub community for template best practices
- Jekyll and nf-core communities for inspiration
- Open source genomics community

---

**AfriGen-D Project**  
Enabling innovation in African genomics research  
[afrigen-d.org](https://afrigen-d.org)
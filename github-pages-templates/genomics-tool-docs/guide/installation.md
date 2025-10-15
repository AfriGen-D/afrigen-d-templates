# Installation

This page provides comprehensive installation instructions for {{ PROJECT_NAME }} across different platforms and environments.

## System Requirements

### Minimum Requirements
- **Operating System**: Linux, macOS, or Windows (WSL2 recommended)
- **Python**: {{ MIN_PYTHON_VERSION }} or later
- **Memory**: {{ MIN_MEMORY_GB }}GB RAM
- **Storage**: {{ MIN_STORAGE_GB }}GB free space
- **Network**: Internet connection for downloading dependencies

### Recommended Requirements
- **Python**: {{ RECOMMENDED_PYTHON_VERSION }}
- **Memory**: {{ RECOMMENDED_MEMORY_GB }}GB RAM
- **CPU**: {{ RECOMMENDED_CPU_CORES }}+ cores
- **Storage**: {{ RECOMMENDED_STORAGE_GB }}GB+ free space (SSD preferred)

### Supported Platforms

| Platform | Status | Notes |
|----------|---------|-------|
| Linux (Ubuntu 20.04+) | ✅ Fully supported | Primary development platform |
| Linux (CentOS 7+) | ✅ Fully supported | Tested on HPC clusters |
| macOS (10.15+) | ✅ Fully supported | Intel and Apple Silicon |
| Windows 10/11 | ⚠️ Via WSL2 | Native support in development |
| Windows (Docker) | ✅ Supported | Recommended for Windows users |

## Installation Methods

### Method 1: pip (Recommended)

The easiest way to install {{ PROJECT_NAME }}:

```bash
# Install the latest stable version
pip install {{ PACKAGE_NAME }}

# Install specific version
pip install {{ PACKAGE_NAME }}=={{ SPECIFIC_VERSION }}

# Install with optional dependencies
pip install "{{ PACKAGE_NAME }}[all]"

# Upgrade to latest version
pip install --upgrade {{ PACKAGE_NAME }}
```

**Optional Dependencies:**
- `[plotting]`: Additional visualization capabilities
- `[hpc]`: High-performance computing support
- `[dev]`: Development and testing tools
- `[all]`: All optional dependencies

### Method 2: conda/mamba

Install from conda-forge or bioconda:

```bash
# From conda-forge (recommended)
conda install -c conda-forge {{ PACKAGE_NAME }}

# From bioconda
conda install -c bioconda {{ PACKAGE_NAME }}

# Using mamba (faster)
mamba install -c conda-forge {{ PACKAGE_NAME }}

# Create dedicated environment
conda create -n {{ PACKAGE_NAME }} -c conda-forge {{ PACKAGE_NAME }}
conda activate {{ PACKAGE_NAME }}
```

### Method 3: Docker

Use our pre-built Docker images:

```bash
# Pull the latest image
docker pull {{ DOCKER_REGISTRY }}/{{ PACKAGE_NAME }}:latest

# Run interactively
docker run -it --rm \
  -v $(pwd):/data \
  {{ DOCKER_REGISTRY }}/{{ PACKAGE_NAME }}:latest bash

# Run a specific command
docker run --rm \
  -v $(pwd):/data \
  {{ DOCKER_REGISTRY }}/{{ PACKAGE_NAME }}:latest \
  {{ COMMAND_NAME }} --help
```

**Available Docker tags:**
- `latest`: Most recent stable release
- `{{ VERSION }}`: Specific version
- `dev`: Development version
- `minimal`: Minimal installation without optional dependencies

### Method 4: Singularity/Apptainer

For HPC environments:

```bash
# Build from Docker image
singularity build {{ PACKAGE_NAME }}.sif \
  docker://{{ DOCKER_REGISTRY }}/{{ PACKAGE_NAME }}:latest

# Run with Singularity
singularity exec {{ PACKAGE_NAME }}.sif {{ COMMAND_NAME }} --help

# Run with bind mounts
singularity exec --bind /data:/data {{ PACKAGE_NAME }}.sif \
  {{ COMMAND_NAME }} --input /data/input.vcf
```

### Method 5: Install from Source

For developers or custom installations:

```bash
# Clone the repository
git clone https://github.com/AfriGen-D/{{ REPO_NAME }}.git
cd {{ REPO_NAME }}

# Install in development mode
pip install -e .

# Or install normally
pip install .

# Install with development dependencies
pip install -e ".[dev]"
```

## Environment Setup

### Python Virtual Environment

Create an isolated environment:

```bash
# Using venv
python -m venv {{ PACKAGE_NAME }}-env
source {{ PACKAGE_NAME }}-env/bin/activate  # Linux/macOS
# {{ PACKAGE_NAME }}-env\Scripts\activate     # Windows

pip install {{ PACKAGE_NAME }}
```

### Conda Environment

```bash
# Create environment with specific Python version
conda create -n {{ PACKAGE_NAME }} python={{ PYTHON_VERSION }}
conda activate {{ PACKAGE_NAME }}

# Install from conda-forge
conda install -c conda-forge {{ PACKAGE_NAME }}

# Or install additional scientific packages
conda install -c conda-forge {{ PACKAGE_NAME }} numpy pandas matplotlib
```

### Environment File

Create a reproducible environment:

```yaml
# environment.yml
name: {{ PACKAGE_NAME }}
channels:
  - conda-forge
  - bioconda
dependencies:
  - python={{ PYTHON_VERSION }}
  - {{ PACKAGE_NAME }}
  - jupyter
  - matplotlib
  - seaborn
  - pip
  - pip:
    - {{ ADDITIONAL_PIP_PACKAGES }}
```

```bash
# Create environment from file
conda env create -f environment.yml
conda activate {{ PACKAGE_NAME }}
```

## Verification

### Basic Installation Check

```bash
# Check if installed correctly
{{ COMMAND_NAME }} --version

# Show installation information
{{ COMMAND_NAME }} info

# List available commands
{{ COMMAND_NAME }} --help
```

### Run Tests

```bash
# Run basic tests
{{ COMMAND_NAME }} test

# Run with test data
{{ COMMAND_NAME }} test --with-data

# Run comprehensive test suite (if installed from source)
python -m pytest tests/
```

### Check Dependencies

```bash
# Check Python environment
{{ COMMAND_NAME }} check-env

# List all dependencies
pip list | grep {{ PACKAGE_NAME }}

# Check for missing optional dependencies
{{ COMMAND_NAME }} check-optional
```

## Platform-Specific Instructions

### Ubuntu/Debian

```bash
# Update package list
sudo apt update

# Install system dependencies
sudo apt install -y python3 python3-pip python3-venv \
  build-essential libssl-dev libffi-dev python3-dev

# Install {{ PROJECT_NAME }}
pip3 install {{ PACKAGE_NAME }}
```

### CentOS/RHEL/Rocky Linux

```bash
# Install system dependencies
sudo yum install -y python3 python3-pip python3-devel \
  gcc gcc-c++ make openssl-devel libffi-devel

# Or on newer versions
sudo dnf install -y python3 python3-pip python3-devel \
  gcc gcc-c++ make openssl-devel libffi-devel

# Install {{ PROJECT_NAME }}
pip3 install {{ PACKAGE_NAME }}
```

### macOS

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python
brew install python

# Install {{ PROJECT_NAME }}
pip3 install {{ PACKAGE_NAME }}
```

### Windows (WSL2)

1. **Install WSL2:**
   - Follow [Microsoft's WSL2 installation guide](https://docs.microsoft.com/en-us/windows/wsl/install)
   - Install Ubuntu 20.04 or later

2. **Install in WSL2:**
   ```bash
   # Update package list
   sudo apt update
   
   # Install Python and pip
   sudo apt install -y python3 python3-pip python3-venv
   
   # Install {{ PROJECT_NAME }}
   pip3 install {{ PACKAGE_NAME }}
   ```

## High-Performance Computing (HPC)

### Module System

Many HPC systems use module systems:

```bash
# Load Python module
module load python/{{ PYTHON_VERSION }}

# Install to user directory
pip install --user {{ PACKAGE_NAME }}

# Add to PATH
export PATH=$HOME/.local/bin:$PATH
```

### SLURM Integration

```bash
#!/bin/bash
#SBATCH --job-name={{ PACKAGE_NAME }}-analysis
#SBATCH --cpus-per-task={{ CPU_COUNT }}
#SBATCH --memory={{ MEMORY_GB }}G
#SBATCH --time={{ TIME_LIMIT }}

# Load modules
module load python/{{ PYTHON_VERSION }}

# Run analysis
{{ COMMAND_NAME }} {{ COMMAND }} \
  --input ${INPUT_FILE} \
  --output ${OUTPUT_DIR} \
  --threads ${SLURM_CPUS_PER_TASK}
```

## Cloud Platforms

### Google Cloud Platform

```bash
# Install on Google Cloud Shell
pip install --user {{ PACKAGE_NAME }}

# Or use prebuilt image
gcloud compute instances create {{ PACKAGE_NAME }}-vm \
  --image-family={{ IMAGE_FAMILY }} \
  --image-project={{ IMAGE_PROJECT }}
```

### AWS

```bash
# Install on Amazon Linux 2
sudo yum update -y
sudo yum install -y python3 python3-pip
pip3 install --user {{ PACKAGE_NAME }}

# Or use AWS Batch with Docker
aws batch submit-job \
  --job-name {{ PACKAGE_NAME }}-job \
  --job-queue {{ QUEUE_NAME }} \
  --job-definition {{ JOB_DEF_NAME }}
```

### Azure

```bash
# Install on Ubuntu VM
sudo apt update
sudo apt install -y python3 python3-pip
pip3 install {{ PACKAGE_NAME }}
```

## Troubleshooting

### Common Installation Issues

**Problem**: Permission denied errors
```bash
# Solution: Install to user directory
pip install --user {{ PACKAGE_NAME }}
```

**Problem**: SSL certificate errors
```bash
# Solution: Upgrade pip and certificates
pip install --upgrade pip certifi
pip install {{ PACKAGE_NAME }}
```

**Problem**: Compilation errors on older systems
```bash
# Solution: Use pre-compiled wheels
pip install --only-binary=all {{ PACKAGE_NAME }}
```

**Problem**: ImportError for C extensions
```bash
# Solution: Install build dependencies
# Ubuntu/Debian
sudo apt install build-essential python3-dev

# CentOS/RHEL
sudo yum install gcc gcc-c++ python3-devel
```

### Version Conflicts

```bash
# Check for conflicts
pip check

# Create clean environment
conda create -n {{ PACKAGE_NAME }}-clean python={{ PYTHON_VERSION }}
conda activate {{ PACKAGE_NAME }}-clean
pip install {{ PACKAGE_NAME }}
```

### Network Issues

```bash
# Use different index
pip install -i https://pypi.org/simple/ {{ PACKAGE_NAME }}

# Use trusted hosts
pip install --trusted-host pypi.org --trusted-host pypi.python.org {{ PACKAGE_NAME }}
```

## Uninstallation

### Remove Package

```bash
# Using pip
pip uninstall {{ PACKAGE_NAME }}

# Remove conda environment
conda env remove -n {{ PACKAGE_NAME }}

# Remove user installation
pip uninstall {{ PACKAGE_NAME }}
rm -rf ~/.local/lib/python*/site-packages/{{ PACKAGE_NAME }}*
```

### Clean Up

```bash
# Remove cache
pip cache purge

# Remove conda cache
conda clean -a

# Remove configuration files (if any)
rm -rf ~/.{{ PACKAGE_NAME }}/
```

## Next Steps

After successful installation:

1. **[Quick Start Guide](/guide/quick-start)** - Run your first analysis
2. **[API Reference](/api/)** - Explore all available commands
3. **[Examples](/examples/)** - Learn from practical examples
4. **[Configuration](/guide/configuration)** - Customize the software

## Support

If you encounter installation issues:

1. Check our [FAQ](/guide/faq)
2. Search [GitHub Issues](https://github.com/AfriGen-D/{{ REPO_NAME }}/issues)
3. Create a new issue with:
   - Your operating system and version
   - Python version (`python --version`)
   - Installation method used
   - Complete error message
4. Contact [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org)
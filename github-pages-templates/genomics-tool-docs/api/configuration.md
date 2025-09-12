# Configuration

{{ PROJECT_NAME }} supports flexible configuration through files, environment variables, and command-line parameters. This guide covers all configuration options and best practices.

## Configuration Methods

Configuration can be specified in order of precedence (highest to lowest):

1. **Command-line arguments** - Override all other settings
2. **Environment variables** - System-wide defaults
3. **Configuration files** - Project-specific settings
4. **Default values** - Built-in defaults

## Configuration Files

### Supported Formats

{{ PROJECT_NAME }} supports multiple configuration file formats:

- **YAML** (`.yml`, `.yaml`) - Human-readable, recommended
- **JSON** (`.json`) - Structured, machine-readable
- **TOML** (`.toml`) - Configuration-focused format
- **INI** (`.ini`, `.cfg`) - Simple key-value format

### YAML Configuration

**Complete example (config.yml):**

```yaml
# {{ PROJECT_NAME }} Configuration File
# Generated: {{ TIMESTAMP }}

# Input/Output settings
input:
  file: "data/input.vcf"
  format: "vcf"                    # auto, vcf, bcf, tsv
  compression: "auto"              # auto, gzip, bgzip, none
  
output:
  directory: "results/"
  prefix: "analysis"
  format: "vcf"
  compression: "gzip"
  create_index: true

# Analysis parameters
analysis:
  algorithm: "{{ DEFAULT_ALGORITHM }}"     # {{ ALGORITHM_OPTIONS }}
  model: "{{ DEFAULT_MODEL }}"             # {{ MODEL_OPTIONS }}
  iterations: {{ DEFAULT_ITERATIONS }}
  convergence: {{ DEFAULT_CONVERGENCE }}
  seed: 12345                      # For reproducibility
  
# Quality control
quality_control:
  enabled: true
  min_quality: {{ MIN_QUALITY }}
  max_missing: {{ MAX_MISSING }}
  min_depth: {{ MIN_DEPTH }}
  remove_duplicates: true
  filters:
    - "QUAL > 20"
    - "DP >= 10"
    - "GQ >= 20"

# Reference data
reference:
  genome: "{{ DEFAULT_GENOME }}"           # GRCh37, GRCh38, custom
  panel: null                      # Path to reference panel
  population: null                 # Population code if applicable
  
# Resource settings
resources:
  threads: 4                       # Number of CPU threads
  memory: "8GB"                    # Maximum memory usage
  tmp_dir: "/tmp"                  # Temporary directory
  
# Logging and reporting
logging:
  level: "INFO"                    # DEBUG, INFO, WARNING, ERROR
  file: null                       # Log file path (stdout if null)
  format: "detailed"               # simple, detailed, json
  
reporting:
  generate_plots: true
  plot_format: "png"               # png, svg, pdf
  include_qc: true
  style: "publication"             # default, publication, minimal

# Advanced options
advanced:
  chunk_size: 10000                # Process data in chunks
  buffer_size: "64MB"              # I/O buffer size
  compression_level: 6             # Compression level (1-9)
  validate_input: true             # Validate input files
  keep_intermediate: false         # Keep intermediate files
```

### JSON Configuration

**Example (config.json):**

```json
{
  "input": {
    "file": "data/input.vcf",
    "format": "vcf"
  },
  "output": {
    "directory": "results/",
    "prefix": "analysis",
    "format": "vcf",
    "compression": "gzip"
  },
  "analysis": {
    "algorithm": "{{ DEFAULT_ALGORITHM }}",
    "iterations": {{ DEFAULT_ITERATIONS }},
    "convergence": {{ DEFAULT_CONVERGENCE }}
  },
  "resources": {
    "threads": 4,
    "memory": "8GB"
  },
  "quality_control": {
    "enabled": true,
    "min_quality": {{ MIN_QUALITY }},
    "remove_duplicates": true
  }
}
```

## Environment Variables

Set system-wide defaults using environment variables:

```bash
# Core settings
export {{ ENV_PREFIX }}_THREADS=8
export {{ ENV_PREFIX }}_MEMORY="16GB"
export {{ ENV_PREFIX }}_TMP_DIR="/fast/tmp"

# Default paths
export {{ ENV_PREFIX }}_CONFIG_DIR="~/.config/{{ PACKAGE_NAME }}"
export {{ ENV_PREFIX }}_DATA_DIR="~/{{ PACKAGE_NAME }}_data"
export {{ ENV_PREFIX }}_REFERENCE_DIR="~/references"

# Analysis defaults
export {{ ENV_PREFIX }}_DEFAULT_ALGORITHM="{{ DEFAULT_ALGORITHM }}"
export {{ ENV_PREFIX }}_DEFAULT_GENOME="{{ DEFAULT_GENOME }}"

# Logging
export {{ ENV_PREFIX }}_LOG_LEVEL="INFO"
export {{ ENV_PREFIX }}_DEBUG="false"

# Performance tuning
export {{ ENV_PREFIX }}_CHUNK_SIZE=10000
export {{ ENV_PREFIX }}_BUFFER_SIZE="64MB"
export {{ ENV_PREFIX }}_PARALLEL_IO="true"
```

**Environment Variable Naming:**
- Prefix: `{{ ENV_PREFIX }}_`
- Format: `{{ ENV_PREFIX }}_SECTION_PARAMETER`
- Example: `{{ ENV_PREFIX }}_QUALITY_CONTROL_MIN_QUALITY`

## Configuration Sections

### Input/Output Configuration

```yaml
input:
  file: "path/to/input.vcf"        # Input file path
  format: "auto"                   # File format detection
  compression: "auto"              # Compression detection
  validate: true                   # Validate input format
  
output:
  directory: "results/"            # Output directory
  prefix: "analysis"               # File prefix
  format: "vcf"                    # Output format
  compression: "gzip"              # Output compression
  create_index: true               # Create index files
  overwrite: false                 # Overwrite existing files
```

### Analysis Parameters

```yaml
analysis:
  algorithm: "{{ ALGORITHM_1 }}"           # Analysis method
  model: "{{ MODEL_1 }}"                   # Statistical model  
  iterations: 1000                 # Number of iterations
  convergence: 1e-6                # Convergence threshold
  seed: null                       # Random seed
  bootstrap: 0                     # Bootstrap replicates  
  confidence: 0.95                 # Confidence interval
  
  # Algorithm-specific parameters
  {{ ALGORITHM_1 }}_params:
    {{ PARAM_A }}: {{ VALUE_A }}
    {{ PARAM_B }}: {{ VALUE_B }}
    
  {{ ALGORITHM_2 }}_params:
    {{ PARAM_C }}: {{ VALUE_C }}
    {{ PARAM_D }}: {{ VALUE_D }}
```

### Quality Control Settings

```yaml
quality_control:
  enabled: true                    # Enable QC filters
  
  # Basic filters
  min_quality: 20.0               # Minimum quality score
  max_missing: 0.1                # Maximum missing rate
  min_depth: 10                   # Minimum read depth
  max_depth: 1000                 # Maximum read depth
  
  # Advanced filters  
  min_allele_frequency: 0.01      # Minimum allele frequency
  max_allele_frequency: 0.99      # Maximum allele frequency
  hardy_weinberg_pvalue: 1e-6     # Hardy-Weinberg p-value
  
  # Sample-level filters
  min_genotype_rate: 0.9          # Minimum genotype rate per sample
  max_heterozygosity: 0.5         # Maximum heterozygosity rate
  
  # Variant-level filters  
  remove_duplicates: true         # Remove duplicate variants
  remove_indels: false           # Remove insertions/deletions
  remove_multiallelic: false     # Remove multiallelic sites
  
  # Custom filter expressions
  custom_filters:
    - name: "high_quality"
      expression: "QUAL > 30 && DP > 20"
    - name: "pass_filter"  
      expression: "FILTER == 'PASS'"
```

### Reference Data Configuration

```yaml
reference:
  # Genome reference
  genome: "GRCh38"                # Reference genome build
  fasta: "path/to/genome.fa"      # FASTA file path
  fasta_index: "path/to/genome.fa.fai"  # FASTA index
  
  # Reference panels
  panel: "path/to/panel.vcf"      # Reference panel VCF
  panel_index: "path/to/panel.vcf.tbi"  # Panel index
  
  # Population-specific references
  population: "AFR"               # Population code
  population_panel: "1000G_AFR"  # Population-specific panel
  
  # Gene annotations
  annotations: "path/to/genes.gtf" # Gene annotation file
  regulatory: "path/to/regulatory.bed"  # Regulatory regions
```

### Resource Management

```yaml
resources:
  # CPU resources
  threads: 4                      # Number of CPU threads
  cpu_affinity: null              # CPU affinity mask
  
  # Memory settings
  memory: "8GB"                   # Maximum memory usage
  memory_per_thread: "2GB"        # Memory per thread
  low_memory: false               # Enable low-memory mode
  
  # Storage settings
  tmp_dir: "/tmp"                 # Temporary directory
  keep_tmp: false                 # Keep temporary files
  tmp_cleanup: true               # Cleanup on exit
  
  # I/O settings
  buffer_size: "64MB"             # I/O buffer size
  chunk_size: 10000               # Processing chunk size
  parallel_io: true               # Enable parallel I/O
```

### Logging Configuration

```yaml
logging:
  # Log level
  level: "INFO"                   # DEBUG, INFO, WARNING, ERROR, CRITICAL
  
  # Output destinations
  console: true                   # Log to console
  file: null                      # Log file path
  syslog: false                   # Log to system log
  
  # Log formatting
  format: "detailed"              # simple, detailed, json, custom
  timestamp: true                 # Include timestamps
  thread_id: false               # Include thread IDs
  
  # Custom format string
  custom_format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
  
  # Log rotation
  rotate: true                    # Enable log rotation
  max_size: "100MB"              # Maximum log file size
  backup_count: 5                # Number of backup files
```

## Configuration Templates

### Generate Templates

Create configuration templates for different use cases:

```bash
# Basic template
{{ COMMAND_NAME }} config --template basic > basic_config.yml

# Advanced template with all options
{{ COMMAND_NAME }} config --template full > full_config.yml

# Population-specific template
{{ COMMAND_NAME }} config --template population --population AFR > afr_config.yml

# HPC cluster template
{{ COMMAND_NAME }} config --template hpc > hpc_config.yml
```

### Template Types

**Basic Template:**
```yaml
input:
  file: "{{ INPUT_FILE }}"
output:
  directory: "{{ OUTPUT_DIR }}"
analysis:
  algorithm: "{{ DEFAULT_ALGORITHM }}"
resources:
  threads: {{ DEFAULT_THREADS }}
```

**Production Template:**
```yaml
# Production-ready configuration
input:
  file: "{{ INPUT_FILE }}"
  validate: true
  
output:
  directory: "{{ OUTPUT_DIR }}"
  create_index: true
  compression: "gzip"
  
analysis:
  algorithm: "{{ PRODUCTION_ALGORITHM }}"
  iterations: {{ PRODUCTION_ITERATIONS }}
  seed: 12345
  
quality_control:
  enabled: true
  min_quality: {{ PRODUCTION_MIN_QUALITY }}
  remove_duplicates: true
  
resources:
  threads: {{ PRODUCTION_THREADS }}
  memory: "{{ PRODUCTION_MEMORY }}"
  
logging:
  level: "INFO"
  file: "analysis.log"
```

## Configuration Validation

### Validate Configuration Files

```bash
# Validate configuration syntax
{{ COMMAND_NAME }} config --validate config.yml

# Validate with detailed output
{{ COMMAND_NAME }} config --validate config.yml --verbose

# Check configuration against schema
{{ COMMAND_NAME }} config --validate config.yml --schema strict
```

### Schema Validation

{{ PROJECT_NAME }} uses JSON Schema for configuration validation:

```yaml
# Example validation errors
ERROR: Configuration validation failed
- input.file: Required field missing
- analysis.algorithm: Invalid value 'unknown_algo'
- resources.threads: Must be positive integer
- quality_control.min_quality: Must be between 0 and 100
```

## Configuration Profiles

Pre-defined configuration profiles for common scenarios:

### Built-in Profiles

```bash
# Use built-in profiles
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --profile fast
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --profile accurate  
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --profile memory_efficient
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --profile hpc
```

**Profile Definitions:**

**Fast Profile:**
```yaml
# Optimized for speed
analysis:
  algorithm: "{{ FAST_ALGORITHM }}"
  iterations: {{ FAST_ITERATIONS }}
quality_control:
  enabled: false
resources:
  threads: 8
```

**Accurate Profile:**
```yaml  
# Optimized for accuracy
analysis:
  algorithm: "{{ ACCURATE_ALGORITHM }}"
  iterations: {{ ACCURATE_ITERATIONS }}
  convergence: {{ STRICT_CONVERGENCE }}
quality_control:
  enabled: true
  strict: true
```

### Custom Profiles

Create custom profiles in `~/.config/{{ PACKAGE_NAME }}/profiles/`:

```bash
# Create custom profile
mkdir -p ~/.config/{{ PACKAGE_NAME }}/profiles
cat > ~/.config/{{ PACKAGE_NAME }}/profiles/my_analysis.yml << EOF
# Custom analysis profile
analysis:
  algorithm: "{{ CUSTOM_ALGORITHM }}"
  {{ CUSTOM_PARAM }}: {{ CUSTOM_VALUE }}
resources:
  threads: 16
  memory: "32GB"
EOF

# Use custom profile
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --profile my_analysis
```

## Configuration Inheritance

Configurations can inherit from other configurations:

```yaml
# child_config.yml
extends: "base_config.yml"

# Override specific values
analysis:
  iterations: 5000    # Override parent value
  
# Add new sections
custom_analysis:
  {{ NEW_PARAM }}: {{ NEW_VALUE }}
```

## Dynamic Configuration

### Runtime Configuration Updates

```bash
# Override config values at runtime
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --config config.yml \
  --set analysis.iterations=2000 \
  --set resources.threads=16
```

### Environment-based Configuration

```yaml
# Use environment variables in config
resources:
  threads: ${{{ ENV_PREFIX }}_THREADS:-4}
  memory: ${{{ ENV_PREFIX }}_MEMORY:-8GB}
  
analysis:
  algorithm: ${{{ ENV_PREFIX }}_ALGORITHM:-{{ DEFAULT_ALGORITHM }}}
```

## Best Practices

### Organization

```bash
# Recommended directory structure
project/
├── configs/
│   ├── base.yml              # Base configuration
│   ├── production.yml        # Production settings
│   ├── testing.yml          # Test configuration  
│   └── local.yml            # Local overrides
├── data/
├── results/
└── scripts/
```

### Version Control

```bash
# .gitignore
configs/local.yml           # Local overrides
configs/secrets.yml         # Sensitive data
*.log                       # Log files
results/                    # Results directory
```

### Security

```yaml
# Use environment variables for sensitive data
database:
  host: ${DATABASE_HOST}
  password: ${DATABASE_PASSWORD}
  
# Don't store credentials in config files
api:
  key: ${API_KEY}
  secret: ${API_SECRET}
```

### Performance Tuning

```yaml
# HPC cluster configuration
resources:
  threads: ${SLURM_CPUS_PER_TASK:-16}
  memory: "${SLURM_MEM_PER_NODE:-64}GB"
  tmp_dir: "/scratch/${USER}/tmp"
  
# Optimize for large datasets  
advanced:
  chunk_size: 50000
  buffer_size: "256MB"
  parallel_io: true
  low_memory: true
```

## Troubleshooting

### Common Configuration Issues

**Invalid YAML syntax:**
```bash
# Check YAML syntax
python -c "import yaml; yaml.safe_load(open('config.yml'))"
```

**Missing required parameters:**
```bash  
# Show configuration with defaults filled in
{{ COMMAND_NAME }} config --show --fill-defaults
```

**Parameter conflicts:**
```bash
# Validate parameter combinations
{{ COMMAND_NAME }} config --validate config.yml --check-conflicts
```

### Debug Configuration

```bash
# Show effective configuration
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --config config.yml --show-config

# Show configuration sources
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --config config.yml --show-sources

# Debug configuration loading
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --config config.yml --debug-config
```

For more examples, see the [Examples section](/examples/).
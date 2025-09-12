# API Reference

Complete reference for all {{ PROJECT_NAME }} commands, parameters, and configuration options.

## Command Overview

{{ PROJECT_NAME }} provides a comprehensive command-line interface organized into logical groups:

### Core Commands
| Command | Description |
|---------|-------------|
| [`{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }}`](#primary-command) | {{ PRIMARY_DESC }} |
| [`{{ COMMAND_NAME }} preprocess`](#preprocess) | Data preprocessing and quality control |
| [`{{ COMMAND_NAME }} analyze`](#analyze) | Main analysis functionality |
| [`{{ COMMAND_NAME }} postprocess`](#postprocess) | Post-analysis processing |

### Data Management
| Command | Description |
|---------|-------------|
| [`{{ COMMAND_NAME }} validate`](#validate) | Validate input files and parameters |
| [`{{ COMMAND_NAME }} convert`](#convert) | Convert between data formats |
| [`{{ COMMAND_NAME }} merge`](#merge) | Merge multiple datasets |
| [`{{ COMMAND_NAME }} split`](#split) | Split large datasets |

### Visualization
| Command | Description |
|---------|-------------|
| [`{{ COMMAND_NAME }} plot`](#plot) | Generate visualizations |
| [`{{ COMMAND_NAME }} report`](#report) | Create analysis reports |
| [`{{ COMMAND_NAME }} dashboard`](#dashboard) | Interactive dashboards |

### Utilities
| Command | Description |
|---------|-------------|
| [`{{ COMMAND_NAME }} info`](#info) | System and installation information |
| [`{{ COMMAND_NAME }} test`](#test) | Run tests and validation |
| [`{{ COMMAND_NAME }} config`](#config) | Configuration management |
| [`{{ COMMAND_NAME }} help`](#help) | Get help and documentation |

## Command Reference

### Primary Command

Main analysis command for {{ PROJECT_NAME }}.

```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} [OPTIONS] --input INPUT --output OUTPUT
```

**Required Arguments:**
- `--input INPUT`: Path to input file
- `--output OUTPUT`: Output directory path

**Optional Arguments:**
- `--threads INTEGER`: Number of threads to use (default: 1)
- `--config PATH`: Configuration file path
- `--{{ PARAM1 }} VALUE`: {{ PARAM1_DESCRIPTION }} (default: {{ PARAM1_DEFAULT }})
- `--{{ PARAM2 }} VALUE`: {{ PARAM2_DESCRIPTION }} (default: {{ PARAM2_DEFAULT }})
- `--verbose`: Enable verbose output
- `--quiet`: Suppress non-essential output

**Examples:**
```bash
# Basic usage
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --input data.vcf --output results/

# With custom parameters
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input data.vcf \
  --output results/ \
  --{{ PARAM1 }} {{ CUSTOM_VALUE1 }} \
  --threads 8
```

### Preprocess

Preprocess and quality control input data.

```bash
{{ COMMAND_NAME }} preprocess [OPTIONS] --input INPUT --output OUTPUT
```

**Arguments:**
- `--input INPUT`: Input file path
- `--output OUTPUT`: Preprocessed output file path
- `--quality-filter`: Apply quality filters
- `--remove-duplicates`: Remove duplicate entries
- `--normalize`: Normalize data values
- `--min-quality FLOAT`: Minimum quality threshold (default: {{ MIN_QUALITY }})
- `--max-missing FLOAT`: Maximum missing data rate (default: {{ MAX_MISSING }})

### Analyze

Perform main analysis with various algorithms.

```bash
{{ COMMAND_NAME }} analyze [OPTIONS] --input INPUT --output OUTPUT
```

**Arguments:**
- `--input INPUT`: Preprocessed input file
- `--output OUTPUT`: Analysis output directory
- `--algorithm CHOICE`: Analysis algorithm [{{ ALGORITHM_CHOICES }}] (default: {{ DEFAULT_ALGORITHM }})
- `--reference PATH`: Reference file path
- `--iterations INTEGER`: Number of iterations (default: {{ DEFAULT_ITERATIONS }})
- `--convergence FLOAT`: Convergence threshold (default: {{ DEFAULT_CONVERGENCE }})
- `--seed INTEGER`: Random seed for reproducibility

### Validate

Validate input files and check format compatibility.

```bash
{{ COMMAND_NAME }} validate [OPTIONS] INPUT
```

**Arguments:**
- `INPUT`: File path to validate
- `--format CHOICE`: Expected format [{{ FORMAT_CHOICES }}]
- `--strict`: Enable strict validation
- `--report PATH`: Write validation report to file

**Exit Codes:**
- `0`: File is valid
- `1`: File has errors
- `2`: File has warnings (valid with --strict)

### Convert

Convert files between different formats.

```bash
{{ COMMAND_NAME }} convert [OPTIONS] --input INPUT --output OUTPUT --format FORMAT
```

**Arguments:**
- `--input INPUT`: Input file path
- `--output OUTPUT`: Output file path
- `--format FORMAT`: Target format [{{ CONVERSION_FORMATS }}]
- `--compression CHOICE`: Compression method [gzip, bgzip, none] (default: none)
- `--index`: Create index file if applicable

### Plot

Generate visualizations and plots.

```bash
{{ COMMAND_NAME }} plot [OPTIONS] --input INPUT --output OUTPUT
```

**Arguments:**
- `--input INPUT`: Input data file
- `--output OUTPUT`: Output image file
- `--type CHOICE`: Plot type [{{ PLOT_TYPES }}] (default: {{ DEFAULT_PLOT_TYPE }})
- `--format CHOICE`: Image format [png, svg, pdf] (default: png)
- `--width INTEGER`: Plot width in pixels (default: {{ DEFAULT_WIDTH }})
- `--height INTEGER`: Plot height in pixels (default: {{ DEFAULT_HEIGHT }})
- `--dpi INTEGER`: Resolution in DPI (default: 300)
- `--title TEXT`: Plot title
- `--theme CHOICE`: Color theme [{{ THEMES }}] (default: {{ DEFAULT_THEME }})

### Report

Generate analysis reports.

```bash
{{ COMMAND_NAME }} report [OPTIONS] --input INPUT --output OUTPUT
```

**Arguments:**
- `--input INPUT`: Analysis results directory
- `--output OUTPUT`: Report output file
- `--format CHOICE`: Report format [html, pdf, markdown] (default: html)
- `--template PATH`: Custom template file
- `--include-plots`: Include generated plots
- `--style CHOICE`: Report style [default, publication, minimal]

## Configuration Files

{{ PROJECT_NAME }} supports YAML and JSON configuration files for complex parameter sets.

### YAML Configuration

```yaml
# config.yml
input:
  file: "data/input.vcf"
  format: "vcf"
  
output:
  directory: "results/"
  prefix: "analysis"
  
parameters:
  {{ PARAM1 }}: {{ VALUE1 }}
  {{ PARAM2 }}: {{ VALUE2 }}
  threads: 8
  
quality_control:
  min_quality: {{ MIN_QUALITY }}
  remove_duplicates: true
  
visualization:
  generate_plots: true
  plot_format: "png"
  theme: "{{ DEFAULT_THEME }}"
```

### JSON Configuration

```json
{
  "input": {
    "file": "data/input.vcf",
    "format": "vcf"
  },
  "output": {
    "directory": "results/",
    "prefix": "analysis"
  },
  "parameters": {
    "{{ PARAM1 }}": "{{ VALUE1 }}",
    "{{ PARAM2 }}": "{{ VALUE2 }}",
    "threads": 8
  }
}
```

### Use Configuration Files

```bash
# With YAML config
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --config config.yml

# With JSON config
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --config config.json

# Generate template config
{{ COMMAND_NAME }} config --template yaml > template.yml
```

## File Formats

### Supported Input Formats

| Format | Extension | Description | Notes |
|--------|-----------|-------------|-------|
| {{ FORMAT1 }} | `.{{ EXT1 }}` | {{ FORMAT1_DESC }} | {{ FORMAT1_NOTES }} |
| {{ FORMAT2 }} | `.{{ EXT2 }}` | {{ FORMAT2_DESC }} | {{ FORMAT2_NOTES }} |
| {{ FORMAT3 }} | `.{{ EXT3 }}` | {{ FORMAT3_DESC }} | {{ FORMAT3_NOTES }} |

### Output Formats

| Format | Description | Use Case |
|--------|-------------|----------|
| {{ OUTPUT_FORMAT1 }} | {{ OUTPUT_DESC1 }} | {{ OUTPUT_USE1 }} |
| {{ OUTPUT_FORMAT2 }} | {{ OUTPUT_DESC2 }} | {{ OUTPUT_USE2 }} |
| {{ OUTPUT_FORMAT3 }} | {{ OUTPUT_DESC3 }} | {{ OUTPUT_USE3 }} |

## Environment Variables

Configure {{ PROJECT_NAME }} behavior with environment variables:

```bash
# Set default number of threads
export {{ VAR_PREFIX }}_THREADS=8

# Set temporary directory
export {{ VAR_PREFIX }}_TMPDIR="/tmp/{{ PACKAGE_NAME }}"

# Set configuration directory
export {{ VAR_PREFIX }}_CONFIG_DIR="~/.config/{{ PACKAGE_NAME }}"

# Enable debug mode
export {{ VAR_PREFIX }}_DEBUG=1

# Set log level
export {{ VAR_PREFIX }}_LOG_LEVEL="INFO"
```

## Exit Codes

{{ PROJECT_NAME }} uses standard exit codes:

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | General error |
| 2 | Misuse of shell command |
| 64 | Command line usage error |
| 65 | Data format error |
| 66 | Cannot open input file |
| 73 | Can't create output file |
| 74 | I/O error |
| 75 | Temporary failure |

## Performance Tuning

### Memory Usage

```bash
# Monitor memory usage
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --memory-profile

# Limit memory usage
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --max-memory 8G

# Use memory-efficient algorithms
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --low-memory
```

### CPU Usage

```bash
# Use multiple cores
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --threads 16

# Set CPU affinity
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --cpu-affinity 0-7

# Enable parallel processing
{{ COMMAND_NAME }} batch --parallel 4
```

### I/O Optimization

```bash
# Use fast temporary directory
export {{ VAR_PREFIX }}_TMPDIR="/dev/shm"

# Enable compression
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --compress-temp

# Use buffered I/O
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --buffer-size 64M
```

## Python API

{{ PROJECT_NAME }} also provides a Python API for programmatic use:

```python
import {{ PYTHON_PACKAGE_NAME }}

# Initialize analyzer
analyzer = {{ PYTHON_PACKAGE_NAME }}.Analyzer()

# Load data
data = analyzer.load("input.vcf")

# Run analysis
results = analyzer.{{ PYTHON_METHOD }}(
    data, 
    {{ PYTHON_PARAM1 }}="{{ PYTHON_VALUE1 }}",
    threads=8
)

# Save results
results.save("output_directory/")
```

## REST API

For web applications, {{ PROJECT_NAME }} provides a REST API:

### Start API Server

```bash
{{ COMMAND_NAME }} serve --host 0.0.0.0 --port 8080
```

### API Endpoints

**Submit Analysis:**
```bash
curl -X POST http://localhost:8080/api/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "input_file": "data.vcf",
    "parameters": {
      "{{ PARAM1 }}": "{{ VALUE1 }}",
      "threads": 4
    }
  }'
```

**Check Status:**
```bash
curl http://localhost:8080/api/status/JOB_ID
```

**Download Results:**
```bash
curl -O http://localhost:8080/api/results/JOB_ID/output.zip
```

## Error Handling

### Common Error Messages

**FileNotFoundError:**
```
Error: Input file 'data.vcf' not found
Solution: Check file path and permissions
```

**MemoryError:**
```
Error: Insufficient memory for operation
Solution: Use --low-memory or increase available RAM
```

**ValidationError:**
```
Error: Invalid input format
Solution: Use {{ COMMAND_NAME }} validate to check file format
```

### Debug Mode

Enable debug mode for detailed error information:

```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --debug
# or
export {{ VAR_PREFIX }}_DEBUG=1
```

## Version Information

```bash
# Check version
{{ COMMAND_NAME }} --version

# Show detailed version info
{{ COMMAND_NAME }} version --detailed

# Check for updates
{{ COMMAND_NAME }} version --check-updates
```

For complete examples and tutorials, see the [Examples section](/examples/).
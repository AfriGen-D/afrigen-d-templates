# Quick Start

Get up and running with {{ PROJECT_NAME }} in just a few minutes! This guide walks you through your first analysis step-by-step.

## Before You Begin

Make sure you have:
- ✅ {{ PROJECT_NAME }} installed (see [Installation Guide](/guide/installation))
- ✅ Sample genomics data or use our test dataset
- ✅ Basic familiarity with command line

## 1. Verify Installation

First, confirm {{ PROJECT_NAME }} is correctly installed:

```bash
# Check version
{{ COMMAND_NAME }} --version

# View available commands
{{ COMMAND_NAME }} --help
```

You should see version {{ CURRENT_VERSION }} or later.

## 2. Download Test Data

Let's start with a small test dataset:

```bash
# Create working directory
mkdir {{ PACKAGE_NAME }}-quickstart
cd {{ PACKAGE_NAME }}-quickstart

# Download test data
{{ COMMAND_NAME }} download-testdata --output ./test_data/

# List downloaded files
ls -la test_data/
```

**Test data includes:**
- `{{ TEST_FILE_1 }}`: {{ TEST_DESC_1 }}
- `{{ TEST_FILE_2 }}`: {{ TEST_DESC_2 }}
- `{{ TEST_FILE_3 }}`: {{ TEST_DESC_3 }}
- `{{ TEST_METADATA }}`: Sample metadata and parameters

## 3. Basic Analysis

### Example 1: Simple Processing

Run the most common analysis:

```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input test_data/{{ TEST_INPUT_FILE }} \
  --output results/basic_analysis \
  --threads 2
```

**What this does:**
- Processes the input file using default parameters
- Outputs results to `results/basic_analysis/`
- Uses 2 CPU threads for faster processing

### Example 2: With Configuration

For more control, use a configuration file:

```bash
# Generate template configuration
{{ COMMAND_NAME }} config --template > my_config.yml

# Edit the configuration (optional)
nano my_config.yml

# Run with configuration
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --config my_config.yml
```

**Sample configuration (my_config.yml):**
```yaml
input:
  file: "test_data/{{ TEST_INPUT_FILE }}"
  format: "{{ INPUT_FORMAT }}"

output:
  directory: "results/configured_analysis"
  prefix: "{{ PROJECT_PREFIX }}"

parameters:
  {{ PARAM_1 }}: {{ DEFAULT_VALUE_1 }}
  {{ PARAM_2 }}: {{ DEFAULT_VALUE_2 }}
  threads: 4
  verbose: true
```

## 4. Examine Results

Check what was generated:

```bash
# List output files
ls -la results/basic_analysis/

# View summary statistics
{{ COMMAND_NAME }} summary results/basic_analysis/

# Generate quick report
{{ COMMAND_NAME }} report results/basic_analysis/ --format html
```

**Typical output structure:**
```
results/basic_analysis/
├── {{ OUTPUT_FILE_1 }}           # Main results
├── {{ OUTPUT_FILE_2 }}           # Secondary output
├── {{ LOG_FILE }}                # Processing log
├── {{ STATS_FILE }}              # Summary statistics
└── reports/
    ├── {{ REPORT_HTML }}         # HTML report
    └── plots/                    # Visualization files
        ├── {{ PLOT_1 }}.png
        └── {{ PLOT_2 }}.svg
```

## 5. Visualize Results

Create some basic plots:

```bash
# Generate standard plots
{{ COMMAND_NAME }} plot \
  --input results/basic_analysis/{{ OUTPUT_FILE_1 }} \
  --output plots/ \
  --type summary

# Create custom visualization
{{ COMMAND_NAME }} plot \
  --input results/basic_analysis/{{ OUTPUT_FILE_1 }} \
  --output plots/custom.png \
  --type {{ PLOT_TYPE }} \
  --title "My First Analysis"
```

## 6. Working with Your Data

Now let's process your own data:

### Prepare Your Input

Ensure your data is in the correct format:

```bash
# Check input format
{{ COMMAND_NAME }} validate --input your_data.{{ INPUT_EXTENSION }}

# Convert format if needed
{{ COMMAND_NAME }} convert \
  --input your_data.{{ OLD_FORMAT }} \
  --output your_data.{{ NEW_FORMAT }} \
  --format {{ TARGET_FORMAT }}
```

### Run Analysis

```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input your_data.{{ INPUT_EXTENSION }} \
  --output results/my_analysis \
  --{{ IMPORTANT_PARAM }} {{ YOUR_VALUE }} \
  --threads {{ RECOMMENDED_THREADS }}
```

### Monitor Progress

For long-running analyses:

```bash
# Run with progress monitoring
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input large_dataset.{{ INPUT_EXTENSION }} \
  --output results/large_analysis \
  --progress \
  --log-file analysis.log

# Check progress in another terminal
tail -f analysis.log

# Or use the progress command
{{ COMMAND_NAME }} progress results/large_analysis/
```

## 7. Common Workflows

### Workflow A: {{ WORKFLOW_A_NAME }}

Perfect for {{ WORKFLOW_A_USE_CASE }}:

```bash
# Step 1: Preprocessing
{{ COMMAND_NAME }} preprocess \
  --input raw_data.{{ INPUT_EXT }} \
  --output preprocessed.{{ OUTPUT_EXT }} \
  --{{ PREPROCESS_PARAM }} {{ PREPROCESS_VALUE }}

# Step 2: Main analysis
{{ COMMAND_NAME }} {{ WORKFLOW_A_COMMAND }} \
  --input preprocessed.{{ OUTPUT_EXT }} \
  --output results/workflow_a \
  --{{ WORKFLOW_A_PARAM }} {{ WORKFLOW_A_VALUE }}

# Step 3: Generate report
{{ COMMAND_NAME }} report results/workflow_a --format pdf
```

### Workflow B: {{ WORKFLOW_B_NAME }}

Ideal for {{ WORKFLOW_B_USE_CASE }}:

```bash
# Single command workflow
{{ COMMAND_NAME }} {{ WORKFLOW_B_COMMAND }} \
  --input your_data.{{ INPUT_EXT }} \
  --reference {{ REFERENCE_FILE }} \
  --output results/workflow_b \
  --{{ WORKFLOW_B_PARAM1 }} {{ WORKFLOW_B_VALUE1 }} \
  --{{ WORKFLOW_B_PARAM2 }} {{ WORKFLOW_B_VALUE2 }}
```

## 8. Batch Processing

Process multiple files at once:

### Method 1: File List

```bash
# Create file list
cat > sample_list.txt << EOF
sample1,/path/to/sample1.{{ INPUT_EXT }}
sample2,/path/to/sample2.{{ INPUT_EXT }}
sample3,/path/to/sample3.{{ INPUT_EXT }}
EOF

# Process all samples
{{ COMMAND_NAME }} batch \
  --sample-list sample_list.txt \
  --output results/batch_analysis \
  --threads 8 \
  --parallel 4
```

### Method 2: Directory Processing

```bash
# Process all files in directory
{{ COMMAND_NAME }} batch-dir \
  --input-dir /path/to/samples/ \
  --pattern "*.{{ INPUT_EXT }}" \
  --output results/batch_analysis \
  --{{ BATCH_PARAM }} {{ BATCH_VALUE }}
```

## 9. Quality Control

Always check your results:

```bash
# Run quality checks
{{ COMMAND_NAME }} qc \
  --input results/my_analysis \
  --output qc_report.html

# Validate output format
{{ COMMAND_NAME }} validate \
  --input results/my_analysis/{{ OUTPUT_FILE_1 }}

# Compare with expected results
{{ COMMAND_NAME }} compare \
  --result results/my_analysis \
  --expected expected_results/ \
  --tolerance {{ QC_TOLERANCE }}
```

## 10. Export and Share

Prepare results for sharing:

```bash
# Package results
{{ COMMAND_NAME }} package \
  --input results/my_analysis \
  --output my_analysis_package.tar.gz \
  --include-logs \
  --include-config

# Generate publication-ready figures
{{ COMMAND_NAME }} plot \
  --input results/my_analysis/{{ OUTPUT_FILE_1 }} \
  --output publication_figures/ \
  --format svg \
  --dpi 300 \
  --publication-style
```

## Common Parameters

Here are the most frequently used parameters:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `--input` | Input file path | `data.vcf` |
| `--output` | Output directory | `results/` |
| `--threads` | Number of CPU threads | `8` |
| `--{{ PARAM1 }}` | {{ PARAM1_DESC }} | `{{ PARAM1_EXAMPLE }}` |
| `--{{ PARAM2 }}` | {{ PARAM2_DESC }} | `{{ PARAM2_EXAMPLE }}` |
| `--config` | Configuration file | `config.yml` |
| `--verbose` | Detailed output | `(flag)` |
| `--quiet` | Minimal output | `(flag)` |
| `--help` | Show help message | `(flag)` |

## Performance Tips

### Optimize for Speed
```bash
# Use multiple threads
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --threads {{ MAX_THREADS }}

# Enable fast mode (less accuracy, more speed)
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --fast-mode

# Use memory-efficient processing for large files
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --low-memory
```

### Optimize for Accuracy
```bash
# Use high-precision mode
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --high-precision

# Enable additional quality checks
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --strict-qc

# Use more iterations for better results
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --iterations {{ HIGH_ITERATIONS }}
```

## Troubleshooting

### Common Issues

**Problem**: Out of memory errors
```bash
# Solution: Use memory-efficient mode
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --low-memory --chunk-size 1000
```

**Problem**: Input format not recognized
```bash
# Solution: Specify format explicitly
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --input-format {{ FORMAT_NAME }}
```

**Problem**: Analysis takes too long
```bash
# Solution: Use more threads and fast mode
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --threads {{ MAX_THREADS }} --fast-mode
```

### Get Help

```bash
# Command-specific help
{{ COMMAND_NAME }} {{ COMMAND }} --help

# Show examples for a command
{{ COMMAND_NAME }} {{ COMMAND }} --examples

# Check system requirements
{{ COMMAND_NAME }} system-info
```

## Next Steps

Now that you've completed your first analysis:

1. **[Full Documentation](/guide/installation)** - Learn about all features
2. **[API Reference](/api/)** - Complete command reference
3. **[Examples](/examples/)** - More complex workflows
4. **[Best Practices](/guide/best-practices)** - Tips for production use

## Getting Help

- 📚 **Documentation**: Full guides and references
- 💬 **Community Forum**: [{{ FORUM_URL }}]({{ FORUM_URL }})
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/AfriGen-D/{{ REPO_NAME }}/issues)
- ✉️ **Support**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org)

Congratulations! You've successfully completed your first {{ PROJECT_NAME }} analysis. 🎉
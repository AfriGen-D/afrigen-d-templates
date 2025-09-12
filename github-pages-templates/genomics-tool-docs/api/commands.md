# Command Reference

Detailed reference for all {{ PROJECT_NAME }} commands with parameters, examples, and use cases.

## Core Commands

### {{ COMMAND_NAME }} {{ PRIMARY_COMMAND }}

Primary analysis command for processing genomic data.

**Usage:**
```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} [OPTIONS] --input INPUT --output OUTPUT
```

**Description:**
{{ PRIMARY_COMMAND_DESCRIPTION }}

**Required Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `--input` | `path` | Path to input file |
| `--output` | `path` | Output directory path |

**Optional Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--threads` | `integer` | `1` | Number of processing threads |
| `--config` | `path` | `null` | Configuration file path |
| `--{{ PARAM1 }}` | `{{ TYPE1 }}` | `{{ DEFAULT1 }}` | {{ PARAM1_DESC }} |
| `--{{ PARAM2 }}` | `{{ TYPE2 }}` | `{{ DEFAULT2 }}` | {{ PARAM2_DESC }} |
| `--{{ PARAM3 }}` | `{{ TYPE3 }}` | `{{ DEFAULT3 }}` | {{ PARAM3_DESC }} |
| `--verbose` | `flag` | `false` | Enable verbose output |
| `--quiet` | `flag` | `false` | Suppress non-essential output |
| `--dry-run` | `flag` | `false` | Show what would be done without executing |

**Examples:**

Basic usage:
```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input sample.vcf \
  --output results/
```

With custom parameters:
```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input sample.vcf \
  --output results/ \
  --{{ PARAM1 }} {{ CUSTOM_VALUE1 }} \
  --{{ PARAM2 }} {{ CUSTOM_VALUE2 }} \
  --threads 8 \
  --verbose
```

Using configuration file:
```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --config analysis.yml
```

**Output Files:**
- `{{ OUTPUT_FILE1 }}`: {{ OUTPUT_DESC1 }}
- `{{ OUTPUT_FILE2 }}`: {{ OUTPUT_DESC2 }}
- `{{ LOG_FILE }}`: Execution log and statistics

---

### {{ COMMAND_NAME }} preprocess

Preprocess genomic data with quality control and filtering.

**Usage:**
```bash
{{ COMMAND_NAME }} preprocess [OPTIONS] --input INPUT --output OUTPUT
```

**Description:**
Performs data preprocessing including quality filtering, normalization, and format validation.

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--input` | `path` | *required* | Input file path |
| `--output` | `path` | *required* | Preprocessed output file path |
| `--format` | `choice` | `auto` | Input format [{{ PREPROCESS_FORMATS }}] |
| `--quality-filter` | `flag` | `false` | Apply quality filters |
| `--remove-duplicates` | `flag` | `false` | Remove duplicate entries |
| `--normalize` | `flag` | `false` | Normalize data values |
| `--min-quality` | `float` | `{{ MIN_QUALITY }}` | Minimum quality threshold |
| `--max-missing` | `float` | `{{ MAX_MISSING }}` | Maximum missing data rate |
| `--min-depth` | `integer` | `{{ MIN_DEPTH }}` | Minimum read depth |
| `--filter-expression` | `string` | `null` | Custom filter expression |

**Examples:**

Basic preprocessing:
```bash
{{ COMMAND_NAME }} preprocess \
  --input raw_data.vcf \
  --output filtered_data.vcf \
  --quality-filter \
  --remove-duplicates
```

Advanced filtering:
```bash
{{ COMMAND_NAME }} preprocess \
  --input raw_data.vcf \
  --output filtered_data.vcf \
  --min-quality 30 \
  --max-missing 0.1 \
  --min-depth 10 \
  --filter-expression "QUAL>20 && DP>5"
```

**Quality Metrics Output:**
- `preprocessing_stats.txt`: Filtering statistics
- `quality_report.html`: Quality control report

---

### {{ COMMAND_NAME }} analyze

Perform main genomic analysis with various algorithms.

**Usage:**
```bash
{{ COMMAND_NAME }} analyze [OPTIONS] --input INPUT --output OUTPUT
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--input` | `path` | *required* | Input file path |
| `--output` | `path` | *required* | Output directory |
| `--algorithm` | `choice` | `{{ DEFAULT_ALGORITHM }}` | Analysis method [{{ ALGORITHMS }}] |
| `--reference` | `path` | `null` | Reference genome/panel path |
| `--population` | `choice` | `null` | Population code [{{ POPULATIONS }}] |
| `--model` | `choice` | `{{ DEFAULT_MODEL }}` | Statistical model [{{ MODELS }}] |
| `--iterations` | `integer` | `{{ DEFAULT_ITERATIONS }}` | Number of iterations |
| `--convergence` | `float` | `{{ DEFAULT_CONVERGENCE }}` | Convergence threshold |
| `--seed` | `integer` | `null` | Random seed for reproducibility |
| `--bootstrap` | `integer` | `0` | Number of bootstrap replicates |
| `--confidence` | `float` | `0.95` | Confidence interval level |

**Examples:**

Standard analysis:
```bash
{{ COMMAND_NAME }} analyze \
  --input processed_data.vcf \
  --output analysis_results/ \
  --algorithm {{ ALGORITHM_EXAMPLE }} \
  --population {{ POPULATION_EXAMPLE }}
```

With reference panel:
```bash
{{ COMMAND_NAME }} analyze \
  --input genotypes.vcf \
  --output imputation_results/ \
  --algorithm imputation \
  --reference 1000G_panel.vcf \
  --population AFR
```

High-precision analysis:
```bash
{{ COMMAND_NAME }} analyze \
  --input data.vcf \
  --output precise_results/ \
  --iterations 10000 \
  --convergence 1e-8 \
  --bootstrap 1000 \
  --seed 12345
```

---

## Data Management Commands

### {{ COMMAND_NAME }} validate

Validate file formats and data integrity.

**Usage:**
```bash
{{ COMMAND_NAME }} validate [OPTIONS] INPUT [INPUT2 ...]
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `INPUT` | `path` | *required* | File(s) to validate |
| `--format` | `choice` | `auto` | Expected format [{{ VALIDATION_FORMATS }}] |
| `--strict` | `flag` | `false` | Enable strict validation |
| `--schema` | `path` | `null` | Custom validation schema |
| `--report` | `path` | `stdout` | Validation report output |
| `--fix-errors` | `flag` | `false` | Attempt to fix minor errors |
| `--max-errors` | `integer` | `10` | Maximum errors to report |

**Examples:**

Basic validation:
```bash
{{ COMMAND_NAME }} validate sample.vcf
```

Validate multiple files:
```bash
{{ COMMAND_NAME }} validate --format vcf *.vcf
```

Strict validation with report:
```bash
{{ COMMAND_NAME }} validate \
  --strict \
  --report validation_report.txt \
  sample.vcf
```

**Exit Codes:**
- `0`: All files valid
- `1`: Validation errors found
- `2`: Validation warnings (strict mode only)

---

### {{ COMMAND_NAME }} convert

Convert between different file formats.

**Usage:**
```bash
{{ COMMAND_NAME }} convert [OPTIONS] --input INPUT --output OUTPUT --format FORMAT
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--input` | `path` | *required* | Input file path |
| `--output` | `path` | *required* | Output file path |
| `--format` | `choice` | *required* | Target format [{{ CONVERSION_FORMATS }}] |
| `--input-format` | `choice` | `auto` | Source format (if auto-detection fails) |
| `--compression` | `choice` | `none` | Compression [gzip, bgzip, none] |
| `--index` | `flag` | `false` | Create index file |
| `--sort` | `flag` | `false` | Sort output |
| `--normalize` | `flag` | `false` | Normalize during conversion |

**Examples:**

Convert VCF to BCF:
```bash
{{ COMMAND_NAME }} convert \
  --input sample.vcf \
  --output sample.bcf \
  --format bcf
```

Convert with compression:
```bash
{{ COMMAND_NAME }} convert \
  --input sample.vcf \
  --output sample.vcf.gz \
  --format vcf \
  --compression gzip \
  --index
```

**Supported Conversions:**

| From | To | Notes |
|------|----|---------  |
| VCF | BCF | Binary compression |
| VCF | TSV | Tab-separated values |
| FASTQ | FASTA | Sequence extraction |
| SAM | BAM | Binary alignment |
| {{ FORMAT_A }} | {{ FORMAT_B }} | {{ CONVERSION_NOTE }} |

---

### {{ COMMAND_NAME }} merge

Merge multiple datasets or files.

**Usage:**
```bash
{{ COMMAND_NAME }} merge [OPTIONS] --inputs INPUT1 INPUT2 ... --output OUTPUT
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--inputs` | `paths` | *required* | Input files to merge |
| `--output` | `path` | *required* | Merged output file |
| `--strategy` | `choice` | `union` | Merge strategy [union, intersection, concat] |
| `--sort` | `flag` | `true` | Sort merged output |
| `--remove-duplicates` | `flag` | `false` | Remove duplicate entries |
| `--header-mode` | `choice` | `smart` | Header handling [keep, merge, smart] |

**Examples:**

Merge VCF files:
```bash
{{ COMMAND_NAME }} merge \
  --inputs sample1.vcf sample2.vcf sample3.vcf \
  --output merged.vcf \
  --sort
```

---

### {{ COMMAND_NAME }} split

Split large datasets into smaller files.

**Usage:**
```bash
{{ COMMAND_NAME }} split [OPTIONS] --input INPUT --output-dir OUTPUT_DIR
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--input` | `path` | *required* | Input file to split |
| `--output-dir` | `path` | *required* | Output directory |
| `--method` | `choice` | `records` | Split method [records, size, chromosome] |
| `--size` | `integer` | `10000` | Records per file or file size |
| `--prefix` | `string` | `split` | Output file prefix |
| `--keep-header` | `flag` | `true` | Include header in each file |

**Examples:**

Split by number of records:
```bash
{{ COMMAND_NAME }} split \
  --input large_file.vcf \
  --output-dir split_files/ \
  --method records \
  --size 5000
```

Split by chromosome:
```bash
{{ COMMAND_NAME }} split \
  --input genome.vcf \
  --output-dir by_chromosome/ \
  --method chromosome
```

---

## Visualization Commands

### {{ COMMAND_NAME }} plot

Generate various types of plots and visualizations.

**Usage:**
```bash
{{ COMMAND_NAME }} plot [OPTIONS] --input INPUT --output OUTPUT
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--input` | `path` | *required* | Input data file |
| `--output` | `path` | *required* | Output image file |
| `--type` | `choice` | `{{ DEFAULT_PLOT }}` | Plot type [{{ PLOT_TYPES }}] |
| `--format` | `choice` | `png` | Image format [png, svg, pdf, jpg] |
| `--width` | `integer` | `800` | Plot width in pixels |
| `--height` | `integer` | `600` | Plot height in pixels |
| `--dpi` | `integer` | `300` | Resolution in DPI |
| `--title` | `string` | `null` | Plot title |
| `--xlabel` | `string` | `null` | X-axis label |
| `--ylabel` | `string` | `null` | Y-axis label |
| `--theme` | `choice` | `default` | Color theme [{{ THEMES }}] |
| `--style` | `choice` | `publication` | Plot style [publication, presentation, web] |

**Plot Types:**

**{{ PLOT_TYPE_1 }}:**
```bash
{{ COMMAND_NAME }} plot \
  --input results.txt \
  --output {{ PLOT_TYPE_1 }}.png \
  --type {{ PLOT_TYPE_1 }} \
  --title "{{ PLOT_TITLE_1 }}"
```

**{{ PLOT_TYPE_2 }}:**
```bash
{{ COMMAND_NAME }} plot \
  --input data.vcf \
  --output {{ PLOT_TYPE_2 }}.png \
  --type {{ PLOT_TYPE_2 }} \
  --format svg \
  --dpi 300
```

---

### {{ COMMAND_NAME }} report

Generate comprehensive analysis reports.

**Usage:**
```bash
{{ COMMAND_NAME }} report [OPTIONS] --input INPUT --output OUTPUT
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--input` | `path` | *required* | Analysis results directory |
| `--output` | `path` | *required* | Report output file |
| `--format` | `choice` | `html` | Report format [html, pdf, markdown] |
| `--template` | `path` | `null` | Custom template file |
| `--include-plots` | `flag` | `true` | Include generated plots |
| `--include-logs` | `flag` | `false` | Include execution logs |
| `--style` | `choice` | `default` | Report style [default, publication, minimal] |
| `--title` | `string` | `null` | Report title |
| `--author` | `string` | `null` | Report author |

**Examples:**

HTML report:
```bash
{{ COMMAND_NAME }} report \
  --input analysis_results/ \
  --output analysis_report.html \
  --format html \
  --title "Genomic Analysis Report"
```

PDF report:
```bash
{{ COMMAND_NAME }} report \
  --input analysis_results/ \
  --output analysis_report.pdf \
  --format pdf \
  --style publication \
  --author "Research Team"
```

---

## Utility Commands

### {{ COMMAND_NAME }} info

Display system and installation information.

**Usage:**
```bash
{{ COMMAND_NAME }} info [OPTIONS]
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--verbose` | `flag` | `false` | Show detailed information |
| `--check-deps` | `flag` | `false` | Check all dependencies |
| `--format` | `choice` | `text` | Output format [text, json, yaml] |

**Examples:**

Basic info:
```bash
{{ COMMAND_NAME }} info
```

Detailed system check:
```bash
{{ COMMAND_NAME }} info --verbose --check-deps
```

---

### {{ COMMAND_NAME }} test

Run tests and validation checks.

**Usage:**
```bash
{{ COMMAND_NAME }} test [OPTIONS]
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--suite` | `choice` | `basic` | Test suite [basic, full, performance] |
| `--data-dir` | `path` | `null` | Custom test data directory |
| `--output-dir` | `path` | `test_results/` | Test output directory |
| `--timeout` | `integer` | `300` | Test timeout in seconds |

---

### {{ COMMAND_NAME }} config

Configuration file management.

**Usage:**
```bash
{{ COMMAND_NAME }} config [OPTIONS]
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--template` | `choice` | `null` | Generate template [yaml, json] |
| `--validate` | `path` | `null` | Validate configuration file |
| `--show` | `flag` | `false` | Show current configuration |
| `--reset` | `flag` | `false` | Reset to default configuration |

**Examples:**

Generate YAML template:
```bash
{{ COMMAND_NAME }} config --template yaml > config.yml
```

Validate configuration:
```bash
{{ COMMAND_NAME }} config --validate config.yml
```

---

## Batch Processing Commands

### {{ COMMAND_NAME }} batch

Process multiple samples in parallel.

**Usage:**
```bash
{{ COMMAND_NAME }} batch [OPTIONS] --sample-list SAMPLES --output-dir OUTPUT
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--sample-list` | `path` | *required* | File with sample information |
| `--output-dir` | `path` | *required* | Output directory |
| `--command` | `choice` | `{{ PRIMARY_COMMAND }}` | Command to run on each sample |
| `--parallel` | `integer` | `1` | Number of parallel processes |
| `--config` | `path` | `null` | Configuration file for all samples |
| `--resume` | `flag` | `false` | Resume from failed/incomplete jobs |

**Sample List Format:**
```csv
sample_id,input_file,output_prefix,custom_param
sample1,data/sample1.vcf,sample1_results,value1
sample2,data/sample2.vcf,sample2_results,value2
```

**Example:**
```bash
{{ COMMAND_NAME }} batch \
  --sample-list samples.csv \
  --output-dir batch_results/ \
  --parallel 4 \
  --resume
```

For complete usage examples, see the [Examples section](/examples/).
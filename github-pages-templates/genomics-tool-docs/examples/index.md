# Examples

This section provides practical examples and tutorials for using {{ PROJECT_NAME }} in real-world genomics research scenarios.

## Quick Examples

### Example 1: Basic Analysis

The simplest way to run {{ PROJECT_NAME }}:

```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input sample.vcf \
  --output results/basic_analysis/
```

**What this does:**
- Processes `sample.vcf` using default parameters
- Outputs results to `results/basic_analysis/`
- Uses automatic format detection and standard algorithms

### Example 2: Quality-Controlled Analysis

Run analysis with quality control filters:

```bash
{{ COMMAND_NAME }} preprocess \
  --input raw_data.vcf \
  --output filtered_data.vcf \
  --quality-filter \
  --min-quality 30 \
  --remove-duplicates

{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input filtered_data.vcf \
  --output results/qc_analysis/ \
  --threads 8
```

### Example 3: Configuration File Approach

For reproducible analyses:

```bash
# Generate configuration template
{{ COMMAND_NAME }} config --template > analysis_config.yml

# Edit configuration as needed
nano analysis_config.yml

# Run with configuration
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --config analysis_config.yml
```

## Genomics Workflows

### Workflow 1: Variant Calling Pipeline Integration

Integrate {{ PROJECT_NAME }} with standard variant calling pipelines:

```bash
#!/bin/bash
# Complete variant processing workflow

# Step 1: Quality control
{{ COMMAND_NAME }} preprocess \
  --input raw_variants.vcf \
  --output qc_variants.vcf \
  --min-quality 20 \
  --max-missing 0.1 \
  --remove-duplicates

# Step 2: Main analysis
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input qc_variants.vcf \
  --output analysis_results/ \
  --algorithm {{ ALGORITHM_1 }} \
  --reference {{ REFERENCE_PANEL }} \
  --population AFR \
  --threads 16

# Step 3: Generate report
{{ COMMAND_NAME }} report \
  --input analysis_results/ \
  --output final_report.html \
  --include-plots \
  --style publication
```

### Workflow 2: Population Genetics Analysis

Analyze population structure and diversity:

```bash
# Population structure analysis
{{ COMMAND_NAME }} analyze \
  --input population_data.vcf \
  --output pop_structure/ \
  --algorithm population_structure \
  --model admixture \
  --iterations 10000 \
  --bootstrap 1000

# Diversity metrics
{{ COMMAND_NAME }} analyze \
  --input population_data.vcf \
  --output diversity_metrics/ \
  --algorithm diversity \
  --window-size 50000 \
  --step-size 10000

# Visualization
{{ COMMAND_NAME }} plot \
  --input pop_structure/admixture_results.txt \
  --output population_structure.png \
  --type admixture_plot \
  --populations "YRI,LWK,GWD,MSL"
```

### Workflow 3: Imputation Pipeline

Perform genotype imputation with reference panels:

```bash
# Prepare reference panel
{{ COMMAND_NAME }} preprocess \
  --input reference_panel.vcf \
  --output cleaned_panel.vcf \
  --quality-filter \
  --min-allele-frequency 0.01

# Phase reference panel (if needed)
{{ COMMAND_NAME }} phase \
  --input cleaned_panel.vcf \
  --output phased_panel.vcf \
  --algorithm beagle \
  --threads 8

# Impute target samples
{{ COMMAND_NAME }} impute \
  --target target_samples.vcf \
  --reference phased_panel.vcf \
  --output imputed_results/ \
  --population AFR \
  --chunk-size 5000000 \
  --threads 16

# Quality assessment
{{ COMMAND_NAME }} assess-imputation \
  --input imputed_results/ \
  --output imputation_qc/ \
  --truth-set validation_samples.vcf
```

## Data-Specific Examples

### Working with Different File Formats

**VCF files:**
```bash
# Standard VCF processing
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input sample.vcf.gz \
  --output results/ \
  --input-format vcf

# Multi-sample VCF
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input cohort.vcf.gz \
  --output cohort_results/ \
  --sample-list selected_samples.txt
```

**PLINK format:**
```bash
# Convert PLINK to VCF
{{ COMMAND_NAME }} convert \
  --input dataset.bed \
  --output dataset.vcf \
  --format vcf

# Process PLINK files directly
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input dataset.bed \
  --output plink_results/ \
  --input-format plink
```

**23andMe/AncestryDNA format:**
```bash
# Convert consumer genomics format
{{ COMMAND_NAME }} convert \
  --input 23andme_data.txt \
  --output converted_data.vcf \
  --format vcf \
  --input-format 23andme

# Analyze consumer data
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input converted_data.vcf \
  --output consumer_analysis/ \
  --algorithm ancestry_inference
```

### Reference Genome Versions

**GRCh37/hg19:**
```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input grch37_data.vcf \
  --output grch37_results/ \
  --reference-build GRCh37 \
  --reference-panel 1000G_phase3_GRCh37.vcf
```

**GRCh38/hg38:**
```bash
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input grch38_data.vcf \
  --output grch38_results/ \
  --reference-build GRCh38 \
  --reference-panel 1000G_phase3_GRCh38.vcf
```

**Liftover between builds:**
```bash
# Liftover from GRCh37 to GRCh38
{{ COMMAND_NAME }} liftover \
  --input grch37_variants.vcf \
  --output grch38_variants.vcf \
  --from-build GRCh37 \
  --to-build GRCh38 \
  --chain-file hg19ToHg38.over.chain
```

## Population-Specific Analysis

### African Populations

```bash
# African-optimized analysis
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input african_samples.vcf \
  --output african_analysis/ \
  --population-group African \
  --reference-panel AfricanGenomePanel_v2.0.vcf \
  --algorithm population_optimized \
  --model african_specific

# Multiple African populations
{{ COMMAND_NAME }} analyze \
  --input multi_african.vcf \
  --output population_comparison/ \
  --algorithm population_structure \
  --populations "YRI,LWK,GWD,MSL,ESN,ACB,ASW" \
  --comparison-mode pairwise
```

### Admixed Populations

```bash
# Admixture analysis
{{ COMMAND_NAME }} admixture \
  --input admixed_samples.vcf \
  --output admixture_results/ \
  --reference-populations "EUR,AFR,AMR" \
  --k-values "2,3,4,5" \
  --cross-validation 10

# Local ancestry inference
{{ COMMAND_NAME }} local-ancestry \
  --input admixed_samples.vcf \
  --output local_ancestry/ \
  --reference-panels EUR.vcf,AFR.vcf,AMR.vcf \
  --window-size 100000
```

## High-Performance Computing

### SLURM Job Submission

**Single job:**
```bash
#!/bin/bash
#SBATCH --job-name={{ PACKAGE_NAME }}-analysis
#SBATCH --cpus-per-task=16
#SBATCH --memory=64G
#SBATCH --time=24:00:00
#SBATCH --output={{ PACKAGE_NAME }}_%j.out
#SBATCH --error={{ PACKAGE_NAME }}_%j.err

module load {{ PACKAGE_NAME }}/{{ VERSION }}

{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input ${INPUT_FILE} \
  --output ${SLURM_JOB_ID}_results/ \
  --threads ${SLURM_CPUS_PER_TASK} \
  --memory ${SLURM_MEM_PER_NODE}G \
  --tmp-dir /scratch/${USER}/${SLURM_JOB_ID}
```

**Array job for multiple samples:**
```bash
#!/bin/bash
#SBATCH --job-name={{ PACKAGE_NAME }}-array
#SBATCH --array=1-100%10
#SBATCH --cpus-per-task=8
#SBATCH --memory=32G
#SBATCH --time=12:00:00

# Get sample for this array task
SAMPLE=$(sed -n "${SLURM_ARRAY_TASK_ID}p" sample_list.txt)

{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input samples/${SAMPLE}.vcf \
  --output results/${SAMPLE}/ \
  --threads ${SLURM_CPUS_PER_TASK}
```

### Parallel Processing

**GNU Parallel:**
```bash
# Create command list
cat sample_list.txt | while read sample; do
  echo "{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} --input ${sample}.vcf --output results/${sample}/"
done > commands.txt

# Run in parallel
parallel -j 4 < commands.txt
```

**Built-in batch processing:**
```bash
# Process multiple samples
{{ COMMAND_NAME }} batch \
  --sample-list samples.csv \
  --output-dir batch_results/ \
  --command {{ PRIMARY_COMMAND }} \
  --parallel 8 \
  --config batch_config.yml
```

## Cloud Computing Examples

### AWS Batch

```bash
# Submit to AWS Batch
aws batch submit-job \
  --job-name {{ PACKAGE_NAME }}-analysis \
  --job-queue genomics-queue \
  --job-definition {{ PACKAGE_NAME }}-job-def \
  --parameters inputFile=s3://bucket/input.vcf,outputBucket=s3://bucket/results/
```

**Job definition (JSON):**
```json
{
  "jobDefinitionName": "{{ PACKAGE_NAME }}-job-def",
  "type": "container",
  "containerProperties": {
    "image": "{{ DOCKER_REGISTRY }}/{{ PACKAGE_NAME }}:latest",
    "vcpus": 8,
    "memory": 32768,
    "jobRoleArn": "arn:aws:iam::account:role/BatchExecutionRole"
  }
}
```

### Google Cloud Platform

```bash
# Submit to Google Cloud Life Sciences API
gcloud alpha genomics pipelines run \
  --pipeline-file {{ PACKAGE_NAME }}_pipeline.yaml \
  --inputs INPUT_VCF=gs://bucket/input.vcf \
  --outputs OUTPUT_DIR=gs://bucket/results/ \
  --regions us-central1
```

## Integration Examples

### Snakemake Integration

```python
# Snakefile
rule run_{{ PACKAGE_NAME }}:
    input:
        vcf="data/{sample}.vcf"
    output:
        results=directory("results/{sample}/")
    params:
        algorithm="{{ DEFAULT_ALGORITHM }}",
        threads=8
    shell:
        """
        {{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
          --input {input.vcf} \
          --output {output.results} \
          --algorithm {params.algorithm} \
          --threads {params.threads}
        """

rule generate_report:
    input:
        results="results/{sample}/"
    output:
        report="reports/{sample}_report.html"
    shell:
        """
        {{ COMMAND_NAME }} report \
          --input {input.results} \
          --output {output.report} \
          --format html
        """
```

### Nextflow Integration

```groovy
// main.nf
process RUN_ANALYSIS {
    publishDir "results/", mode: 'copy'
    
    input:
    tuple val(sample_id), path(vcf)
    
    output:
    tuple val(sample_id), path("${sample_id}/")
    
    script:
    """
    {{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
      --input ${vcf} \
      --output ${sample_id}/ \
      --threads ${task.cpus}
    """
}

workflow {
    Channel
        .fromFilePairs("data/*.vcf")
        .set { samples_ch }
    
    RUN_ANALYSIS(samples_ch)
}
```

### WDL Integration

```wdl
task run_{{ PACKAGE_NAME }} {
    input {
        File input_vcf
        String sample_name
        Int threads = 4
    }
    
    command {
        {{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
          --input ${input_vcf} \
          --output ${sample_name}_results/ \
          --threads ${threads}
    }
    
    output {
        File results = "${sample_name}_results/"
    }
    
    runtime {
        docker: "{{ DOCKER_REGISTRY }}/{{ PACKAGE_NAME }}:latest"
        memory: "16 GB"
        cpu: threads
    }
}
```

## Batch Processing Examples

### Sample List Format

**Basic format (samples.csv):**
```csv
sample_id,input_file,output_prefix
sample1,data/sample1.vcf,sample1_results
sample2,data/sample2.vcf,sample2_results
sample3,data/sample3.vcf,sample3_results
```

**Extended format with parameters:**
```csv
sample_id,input_file,output_prefix,population,algorithm,custom_param
sample1,data/sample1.vcf,sample1_results,YRI,{{ ALGORITHM_1 }},value1
sample2,data/sample2.vcf,sample2_results,LWK,{{ ALGORITHM_2 }},value2
sample3,data/sample3.vcf,sample3_results,GWD,{{ ALGORITHM_1 }},value3
```

### Batch Processing Commands

```bash
# Basic batch processing
{{ COMMAND_NAME }} batch \
  --sample-list samples.csv \
  --output-dir batch_results/ \
  --parallel 4

# With custom configuration per sample
{{ COMMAND_NAME }} batch \
  --sample-list extended_samples.csv \
  --config-template config_template.yml \
  --output-dir custom_batch_results/ \
  --parallel 8

# Resume failed jobs
{{ COMMAND_NAME }} batch \
  --sample-list samples.csv \
  --output-dir batch_results/ \
  --resume \
  --failed-only
```

## Visualization Examples

### Basic Plots

```bash
# Quality control plots
{{ COMMAND_NAME }} plot \
  --input results/stats.txt \
  --output qc_plots.png \
  --type quality_summary \
  --title "Quality Control Summary"

# Population structure plot
{{ COMMAND_NAME }} plot \
  --input results/population_structure.txt \
  --output pop_structure.png \
  --type pca \
  --populations "YRI,LWK,GWD,MSL"

# Admixture barplot
{{ COMMAND_NAME }} plot \
  --input results/admixture.txt \
  --output admixture.png \
  --type admixture_bar \
  --k-value 3
```

### Custom Visualization

```bash
# Manhattan plot
{{ COMMAND_NAME }} plot \
  --input results/association.txt \
  --output manhattan.png \
  --type manhattan \
  --significance-line 5e-8 \
  --suggestive-line 1e-5

# Heatmap
{{ COMMAND_NAME }} plot \
  --input results/distance_matrix.txt \
  --output heatmap.png \
  --type heatmap \
  --clustering hierarchical \
  --color-scheme viridis
```

## Troubleshooting Examples

### Common Issues and Solutions

**Memory errors:**
```bash
# Use low-memory mode
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input large_dataset.vcf \
  --output results/ \
  --low-memory \
  --chunk-size 5000

# Process in chunks
{{ COMMAND_NAME }} split \
  --input large_dataset.vcf \
  --output-dir chunks/ \
  --method records \
  --size 10000

# Process chunks separately
for chunk in chunks/*.vcf; do
  {{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
    --input $chunk \
    --output chunk_results/$(basename $chunk .vcf)/
done
```

**Performance optimization:**
```bash
# Profile execution
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input sample.vcf \
  --output results/ \
  --profile-execution \
  --profile-memory

# Use optimized settings
{{ COMMAND_NAME }} {{ PRIMARY_COMMAND }} \
  --input sample.vcf \
  --output results/ \
  --profile fast \
  --threads 16 \
  --buffer-size 256MB
```

### Validation and Testing

```bash
# Validate input files
{{ COMMAND_NAME }} validate sample.vcf --strict

# Test with known data
{{ COMMAND_NAME }} test --test-suite comprehensive

# Compare results
{{ COMMAND_NAME }} compare \
  --result1 results1/ \
  --result2 results2/ \
  --tolerance 1e-6 \
  --report comparison_report.html
```

## Complete Workflows

### Workflow: Genome-Wide Association Study (GWAS)

```bash
#!/bin/bash
# Complete GWAS workflow

# 1. Quality control
{{ COMMAND_NAME }} preprocess \
  --input raw_genotypes.vcf \
  --output qc_genotypes.vcf \
  --min-quality 30 \
  --max-missing 0.05 \
  --min-allele-frequency 0.01 \
  --hardy-weinberg-pvalue 1e-6

# 2. Population structure analysis
{{ COMMAND_NAME }} analyze \
  --input qc_genotypes.vcf \
  --output population_structure/ \
  --algorithm pca \
  --components 10

# 3. Association testing
{{ COMMAND_NAME }} gwas \
  --genotypes qc_genotypes.vcf \
  --phenotypes phenotype_data.csv \
  --covariates population_structure/pca_components.txt \
  --output gwas_results/ \
  --model linear \
  --threads 16

# 4. Generate Manhattan plot
{{ COMMAND_NAME }} plot \
  --input gwas_results/association_results.txt \
  --output manhattan_plot.png \
  --type manhattan \
  --title "Genome-Wide Association Study"

# 5. Generate report
{{ COMMAND_NAME }} report \
  --input gwas_results/ \
  --output gwas_report.html \
  --include-plots \
  --template gwas_template
```

### Workflow: Pharmacogenomics Analysis

```bash
#!/bin/bash
# Pharmacogenomics analysis workflow

# 1. Extract pharmacogenes
{{ COMMAND_NAME }} extract \
  --input patient_genotypes.vcf \
  --regions pharmacogenes.bed \
  --output pharma_variants.vcf

# 2. Annotate variants
{{ COMMAND_NAME }} annotate \
  --input pharma_variants.vcf \
  --output annotated_variants.vcf \
  --database PharmGKB \
  --clinical-significance

# 3. Predict drug response
{{ COMMAND_NAME }} predict \
  --input annotated_variants.vcf \
  --output drug_predictions/ \
  --model pharmacogenomic \
  --drugs warfarin,clopidogrel,codeine

# 4. Generate clinical report
{{ COMMAND_NAME }} clinical-report \
  --input drug_predictions/ \
  --output clinical_report.pdf \
  --template pharmacogenomics \
  --patient-id ${PATIENT_ID}
```

For more advanced usage and custom workflows, consult the [API Reference](/api/) and [Configuration Guide](/api/configuration).
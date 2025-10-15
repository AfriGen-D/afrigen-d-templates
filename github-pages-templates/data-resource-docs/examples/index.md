# Examples

This section provides practical examples for accessing and using {{ PROJECT_NAME }} datasets.

## Basic Data Access

### Example 1: Download and Explore a Small Dataset

```bash
# Download test dataset
wget {{ DOWNLOAD_BASE_URL }}/test-data/YRI_test_sample.vcf.gz
wget {{ DOWNLOAD_BASE_URL }}/test-data/YRI_test_sample.vcf.gz.tbi

# View basic statistics
bcftools stats YRI_test_sample.vcf.gz

# Count variants
bcftools view -H YRI_test_sample.vcf.gz | wc -l

# View sample information
bcftools query -l YRI_test_sample.vcf.gz
```

### Example 2: Access Dataset Metadata

```bash
# Get dataset list via API
curl -s {{ API_ENDPOINT }}/datasets | jq '.[] | {id, name, sampleCount}'

# Get specific dataset metadata
curl -s {{ API_ENDPOINT }}/datasets/{{ EXAMPLE_DATASET_ID }} | jq '.'

# Download metadata file
wget {{ DOWNLOAD_BASE_URL }}/{{ EXAMPLE_DATASET_ID }}/metadata/sample_metadata.csv
```

## Population Genetics Analysis

### Example 3: Population Structure Analysis

```python
import pandas as pd
import numpy as np
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

# Load genotype data (assuming PLINK format)
# This would be generated from VCF using: plink --vcf data.vcf.gz --make-bed

# Load sample metadata
metadata = pd.read_csv('{{ EXAMPLE_DATASET_ID }}/metadata/sample_metadata.csv')

# Perform PCA on genotype data
# (Genotype matrix preparation code here)
pca = PCA(n_components=10)
pca_result = pca.fit_transform(genotype_matrix)

# Plot first two components
plt.figure(figsize=(10, 8))
populations = metadata['population'].unique()
colors = plt.cm.Set3(np.linspace(0, 1, len(populations)))

for pop, color in zip(populations, colors):
    mask = metadata['population'] == pop
    plt.scatter(pca_result[mask, 0], pca_result[mask, 1], 
                c=[color], label=pop, alpha=0.7)

plt.xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%} variance)')
plt.ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%} variance)')
plt.title('Population Structure - African Populations')
plt.legend()
plt.show()
```

### Example 4: Allele Frequency Comparison

```r
library(data.table)
library(ggplot2)

# Load variant data
variants <- fread("{{ EXAMPLE_DATASET_ID }}/variants/allele_frequencies.txt")

# Compare allele frequencies between populations
pop1_freq <- variants[population == "{{ POP1 }}", frequency]
pop2_freq <- variants[population == "{{ POP2 }}", frequency]

# Create comparison plot
comparison_data <- data.frame(
  Pop1 = pop1_freq,
  Pop2 = pop2_freq,
  variant_id = variants[population == "{{ POP1 }}", variant_id]
)

ggplot(comparison_data, aes(x = Pop1, y = Pop2)) +
  geom_point(alpha = 0.5) +
  geom_abline(intercept = 0, slope = 1, color = "red", linetype = "dashed") +
  labs(x = "{{ POP1 }} Allele Frequency", 
       y = "{{ POP2 }} Allele Frequency",
       title = "Allele Frequency Comparison") +
  theme_minimal()
```

## Association Studies

### Example 5: GWAS Analysis

```bash
# Download phenotype and genotype data
wget {{ DOWNLOAD_BASE_URL }}/{{ EXAMPLE_DATASET_ID }}/phenotypes/{{ TRAIT_NAME }}.txt
wget {{ DOWNLOAD_BASE_URL }}/{{ EXAMPLE_DATASET_ID }}/genotypes/{{ EXAMPLE_DATASET_ID }}_chr22.vcf.gz

# Convert VCF to PLINK format
plink --vcf {{ EXAMPLE_DATASET_ID }}_chr22.vcf.gz \
      --make-bed \
      --out {{ EXAMPLE_DATASET_ID }}_chr22

# Perform basic GWAS
plink --bfile {{ EXAMPLE_DATASET_ID }}_chr22 \
      --pheno {{ TRAIT_NAME }}.txt \
      --assoc \
      --out {{ TRAIT_NAME }}_gwas_results

# Generate Manhattan plot
Rscript --vanilla << 'EOF'
library(qqman)
gwas <- read.table("{{ TRAIT_NAME }}_gwas_results.qassoc", header=TRUE)
png("manhattan_plot.png", width=1200, height=600)
manhattan(gwas, chr="CHR", bp="BP", snp="SNP", p="P")
dev.off()
EOF
```

### Example 6: Polygenic Risk Score

```python
import pandas as pd
import numpy as np

# Load GWAS summary statistics
gwas_stats = pd.read_csv('{{ GWAS_SUMSTATS_FILE }}', sep='\t')

# Load individual genotype data
# (Assuming preprocessed format with variants in columns, samples in rows)
genotypes = pd.read_csv('{{ INDIVIDUAL_GENOTYPES }}')

# Calculate PRS
def calculate_prs(genotypes, gwas_stats, p_threshold=5e-8):
    # Filter variants by p-value threshold
    significant_vars = gwas_stats[gwas_stats['P'] < p_threshold]
    
    # Match variants between datasets
    common_vars = set(genotypes.columns) & set(significant_vars['SNP'])
    
    prs_scores = []
    for sample in genotypes.index:
        prs = 0
        for var in common_vars:
            effect_allele_count = genotypes.loc[sample, var]
            effect_size = significant_vars[significant_vars['SNP'] == var]['BETA'].iloc[0]
            prs += effect_allele_count * effect_size
        prs_scores.append(prs)
    
    return pd.DataFrame({'sample_id': genotypes.index, 'prs': prs_scores})

# Calculate PRS
prs_results = calculate_prs(genotypes, gwas_stats)

# Plot PRS distribution
import matplotlib.pyplot as plt
plt.figure(figsize=(10, 6))
plt.hist(prs_results['prs'], bins=50, alpha=0.7, color='skyblue')
plt.xlabel('Polygenic Risk Score')
plt.ylabel('Frequency')
plt.title('PRS Distribution - {{ TRAIT_NAME }}')
plt.show()
```

## Imputation and Phasing

### Example 7: Genotype Imputation

```bash
# Download reference panel
wget {{ DOWNLOAD_BASE_URL }}/references/{{ REF_PANEL_NAME }}/{{ REF_PANEL_NAME }}_chr22.vcf.gz

# Prepare target data for imputation
bcftools view {{ TARGET_DATA }}_chr22.vcf.gz \
  --output-type z \
  --output {{ TARGET_DATA }}_chr22_filtered.vcf.gz

# Phase with SHAPEIT4
shapeit4 --input {{ TARGET_DATA }}_chr22_filtered.vcf.gz \
         --map {{ GENETIC_MAP }}/genetic_map_chr22.txt \
         --region 22 \
         --output {{ TARGET_DATA }}_chr22_phased.vcf.gz

# Impute with IMPUTE5
impute5 --h {{ REF_PANEL_NAME }}_chr22.vcf.gz \
        --g {{ TARGET_DATA }}_chr22_phased.vcf.gz \
        --r 22:1-51304566 \
        --o {{ TARGET_DATA }}_chr22_imputed.vcf.gz

# Post-imputation QC
bcftools +fill-tags {{ TARGET_DATA }}_chr22_imputed.vcf.gz -- -t INFO,MAF
bcftools view {{ TARGET_DATA }}_chr22_imputed.vcf.gz \
  --include 'INFO>0.8 & MAF>0.01' \
  --output-type z \
  --output {{ TARGET_DATA }}_chr22_imputed_qc.vcf.gz
```

## Cloud Analysis

### Example 8: AWS Analysis

```bash
# Set up AWS CLI (assuming credentials are configured)
aws configure

# Copy data to S3
aws s3 cp {{ LOCAL_DATA_PATH }} s3://{{ YOUR_BUCKET }}/data/ --recursive

# Launch EC2 instance for analysis
aws ec2 run-instances \
  --image-id ami-{{ AMI_ID }} \
  --instance-type {{ INSTANCE_TYPE }} \
  --key-name {{ KEY_PAIR }} \
  --security-groups {{ SECURITY_GROUP }}

# Run analysis on EC2 (via SSH)
# Download and process data using previous examples
```

### Example 9: Docker Analysis

```bash
# Pull analysis container
docker pull {{ DOCKER_REGISTRY }}/{{ ANALYSIS_IMAGE }}:{{ VERSION }}

# Run containerized analysis
docker run -v /local/data:/data -v /local/results:/results \
  {{ DOCKER_REGISTRY }}/{{ ANALYSIS_IMAGE }}:{{ VERSION }} \
  analysis_script.sh \
  --input /data/{{ INPUT_FILE }} \
  --output /results/{{ OUTPUT_PREFIX }}
```

## Data Integration

### Example 10: Multi-Dataset Analysis

```python
import pandas as pd
import numpy as np

# Load multiple datasets
dataset1 = pd.read_csv('{{ DATASET_1_PATH }}/sample_metadata.csv')
dataset2 = pd.read_csv('{{ DATASET_2_PATH }}/sample_metadata.csv')

# Harmonize population labels
population_mapping = {
    'YRI_1000G': 'Yoruba',
    'YRI_AfriGen': 'Yoruba',
    'LWK_1000G': 'Luhya',
    '{{ OTHER_POP_LABEL }}': '{{ STANDARD_POP_NAME }}'
}

dataset1['population_harmonized'] = dataset1['population'].map(population_mapping)
dataset2['population_harmonized'] = dataset2['population'].map(population_mapping)

# Combine datasets
combined_metadata = pd.concat([dataset1, dataset2], ignore_index=True)

# Analysis on combined data
population_counts = combined_metadata['population_harmonized'].value_counts()
print("Sample sizes per population:")
print(population_counts)
```

## Quality Control Workflows

### Example 11: Comprehensive QC Pipeline

```bash
#!/bin/bash
# Comprehensive QC pipeline for {{ PROJECT_NAME }} data

# Input parameters
VCF_FILE="{{ INPUT_VCF }}"
OUTPUT_DIR="{{ QC_OUTPUT_DIR }}"
METADATA_FILE="{{ METADATA_FILE }}"

mkdir -p ${OUTPUT_DIR}

# 1. Basic statistics
echo "Computing basic statistics..."
bcftools stats ${VCF_FILE} > ${OUTPUT_DIR}/basic_stats.txt

# 2. Sample QC
echo "Performing sample QC..."
plink --vcf ${VCF_FILE} \
      --missing \
      --out ${OUTPUT_DIR}/sample_missing

plink --vcf ${VCF_FILE} \
      --het \
      --out ${OUTPUT_DIR}/sample_heterozygosity

# 3. Variant QC
echo "Performing variant QC..."
bcftools +fill-tags ${VCF_FILE} -- -t HWE,ExcHet
bcftools view ${VCF_FILE} \
  --include 'INFO/HWE>1e-6 & F_MISSING<0.05 & MAF>0.01' \
  --output-type z \
  --output ${OUTPUT_DIR}/variants_qc_pass.vcf.gz

# 4. Population structure check
echo "Checking population structure..."
plink --vcf ${OUTPUT_DIR}/variants_qc_pass.vcf.gz \
      --indep-pairwise 50 10 0.2 \
      --out ${OUTPUT_DIR}/pruned_variants

plink --vcf ${OUTPUT_DIR}/variants_qc_pass.vcf.gz \
      --extract ${OUTPUT_DIR}/pruned_variants.prune.in \
      --pca 10 \
      --out ${OUTPUT_DIR}/population_pca

# 5. Generate QC report
Rscript generate_qc_report.R \
  --stats ${OUTPUT_DIR}/basic_stats.txt \
  --missing ${OUTPUT_DIR}/sample_missing.imiss \
  --het ${OUTPUT_DIR}/sample_heterozygosity.het \
  --pca ${OUTPUT_DIR}/population_pca.eigenvec \
  --metadata ${METADATA_FILE} \
  --output ${OUTPUT_DIR}/qc_report.html
```

## Custom Analysis Scripts

Scripts and notebooks for common analyses are available:

- **Population genetics**: PCA, ADMIXTURE, F-statistics
- **Association studies**: Linear/logistic regression, mixed models
- **Imputation**: Pre/post-imputation QC, accuracy assessment
- **Visualization**: Manhattan plots, QQ plots, population structure

Download analysis templates:
```bash
git clone https://github.com/AfriGen-D/analysis-templates.git
cd analysis-templates/{{ ANALYSIS_TYPE }}
```

For complete analysis workflows, see our [GitHub repositories](https://github.com/AfriGen-D) and [tutorial notebooks]({{ TUTORIAL_URL }}).
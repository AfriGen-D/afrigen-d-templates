<div align="center">
  <img src="https://raw.githubusercontent.com/AfriGen-D/afrigen-d-templates/main/assets/afrigen-d-logo.png" alt="AfriGen-D Logo" width="200" />
  <h1>{{ DATASET_NAME }}</h1>
</div>

<div align="center">

[![DOI](https://zenodo.org/badge/DOI/{{ DOI }}.svg)](https://doi.org/{{ DOI }})
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Data Version](https://img.shields.io/badge/version-{{ VERSION }}-blue.svg)](releases)

</div>

> {{ DATASET_DESCRIPTION }}

## Overview

The {{ DATASET_NAME }} is a comprehensive genomic dataset developed by the AfriGen-D project to support {{ PRIMARY_USE_CASE }}. This dataset contains {{ DATA_CONTENT }} and is designed to advance genomic research in African populations.

## Dataset Contents

### Data Files

| File | Description | Format | Size |
|------|-------------|--------|------|
| `{{ FILE_1 }}` | {{ FILE_1_DESC }} | {{ FORMAT_1 }} | {{ SIZE_1 }} |
| `{{ FILE_2 }}` | {{ FILE_2_DESC }} | {{ FORMAT_2 }} | {{ SIZE_2 }} |
| `{{ FILE_3 }}` | {{ FILE_3_DESC }} | {{ FORMAT_3 }} | {{ SIZE_3 }} |

### Metadata

- **Populations**: {{ POPULATIONS }}
- **Sample Size**: {{ SAMPLE_COUNT }} individuals
- **Variant Count**: {{ VARIANT_COUNT }} variants
- **Genome Build**: {{ GENOME_BUILD }}
- **Quality Control**: {{ QC_DESCRIPTION }}

## Data Access

### Download Options

#### Option 1: Direct Download
```bash
# Download complete dataset
wget https://zenodo.org/record/{{ ZENODO_ID }}/files/{{ DATASET_NAME }}.tar.gz
tar -xzf {{ DATASET_NAME }}.tar.gz
```

#### Option 2: Using AfriGen-D API
```bash
# Install afrigen-d-tools
pip install afrigen-d-tools

# Download dataset
afrigend download --dataset {{ DATASET_NAME }} --output ./data/
```

#### Option 3: Cloud Access
```bash
# AWS S3 (public bucket)
aws s3 sync s3://afrigen-d-public/{{ DATASET_NAME }} ./data/ --no-sign-request

# Google Cloud Storage
gsutil -m cp -r gs://afrigen-d-public/{{ DATASET_NAME }} ./data/
```

### Access Requirements

- **Registration**: Required for demographic and clinical data
- **Agreement**: Data Use Agreement must be signed
- **Ethics**: Local ethics approval may be required
- **Attribution**: Proper citation required in publications

## Data Description

### Sample Characteristics

| Population | N | Description | Geographic Region |
|------------|---|-------------|-------------------|
| {{ POP_1 }} | {{ N_1 }} | {{ POP_1_DESC }} | {{ REGION_1 }} |
| {{ POP_2 }} | {{ N_2 }} | {{ POP_2_DESC }} | {{ REGION_2 }} |
| {{ POP_3 }} | {{ N_3 }} | {{ POP_3_DESC }} | {{ REGION_3 }} |

### Data Processing

1. **Quality Control**
   - Sample QC: {{ SAMPLE_QC }}
   - Variant QC: {{ VARIANT_QC }}
   - Relatedness filtering: {{ RELATEDNESS }}

2. **Harmonization**
   - Reference genome: {{ REFERENCE }}
   - Coordinate system: {{ COORDINATES }}
   - Allele coding: {{ ALLELE_CODING }}

3. **Annotation**
   - Functional annotation: {{ ANNOTATION }}
   - Population frequencies: {{ FREQUENCIES }}
   - Pathogenicity scores: {{ PATHOGENICITY }}

## Usage Examples

### Loading Data in R
```r
# Install required packages
install.packages(c("data.table", "genetics"))

# Load genotype data
library(data.table)
genotypes <- fread("{{ DATASET_NAME }}/genotypes.csv")

# Load sample metadata
metadata <- fread("{{ DATASET_NAME }}/samples.csv")
```

### Loading Data in Python
```python
import pandas as pd
import numpy as np

# Load genotype data
genotypes = pd.read_csv("{{ DATASET_NAME }}/genotypes.csv")

# Load sample metadata
metadata = pd.read_csv("{{ DATASET_NAME }}/samples.csv")
```

### PLINK Analysis
```bash
# Convert to PLINK format
plink --vcf {{ DATASET_NAME }}/variants.vcf.gz \
      --make-bed \
      --out {{ DATASET_NAME }}_plink

# Principal component analysis
plink --bfile {{ DATASET_NAME }}_plink \
      --pca 10 \
      --out {{ DATASET_NAME }}_pca
```

## Quality Metrics

### Overall Statistics
- **Call Rate**: {{ CALL_RATE }}%
- **Minor Allele Frequency**: {{ MAF_THRESHOLD }} minimum
- **Hardy-Weinberg Equilibrium**: p > {{ HWE_THRESHOLD }}
- **Heterozygosity Rate**: {{ HET_RATE }}

### Population-Specific Metrics
| Population | Call Rate | Heterozygosity | Inbreeding Coefficient |
|------------|-----------|----------------|------------------------|
| {{ POP_1 }} | {{ CR_1 }}% | {{ HET_1 }} | {{ FIS_1 }} |
| {{ POP_2 }} | {{ CR_2 }}% | {{ HET_2 }} | {{ FIS_2 }} |
| {{ POP_3 }} | {{ CR_3 }}% | {{ HET_3 }} | {{ FIS_3 }} |

## Validation and Benchmarks

### Replication Studies
- **Platform concordance**: {{ PLATFORM_CONCORDANCE }}
- **Technical replicates**: {{ TECH_REPLICATES }}
- **Mendelian errors**: {{ MENDELIAN_ERRORS }}

### External Validation
- **1000 Genomes Project**: {{ KGP_VALIDATION }}
- **H3Africa reference**: {{ H3A_VALIDATION }}
- **Population structure**: {{ STRUCTURE_VALIDATION }}

## Applications

This dataset has been used for:

- **Genome-wide association studies (GWAS)**
- **Population genetics analyses**
- **Imputation reference panel development**
- **Pharmacogenomics research**
- **Ancestral diversity studies**

### Published Studies

1. {{ PAPER_1_AUTHORS }}. {{ PAPER_1_TITLE }}. *{{ PAPER_1_JOURNAL }}*. {{ PAPER_1_YEAR }}. doi: [{{ PAPER_1_DOI }}](https://doi.org/{{ PAPER_1_DOI }})

2. {{ PAPER_2_AUTHORS }}. {{ PAPER_2_TITLE }}. *{{ PAPER_2_JOURNAL }}*. {{ PAPER_2_YEAR }}. doi: [{{ PAPER_2_DOI }}](https://doi.org/{{ PAPER_2_DOI }})

## Data Use Agreement

By accessing this dataset, you agree to:

1. **Cite appropriately** in all publications and presentations
2. **Acknowledge contributors** and funding sources
3. **Respect participant privacy** and ethical guidelines
4. **Share derived data** according to FAIR principles
5. **Collaborate responsibly** with the African genomics community

## Citation

If you use {{ DATASET_NAME }} in your research, please cite:

```bibtex
@dataset{{{ CITATION_KEY }},
  title = {{ DATASET_NAME }}: {{ DATASET_DESCRIPTION }},
  author = {{ AUTHORS }},
  year = {{{ YEAR }}},
  publisher = {Zenodo},
  doi = {{{ DOI }}},
  url = {https://doi.org/{{ DOI }}}
}
```

## Support and Contact

- **Technical Issues**: [GitHub Issues](https://github.com/AfriGen-D/{{ REPO_NAME }}/issues)
- **Data Questions**: [data-support@afrigen-d.org](mailto:data-support@afrigen-d.org)
- **Collaboration**: [partnerships@afrigen-d.org](mailto:partnerships@afrigen-d.org)
- **General Inquiries**: [helpdesk.afrigen-d.org](https://helpdesk.afrigen-d.org)

## Acknowledgments

We thank all study participants, research teams, and institutions that contributed to this dataset:

- {{ INSTITUTION_1 }}
- {{ INSTITUTION_2 }}
- {{ INSTITUTION_3 }}
- {{ FUNDING_AGENCY_1 }}
- {{ FUNDING_AGENCY_2 }}

## Ethical Considerations

This dataset was developed with careful attention to:

- **Informed Consent**: All participants provided appropriate consent
- **Community Engagement**: Local communities were involved in study design
- **Benefit Sharing**: Results are shared with contributing communities
- **Capacity Building**: Training and resources provided to local researchers
- **Data Sovereignty**: Respecting national and community data governance

## Version History

| Version | Date | Changes |
|---------|------|---------|
| {{ VERSION }} | {{ VERSION_DATE }} | {{ VERSION_CHANGES }} |
| {{ PREV_VERSION }} | {{ PREV_DATE }} | {{ PREV_CHANGES }} |

---

**AfriGen-D Project**  
Enabling innovation in African genomics research  
[afrigen-d.org](https://afrigen-d.org)
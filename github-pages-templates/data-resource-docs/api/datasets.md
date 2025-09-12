# Datasets

This page provides a comprehensive catalog of all datasets available through {{ PROJECT_NAME }}.

## Dataset Summary

| Dataset | Samples | Populations | Data Type | Access Level | Size |
|---------|---------|-------------|-----------|--------------|------|
| {{ DATASET_1 }} | {{ SAMPLES_1 }} | {{ POPS_1 }} | {{ TYPE_1 }} | {{ ACCESS_1 }} | {{ SIZE_1 }} |
| {{ DATASET_2 }} | {{ SAMPLES_2 }} | {{ POPS_2 }} | {{ TYPE_2 }} | {{ ACCESS_2 }} | {{ SIZE_2 }} |
| {{ DATASET_3 }} | {{ SAMPLES_3 }} | {{ POPS_3 }} | {{ TYPE_3 }} | {{ ACCESS_3 }} | {{ SIZE_3 }} |

## Primary Datasets

### {{ DATASET_1_NAME }}

**Description:** {{ DATASET_1_DESCRIPTION }}

**Key Features:**
- **Sample Size**: {{ DATASET_1_SAMPLES }} individuals
- **Populations**: {{ DATASET_1_POPULATIONS }}
- **Data Types**: {{ DATASET_1_DATA_TYPES }}
- **Coverage**: {{ DATASET_1_COVERAGE }}
- **Build**: {{ DATASET_1_BUILD }}

**Files Available:**
```
{{ DATASET_1_ID }}/
├── genotypes/
│   ├── {{ DATASET_1_ID }}_chr1-22_GRCh38.vcf.gz
│   ├── {{ DATASET_1_ID }}_chrX_GRCh38.vcf.gz
│   └── {{ DATASET_1_ID }}_chrY_GRCh38.vcf.gz
├── metadata/
│   ├── sample_metadata.csv
│   ├── population_info.json
│   └── quality_metrics.txt
├── phenotypes/
│   └── phenotype_data.csv
└── documentation/
    ├── README.md
    ├── methods.pdf
    └── changelog.txt
```

**Download:**
```bash
# Download entire dataset
wget -r {{ DOWNLOAD_BASE_URL }}/{{ DATASET_1_ID }}/

# Download specific chromosome
wget {{ DOWNLOAD_BASE_URL }}/{{ DATASET_1_ID }}/genotypes/{{ DATASET_1_ID }}_chr22_GRCh38.vcf.gz
```

**Citation:**
```bibtex
@article{{{ DATASET_1_CITATION_KEY }},
  title={{{ DATASET_1_TITLE }}},
  author={{{ DATASET_1_AUTHORS }}},
  journal={{{ DATASET_1_JOURNAL }}},
  year={{{ DATASET_1_YEAR }}},
  doi={{{ DATASET_1_DOI }}}
}
```

### {{ DATASET_2_NAME }}

**Description:** {{ DATASET_2_DESCRIPTION }}

**Key Features:**
- **Sample Size**: {{ DATASET_2_SAMPLES }} individuals
- **Populations**: {{ DATASET_2_POPULATIONS }}
- **Data Types**: {{ DATASET_2_DATA_TYPES }}
- **Platform**: {{ DATASET_2_PLATFORM }}
- **Build**: {{ DATASET_2_BUILD }}

**Files Available:**
```
{{ DATASET_2_ID }}/
├── sequences/
│   ├── {{ DATASET_2_ID }}_sample_manifest.csv
│   └── fastq/
│       ├── sample1_R1.fastq.gz
│       └── sample1_R2.fastq.gz
├── alignments/
│   ├── sample1.bam
│   └── sample1.bam.bai
├── variants/
│   ├── {{ DATASET_2_ID }}_variants.vcf.gz
│   └── {{ DATASET_2_ID }}_variants.vcf.gz.tbi
└── qc/
    ├── multiqc_report.html
    └── sample_qc_metrics.csv
```

## Reference Datasets

### Population Reference Panels

#### African Genome Reference Panel (AGRP)
- **Populations**: {{ AGRP_POPULATIONS }}
- **Sample Size**: {{ AGRP_SAMPLES }}
- **Variants**: {{ AGRP_VARIANTS }}
- **Use Case**: Imputation reference for African populations

```bash
# Download AGRP
wget {{ DOWNLOAD_BASE_URL }}/references/AGRP/AGRP_v{{ AGRP_VERSION }}.tar.gz
```

#### {{ CUSTOM_REF_PANEL }}
- **Description**: {{ CUSTOM_REF_DESCRIPTION }}
- **Coverage**: {{ CUSTOM_REF_COVERAGE }}
- **Format**: {{ CUSTOM_REF_FORMAT }}

### Annotation Resources

#### Functional Annotations
```
annotations/
├── gene_annotations/
│   ├── gencode_v{{ GENCODE_VERSION }}_GRCh38.gtf.gz
│   └── refseq_GRCh38.gff3.gz
├── variant_annotations/
│   ├── dbSNP_v{{ DBSNP_VERSION }}.vcf.gz
│   ├── ClinVar_{{ CLINVAR_DATE }}.vcf.gz
│   └── gnomAD_v{{ GNOMAD_VERSION }}_AFR.vcf.gz
└── regulatory_elements/
    ├── ENCODE_regulatory_regions.bed.gz
    └── African_specific_regulatory.bed.gz
```

## Specialized Collections

### {{ COLLECTION_1_NAME }}
**Focus**: {{ COLLECTION_1_FOCUS }}
- Dataset 1: {{ COLLECTION_1_DATASET_1 }}
- Dataset 2: {{ COLLECTION_1_DATASET_2 }}
- Dataset 3: {{ COLLECTION_1_DATASET_3 }}

### {{ COLLECTION_2_NAME }}
**Focus**: {{ COLLECTION_2_FOCUS }}
- Dataset 1: {{ COLLECTION_2_DATASET_1 }}
- Dataset 2: {{ COLLECTION_2_DATASET_2 }}

## Data Access Matrix

| Dataset | Public | Controlled | Restricted | 
|---------|--------|------------|------------|
| {{ DATASET_1_ID }} | ✓ Variants | ✓ Phenotypes | ✗ |
| {{ DATASET_2_ID }} | ✓ Summary | ✓ Individual | ✓ Clinical |
| {{ DATASET_3_ID }} | ✓ All | ✗ | ✗ |

**Legend:**
- ✓ = Available at this access level
- ✗ = Not available at this access level

## Population Coverage

### West Africa
- **Yoruba (YRI)**: {{ YRI_SAMPLES }} samples across {{ YRI_DATASETS }} datasets
- **{{ WEST_POP_2 }}**: {{ WEST_POP_2_SAMPLES }} samples
- **{{ WEST_POP_3 }}**: {{ WEST_POP_3_SAMPLES }} samples

### East Africa
- **{{ EAST_POP_1 }}**: {{ EAST_POP_1_SAMPLES }} samples
- **{{ EAST_POP_2 }}**: {{ EAST_POP_2_SAMPLES }} samples

### Southern Africa
- **{{ SOUTH_POP_1 }}**: {{ SOUTH_POP_1_SAMPLES }} samples
- **{{ SOUTH_POP_2 }}**: {{ SOUTH_POP_2_SAMPLES }} samples

### North Africa
- **{{ NORTH_POP_1 }}**: {{ NORTH_POP_1_SAMPLES }} samples

## Data Statistics

### Overall Statistics
- **Total Samples**: {{ TOTAL_SAMPLES }}
- **Total Variants**: {{ TOTAL_VARIANTS }}
- **Genome Coverage**: {{ GENOME_COVERAGE }}
- **Data Volume**: {{ DATA_VOLUME }}

### Quality Metrics
- **Average Coverage**: {{ AVG_COVERAGE }}x
- **Variant Call Rate**: {{ CALL_RATE }}%
- **Ti/Tv Ratio**: {{ TI_TV_RATIO }}
- **Heterozygosity Rate**: {{ HET_RATE }}

## API Access

### RESTful API

List all datasets:
```bash
curl -X GET {{ API_ENDPOINT }}/datasets
```

Get dataset details:
```bash
curl -X GET {{ API_ENDPOINT }}/datasets/{{ DATASET_ID }}
```

Search datasets:
```bash
curl -X GET "{{ API_ENDPOINT }}/datasets/search?population=YRI&type=WGS"
```

### GraphQL API

Query datasets:
```graphql
query {
  datasets {
    id
    name
    description
    sampleCount
    populations
    dataTypes
    accessLevel
  }
}
```

Filter by population:
```graphql
query {
  datasets(population: "YRI") {
    id
    name
    variants {
      count
      build
    }
  }
}
```

## Programmatic Access

### Python Client

```python
import afrigen_d_client as adc

# Initialize client
client = adc.Client(api_key="your_api_key")

# List datasets
datasets = client.datasets.list()

# Get specific dataset
dataset = client.datasets.get("{{ DATASET_ID }}")

# Download data
client.download.dataset("{{ DATASET_ID }}", output_dir="./data/")
```

### R Client

```r
library(afrigendr)

# Connect to API
conn <- connect_afrigen_d(api_key = "your_api_key")

# List datasets
datasets <- list_datasets(conn)

# Get dataset metadata
metadata <- get_dataset_metadata(conn, "{{ DATASET_ID }}")

# Download data
download_dataset(conn, "{{ DATASET_ID }}", output_dir = "./data/")
```

## Update Schedule

Datasets are updated on a regular schedule:

- **Major Releases**: Annually (new datasets, major updates)
- **Minor Updates**: Quarterly (bug fixes, metadata updates)
- **Hotfixes**: As needed (critical issues)

**Latest Update**: {{ LAST_UPDATE_DATE }}
**Next Scheduled Update**: {{ NEXT_UPDATE_DATE }}

## Support

For dataset-specific questions:
- [GitHub Issues](https://github.com/AfriGen-D/{{ REPO_NAME }}/issues)
- [Dataset Forum]({{ FORUM_URL }})
- [Email Support](mailto:data-support@afrigen-d.org)
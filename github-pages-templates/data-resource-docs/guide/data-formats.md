# Data Formats

This guide describes the file formats used in {{ PROJECT_NAME }} datasets.

## Genomic Data Formats

### Variant Call Format (VCF)

All variant data is provided in standard VCF 4.2+ format:

```vcf
##fileformat=VCFv4.2
##reference=GRCh38
##contig=<ID=chr1,length=248956422>
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	Sample1	Sample2
chr1	1000	rs123	A	G	60	PASS	AC=2;AF=0.5	GT:DP:GQ	0/1:30:40	1/1:25:50
```

**Key Features:**
- Compressed with bgzip (.vcf.gz)
- Indexed with tabix (.vcf.gz.tbi)
- Chromosome notation: chr1, chr2, etc.
- Reference genome build specified in header

### FASTA Format

Reference sequences in standard FASTA format:

```fasta
>chr1 Homo sapiens chromosome 1, GRCh38
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
```

### FASTQ Format

Raw sequencing data in compressed FASTQ format:

```fastq
@read1/1
ATCGATCGATCGATCG
+
IIIIIIIIIIIIIIII
```

## Metadata Formats

### JSON Metadata

Dataset metadata in JSON format:

```json
{
  "dataset_id": "{{ EXAMPLE_DATASET_ID }}",
  "name": "{{ DATASET_NAME }}",
  "description": "{{ DATASET_DESCRIPTION }}",
  "version": "{{ VERSION }}",
  "samples": [
    {
      "sample_id": "{{ SAMPLE_ID }}",
      "population": "{{ POPULATION }}",
      "sex": "{{ SEX }}",
      "age": {{ AGE }},
      "country": "{{ COUNTRY }}"
    }
  ]
}
```

### CSV Sample Information

Sample metadata in CSV format:

```csv
sample_id,population,sex,age,country,sequencing_platform,coverage
{{ SAMPLE_1 }},{{ POP_1 }},{{ SEX_1 }},{{ AGE_1 }},{{ COUNTRY_1 }},{{ PLATFORM_1 }},{{ COV_1 }}
{{ SAMPLE_2 }},{{ POP_2 }},{{ SEX_2 }},{{ AGE_2 }},{{ COUNTRY_2 }},{{ PLATFORM_2 }},{{ COV_2 }}
```

## File Organization

### Dataset Structure

```
{{ DATASET_ID }}/
├── genotypes/
│   ├── {{ DATASET_ID }}_chr1.vcf.gz
│   ├── {{ DATASET_ID }}_chr1.vcf.gz.tbi
│   └── ...
├── metadata/
│   ├── dataset_metadata.json
│   ├── sample_metadata.csv
│   └── quality_metrics.txt
├── documentation/
│   ├── README.md
│   ├── methods.pdf
│   └── changelog.txt
└── checksums.md5
```

### Naming Conventions

**Files:**
- `{dataset}_{chromosome}_{build}.vcf.gz`
- `{dataset}_metadata.{format}`
- `{dataset}_README.md`

**Samples:**
- Population prefix + numeric ID
- Example: YRI001, LWK002, etc.

## Quality Control Files

### QC Metrics

```txt
Sample	Total_Variants	Ti_Tv_Ratio	Het_Hom_Ratio	Missing_Rate
{{ SAMPLE_1 }}	{{ VARS_1 }}	{{ TITV_1 }}	{{ HETHOM_1 }}	{{ MISS_1 }}
{{ SAMPLE_2 }}	{{ VARS_2 }}	{{ TITV_2 }}	{{ HETHOM_2 }}	{{ MISS_2 }}
```

### MultiQC Reports

HTML reports with comprehensive QC metrics and visualizations.
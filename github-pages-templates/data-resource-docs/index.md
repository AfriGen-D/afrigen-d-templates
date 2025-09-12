---
layout: home

hero:
  name: "{{ PROJECT_NAME }}"
  text: "{{ HERO_TEXT }}"
  tagline: "{{ PROJECT_TAGLINE }}"
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Browse Data
      link: /api/datasets

features:
  - icon: 🌍
    title: African Populations
    details: Comprehensive genomic datasets representing diverse African populations and ethnic groups.
  - icon: 📊
    title: High-Quality Data
    details: Rigorously quality-controlled datasets with comprehensive metadata and provenance.
  - icon: 🔓
    title: Open Access
    details: Freely available data following FAIR principles and ethical guidelines.
  - icon: 🧬
    title: Multiple Data Types
    details: {{ DATA_TYPES_DESCRIPTION }}
  - icon: 🌐
    title: Cloud-Ready
    details: Available on major cloud platforms for scalable analysis.
  - icon: 📖
    title: Well Documented
    details: Comprehensive documentation, tutorials, and usage examples.
---

## Dataset Overview

{{ PROJECT_NAME }} provides:

- **{{ DATASET_COUNT }}** curated genomic datasets
- **{{ SAMPLE_COUNT }}** individual samples
- **{{ POPULATION_COUNT }}** African populations represented
- **{{ DATA_VOLUME }}** of genomic data

## Data Types

### Primary Datasets

- **Whole Genome Sequencing (WGS)**: {{ WGS_DESCRIPTION }}
- **Whole Exome Sequencing (WES)**: {{ WES_DESCRIPTION }}
- **Genotyping Arrays**: {{ ARRAY_DESCRIPTION }}
- **{{ CUSTOM_DATA_TYPE }}**: {{ CUSTOM_DESCRIPTION }}

### Reference Resources

- **Population References**: {{ POP_REF_DESCRIPTION }}
- **Variant Catalogs**: {{ VARIANT_CATALOG_DESCRIPTION }}
- **Annotation Resources**: {{ ANNOTATION_DESCRIPTION }}

## Quick Access

### Browse Datasets
```bash
# List available datasets
curl -s {{ API_ENDPOINT }}/datasets | jq '.'

# Get dataset metadata
curl -s {{ API_ENDPOINT }}/datasets/{{ DATASET_ID }} | jq '.'
```

### Download Examples
```bash
# Download single file
wget {{ DOWNLOAD_BASE_URL }}/{{ EXAMPLE_FILE }}

# Download dataset manifest
wget {{ DOWNLOAD_BASE_URL }}/{{ EXAMPLE_DATASET }}/manifest.txt
```

## Documentation

- [Getting Started](/guide/getting-started) - Access and download instructions
- [Data Formats](/guide/data-formats) - File formats and standards
- [Datasets](/api/datasets) - Complete dataset catalog
- [Examples](/examples/) - Usage examples and tutorials

## Data Governance

- **Ethical Approval**: All datasets have appropriate ethical clearance
- **Consent**: Participants provided informed consent for data sharing
- **Privacy**: Individual privacy protected through anonymization
- **Attribution**: Please cite our work when using these resources

## Citation

If you use {{ PROJECT_NAME }} in your research, please cite:

```bibtex
@article{{{ CITATION_KEY }},
  title={{{ CITATION_TITLE }}},
  author={{{ CITATION_AUTHORS }}},
  journal={{{ CITATION_JOURNAL }}},
  year={{{ CITATION_YEAR }}},
  doi={{{ CITATION_DOI }}}
}
```

## Support

- [Documentation](/guide/) - Comprehensive usage guides
- [GitHub Issues](https://github.com/AfriGen-D/{{ REPO_NAME }}/issues) - Technical support
- [Helpdesk](https://helpdesk.afrigen-d.org) - General inquiries
- [AfriGen-D](https://afrigen-d.org) - Project homepage
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
      text: View on GitHub
      link: https://github.com/AfriGen-D/{{ REPO_NAME }}

features:
  - icon: 🧬
    title: Population-Specific Analysis
    details: Optimized algorithms and reference data for African genomics research.
  - icon: ⚡
    title: High Performance  
    details: Efficient processing of large-scale genomic datasets.
  - icon: 📊
    title: Comprehensive Reports
    details: Generate publication-ready visualizations and reports.
---

## Quick Start

Install and run your first analysis:

```bash
# Install
npm install {{ PACKAGE_NAME }}

# Basic usage
{{ COMMAND_NAME }} --input data.vcf.gz --output results/
```

## Documentation

- [Getting Started](/guide/getting-started) - Installation and setup
- [API Reference](/api/) - Complete command reference  
- [Examples](/examples/) - Usage examples and tutorials

## Support

- [GitHub Issues](https://github.com/AfriGen-D/{{ REPO_NAME }}/issues)
- [Helpdesk](https://helpdesk.afrigen-d.org)
- [AfriGen-D](https://afrigen-d.org)
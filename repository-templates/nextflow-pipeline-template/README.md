<div align="center">
  <img src="https://raw.githubusercontent.com/AfriGen-D/afrigen-d-templates/main/assets/afrigen-d-logo.png" alt="AfriGen-D Logo" width="200" />
  <h1>{{ PIPELINE_NAME }}</h1>
</div>

<div align="center">

[![Nextflow](https://img.shields.io/badge/nextflow%20DSL2-%E2%89%A523.04.0-23aa62.svg)](https://www.nextflow.io/)
[![run with conda](http://img.shields.io/badge/run%20with-conda-3EB049?labelColor=000000&logo=anaconda)](https://docs.conda.io/en/latest/)
[![run with docker](https://img.shields.io/badge/run%20with-docker-0db7ed?labelColor=000000&logo=docker)](https://www.docker.com/)
[![run with singularity](https://img.shields.io/badge/run%20with-singularity-1d355c.svg?labelColor=000000)](https://sylabs.io/docs/)
[![Launch on Nextflow Tower](https://img.shields.io/badge/Launch%20%F0%9F%9A%80-Nextflow%20Tower-%234256e7)](https://tower.nf/launch?pipeline=AfriGen-D/{{ REPO_NAME }})

</div>

## Introduction

{{ PIPELINE_NAME }} is a bioinformatics best-practice analysis pipeline for {{ ANALYSIS_TYPE }}. The pipeline is designed to work with {{ DATA_TYPE }} and produces {{ OUTPUT_DESCRIPTION }}.

The pipeline is built using [Nextflow](https://www.nextflow.io), a workflow tool to run tasks across multiple compute environments in a very portable manner. It uses Docker/Singularity containers making installation trivial and results highly reproducible.

## Pipeline summary

{{ PIPELINE_NAME }} performs the following steps:

1. **Quality Control** - Assess data quality and generate reports
2. **{{ STEP_2 }}** - {{ STEP_2_DESCRIPTION }}
3. **{{ STEP_3 }}** - {{ STEP_3_DESCRIPTION }}
4. **{{ STEP_4 }}** - {{ STEP_4_DESCRIPTION }}
5. **Results Aggregation** - Combine outputs and generate final reports
6. **MultiQC** - Aggregate analysis reports

## Quick Start

1. Install [`Nextflow`](https://www.nextflow.io/docs/latest/getstarted.html#installation) (`>=23.04.0`)

2. Install any of [`Docker`](https://docs.docker.com/engine/installation/), [`Singularity`](https://www.sylabs.io/guides/3.0/user-guide/) (you can follow [this tutorial](https://singularity-tutorial.github.io/01-installation/)), [`Podman`](https://podman.io/), [`Shifter`](https://nersc.gitlab.io/development/shifter/how-to-use/) or [`Charliecloud`](https://hpc.github.io/charliecloud/) for full pipeline reproducibility

3. Download the pipeline and test it on a minimal dataset with a single command:

   ```bash
   nextflow run AfriGen-D/{{ REPO_NAME }} -profile test,docker --outdir results
   ```

   Note that some form of configuration will be needed so that Nextflow knows how to fetch the required software. This is usually done in the form of a config profile (`YOURPROFILE` in the example command above). You can chain multiple config profiles in a comma-separated string.

4. Start running your own analysis!

   ```bash
   nextflow run AfriGen-D/{{ REPO_NAME }} \
       --input samplesheet.csv \
       --{{ MAIN_PARAM }} {{ PARAM_VALUE }} \
       --outdir results \
       -profile <docker/singularity/podman/shifter/charliecloud/conda/institute>
   ```

## Documentation

The {{ PIPELINE_NAME }} pipeline comes with documentation about the pipeline: [usage](docs/usage.md) and [output](docs/output.md).

## Parameters

### Input/output options

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|------|---------|----------|--------|
| `--input` | Path to comma-separated file containing information about the samples | `string` | | True | |
| `--outdir` | The output directory where the results will be saved | `string` | `./results` | True | |
| `--email` | Email address for completion summary | `string` | | | |

### {{ CATEGORY_1 }} options

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|------|---------|----------|--------|
| `--{{ PARAM_1 }}` | {{ PARAM_1_DESCRIPTION }} | `{{ TYPE_1 }}` | `{{ DEFAULT_1 }}` | | |
| `--{{ PARAM_2 }}` | {{ PARAM_2_DESCRIPTION }} | `{{ TYPE_2 }}` | `{{ DEFAULT_2 }}` | | |

### Reference genome options

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|------|---------|----------|--------|
| `--genome` | Name of iGenomes reference | `string` | | | |
| `--fasta` | Path to FASTA genome file | `string` | | | |

### Institutional config options

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|------|---------|----------|--------|
| `--custom_config_version` | Git commit id for Institutional configs | `string` | `master` | | True |
| `--custom_config_base` | Base directory for Institutional configs | `string` | `https://raw.githubusercontent.com/nf-core/configs/master` | | True |
| `--config_profile_name` | Institutional config name | `string` | | | True |
| `--config_profile_description` | Institutional config description | `string` | | | True |

## Credits

{{ PIPELINE_NAME }} was originally written by {{ AUTHOR_NAMES }}.

We thank the following people for their extensive assistance in the development of this pipeline:

- {{ CONTRIBUTOR_1 }}
- {{ CONTRIBUTOR_2 }}
- {{ CONTRIBUTOR_3 }}

## Contributions and Support

If you would like to contribute to this pipeline, please see the [contributing guidelines](.github/CONTRIBUTING.md).

For further information or help, don't hesitate to get in touch on the [AfriGen-D discussions](https://github.com/orgs/AfriGen-D/discussions) or visit our [helpdesk](https://helpdesk.afrigen-d.org).

## Citations

If you use {{ PIPELINE_NAME }} for your analysis, please cite it using the following doi: [{{ DOI }}](https://doi.org/{{ DOI }})

An extensive list of references for the tools used by the pipeline can be found in the [`CITATIONS.md`](CITATIONS.md) file.

This pipeline uses code and infrastructure developed and maintained by the [nf-core](https://nf-co.re) initative, and reused here under the [MIT license](https://github.com/nf-core/tools/blob/master/LICENSE).

> **The nf-core framework for community-curated bioinformatics pipelines.**
>
> Philip Ewels, Alexander Peltzer, Sven Fillinger, Holger Hoeft, Johannes Alneberg, Maxime Ulysse Garcia, Paolo Di Tommaso & Sven Nahnsen.
>
> _Nat Biotechnol._ 2020 Feb 13. doi: [10.1038/s41587-020-0439-x](https://dx.doi.org/10.1038/s41587-020-0439-x).
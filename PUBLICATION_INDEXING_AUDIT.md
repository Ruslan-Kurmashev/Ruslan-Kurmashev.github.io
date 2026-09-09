# Publication indexing audit

Automated structural audit against the core Google Scholar webmaster requirements: one URL per work, bibliographic Highwire meta tags, crawlable HTML, canonical URLs, visible scholarly content, and local PDF linkage where a local full-text file exists.

- Publication pages checked: **21**
- PASS: **13**
- WARN: **8**
- FAIL: **0**
- robots.txt present: **yes**
- sitemap declared in robots.txt: **yes**
- Publication URLs missing from sitemap: **0**

| Publication | Status | Authors | Journal/conf | DOI | Local PDF | Abstract | Issues |
|---|---:|---:|---:|---:|---:|---:|---|
| `age-moderation-abide` | PASS | 1 | yes | yes | 1 | yes | — |
| `comparative-duodenum-pancreas-anatomy` | WARN | 4 | yes | no | 0 | no | no visible Abstract heading and no local full-text PDF |
| `cortical-transcriptomics-asd` | PASS | 1 | yes | yes | 1 | yes | — |
| `covid19-acute-abdomen` | WARN | 6 | yes | no | 0 | no | no visible Abstract heading and no local full-text PDF |
| `early-autism-identification` | PASS | 2 | yes | yes | 1 | yes | — |
| `femur-anthropometry` | WARN | 3 | yes | no | 0 | no | no visible Abstract heading and no local full-text PDF |
| `hip-joint-anatomy` | WARN | 3 | yes | no | 0 | no | no visible Abstract heading and no local full-text PDF |
| `kidney-transplantation-case` | PASS | 10 | yes | no | 0 | yes | — |
| `latent-tuberculosis-biomarkers` | PASS | 6 | yes | no | 0 | yes | — |
| `mesenteric-lymph-node-portal-vein` | WARN | 2 | yes | no | 0 | no | no visible Abstract heading and no local full-text PDF |
| `pediatric-appendicitis-under-five` | WARN | 2 | yes | no | 0 | no | no visible Abstract heading and no local full-text PDF |
| `peptic-ulcer-perforation-risk-factors` | WARN | 3 | yes | no | 0 | no | no visible Abstract heading and no local full-text PDF |
| `piperidine-local-anesthesia` | PASS | 7 | yes | no | 0 | yes | — |
| `qchat-behavioral-domains` | PASS | 1 | yes | yes | 1 | yes | — |
| `salivary-rna-autism` | PASS | 1 | yes | yes | 0 | yes | — |
| `screening-not-diagnosis-conference` | PASS | 1 | yes | no | 0 | yes | — |
| `toe-to-hand-transfer-principles` | WARN | 1 | yes | no | 0 | no | no visible Abstract heading and no local full-text PDF |
| `transcriptomic-convergence-asd` | PASS | 1 | yes | yes | 1 | yes | — |
| `transcriptomic-signatures-asd` | PASS | 1 | yes | yes | 1 | yes | — |
| `transfer-learning-autism` | PASS | 4 | no | yes | 1 | yes | — |
| `ube3a-dosage-autism` | PASS | 1 | yes | yes | 1 | yes | — |

## Interpretation
A PASS means the page satisfies this structural audit. It does not guarantee inclusion or ranking in Google Scholar. A WARN usually means the minimum bibliographic tags are present but discoverability can be improved. A FAIL means at least one core structural requirement is missing.

Generated automatically by `.github/workflows/audit-scholar-indexing.yml`.

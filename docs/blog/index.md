---
title: Blog
---

<script setup>
import papers from './paper.json'

const sortedPapers = [...papers].sort((a, b) =>
  b.year - a.year || a.label.localeCompare(b.label)
)
</script>

<details id="choosing-a-text-anonymization-model" class="blog-post">
  <summary class="blog-post__summary">
    <span class="blog-post__tag">Text Anonymization</span>
    <span class="blog-post__title">Choosing a Text Anonymization Model</span>
    <span class="blog-post__meta">
      <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> 15 October 2026</span>
      <span><i class="fa-regular fa-user" aria-hidden="true"></i> Tim Wolf</span>
    </span>
    <span class="blog-post__excerpt">A comparison of OpenMed Nemotron, OpenAI Privacy Filter, and BardsAI using TAB, SPIA, and RAT-Bench.</span>
    <span class="blog-post__action">
      <span class="blog-post__read"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Read article</span>
      <span class="blog-post__close"><i class="fa-solid fa-chevron-up" aria-hidden="true"></i> Close article</span>
    </span>
  </summary>
  <article class="blog-post__content">

<p class="blog-meta"><i class="fa-regular fa-calendar" aria-hidden="true"></i> 15 October 2026 · <i class="fa-regular fa-user" aria-hidden="true"></i> Tim Wolf</p>

Text anonymization helps protect personal information while keeping documents
useful for research and analysis. The challenge is deciding what to remove:
too little can leave people identifiable, while too much can erase valuable
context. This post compares the three models available in `duui-anonymize` using
results from TAB, SPIA, and RAT-Bench to help you choose the right model for your task.

Our evaluation uses three complementary benchmarks: 
**[TAB](https://aclanthology.org/2022.cl-4.19/)** measures removal of annotated identifiers, 
**[SPIA](https://aclanthology.org/2026.acl-long.778/)** tests which personal attributes an attacker can still infer, and 
**[RAT-Bench](https://arxiv.org/abs/2602.12806)** measures whether recovered information enables re-identification.

## Which model fits your task?

| Model                                                                          | Choose it when…                                                                         | Benchmark evidence                                                                                                                                                                                             | Main trade-off                                                                                                                             |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| **[OpenMed Nemotron](https://huggingface.co/OpenMed/privacy-filter-nemotron)** | You prioritize broad identifier removal and resistance to re-identification.            | Highest TAB token recall (**70.2%**) and quasi-identifier recall (**62.8%**); lowest RAT-Bench explicit re-identification rate (**49.8%**).                                                                    | Changes more text: BLEU **0.8930**, versus **0.9695** for OpenAI.                                                                          |
| **[OpenAI Privacy Filter](https://huggingface.co/openai/privacy-filter)**      | You prioritize preserving wording and limiting removal of non PII-text.                 | Highest TAB token precision (**91.6%**) and RAT-Bench BLEU (**0.9695**); explicit re-identification **66.7%**.                                                                                                 | Misses more identifiers: TAB token recall **33.1%** and quasi-identifier recall **26.5%**.                                                 |
| **[BardsAI](https://huggingface.co/bardsai/eu-pii-anonimization-multilang)**   | Your main goal is protection against personal-attribute inference, as measured by SPIA. | Highest mean SPIA protection across all tested dataset–attacker combinations; with GPT-OSS-120B attacking, CPR is **45.5% on TAB** and **71.3% on PANORAMA**. Highest TAB direct-identifier recall (**85.7%**). | Weak protection against explicit profile linkage in RAT-Bench: **90.3%** re-identification, compared with **93.2%** without anonymization. |

TAB recall measures how much annotated identifying information is removed; 
precision measures how much removed text matches those annotations. 
Higher SPIA Collective Protection Rate (CPR) means stronger protection 
against attribute inference. Lower RAT-Bench re-identification is better. 
BLEU measures overlap with the original wording,

## Conclusion 
OpenMed provides the most consistent privacy protection, based on its TAB and RAT-Bench results. 
OpenAI preserves the text most effectively but leaves more identifiers recoverable. 
BardsAI achieves the highest protection rates in SPIA, 
but its SPIA advantage does not translate into strong protection against profile linkage.

The hardest case remains contextual identification. On RAT-Bench’s implicit-identifier level, 
re-identification was **36.3% without anonymization** and **32.0–35.3% after anonymization**. 
None of the three substantially addressed this risk in the evaluation.


<details class="bibtex-group">
  <summary>
    <span><i class="fa-solid fa-book" aria-hidden="true"></i> BibTeX references</span>
    <span class="bibtex-group__hint">{{ sortedPapers.length }} entries</span>
  </summary>
  <div class="bibtex-group__content">
    <div class="reference-actions">
      <a class="spp-link" href="../references/choosing-text-anonymization-models.bib" download>
        <i class="fa-solid fa-download" aria-hidden="true"></i>
        Download all BibTeX entries
      </a>
    </div>
    <div class="reference-list">
      <details
        v-for="paper in sortedPapers"
        :id="paper.id"
        :key="paper.id"
        class="bibtex-disclosure"
      >
        <summary>{{ paper.label }}</summary>
        <pre class="reference-entry__bibtex"><code>{{ paper.bibtex }}</code></pre>
      </details>
    </div>
  </div>
</details>

  </article>
</details>

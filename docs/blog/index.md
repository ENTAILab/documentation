---
title: Blog
---

<script setup>
import papers from './paper.json'

const sortedPapers = [...papers].sort((a, b) =>
  b.year - a.year || a.label.localeCompare(b.label)
)
</script>

<details id="anonymizing-research-data-in-duui" class="blog-post">
  <summary class="blog-post__summary">
    <span class="blog-post__tag">Anonymization</span>
    <span class="blog-post__title">Anonymizing Research Data in DUUI: Text, Voices, Faces and Video</span>
    <span class="blog-post__meta">
      <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> 23 October 2026</span>
      <span><i class="fa-regular fa-user" aria-hidden="true"></i> Ali Abusaleh</span>
    </span>
    <span class="blog-post__excerpt">How CIRCLET protects people in social-science data: PII redaction in text, synthetic voices for speech, and diffusion-based face anonymization for images and video.</span>
    <span class="blog-post__action">
      <span class="blog-post__read"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Read article</span>
      <span class="blog-post__close"><i class="fa-solid fa-chevron-up" aria-hidden="true"></i> Close article</span>
    </span>
  </summary>
  <article class="blog-post__content">

<p class="blog-meta"><i class="fa-regular fa-calendar" aria-hidden="true"></i> 23 October 2026 · <i class="fa-regular fa-user" aria-hidden="true"></i> Ali Abusaleh</p>

Social-science data is full of people. Open survey answers mention names and
employers, interviews carry voices that identify the speaker, and photo and video
answers show faces. Before such data can be shared, reused or analysed with external
models, the people in it need protecting, while the data stays useful for research.

In ENTAILab's CIRCLET infrastructure this is handled by a set of
[DUUI](https://github.com/texttechnologylab/DockerUnifiedUIMAInterface) components,
one per modality. Because they are ordinary DUUI components, a project can place
anonymization at the start of any pipeline, before transcription, topic modeling or a
vision-language model ever sees the raw data.

| Modality       | Component                                                                                                                  | Approach                                                             |
|----------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| Text           | [duui-anonymize](https://github.com/texttechnologylab/duui-uima/tree/main/duui-anonymize)                                 | PII detection and redaction with token-classification models         |
| Speech         | [duui-speaker-anonymization](https://github.com/texttechnologylab/duui-uima/tree/main/duui-speaker-anonymization)         | Transcribe, replace the speaker identity, re-synthesize the voice    |
| Images & video | [duui-face_anon](https://github.com/texttechnologylab/duui-uima/tree/main/duui-face_anon)                                 | Diffusion-based face anonymization, or blur, blackout and pixelation |

## Text: duui-anonymize

`duui-anonymize` is a FastAPI service that receives text from DUUI through a Lua
communication script, detects spans of personal information, and writes them back as
annotations with character offsets and a category. It also adds a second view of the
document holding the redacted text, so later pipeline steps can work on the redacted
version while the original stays in its own view.

No single model is best at everything, so the component offers three, selected per pipeline:

| Model                                                                                              | Labels                | Languages       | Use it for                                              |
|----------------------------------------------------------------------------------------------------|-----------------------|-----------------|---------------------------------------------------------|
| [`openai/privacy-filter`](https://huggingface.co/openai/privacy-filter) (default)                  | 8 broad categories    | English         | Keeping as much of the original wording as possible     |
| [`OpenMed/privacy-filter-nemotron`](https://huggingface.co/OpenMed/privacy-filter-nemotron)        | 55 fine-grained types | English         | Broad identifier removal, e.g. first vs. last names     |
| [`bardsai/eu-pii-anonimization-multilang`](https://huggingface.co/bardsai/eu-pii-anonimization-multilang) | 36 GDPR categories    | 24 EU languages | Multilingual data and GDPR Art. 9 special categories    |

Spans can be replaced with placeholders such as `[private_person]` or removed entirely.
The service can analyse a selected window of the document instead of the whole text,
ships CPU and CUDA images, and is covered by unit tests plus Java integration tests on
German and English samples.

### How the three models compare

The models were evaluated on TAB, SPIA and RAT-Bench; the full results are in
[Choosing a Text Anonymization Model](#choosing-a-text-anonymization-model). In short:

- **OpenMed Nemotron** removes the most: TAB token recall of 70.2% and the lowest explicit
  re-identification rate on RAT-Bench (49.8%), at the cost of changing more text (BLEU 0.893).
- **OpenAI Privacy Filter** preserves the wording best (BLEU 0.970, precision 91.6%) but
  misses more identifiers (recall 33.1%).
- **BardsAI** protects best against attribute inference on SPIA, but barely against explicit
  profile linkage (90.3% re-identification, versus 93.2% without anonymization).

The hardest case is identification from context. On RAT-Bench's implicit level,
re-identification fell only from 36.3% to 32.0–35.3%, and no model solved it. This is
the limit of span-level redaction, and the reason the model choice is left to each
project rather than fixed.

## Speech: duui-speaker-anonymization

A voice is biometric data: removing names from a transcript is not enough if the
recording itself is shared. The component builds on the
[IMS speaker-anonymization](https://github.com/DigitalPhonetics/speaker-anonymization/)
pipeline. It transcribes the audio with Whisper large-v3, replaces the speaker embedding
with an artificial one generated by a GAN, and re-synthesizes the content with IMS-Toucan
in the new voice. What was said is kept; who said it is not. Supported languages are
English, German, French, Italian, Spanish, Portuguese, Dutch, Polish and Russian.

## Faces in images and video: duui-face_anon

The component builds on
[Face Anonymization Made Simple](https://github.com/hanweikung/face_anon_simple).
A diffusion model (Stable Diffusion 2.1 with CLIP ViT-L/14 conditioning) generates a
different face that keeps the original pose and expression, for one face or many.
The degree of anonymization is adjustable, and a fixed seed makes results reproducible.
Where generation is not wanted, faces can instead be blurred, blacked out or pixelated,
at scopes from half the face to the whole head.

For video, the component samples frames either uniformly (every Nth frame) or adaptively,
choosing representative frames per time segment, so long recordings remain affordable to process.

## Why components, not a single tool

Projects in the programme mix modalities differently: one has only open text answers,
another has video interviews. Separate components let each project compose only what it
needs, in a pipeline that is documented and repeatable.

<div class="info-panel">
<p class="info-panel__title">Anonymize first</p>
<p class="info-panel__body">A typical pipeline anonymizes first, then transcribes or analyses. Every later step, including vision-language models, then works only on protected data.</p>
</div>

## Contributors and code

`duui-anonymize` was developed by [Ali Abusaleh](https://www.texttechnologylab.org/team/ali-abusaleh/).
`duui-speaker-anonymization` was developed by Tim Wolf, and `duui-face_anon` by Tim Wolf and
Coco Sittardt, both under the supervision of
[Ali Abusaleh](https://www.texttechnologylab.org/team/ali-abusaleh/) and
[Giuseppe Abrami](https://www.texttechnologylab.org/team/giuseppe-abrami/).
All three components are available in
[texttechnologylab/duui-uima](https://github.com/texttechnologylab/duui-uima).

  </article>
</details>

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

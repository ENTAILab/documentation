<script setup>
import papers from './paper.json'
import NewsAside from './NewsAside.vue'
import NewsSection from './NewsSection.vue'
import EmployeesSection from './EmployeesSection.vue'
import DuuiComponents from './DuuiComponents.vue'
import ProjectPipelines from './ProjectPipelines.vue'

const sortedPapers = [...papers].sort(
  (left, right) => right.year - left.year || left.label.localeCompare(right.label)
)
</script>

# Measure 2 devs - Research-Driven Infrastructure for Advanced Survey-Related Data (CIRCLET)

<aside class="hosting-banner" aria-label="Hosting information">
  <a class="hosting-banner__logo-link" href="https://www.texttechnologylab.org/" target="_blank" rel="noreferrer" aria-label="Text Technology Lab website"><img class="hosting-banner__logo" src="/ttlab.png" alt="TTLab" /></a>
  <span>This website is hosted and provided by the <a href="https://www.texttechnologylab.org/" target="_blank" rel="noreferrer">Text Technology Lab (TTLab)</a> at Goethe University Frankfurt.</span>
</aside>

<section class="home-intro">
  <p class="home-intro__eyebrow">Measure 2 devs - CIRCLET Documentation</p>
<p class="home-intro__lead">CIRCLET provides the research-driven infrastructure for processing, analyzing, and integrating advanced survey-related data within ENTAILab.</p>
</section>

<NewsAside />

<div class="info-panel">
<p class="info-panel__title">Infrastructure for advanced survey-related data</p>
<p class="info-panel__body">Built on DUUI, CIRCLET supports scalable and reproducible analysis of heterogeneous data sources, including textual data, multimodal material such as images, audio, and video, as well as behavioral observations.</p>
</div>

<section class="home-section" aria-labelledby="related-links">
<h2 id="related-links" class="home-section__title">Related Links</h2>
<div class="related-link-list">
  <a class="related-link-card" href="https://www.new-data-spaces.de/en-us/" target="_blank" rel="noreferrer">
    <span class="related-link-card__label">SPP 2431 &middot; New Data Spaces</span>
    <span class="related-link-card__title">New Data Spaces for the Social Sciences (SPP 2431)</span>
    <span class="related-link-card__description">Visit the official SPP 2431 service website for programme-level information, projects, and context around ENTAILab.</span>
    <span class="related-link-card__footer">
      <span class="related-link-card__action">Open SPP 2431</span>
      <span class="related-link-card__domain">www.new-data-spaces.de</span>
    </span>
  </a>
  <a class="related-link-card" href="http://spp.texttechnologylab.org/" target="_blank" rel="noreferrer">
    <span class="related-link-card__label">SPP 2431 &middot; New Data Spaces</span>
    <span class="related-link-card__title">CIRCLET Updates: Updates from the Text Technology Lab</span>
    <span class="related-link-card__description">Browse updates, resources, and developments carried out by Measure 2 (CIRCLET) of ENTAILab for the New Data Spaces initiative.</span>
    <span class="related-link-card__footer">
      <span class="related-link-card__action">Open TTLab CIRCLET Updates</span>
      <span class="related-link-card__domain">spp.texttechnologylab.org</span>
    </span>
  </a>
</div>
</section>

<section class="intro-text-section" aria-labelledby="circlet-introduction">
<h2 id="circlet-introduction" class="intro-text-section__title">Introduction</h2>
<p>
  The infrastructure enables researchers to combine computational methods with domain-specific expertise in a shared analytical environment. It supports the integration of AI-based methods for tasks such as annotation, classification, interpretation, model fine-tuning, and in-context learning. This makes CIRCLET suitable for workflows ranging from individual case studies to large-scale and distributed data processing.
</p>

<p>
  CIRCLET is guided by the principles of interoperability, reusability, extensibility, validity, and reproducibility. Analytical tools and methods are packaged as modular, containerized pipeline components and orchestrated through DUUI. These workflows can be documented, repeated, extended, and reused across projects, making research processes more transparent and sustainable.
</p>
</section>

<section class="software-section" aria-labelledby="circlet-software">
<h2 id="circlet-software" class="software-section__title">Software Provided, Hosted, and Adapted by CIRCLET</h2>

<p>
  CIRCLET follows a project-driven development approach by working closely with individual SPP projects to solve project-specific tasks. At the same time, it aims to generalize and reuse the resulting solutions across the SPP. This allows CIRCLET to remain closely oriented toward the needs of individual projects while also adopting a cross-project perspective.
</p>

<p>
  With CIRCLET's support, projects should be able to adopt and apply state-of-the-art methods, particularly AI-based methods. This supports technology transfer from outside the SPP into individual projects. Conversely, innovations developed within individual projects can be made available for reuse by other projects, enabling technology transfer within and beyond the SPP.
</p>

<div class="circlet-table-figure circlet-table-figure--compact" id="table-software" aria-labelledby="table-software-caption">
  <p id="table-software-caption" class="circlet-table-caption">Table 1. Software provided, hosted, and adapted by CIRCLET.</p>
  <div class="system-table" aria-label="Software provided, hosted, and adapted by CIRCLET">
    <div class="system-table__row system-table__row--head">
      <span aria-label="System number"></span>
      <span>Provided System</span>
      <span>Year</span>
    </div>
    <div class="system-table__row">
      <span class="system-index">1</span>
      <span class="system-code">Open WebUI</span>
      <span>2025</span>
    </div>
    <div class="system-table__row">
      <span class="system-index">2</span>
      <span class="system-code">ollama-Server</span>
      <span>2025</span>
    </div>
    <div class="system-table__row">
      <span class="system-index">3</span>
      <span class="system-code">JupyterHub</span>
      <span>2026</span>
    </div>
    <div class="system-table__row">
      <span class="system-index">4</span>
      <span class="system-code">Slurm</span>
      <span>2026</span>
    </div>
  </div>
  <p class="circlet-table-note"><sup>&#8224;</sup>To be released soon.</p>
</div>

<div class="table-separator" aria-hidden="true"></div>

<ProjectPipelines />

  <p>
    As shown in Table 1, CIRCLET provides, hosts, and adapts software components for shared use across the SPP. This includes Open WebUI, which provides unified and standardized access to Ollama instances and is suitable for web-based prototyping and API-based NLP tasks. JupyterHub enables the dedicated execution of isolated Jupyter notebooks and can be used as a web-based, interactive development environment for Python-based code and data. Similar to Google Colab, it uses local resources and GPUs, allowing users to prototype and evaluate applications before integrating them into big data infrastructures such as DUUI. Slurm is a high-performance computing solution that enables the distribution and shared, fair use of CPU and GPU resources within a cluster; it can be used both through Jupyter notebooks and via DUUI (<a class="citation-link" href="#reference-zhou-2026">Zhou, Abrami, and Mehler, 2026</a>).
  </p>

  <p>
    The project cards summarize pipelines developed through collaborations with individual SPP projects.
  </p>

</section>

<section class="scalability-section" aria-labelledby="circlet-scalability">
  <h2 id="circlet-scalability" class="software-section__title">Computational Scalability (DUUI)</h2>

  <p>
    CIRCLET has contributed to standardizing the use of tools and systems for natural language processing and multimodal computing, including text (<a class="citation-link" href="#reference-wigbels-2026">Wigbels et al., 2026</a>), image (<a class="citation-link" href="https://doi.org/10.1145/3795513.3807426" target="_blank" rel="noreferrer">Weiss et al., 2026</a>), and video processing (<a class="citation-link" href="https://aclanthology.org/2025.konvens-1.22/" target="_blank" rel="noreferrer">Bundan, Abrami, and Mehler, 2025</a>).
  </p>

  <p>
    This standardization has been implemented through DUUI, the Docker Unified UIMA Interface (<a class="citation-link" href="https://aclanthology.org/2023.findings-emnlp.29" target="_blank" rel="noreferrer">Leonhardt et al., 2023</a>). DUUI provides an interoperable environment that makes existing tools and services reusable for distributed big-data processing (<a class="citation-link" href="https://doi.org/10.1016/j.softx.2024.102033" target="_blank" rel="noreferrer">Abrami et al., 2025</a>).
  </p>

  <p>
    DUUIgateway extends this infrastructure by providing a web- and API-based access layer for DUUI (<a class="citation-link" href="https://doi.org/10.1016/j.softx.2026.102549" target="_blank" rel="noreferrer">Borkowski et al., 2026</a>). It facilitates the deployment, management, and monitoring of NLP workflows and makes DUUI-based processing more accessible to non-expert users.
  </p>
</section>

<section class="duui-components-section" aria-labelledby="duui-components">
  <h2 id="duui-components" class="software-section__title">DUUI components provided by CIRCLET</h2>
  <p>
    DUUI provides an expanding set of components for text, image, audio, and video processing. These components currently cover tasks ranging from topic modeling, emotion detection, and sentiment analysis to multimodal processing and vision-language models. They are continuously extended in response to the needs of the SPP projects.
  </p>

  <DuuiComponents />
</section>

<section class="home-section" aria-labelledby="anonymization-website">
  <h2 id="anonymization-website" class="home-section__title">ENTAILab Anonymization Website</h2>
  <p>
    The browser-based application detects and anonymizes personal or sensitive information in uploaded text. Additional modalities are planned as the service continues to develop.
  </p>
  <div class="related-link-list">
    <a class="related-link-card" href="https://www.anonymization.entailab.texttechnologylab.org/" target="_blank" rel="noreferrer">
      <span class="related-link-card__label">CIRCLET &middot; Anonymization</span>
      <span class="related-link-card__title">Open the ENTAILab Anonymization Website</span>
      <span class="related-link-card__description">Upload or enter text, configure the detection model, and download the anonymized result.</span>
      <span class="related-link-card__footer">
        <span class="related-link-card__action">Open application</span>
        <span class="related-link-card__domain">anonymization.entailab.texttechnologylab.org</span>
      </span>
    </a>
  </div>
</section>

<section aria-labelledby="bibtex-references">
  <h2 id="bibtex-references">Works & BibTeX references</h2>
  <div class="reference-actions">
    <a class="spp-link" href="../references/circlet.bib" download>Download all BibTeX entries</a>
  </div>
  <div class="reference-list">
    <details v-for="paper in sortedPapers" :id="paper.id" :key="paper.id" class="bibtex-disclosure" style="margin: 0">
      <summary>{{ paper.label }}</summary>
      <pre class="reference-entry__bibtex"><code>{{ paper.bibtex }}</code></pre>
    </details>
  </div>
</section>

<EmployeesSection />

<NewsSection />

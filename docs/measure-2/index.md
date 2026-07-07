# Research-Driven Infrastructure for Advanced Survey-Related Data (CIRCLET)

<section class="home-intro">
  <p class="home-intro__eyebrow">Measure 2 - CIRCLET Documentation</p>
<p class="home-intro__lead">CIRCLET provides the research-driven infrastructure for processing, analyzing, and integrating advanced survey-related data within ENTAILab.</p>
</section>

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

<section class="pipeline-showcase" aria-labelledby="pipeline-showcase-title">
  <h3 id="pipeline-showcase-title" class="pipeline-showcase__title">Project-specific pipelines developed with SPP projects</h3>
  <div class="pipeline-card-grid">
    <article class="pipeline-card">
      <div class="pipeline-card__badges" aria-label="Project badges">
        <img src="https://img.shields.io/badge/Python-3.x-3776AB?logo=python&amp;logoColor=white" alt="Python 3.x" />
        <img src="https://img.shields.io/badge/Jupyter-Notebook-F37626?logo=jupyter&amp;logoColor=white" alt="Jupyter Notebook" />
        <img src="https://img.shields.io/badge/pipeline-MMTM-015c63" alt="Pipeline: MMTM" />
        <img src="https://img.shields.io/badge/task-topic%20modeling-00bd8b" alt="Task: topic modeling" />
      </div>
      <h4 class="pipeline-card__title">MMTM (tri-modal topic modeling)</h4>
      <p class="pipeline-card__description">Extracts themes from long-form video responses with a tri-modal topic modeling workflow.</p>
      <a class="pipeline-card__link" href="https://github.com/ENTAILab/MutlimodalVideoTopicModeling" target="_blank" rel="noreferrer">Open GitHub repository</a>
    </article>
    <article class="pipeline-card">
      <div class="pipeline-card__badges" aria-label="Project badges">
        <img src="https://img.shields.io/badge/Python-3.x-3776AB?logo=python&amp;logoColor=white" alt="Python 3.x" />
        <img src="https://img.shields.io/badge/project-SmartDYN-015c63" alt="Project: SmartDYN" />
        <img src="https://img.shields.io/badge/modality-visual%20material-00bd8b" alt="Modality: visual material" />
        <img src="https://img.shields.io/badge/task-topic%20modeling-0b7285" alt="Task: topic modeling" />
      </div>
      <h4 class="pipeline-card__title">Image-to-topic modeling</h4>
      <p class="pipeline-card__description">Identifies themes in donated visual material within the SmartDYN context.</p>
      <a class="pipeline-card__link" href="http://github.com/ENTAILab/SmartDYN_PoliticalMMTopic" target="_blank" rel="noreferrer">Open GitHub repository</a>
    </article>
    <article class="pipeline-card">
      <div class="pipeline-card__badges" aria-label="Project badges">
        <img src="https://img.shields.io/badge/Python-3.x-3776AB?logo=python&amp;logoColor=white" alt="Python 3.x" />
        <img src="https://img.shields.io/badge/project-IndividualTextCorporaPhase1-015c63" alt="Project: IndividualTextCorporaPhase1" />
        <img src="https://img.shields.io/badge/method-RAG-00bd8b" alt="Method: RAG" />
        <img src="https://img.shields.io/badge/LLM-MCQ%20fine--tuning-0b7285" alt="LLM: MCQ fine-tuning" />
      </div>
      <h4 class="pipeline-card__title">RAG + LLM MCQ fine-tuning</h4>
      <p class="pipeline-card__description">Supports individual-respondent modeling at scale with retrieval-augmented generation and LLM MCQ fine-tuning.</p>
      <a class="pipeline-card__link" href="https://github.com/ENTAILab/IndividualTextCorporaPhase1" target="_blank" rel="noreferrer">Open GitHub repository</a>
    </article>
    <article class="pipeline-card">
      <div class="pipeline-card__badges" aria-label="Project badges">
        <img src="https://img.shields.io/badge/Python-3.x-3776AB?logo=python&amp;logoColor=white" alt="Python 3.x" />
        <img src="https://img.shields.io/badge/dataset-AraSentEval-015c63" alt="Dataset: AraSentEval" />
        <img src="https://img.shields.io/badge/language-Arabic-00bd8b" alt="Language: Arabic" />
        <img src="https://img.shields.io/badge/task-sentiment%20analysis-0b7285" alt="Task: sentiment analysis" />
      </div>
      <h4 class="pipeline-card__title">Arabic sentiment analysis</h4>
      <p class="pipeline-card__description">Opinion measurement in underserved languages.</p>
      <a class="pipeline-card__link" href="https://github.com/ENTAILab/ArabicSentimentAnalysis_AraSentEval_2026" target="_blank" rel="noreferrer">Open GitHub repository</a>
    </article>
    <article class="pipeline-card">
      <div class="pipeline-card__badges" aria-label="Project badges">
        <img src="https://img.shields.io/badge/Python-3.x-3776AB?logo=python&amp;logoColor=white" alt="Python 3.x" />
        <img src="https://img.shields.io/badge/project-CrossModalNegation-015c63" alt="Project: CrossModalNegation" />
        <img src="https://img.shields.io/badge/modality-multimodal-00bd8b" alt="Modality: multimodal" />
        <img src="https://img.shields.io/badge/task-negation%20analysis-0b7285" alt="Task: negation analysis" />
      </div>
      <h4 class="pipeline-card__title">Multimodal negation analysis</h4>
      <p class="pipeline-card__description">Detects inconsistencies between what is said and what is shown across modalities.</p>
      <a class="pipeline-card__link" href="https://github.com/ENTAILab/CrossModalNegation" target="_blank" rel="noreferrer">Open GitHub repository</a>
    </article>
  </div>
</section>

  <p>
    As shown in Table 1, CIRCLET provides, hosts, and adapts software components for shared use across the SPP. This includes Open WebUI, which provides unified and standardized access to Ollama instances and is suitable for web-based prototyping and API-based NLP tasks. JupyterHub enables the dedicated execution of isolated Jupyter notebooks and can be used as a web-based, interactive development environment for Python-based code and data. Similar to Google Colab, it uses local resources and GPUs, allowing users to prototype and evaluate applications before integrating them into big data infrastructures such as DUUI. Slurm is a high-performance computing solution that enables the distribution and shared, fair use of CPU and GPU resources within a cluster; it can be used both through Jupyter notebooks and via DUUI <a class="citation-link" href="#reference-zhou-2026">Zhou, Abrami, and Mehler, 2026</a>.
  </p>

  <p>
    The project cards summarize pipelines developed through collaborations with individual SPP projects.
  </p>

</section>

<section class="scalability-section" aria-labelledby="circlet-scalability">
  <h2 id="circlet-scalability" class="software-section__title">Computational Scalability (DUUI)</h2>

  <p>
    CIRCLET has contributed to standardizing the use of tools and systems for natural language processing and multimodal computing, including text <a class="citation-link" href="#reference-wigbels-2026">Wigbels et al., 2026</a>, image <a class="citation-link" href="https://doi.org/10.1145/3795513.3807426" target="_blank" rel="noreferrer">Weiss et al., 2026</a>, and video processing <a class="citation-link" href="https://aclanthology.org/2025.konvens-1.22/" target="_blank" rel="noreferrer">Bundan, Abrami, and Mehler, 2025</a>.
  </p>

  <p>
    This standardization has been implemented through DUUI, the Docker Unified UIMA Interface <a class="citation-link" href="https://aclanthology.org/2023.findings-emnlp.29" target="_blank" rel="noreferrer">Leonhardt et al., 2023</a>. DUUI provides an interoperable environment that makes existing tools and services reusable for distributed big-data processing <a class="citation-link" href="https://doi.org/10.1016/j.softx.2024.102033" target="_blank" rel="noreferrer">Abrami et al., 2025</a>.
  </p>

  <p>
    DUUIgateway extends this infrastructure by providing a web- and API-based access layer for DUUI <a class="citation-link" href="https://doi.org/10.1016/j.softx.2026.102549" target="_blank" rel="noreferrer">Borkowski et al., 2026</a>. It facilitates the deployment, management, and monitoring of NLP workflows and makes DUUI-based processing more accessible to non-expert users.
  </p>

  <p>
    DUUI provides an expanding set of components for text, image, audio, and video processing. These components currently cover tasks ranging from topic modeling, emotion detection, and sentiment analysis to multimodal processing and vision-language models. They are continuously extended in response to the needs of the SPP projects.
  </p>

  <div class="circlet-table-figure duui-components-figure" id="duui-components" aria-labelledby="duui-components-caption">
    <h3 id="pipeline-showcase-title" class="pipeline-showcase__title">DUUI components provided by CIRCLET.</h3>
    <div class="pipeline-card-grid">
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.10-3776AB?logo=python&amp;logoColor=white" alt="Python 3.10" />
          <img src="https://img.shields.io/badge/component-Anonymization-015c63" alt="Component: Anonymization" />
          <img src="https://img.shields.io/badge/modality-text-00bd8b" alt="Modality: text" />
          <img src="https://img.shields.io/badge/task-anonymization-0b7285" alt="Task: anonymization" />
          <img src="https://img.shields.io/badge/year-2026-6c757d" alt="Year: 2026" />
          <img src="https://img.shields.io/badge/commits-7-8a5a00" alt="Commits: 7" />
          <img src="https://img.shields.io/badge/docker%20images-1-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 1" />
        </div>
        <h4 class="pipeline-card__title">Anonymization</h4>
        <p class="pipeline-card__description">Detects and anonymizes personal or sensitive information in text.</p>
        <a class="pipeline-card__link" href="https://github.com/texttechnologylab/duui-uima/tree/main/duui-anonymize" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.10-3776AB?logo=python&amp;logoColor=white" alt="Python 3.10" />
          <img src="https://img.shields.io/badge/component-Emotion%20Detection-015c63" alt="Component: Emotion Detection" />
          <img src="https://img.shields.io/badge/modality-text-00bd8b" alt="Modality: text" />
          <img src="https://img.shields.io/badge/task-emotion%20detection-0b7285" alt="Task: emotion detection" />
          <img src="https://img.shields.io/badge/year-2024-6c757d" alt="Year: 2024" />
          <img src="https://img.shields.io/badge/commits-19-8a5a00" alt="Commits: 19" />
          <img src="https://img.shields.io/badge/docker%20images-87-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 87" />
        </div>
        <h4 class="pipeline-card__title">Emotion Detection</h4>
        <p class="pipeline-card__description">Classifies emotional expression in text using transformer-based models.</p>
        <a class="pipeline-card__link" href="https://github.com/texttechnologylab/duui-uima/tree/main/duui-transformers-Emotion" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.8-3776AB?logo=python&amp;logoColor=white" alt="Python 3.8" />
          <img src="https://img.shields.io/badge/component-Fact--Checking-015c63" alt="Component: Fact-Checking" />
          <img src="https://img.shields.io/badge/modality-text-00bd8b" alt="Modality: text" />
          <img src="https://img.shields.io/badge/task-fact--checking-0b7285" alt="Task: fact-checking" />
          <img src="https://img.shields.io/badge/year-2024-6c757d" alt="Year: 2024" />
          <img src="https://img.shields.io/badge/commits-7-8a5a00" alt="Commits: 7" />
          <img src="https://img.shields.io/badge/docker%20images-4-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 4" />
        </div>
        <h4 class="pipeline-card__title">Fact-Checking</h4>
        <p class="pipeline-card__description">Assesses the factual accuracy of textual claims.</p>
        <a class="pipeline-card__link" href="https://github.com/texttechnologylab/duui-uima/tree/main/duui-FactChecking" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.12-3776AB?logo=python&amp;logoColor=white" alt="Python 3.12" />
          <img src="https://img.shields.io/badge/component-Genre%20Classification-015c63" alt="Component: Genre Classification" />
          <img src="https://img.shields.io/badge/modality-text-00bd8b" alt="Modality: text" />
          <img src="https://img.shields.io/badge/task-genre%20classification-0b7285" alt="Task: genre classification" />
          <img src="https://img.shields.io/badge/year-2026-6c757d" alt="Year: 2026" />
          <img src="https://img.shields.io/badge/commits-2-8a5a00" alt="Commits: 2" />
          <img src="https://img.shields.io/badge/docker%20images-5-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 5" />
        </div>
        <h4 class="pipeline-card__title">Genre Classification</h4>
        <p class="pipeline-card__description">Classifies documents according to genre.</p>
        <a class="pipeline-card__link" href="https://github.com/mevbagci/duui-uima/tree/main/duui-Genre" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.10-3776AB?logo=python&amp;logoColor=white" alt="Python 3.10" />
          <img src="https://img.shields.io/badge/component-Image--to--Text-015c63" alt="Component: Image-to-Text" />
          <img src="https://img.shields.io/badge/modality-image-00bd8b" alt="Modality: image" />
          <img src="https://img.shields.io/badge/task-image--to--text-0b7285" alt="Task: image-to-text" />
          <img src="https://img.shields.io/badge/year-2025-6c757d" alt="Year: 2025" />
          <img src="https://img.shields.io/badge/commits-19-8a5a00" alt="Commits: 19" />
          <img src="https://img.shields.io/badge/docker%20images-1-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 1" />
        </div>
        <h4 class="pipeline-card__title">Image-to-Text</h4>
        <p class="pipeline-card__description">Generates textual descriptions from image content.</p>
        <a class="pipeline-card__link" href="https://github.com/texttechnologylab/duui-uima/tree/main/duui-image-to-text" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.10-3776AB?logo=python&amp;logoColor=white" alt="Python 3.10" />
          <img src="https://img.shields.io/badge/component-Multimodal%20Processing-015c63" alt="Component: Multimodal Processing" />
          <img src="https://img.shields.io/badge/modality-text%2C%20image%2C%20audio%2C%20video-00bd8b" alt="Modality: text, image, audio, video" />
          <img src="https://img.shields.io/badge/task-multimodal%20processing-0b7285" alt="Task: multimodal processing" />
          <img src="https://img.shields.io/badge/year-2025-6c757d" alt="Year: 2025" />
          <img src="https://img.shields.io/badge/commits-41-8a5a00" alt="Commits: 41" />
          <img src="https://img.shields.io/badge/docker%20images-9-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 9" />
        </div>
        <h4 class="pipeline-card__title">Multimodal Processing</h4>
        <p class="pipeline-card__description">Processes and integrates text, image, audio, and video data within unified pipelines.</p>
        <a class="pipeline-card__link" href="https://github.com/texttechnologylab/duui-uima/tree/main/duui-mm" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.12-3776AB?logo=python&amp;logoColor=white" alt="Python 3.12" />
          <img src="https://img.shields.io/badge/component-Named%20Entity%20Recognition-015c63" alt="Component: Named Entity Recognition" />
          <img src="https://img.shields.io/badge/modality-text-00bd8b" alt="Modality: text" />
          <img src="https://img.shields.io/badge/task-entity%20recognition-0b7285" alt="Task: entity recognition" />
          <img src="https://img.shields.io/badge/year-2024-6c757d" alt="Year: 2024" />
          <img src="https://img.shields.io/badge/commits-4-8a5a00" alt="Commits: 4" />
          <img src="https://img.shields.io/badge/docker%20images-7-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 7" />
        </div>
        <h4 class="pipeline-card__title">Named Entity Recognition</h4>
        <p class="pipeline-card__description">Identifies and classifies named entities in text.</p>
        <a class="pipeline-card__link" href="https://github.com/mevbagci/duui-uima/tree/main/duui-NER" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.10-3776AB?logo=python&amp;logoColor=white" alt="Python 3.10" />
          <img src="https://img.shields.io/badge/component-Open%20WebUI-015c63" alt="Component: Open WebUI" />
          <img src="https://img.shields.io/badge/modality-text%2C%20image%2C%20audio-00bd8b" alt="Modality: text, image, audio" />
          <img src="https://img.shields.io/badge/task-LLM%20access-0b7285" alt="Task: LLM access" />
          <img src="https://img.shields.io/badge/year-2026-6c757d" alt="Year: 2026" />
          <img src="https://img.shields.io/badge/commits-5-8a5a00" alt="Commits: 5" />
          <img src="https://img.shields.io/badge/docker%20images-1-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 1" />
        </div>
        <h4 class="pipeline-card__title">Open WebUI</h4>
        <p class="pipeline-card__description">Provides unified, standardized web access to LLMs across text, image, and audio modalities.</p>
        <a class="pipeline-card__link" href="https://github.com/texttechnologylab/duui-uima/tree/main/duui-open-webui" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.10-3776AB?logo=python&amp;logoColor=white" alt="Python 3.10" />
          <img src="https://img.shields.io/badge/component-Sentiment%20Analysis-015c63" alt="Component: Sentiment Analysis" />
          <img src="https://img.shields.io/badge/modality-text-00bd8b" alt="Modality: text" />
          <img src="https://img.shields.io/badge/task-sentiment%20analysis-0b7285" alt="Task: sentiment analysis" />
          <img src="https://img.shields.io/badge/year-2024-6c757d" alt="Year: 2024" />
          <img src="https://img.shields.io/badge/commits-13-8a5a00" alt="Commits: 13" />
          <img src="https://img.shields.io/badge/docker%20images-19-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 19" />
        </div>
        <h4 class="pipeline-card__title">Sentiment Analysis</h4>
        <p class="pipeline-card__description">Determines sentiment polarity of text at a fine-grained level.</p>
        <a class="pipeline-card__link" href="https://github.com/texttechnologylab/duui-uima/tree/main/duui-transformers-sentiment-atomar" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.10-3776AB?logo=python&amp;logoColor=white" alt="Python 3.10" />
          <img src="https://img.shields.io/badge/component-Topic%20Modeling-015c63" alt="Component: Topic Modeling" />
          <img src="https://img.shields.io/badge/modality-text-00bd8b" alt="Modality: text" />
          <img src="https://img.shields.io/badge/task-topic%20modeling-0b7285" alt="Task: topic modeling" />
          <img src="https://img.shields.io/badge/year-2024-6c757d" alt="Year: 2024" />
          <img src="https://img.shields.io/badge/commits-22-8a5a00" alt="Commits: 22" />
          <img src="https://img.shields.io/badge/docker%20images-19-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 19" />
        </div>
        <h4 class="pipeline-card__title">Topic Modeling</h4>
        <p class="pipeline-card__description">Extracts latent topics from text corpora.</p>
        <a class="pipeline-card__link" href="https://github.com/texttechnologylab/duui-uima/tree/main/duui-transformers-topic" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
      <article class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img src="https://img.shields.io/badge/Python-3.10-3776AB?logo=python&amp;logoColor=white" alt="Python 3.10" />
          <img src="https://img.shields.io/badge/component-Vision--Language%20Models-015c63" alt="Component: Vision-Language Models" />
          <img src="https://img.shields.io/badge/modality-image-00bd8b" alt="Modality: image" />
          <img src="https://img.shields.io/badge/task-vision--language-0b7285" alt="Task: vision-language" />
          <img src="https://img.shields.io/badge/year-2025-6c757d" alt="Year: 2025" />
          <img src="https://img.shields.io/badge/commits-9-8a5a00" alt="Commits: 9" />
          <img src="https://img.shields.io/badge/docker%20images-1-2496ED?logo=docker&amp;logoColor=white" alt="Docker images: 1" />
        </div>
        <h4 class="pipeline-card__title">Vision-Language Models</h4>
        <p class="pipeline-card__description">Applies vision-language models to interpret and classify image content.</p>
        <a class="pipeline-card__link" href="https://github.com/texttechnologylab/duui-uima/tree/main/duui-vision-language" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
    </div>
  </div>
</section>

<details class="bibtex-disclosure">
  <summary>BibTeX references</summary>
  <div class="reference-actions">
    <a class="spp-link" href="../references/circlet.bib" download>Download all BibTeX entries</a>
  </div>
  <div class="reference-list">
    <article class="reference-entry" id="reference-zhou-2026">
      <h3 class="reference-entry__title">Zhou, Abrami, and Mehler, 2026:</h3>
      <pre class="reference-entry__bibtex"><code>@unpublished{Zhou:et:al:prep,
title  = {DUUISlurm},
author = {Zhou, Jiadong and Abrami, Giuseppe and Mehler, Alexander},
note   = {In preparation},
year   = {2026}
}</code></pre>
    </article>
    <article class="reference-entry" id="reference-wigbels-2026">
      <h3 class="reference-entry__title">Wigbels et al., 2026:</h3>
      <pre class="reference-entry__bibtex"><code>@inproceedings{Wigbels:et:al:2026:a,
author    = {Wigbels, Christoph and Abusaleh, Ali and Jansen, Markus T. and Mehler, Alexander and Schaaf, Manuel and Hofmann, Markus J.},
title     = {Individual Text Corpora Predict User-Specific Knowledge: Benchmarks of Individualized Knowledge Simulation},
booktitle = {KONVENS (Konferenz zur Verarbeitung natürlicher Sprache)},
year      = {2026},
keywords  = {Individual Text Corpora, Retrieval-Augmented Generation, Personalized Language Models, Probabilistic Calibration, Knowledge Benchmarks, Data Contamination, German NLP},
note      = {submitted}
}</code></pre>
    </article>
    <article class="reference-entry" id="reference-weiss-2026">
      <h3 class="reference-entry__title">Weiss et al., 2026:</h3>
      <pre class="reference-entry__bibtex"><code>@inproceedings{weiss:et:al:2026,
series     = {WebSci Companion '26},
title      = {From Images to Topics: Evaluating Vision-Language Models for Topic Classification of Election Advertising},
url        = {http://dx.doi.org/10.1145/3795513.3807426},
doi        = {10.1145/3795513.3807426},
booktitle  = {Companion Publication of the 2026 18th ACM Web Science Conference},
publisher  = {ACM},
author     = {Weiss, Julia and Burger, Axel and Roßmann, Joss and Meurer, Jan Eric and Abusaleh, Ali},
year       = {2026},
month      = {May},
pages      = {10--14},
collection = {WebSci Companion '26},
keywords   = {Multimodal Large Language Models, Political communication, Privacy-aware AI, new-data-spaces, circlet}
}</code></pre>
    </article>
    <article class="reference-entry" id="reference-bundan-2025">
      <h3 class="reference-entry__title">Bundan, Abrami, and Mehler, 2025:</h3>
      <pre class="reference-entry__bibtex"><code>@inproceedings{Bundan:Abrami:Mehler:2025,
author    = {Bundan, Daniel and Abrami, Giuseppe and Mehler, Alexander},
title     = {Multimodal Docker Unified {UIMA} Interface: New Horizons for Distributed Microservice-Oriented Processing of Corpora using {UIMA}},
booktitle = {Proceedings of the 21st Conference on Natural Language Processing (KONVENS 2025): Long and Short Papers},
year      = {2025},
editor    = {Wartena, Christian and Heid, Ulrich},
location  = {Hildesheim, Germany},
address   = {Hannover, Germany},
publisher = {HsH Applied Academics},
pages     = {257--268},
series    = {KONVENS '25},
url       = {https://aclanthology.org/2025.konvens-1.22/},
pdf       = {https://aclanthology.org/2025.konvens-1.22.pdf}
}</code></pre>
    </article>
    <article class="reference-entry" id="reference-leonhardt-2023">
      <h3 class="reference-entry__title">Leonhardt et al., 2023:</h3>
      <pre class="reference-entry__bibtex"><code>@inproceedings{Leonhardt:et:al:2023,
title     = {Unlocking the Heterogeneous Landscape of Big Data {NLP} with {DUUI}},
author    = {Leonhardt, Alexander and Abrami, Giuseppe and Baumartz, Daniel and Mehler, Alexander},
editor    = {Bouamor, Houda and Pino, Juan and Bali, Kalika},
booktitle = {Findings of the Association for Computational Linguistics: EMNLP 2023},
year      = {2023},
address   = {Singapore},
publisher = {Association for Computational Linguistics},
url       = {https://aclanthology.org/2023.findings-emnlp.29},
pages     = {385--399},
pdf       = {https://aclanthology.org/2023.findings-emnlp.29.pdf}
}</code></pre>
    </article>
    <article class="reference-entry" id="reference-abrami-2025">
      <h3 class="reference-entry__title">Abrami et al., 2025:</h3>
      <pre class="reference-entry__bibtex"><code>@article{Abrami:et:al:2025:a,
title   = {Docker Unified UIMA Interface: New perspectives for NLP on big data},
journal = {SoftwareX},
volume  = {29},
pages   = {102033},
year    = {2025},
issn    = {2352-7110},
doi     = {https://doi.org/10.1016/j.softx.2024.102033},
url     = {https://www.sciencedirect.com/science/article/pii/S2352711024004047},
author  = {Giuseppe Abrami and Markos Genios and Filip Fitzermann and Daniel Baumartz and Alexander Mehler}
}</code></pre>
    </article>
    <article class="reference-entry" id="reference-borkowski-2026">
      <h3 class="reference-entry__title">Borkowski et al., 2026:</h3>
      <pre class="reference-entry__bibtex"><code>@article{Borkowski:et:al:2026,
title    = &#123;&#123;DUUIgateway&#125;: A Web Service for Platform-independent, Ubiquitous Big Data NLP&#125;,
journal  = {SoftwareX},
volume   = {34},
pages    = {102549},
year     = {2026},
issn     = {2352-7110},
doi      = {https://doi.org/10.1016/j.softx.2026.102549},
url      = {https://www.sciencedirect.com/science/article/pii/S2352711026000439},
author   = {Borkowski, Cedric and Abrami, Giuseppe and Terefe, Dawit and Baumartz, Daniel and Mehler, Alexander},
keywords = {duui, neglab, core, core_b05, core_c08, new-data-spaces, circlet}
}</code></pre>
    </article>
  </div>
</details>

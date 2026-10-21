# Choosing a Text Anonymization Model

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

| Model                                                                          | Choose it when…                                                                         | Benchmark evidence                                                                                                                                                                                              | Main trade-off                                                                                                                             |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| **[OpenMed Nemotron](https://huggingface.co/OpenMed/privacy-filter-nemotron)** | You prioritize broad identifier removal and resistance to re-identification.            | Highest TAB token recall (**70.2%**) and quasi-identifier recall (**62.8%**); lowest RAT-Bench explicit re-identification rate (**49.8%**).                                                                     | Changes more text: BLEU **0.8930**, versus **0.9695** for OpenAI.                                                                          |
| **[OpenAI Privacy Filter](https://huggingface.co/openai/privacy-filter)**      | You prioritize preserving wording and limiting removal of non PII-text.                 | Highest TAB token precision (**91.6%**) and RAT-Bench BLEU (**0.9695**); explicit re-identification **66.7%**.                                                                                                  | Misses more identifiers: TAB token recall **33.1%** and quasi-identifier recall **26.5%**.                                                 |
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


## BibTeX references

```
@misc{abusaleh_duui_anonymize_2026,
  author       = {Abusaleh, Ali},
  title        = {{DUUI Anonymize}: PII Detection and Redaction Component for {DUUI}},
  year         = {2026},
  institution  = {Text Technology Lab, Goethe University Frankfurt},
  howpublished = {\url{https://github.com/texttechnologylab/duui-uima}},
  note         = {Part of the DockerUnifiedUIMAInterface (DUUI) component ecosystem}
}

@misc{openai_privacy_filter_2025,
  author       = {OpenAI},
  title        = {{openai/privacy-filter}},
  year         = {2025},
  publisher    = {Hugging Face},
  howpublished = {\url{https://huggingface.co/openai/privacy-filter}}
}

@misc{bards.ai_2026,
    author    = {bards.ai and Michał Swędrowski and others},
    title     = {eu-pii-anonimization-multilang (Revision 6de9f68)},
    year      = {2026},
    url       = {https://huggingface.co/bardsai/eu-pii-anonimization-multilang},
    doi       = {10.57967/hf/8721},
    publisher = {Hugging Face}
}

@misc{openmed_privacy_filter_nemotron_2026,
  author       = {OpenMed},
  title        = {{OpenMed/privacy-filter-nemotron}: fine-grained PII extraction with 55 categories},
  year         = {2026},
  publisher    = {Hugging Face},
  howpublished = {\url{https://huggingface.co/OpenMed/privacy-filter-nemotron}}
}

@misc{openmed_2026,
  author       = {OpenMed},
  title        = {{OpenMed}: open models and resources for healthcare NLP},
  year         = {2026},
  publisher    = {Hugging Face},
  howpublished = {\url{https://huggingface.co/OpenMed}}
}

@misc{nemotron_pii_2025,
  author       = {NVIDIA},
  title        = {{Nemotron-PII}},
  year         = {2025},
  publisher    = {Hugging Face},
  howpublished = {\url{https://huggingface.co/datasets/nvidia/Nemotron-PII}}
}

@article{pilan-etal-2022-text,
    title = "The Text Anonymization Benchmark ({TAB}): A Dedicated Corpus and Evaluation Framework for Text Anonymization",
    author = "Pil{\'a}n, Ildik{\'o} and
        Lison, Pierre and
        {\O}vrelid, Lilja and
        Papadopoulou, Anthi and
        S{\'a}nchez, David and
        Batet, Montserrat",
    journal = "Computational Linguistics",
    volume = "48",
    number = "4",
    month = dec,
    year = "2022",
    publisher = "MIT Press",
    url = "https://aclanthology.org/2022.cl-4.19/",
    doi = "10.1162/coli_a_00458",
    pages = "1053--1101"
}

@inproceedings{oh-etal-2026-subject,
    title = "Subject-level Inference for Realistic Text Anonymization Evaluation",
    author = "Oh, Myeong Seok and
              Kim, Dong-Yun and
              Oh, Hanseok and
              Kang, Chaean and
              Kang, Joeun and
              Wang, Xiaonan and
              Park, Hyunjung and
              Jung, Young Cheol and
              Kim, Hansaem",
    booktitle = "Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
    month = jul,
    year = "2026",
    address = "San Diego, California, United States",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2026.acl-long.778/",
    doi = "10.18653/v1/2026.acl-long.778",
    pages = "17100--17135"
}

@misc{krco2026ratbench,
    title = "{RAT-Bench}: A Comprehensive Benchmark for Text Anonymization",
    author = "Kr{\v{c}}o, Nata{\v{s}}a and
              Yao, Zexi and
              Meeus, Matthieu and
              de Montjoye, Yves-Alexandre",
    year = "2026",
    eprint = "2602.12806",
    archivePrefix = "arXiv",
    primaryClass = "cs.CL",
    doi = "10.48550/arXiv.2602.12806",
    url = "https://arxiv.org/abs/2602.12806"
}
```
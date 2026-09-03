<script setup>
import pipelines from './project-pipelines.json'

const badgeValue = (value) =>
  encodeURIComponent(String(value)).replaceAll('-', '--')

const badgeUrl = ({ label, value, color, logo }) => {
  const query = logo ? `?logo=${logo}&logoColor=white` : ''
  return `https://img.shields.io/badge/${badgeValue(label)}-${badgeValue(value)}-${color}${query}`
}
</script>

<template>
  <section class="project-pipelines" aria-labelledby="pipeline-showcase-title">
    <div class="project-pipelines__heading">
      <span class="project-pipelines__icon" aria-hidden="true"><i class="fa-solid fa-diagram-project"></i></span>
      <div>
        <p class="project-pipelines__eyebrow">SPP collaborations</p>
        <h3 id="pipeline-showcase-title" class="project-pipelines__title">Project-specific pipelines developed with SPP projects</h3>
      </div>
    </div>
    <div class="pipeline-card-grid">
      <article v-for="pipeline in pipelines" :key="pipeline.name" class="pipeline-card project-pipelines__card">
        <div class="pipeline-card__badges" aria-label="Project badges">
          <img
            v-for="badge in pipeline.badges"
            :key="`${badge.label}-${badge.value}`"
            :src="badgeUrl(badge)"
            :alt="`${badge.label}: ${badge.value}`"
          />
        </div>
        <h4 class="pipeline-card__title">{{ pipeline.name }}</h4>
        <p class="pipeline-card__description">{{ pipeline.description }}</p>
        <a class="pipeline-card__link" :href="pipeline.repositoryUrl" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.project-pipelines {
  padding: 22px;
  border: 1px solid var(--spp-panel-border);
  border-radius: 12px;
  background: var(--spp-panel-bg);
  box-shadow: var(--spp-panel-shadow);
}

.project-pipelines__heading {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 18px;
}

.project-pipelines__icon {
  display: inline-flex;
  flex: 0 0 42px;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--spp-c-accent);
  color: var(--spp-c-button-text);
}

.project-pipelines__eyebrow {
  margin: 0 0 2px;
  color: var(--spp-c-accent);
  font-size: 12px;
  font-weight: 750;
  text-transform: uppercase;
}

.project-pipelines__title {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 19px;
  line-height: 1.35;
}

.project-pipelines__card {
  background: var(--vp-c-bg);
}
</style>

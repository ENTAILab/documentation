<script setup>
import components from './duui-components.json'

const badgeValue = (value) =>
  encodeURIComponent(String(value)).replaceAll('-', '--')

const badgeUrl = (label, value, color, logo = '') => {
  const query = logo ? `?logo=${logo}&logoColor=white` : ''
  return `https://img.shields.io/badge/${badgeValue(label)}-${badgeValue(value)}-${color}${query}`
}
</script>

<template>
  <div class="circlet-table-figure duui-components-figure" aria-labelledby="duui-components">
    <div class="pipeline-card-grid">
      <article v-for="component in components" :key="component.name" class="pipeline-card">
        <div class="pipeline-card__badges" aria-label="Component details">
          <img :src="badgeUrl('Python', component.python, '3776AB', 'python')" :alt="`Python ${component.python}`" />
          <img :src="badgeUrl('component', component.name, '015c63')" :alt="`Component: ${component.name}`" />
          <img :src="badgeUrl('modality', component.modality, '00bd8b')" :alt="`Modality: ${component.modality}`" />
          <img :src="badgeUrl('task', component.task, '0b7285')" :alt="`Task: ${component.task}`" />
          <img :src="badgeUrl('year', component.year, '6c757d')" :alt="`Year: ${component.year}`" />
          <img :src="badgeUrl('commits', component.commits, '8a5a00')" :alt="`Commits: ${component.commits}`" />
          <img :src="badgeUrl('docker images', component.dockerImages, '2496ED', 'docker')" :alt="`Docker images: ${component.dockerImages}`" />
        </div>
        <h4 class="pipeline-card__title">{{ component.name }}</h4>
        <p class="pipeline-card__description">{{ component.description }}</p>
        <a class="pipeline-card__link" :href="component.repositoryUrl" target="_blank" rel="noreferrer">Open GitHub repository</a>
      </article>
    </div>
  </div>
</template>

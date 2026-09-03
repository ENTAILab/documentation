<script setup>
import news from './news.json'

const sortedNews = [...news].sort(
  (left, right) => Date.parse(right.date) - Date.parse(left.date)
)

const formatDate = (date) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(`${date}T00:00:00`))
</script>

<template>
  <section class="news-section" aria-labelledby="latest-news">
    <h2 id="latest-news">Latest news</h2>
    <div class="news-section__list">
      <article
        v-for="(item, index) in sortedNews"
        :key="`${item.date}-${item.title}`"
        :id="`news-${item.date}-${index + 1}`"
        class="news-section__item"
      >
        <div class="news-section__meta">
          <time :datetime="item.date">{{ formatDate(item.date) }}</time>
          <span>By {{ item.author }}</span>
        </div>
        <h3 class="news-section__title" v-html="item.title"></h3>
        <div class="news-section__description" v-html="item.description"></div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.news-section {
  margin-top: 36px;
}

.news-section__list {
  display: grid;
  gap: 16px;
}

.news-section__item {
  padding: 18px;
  border: 1px solid var(--resource-card-border);
  border-radius: 8px;
  background: var(--resource-card-bg);
  box-shadow: var(--resource-card-shadow);
}

.news-section__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 16px;
  color: var(--vp-c-text-3);
  font-size: 12px;
}

.news-section__title {
  margin: 8px 0 6px;
  color: var(--vp-c-text-1);
  font-size: 18px;
}

.news-section__description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>

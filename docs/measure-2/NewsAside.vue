<script setup>
import { computed, onMounted, ref } from 'vue'
import news from './news.json'

const asideReady = ref(false)

const latestNews = computed(() =>
  [...news]
    .sort((left, right) => Date.parse(right.date) - Date.parse(left.date))
    .slice(0, 3)
)

const formatDate = (date) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(`${date}T00:00:00`))

onMounted(() => {
  asideReady.value = Boolean(document.querySelector('.VPDocAside'))
})
</script>

<template>
  <Teleport v-if="asideReady" to=".VPDocAside">
    <aside class="news-aside" aria-labelledby="latest-news-title">
      <h2 id="latest-news-title" class="news-aside__heading">
        <a href="#latest-news">Latest news</a>
      </h2>
      <ol class="news-aside__list">
        <li v-for="(item, index) in latestNews" :key="`${item.date}-${item.title}`" class="news-aside__item">
          <a class="news-aside__link" :href="`#news-${item.date}-${index + 1}`">
            <time class="news-aside__date" :datetime="item.date">{{ formatDate(item.date) }}</time>
            <h3 class="news-aside__title" v-html="item.title"></h3>
            <div class="news-aside__description" v-html="item.description"></div>
            <p class="news-aside__author">By {{ item.author }}</p>
          </a>
        </li>
      </ol>
    </aside>
  </Teleport>
</template>

<style scoped>
.news-aside {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid var(--vp-c-divider);
}

.news-aside__heading {
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 600;
}

.news-aside__heading a {
  color: inherit;
  text-decoration: none;
}

.news-aside__heading a:hover {
  color: var(--spp-c-accent-hover);
}

.news-aside__list {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.news-aside__item {
  padding-left: 10px;
  border-left: 2px solid var(--spp-c-border-soft);
}

.news-aside__link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.news-aside__link:hover .news-aside__title {
  color: var(--spp-c-accent-hover);
}

.news-aside__date,
.news-aside__author {
  color: var(--vp-c-text-3);
  font-size: 11px;
}

.news-aside__title {
  margin: 3px 0;
  color: var(--vp-c-text-1);
  font-size: 13px;
  line-height: 1.35;
}

.news-aside__description {
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.45;
}

.news-aside__author {
  margin: 5px 0 0;
}
</style>

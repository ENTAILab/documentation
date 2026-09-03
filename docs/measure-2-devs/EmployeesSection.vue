<script setup>
import employees from './employees.json'
</script>

<template>
  <section class="employees-section" aria-labelledby="employees">
    <h2 id="employees">Employees</h2>
    <div class="employees-grid">
      <article v-for="employee in employees" :key="employee.name" class="employee-card">
        <a :href="employee.profileUrl" target="_blank" rel="noreferrer" tabindex="-1">
          <img class="employee-card__image" :src="employee.imageUrl" :alt="employee.name" />
        </a>
        <div class="employee-card__content">
          <p class="employee-card__role">{{ employee.role }}</p>
          <h3 class="employee-card__name">
            <a :href="employee.profileUrl" target="_blank" rel="noreferrer">{{ employee.name }}</a>
          </h3>
          <address class="employee-card__contact">
            <span>{{ employee.affiliation }}</span>
            <span>{{ employee.address }}</span>
            <span>{{ employee.room }}</span>
            <a :href="`mailto:${employee.email}`">{{ employee.email }}</a>
          </address>
          <p v-if="employee.officeHours" class="employee-card__hours">
            <strong>Office hours:</strong> {{ employee.officeHours }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.employees-section {
  margin-top: 36px;
}

.employees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.employee-card {
  display: grid;
  grid-template-rows: 170px 1fr;
  overflow: hidden;
  border: 1px solid var(--resource-card-border);
  border-radius: 8px;
  background: var(--resource-card-bg);
  box-shadow: var(--resource-card-shadow);
}

.employee-card__image {
  width: 100%;
  height: 170px;
  padding: 10px;
  object-fit: contain;
  object-position: center;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 92%, var(--spp-c-accent) 8%);
}

.employee-card__content {
  padding: 16px;
}

.employee-card__role {
  margin: 0 0 5px;
  color: var(--spp-c-accent);
  font-size: 12px;
  font-weight: 750;
  text-transform: uppercase;
}

.employee-card__name {
  margin: 0 0 12px;
  font-size: 18px;
}

.employee-card__name a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.employee-card__name a:hover {
  color: var(--spp-c-accent-hover);
}

.employee-card__contact {
  display: grid;
  gap: 3px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-style: normal;
  line-height: 1.45;
}

.employee-card__hours {
  margin: 10px 0 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.45;
}

.employee-card__contact a {
  color: var(--spp-c-accent);
  overflow-wrap: anywhere;
}
</style>

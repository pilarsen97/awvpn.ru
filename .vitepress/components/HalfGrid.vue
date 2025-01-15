<template>
    <div class="half-grid">
        <slot></slot>
    </div>
</template>

<style scoped>
.half-grid {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
</style>
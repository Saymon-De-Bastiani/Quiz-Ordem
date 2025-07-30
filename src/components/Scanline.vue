<template>
    <div class="scanline-a"></div>
</template>

<style scoped>
.scanline {
    width: 100%;
    height: 100px;
    z-index: 3;
    background: linear-gradient(0deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(255, 255, 255, 0.2) 10%,
            rgba(0, 0, 0, 0.1) 100%);
    opacity: 0.2;
    position: absolute;
    bottom: 100%;
    left: 0;
    animation: scanline 8s linear infinite;
}

.scanline-a {
    width: 100%;
    height: 150px;
    z-index: 3;
    background: linear-gradient(0deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(148, 148, 148, 0.3) 10%,
            rgba(255, 255, 255, 0.3) 10%,
            rgba(0, 0, 0, 0.1) 100%);
    opacity: 0.2;
    position: absolute;
    bottom: 100%;
    left: 0;
    animation: scanline-a 8s linear infinite;
}

@keyframes scanline-a {
    0% {
        bottom: 100%;
    }

    80% {
        bottom: 100%;
    }

    100% {
        bottom: 0%;
    }
}
</style>

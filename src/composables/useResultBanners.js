import { ref } from 'vue'
import { keyElement } from '@/features/questions/logic/resultLogic.js'
import { useBackground } from './useBackground.js'

export const imageElement = ref('')

const backgroundElement = import.meta.glob('@/assets/images/ui/bg-*.jpg', {
    eager: true,
    import: 'default'
})
const bannerElement = import.meta.glob('@/assets/images/ui/banner-*.jpg', {
    eager: true,
    import: 'default'
})

export function setBackgroundElement() {
    if (!keyElement.value) return

    const pathBG = `/src/assets/images/ui/bg-${keyElement.value}.jpg`
    const background = backgroundElement[pathBG]
    useBackground(background)
    
}

export function setBannerElement() {
    if (!keyElement.value) return

    const pathBA = `/src/assets/images/ui/banner-${keyElement.value}.jpg`
    const banner = bannerElement[pathBA]
    imageElement.value = banner
}
import type { VNodeRef } from 'vue';


export default function useTemplateElemsRefs<T extends Record<string, Element>>() {
  const templateElems = ref<T>({} as T);
  
  function setRefOriginal(refName: keyof T, elem?: Element | ComponentPublicInstance | null): void {
    if (!elem) return;
    templateElems.value[refName] = elem;
  }

  const setTemplateElemRef = (refName: string): VNodeRef => setRefOriginal.bind(null, refName);

  return { templateElems, setTemplateElemRef }
};

export function matchesSelectorToParentElements (el, selector, baseNode) {
  const parent = el.closest(selector)
  if (!parent) return false
  return baseNode == null || baseNode === parent || !parent.contains(baseNode)
}

export function getComputedSize ($el) {
  const style = window.getComputedStyle($el)

  return [
    parseFloat(style.getPropertyValue('width')),
    parseFloat(style.getPropertyValue('height'))
  ]
}

export function addEvent (el, event, handler) {
  if (!el) return
  el.addEventListener(event, handler, true)
}

export function removeEvent (el, event, handler) {
  if (!el) return
  el.removeEventListener(event, handler, true)
}

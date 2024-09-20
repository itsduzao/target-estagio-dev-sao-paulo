export function showElement(element) {
  const closestAncestorWithClass = element.closest('.hidden');
  if (closestAncestorWithClass) {
    closestAncestorWithClass.classList.remove('hidden');
}
}
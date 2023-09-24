function __hyd__empty_raf() {
  return window.requestAnimationFrame(__hyd__empty_raf);
}
window.requestAnimationFrame(__hyd__empty_raf);
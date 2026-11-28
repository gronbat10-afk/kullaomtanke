// Gör om [text](/länk) i vanlig text till säkra länkar.
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export function rich(t) {
  return esc(t).replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '<a href="$2">$1</a>');
}
export function plain(t) {
  return t.replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '$1');
}

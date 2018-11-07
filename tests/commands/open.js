export function command() {
  return this.perform(() => {
    this.url(this.launchUrl);
  });
}

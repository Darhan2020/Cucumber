class GoogleSearch {
  open() {
    return browser.url("https://google.com");
  }

  get inputSearch() {
    return $('[title= "Search"]');
  }
  get buttonSearch() {
    return $('[value="Google Search"]');
  }
  async search(phrase) {
    await (await this.inputSearch).setValue(phrase);
    await (await this.buttonSearch).click();
  }
}
export default new GoogleSearch();

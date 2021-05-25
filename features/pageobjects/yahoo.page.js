class YahooSearch {
    open() {
      return browser.url("https://yahoo.com");
    }
    get inputSearch() {
      return $('#ybar-sbq');
    }
    get buttonSearch() {
      return $('#ybar-search');
    }
    async search(phrase) {
      await (await this.inputSearch).setValue(phrase);
      await (await this.buttonSearch).click();
    }
  }
  export default new YahooSearch();

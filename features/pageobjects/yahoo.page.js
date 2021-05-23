class YahooSearch {
    open() {
      return browser.url("https://yahoo.com");
    }
    get inputSearch() {
      return $('[name="ybar_mod_searchbox_s"]');
    }
    get buttonSearch() {
      return $('[value="Search"]');
    }
    async search(phrase) {
      await (await this.inputSearch).setValue(phrase);
      await (await this.buttonSearch).click();
    }
  }
  export default new YahooSearch();

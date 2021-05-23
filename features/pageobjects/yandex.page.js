class YandexSearch {
    open() {
      return browser.url("https://yandex.ru");
    }
    get inputSearch() {
      return $('[name="text"]');
    }
    get buttonSearch() {
      return $("button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited");
    }
    async search(phrase) {
      await (await this.inputSearch).setValue(phrase);
      await (await this.buttonSearch).click();
    }
  }
  export default new YandexSearch();

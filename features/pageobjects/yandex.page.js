class YandexSearch {
    open() {
      return browser.url("https://yandex.ru");
    }
    get inputSearch() {
      return $('#text');
    }
    get buttonSearch() {
      return $(".search2__button>button");
    }
    async search(phrase) {
      await (await this.inputSearch).setValue(phrase);
      await (await this.buttonSearch).click();
    }
  }
  export default new YandexSearch();

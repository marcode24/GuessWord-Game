export default class Storage {

  static getItem(key: string): string | any{
    return localStorage.getItem(key);
  }

  static saveLocalStorage(name: string, value: string| boolean) {
    localStorage.setItem(name, value.toString());
  }

  static deleteLocalStorage(name: string) {
    localStorage.removeItem(name);
  }

}

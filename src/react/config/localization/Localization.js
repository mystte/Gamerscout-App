import LocalizedStrings from 'react-localization';

import enUrls from './urls/urls.en.json';
import frUrls from './urls/urls.fr.json';
import enLabels from './labels/labels.en.json';
import frLabels from './labels/labels.fr.json';
import enErrors from './errors/errors.en.json';
import frErrors from './errors/errors.fr.json';


class Localization {
  constructor() {
    this.Urls = new LocalizedStrings({
      en: enUrls,
      fr: frUrls,
    });
    this.Errors = new LocalizedStrings({
      en: enErrors,
      fr: frErrors,
    });;
    this.Labels = new LocalizedStrings({
      en: enLabels,
      fr: frLabels,
    });;
  }

  Urls() {
    return this.Urls;
  }

  Errors() {
    return this.Errors;
  }

  Labels() {
    return this.Labels;
  }

  setLanguage(lang) {
    this.Urls.setLanguage(lang);
    this.Errors.setLanguage(lang);
    this.Labels.setLanguage(lang);
  }

  getLanguage() {
    return this.Labels.setLanguage(lang);
  }
};

const instance = new Localization();

export default instance;
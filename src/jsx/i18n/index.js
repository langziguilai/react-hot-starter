import {i18n_zh} from './zh_cn';
import {i18n_en} from './en_us';
export function(lang){
    switch(lang){
      case "zh_cn":
         return i18n_zh;
      case "en_us":
         return i18n_en;
      default:
         return i18n_en;
    }
}

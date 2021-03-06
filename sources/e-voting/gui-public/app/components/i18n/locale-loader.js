/******************************************************************************
 * e-voting system                                                            *
 * Copyright (C) 2016 DSX Technologies Limited.                               *
 * *
 * This program is free software; you can redistribute it and/or modify       *
 * it under the terms of the GNU General Public License as published by       *
 * the Free Software Foundation; either version 2 of the License, or          *
 * (at your option) any later version.                                        *
 * *
 * This program is distributed in the hope that it will be useful,            *
 * but WITHOUT ANY WARRANTY; without even the implied                         *
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.           *
 * See the GNU General Public License for more details.                       *
 * *
 * You can find copy of the GNU General Public License in LICENSE.txt file    *
 * at the top-level directory of this distribution.                           *
 * *
 * Removal or modification of this copyright notice is prohibited.            *
 * *
 ******************************************************************************/

'use strict';

angular
  .module('e-voting.locale.loader', [])
  .config(function (I18NProvider) {
    var i18nConfig = {
      langsDir: 'components/i18n/bundle/',
      langs: [
        {
          locale: 'en-gb',
          flag: 'gb',
          name: 'English',
          shortcut: 'eng'
        },
        {
          locale: 'ru',
          flag: 'ru',
          name: 'Russian',
          shortcut: 'rus'
        }]
    };
    I18NProvider.config(i18nConfig);
  })
  .directive('langSelect', function langSelect() {
    return {
      restrict: 'E',
      replace: true,
      template: '<ul class="language-select"><li ng-repeat="lang in LangSelectCtrl.languages" class="{{lang.locale}} label" ng-click="LangSelectCtrl.changeLang(lang)" ng-class="LangSelectCtrl.current === lang ? \'label-info\' : \'label-default\'">{{lang.shortcut}}</li></ul>',
      controller: 'LangSelectController as LangSelectCtrl'
    };
  })
  .controller('LangSelectController', function LangSelectCtrl(I18N) {
    var langSelect = this;
    langSelect.languages = I18N.getLangs();
    var currentLocale = I18N.getCurrent();
    langSelect.current = langSelect.languages.filter(function(lang) {
      return lang.locale === currentLocale;
    })[0];

    langSelect.changeLang = function (lang) {
      if (angular.equals(langSelect.current, lang)) {
        console.log('oops');
        return;
      }
      console.log('switch');
      langSelect.current = lang;
      // we can pass a callback to setCurrent
      I18N.setCurrent(lang.locale, function () {
      });

    };
  });

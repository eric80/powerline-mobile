angular.module('app', [
  'ionic',
  'app.config',
  'app.controllers',
  'app.directives',
  'app.filters',
  'app.services',
  'ngSanitize',
  'ngAnimate',
  'JsCollection',
  'pasvaz.bindonce',
  'uiGmapgoogle-maps',
  'jett.ionic.scroll.sista'
]).config(function ($locationProvider, $httpProvider) {

  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  $httpProvider.interceptors.push('authInterceptor');

  //$locationProvider.html5Mode(false);

}).config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
  GoogleMapApi.configure({
    //    key: 'your api key',
    v: '3.18',
    libraries: 'places'
    });
}]);

angular.module('projeto').component('pageHeader', {

bindings: {
  name: '@',
  small: '@',
},
template: "<div class='row'>"+
           "<div class='col-lg-12'>"+
               "<h1 class='page-header'>{{$ctrl.name}}"+
              "<small> {{$ctrl.small}} </small>"+
            "</h1>"+
          "</div>"+
       "</div>"
})

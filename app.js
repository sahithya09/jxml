var app = angular.module('myApp', []);
app.directive('jXml', function() {
    return {
        restrict: 'AEC',
        link: function(scope, el, attr) {
            scope.changeData = function(item){
            var text = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"+"\n"
            var text1 = ""
            i = JSON.parse(item)
            key = Object.keys(i);
            key = key[0]
            el.children()[0].value = "";
            for(var k =0 ; k< i[key].length;k++){
            keys = Object.keys(i[key][k])
            for(var a = 0; a < keys.length;a++){
            text1 += "\n\t"+"<"+keys[a]+">"+i[key][k][keys[a]]+"</"+keys[a]+">"
                }
                text += "\n"+"<"+key+">"+text1+"\n"+"</"+key+">"+"\n"
                text1 = ""
            }

                el.children()[0].value = text
            }
        }
    }
});
---
layout: post
title: "Angular Dynamik"
date: 2013-10-22 16:57
comments: true
categories: 
---

So kommt es vor, dass dem Geschehen im Angular etwas Dynamik abgetragen werden darf. Beispielsweise, wenn das *Diversium*, ein-axial angeklebt, aber scrollbar sein muss.

<!-- more --> 
Konkret bedeutet dies: Man möchte eine scrollbare Übersicht anlegen, jedoch Legende/Lineal/Index am X- und Y-Kopf kleben lassen, damit das Objekt, beispielsweise, indizierbar ist. Lösen kann man das auch mit CSS - so lange die Legenden *(und zwar **beide**)* nicht mit der Übersicht scrollen müssen.
Eine *- meine -* Lösung ist es, neben und über die scrollbare Übersicht, einen *starren* `DIV` zu packen. Diesen befüllt man dann mit *dem* `DIV`, der mit der Übersicht zusammen Scrollen soll. 

```html
<!-- die Übersicht links -->
<div>
    <div ng-style="overviewLeft"> ... </div>
</div>

<!-- die Übersicht oben -->
<div>
    <div ng-style="overviewTop"> ... </div>
</div>

<!-- die scrollbare Übersicht -->
<div class="mainDiv" scroll=""> ... </div>
```

Im Angular legt man eine Direktive an, die immer angesprochen wird, wenn in `.mainDiv` gescrollt wird.

```js
app.directive('scroll', function () {
  return function(scope, element) {
    angular.element(element).bind('scroll', function() {
      scope.overviewTop = {left:-this.scrollLeft+'px'};
      scope.overviewLeft = {top:-this.scrollTop+'px'};
      scope.$apply();
    });
  };
});
```

Natürlich muss man dabei Bedenken, dass das ganze nicht so flüssig wie in CSS arbeitet, da der Rechenaufwand nicht von der GPU getragen wird und etliche Scopes durchläuft.
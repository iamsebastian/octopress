---
layout: post
title: "Gulp im Rakefile"
date: 2014-07-01 17:09
comments: false
categories:
- ruby
- rake
- gulp
- taskrunner
---

Da mein Blog nicht ganz so ressourcensparend ist, wie ich das gern möchte, habe ich darüber nachgedacht, einen *(node)* Taskrunner im Workflow zu integrieren.

<!-- more -->

Wie man ja sieht, ist mein Blog statisch. Den ganzen Rahmen setzt Octopress, das Theme hatte ich als Liquid-Template-Grundgerüst zusammen gesucht und dann so lange modifziert, bis die Inhalte gepasst haben. Anschließend habe ich eine große Portion SASS *darauf geworfen* und nun sieht der Blog seit einer Weile aus, wie er eben aussieht. Um möglichst wenig Requests zu haben, schickte ich mich bereits damals an, das Template komplett um zu biegen. Die ganzen unnötigen Bibliotheken, wie jQuery, flogen raus und das GitHub-Plugin habe ich so weit runter gebrochen, dass es nicht viel mehr macht, als einen async. Call und das ankommende JSON in den DOM zu parsen.

Leider habe ich keine Möglichkeit gefunden, den GET an die GitHub API weiter zu restriktieren, so, dass weniger Daten ankommen würden. Einzig die Anzahl der übermittelten Repository-Informationen lässt sich begrenzen. Im Moment sind das bei mir vier. Die größe des Requests *(rein der Body)* ließ sich so von ~ 55KB auf ~ 24KB runter brechen, was immerhin eine Ersparnis von ~ 55% ist. Lieber würde ich allerdings das JSON der API-Antwort auf Name, URL und Beschreibung einschränken, was dann nicht viel mehr als 15% Restverkehr bedeuten würde.

So komme ich zu dem Punkt, wo ich weiter an der Performanceschraube drehen kann - nämlich den anderen Requests. In dem Moment, als ich noch nichts weiter gemacht habe, hatte ich bei [*Googles Pagespeed Insights*](http://developers.google.com/speed/pagespeed/insights/) einen Score von 86 / 100.

Was mir spontan vorschwebte, war das Konkatieren von HTML und CSS *- wenn es geht natürlich auch JS*. Da meine Ruby-Kenntnisse zwar auf dem Vormarsch sind, aber noch lange nicht die Reife meiner JS Kenntnisse haben, hatte ich die Wahl zwischen Grunt und Gulp. Grunt hatte ich in einem Anderthalb-Quartals-Projekt zwischen den Jahren 2013 und 2014 verwendet und war keineswegs abgetan. Allerdings verwende ich im Moment in einem aktuellen Projekt Gulp, weswegen die Wahl auf eben diesen Taskrunner fiel.

Bei Octopress ist das Rakefile so aufgebaut, dass man zum *Generien* des Contents, `rake generate` aufruft und zum Deployen auf GitHub `rake deploy` - voraus gesetzt, alles ist entsprechend konifiguriert. 
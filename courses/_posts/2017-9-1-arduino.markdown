---
title: Arduino Programming
layout: course
syllabus: https://docs.google.com/document/d/1-wlEr1381QtQVv3uC-1OeJkFdw-UsqrXFt5qNRpLcvk/edit?usp=sharing
img: arduino/digger/1.jpg
description: This course is a hands-on introduction to the Arduino microcontroller, an incredibly versatile open-source electronics platform used for developing interactive electronics projects. Students will learn about motors, LEDs, sensors, and other electrical components as they design, build, and program circuits.
---

{::options parse_block_html="true" /}

{% for project in site.data.arduino_projects %}

<div class="clearfix headerText">
<div class="col-md-3 gallery">
[![alt text]({{ project.imagefolder }}/{{ project.images[0].thumb }}){:.img-responsive}]({{ project.imagefolder }}/{{ image.name }})
</div>
<div class="col-md-9">
<h4>[{{project.title}}]({{project.url}})</h4>
<p>{{project.description}}</p>
</div>
</div>
<hr>
{% endfor %}

{::options parse_block_html="false" /}

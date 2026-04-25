---
title: The Art of Making
layout: course
syllabus: https://docs.google.com/document/d/1Evac8u13trqQa4U12cUPgSYSmcfpH4B8/edit?usp=sharing&ouid=110722239815758083642&rtpof=true&sd=true
img: arduino/digger/1.jpg
description: This course is a hands-on introduction to the technology and mindsets of making. Projects will introduce students to coding, engineering, and design thinking by leveraging tools like Arduinos, 3D printers, laser cutters, and more. Wearable tech, 3D printed boats, line-following robots, and electronic music instruments are just a few examples of potential projects created in this course.
---

{::options parse_block_html="true" /}

{% for project in site.data.arduino_projects %}

<div class="clearfix headerText">
<div class="col-md-3 gallery">
<a href="{{ project.url }}" target="_blank"><img src="{{ project.imagefolder }}/{{ project.images[0].thumb }}" class="img-responsive" /></a>
</div>
<div class="col-md-9">
<h4><a href="{{project.url}}" target="_blank">{{project.title}}</a></h4>
<p>{{project.description}}</p>
</div>
</div>
<hr>
{% endfor %}

{::options parse_block_html="false" /}

---
title: Advanced Computer Science
galleryid: advancedCS
layout: course
syllabus: https://github.com/CateSchool/AdvancedCS
img: advancedCS/advanced2.png
description: Advanced Computer Science equips students with the programming skills to solve a diverse set of complex computational problems. The course covers Object-Oriented Programming principles, data structures and algorithms, and data science and visualization.
---

{::options parse_block_html="true" /}

{% for project in site.data.projects3d %}

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

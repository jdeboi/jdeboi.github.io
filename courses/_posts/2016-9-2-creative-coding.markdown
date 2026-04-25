---
title: Creative Coding
layout: course
img: creativecoding/data.png
syllabus: https://docs.google.com/document/d/1nZnCGbtjfl_05Zjf-N-s2sBGpE7FSt3JVHzlmxWqvVo/edit?usp=sharing
description: Creative Coding employs computer programming as a means of creative expression. “Algorithmic” and generative art, interactive web apps, data visualizations, and virtual reality are just a few examples of the creative potential of code explored through projects.
---

{::options parse_block_html="true" /}

{% for project in site.data.creative_projects %}

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

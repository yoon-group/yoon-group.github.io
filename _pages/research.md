---
layout: page 
title: Research
permalink: /research/
nav: true
nav_order: 3
---

<div class="schematic float-right">
    {% include figure.liquid loading="eager" path="/assets/img/multiScale.gif" class='img-fluid z-depth-0 rounded' %}
</div>

<div class="clearfix">
<p>Our central research question is: “How do the <strong>coupled processes</strong> of fluid flow, solute transport, geochemical reactions, and microbial metabolism influence each other within various geological structures at different <strong>scales</strong>?” To address this, we employ a combination of theoretical, computational, experimental, and field-based approaches.</p>

Our current research topics include:
<ul>
    <li>Microfluidic investigations of microbial denitrification</li>
    <li>Surface water and groundwater interactions in karst aquifers</li>
    <li>Carbonate rock dissolution and precipitation</li>
    <li>Data assimilation and machine learning applications for hydrogeological characterization</li>
</ul>

<p>Our research is driven by a commitment to fostering collaboration across diverse areas of expertise. We actively partner with researchers in microbiology and hydrogeochemistry, through which we pursue innovative and interdisciplinary breakthroughs in hydrogeology.</p>


</div>
 



<hr>

<!-- I currently study anomalous transport and mixing-induced reaction in rough fractures.  -->

<!-- {% for project in site.projects %}

{% if project.redirect %}
<div class="project">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}

<div class="project ">
    <div class="thumbnail">
        <a href="{{ project.url | prepend: site.baseurl | prepend: site.url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>

{% endif %}

{% endfor %}
 -->

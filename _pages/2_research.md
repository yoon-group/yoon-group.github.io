---
layout: page
title: Research
permalink: /research/
description: 
---

My research centers on the integration of physical and data sciences, aiming at improving our fundamental understanding and predictive capability of hydrogeological systems. In particular, I am focusing on the process of flow, transport, mixing, and reaction in porous and fractured media across scales. My overarching research question is: "How will small-scale flow & transport processes impact large-sclae ones?" To tackle the question, I combine theoretical, computational, experimental, and field-based approaches. 

<center><img src="/assets/img/scaleBridging.gif" alt="drawing" width="100%"/></center>

<br/>

I also develop data assimilation and machine learning techniques for subsurface characterization and source identification. The below image shows an application of data assimilation that identify the location of multiple contaminant sources by assimilating monitoring well data.

<center><img src="/assets/img/sourceID.gif" alt="drawing" width="90%"/></center>
   
<br/>

Generally speaking, my research can be classified as either forward or inverse problems as described in the schematic below. In forward direction, I investigate how a physical state determines the response of hydrogeologic systems, such as the effects of fracture-matrix interaction on mass transport. In inverse direction, I utilize observed responses of a hydrogeologic system to inversely estimate the uncertain physical state that leads to the observed response.
 
<center><img src="/assets/img/forward_inverse.jpg" alt="drawing" width="90%"/></center>

<br/>

My current specific research topics include:
<ul>
    <li>Non-Fickian solute transport in Platteville limestone formation</li>
    <li>Stochastic upscaling for non-Fickian transport</li>
    <li>Data assimilation for source identification</li>
    <li>Machine learning-assisted identification of anomalous transport mechanism</li>
    <li>Groundwater-surface water interaction at stream bed with vegetation</li>
</ul>


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

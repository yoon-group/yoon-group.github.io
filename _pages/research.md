---
layout: page 
title: Research
permalink: /research/
nav: true
nav_order: 3
---
Our research is centered on the integration of physical and data sciences, with the aim of enhancing our fundamental understanding and predictive capabilities in hydrogeological systems. Specifically, we focus on the processes of flow, transport, mixing, and reaction within porous and fractured media across various scales. Our overarching research question is: "How do flow and transport processes at different scales influence each other?" To address this question, we employ a combination of theoretical, computational, experimental, and field-based approaches.

<center><img src="/assets/img/multiScale.gif" alt="drawing" width="90%"/></center>

<br/>

We also develop data assimilation and machine learning techniques for subsurface characterization and source identification. The below image shows an application of data assimilation that identify the location of multiple contaminant sources by assimilating monitoring well data.

<center><img src="/assets/img/sourceID.gif" alt="drawing" width="90%"/></center>
   
<br/>
In general, our research can be categorized as either forward or inverse problems, as described in the schematic below. In the forward direction, we investigate how a physical state determines the response of hydrogeological systems, including the effects of fracture-rock interaction on mass transport. In the inverse direction, we use observed responses of a hydrogeological system to inversely estimate the uncertain physical state that leads to the observed response.

<center><img src="/assets/img/forward_inverse.jpg" alt="drawing" width="90%"/></center>

<br/>

Our current specific research topics include:
<ul>

    <li>Non-Fickian solute transport in fractured limestone formations</li>
    <li>Fluid-rock interaction within rock fractures</li>
    <li>Stochastic upscaling for mass transport in hyporheic systems</li>
    <li>Data assimilation for hydrogeological characterization</li>
    <li>Machine learning-assisted identification of Non-Fickian transport mechanisms.</li>
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

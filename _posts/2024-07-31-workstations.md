---
layout: post
title: Workstations
date: 2025-12-28 14:40:00-0400
description: How to access group workstations
tags:
categories: Quantitative_Hydrogeology_Lab
giscus_comments: false
related_posts: false
pretty_table: true
---

## How to access the group workstations

Three workstations are available in Quantitative Hydrogeology Lab.

<table
  data-toggle="table"
  data-url="{{ '/assets/json/table_ip.json' | relative_url }}">
  <thead>
    <tr>
      <th data-field="name">workstation</th>
      <th data-field="ip">IP</th>
    </tr>
  </thead>
</table>

<p></p>

The ID, SSH password, and VNC port number will be created and provided to each member upon request to Sean.

<table
  data-toggle="table"
  data-url="{{ '/assets/json/table_port.json' | relative_url }}">
  <thead>
    <tr>
      <th data-field="id">ID</th>
      <th data-field="port">port number</th>
      <th data-field="workstation">accessible workstations</th>
    </tr>
  </thead>
</table>

<p></p>


<br>
- An example of setting up a GUI connection on the workstation ‘yoon-group-2’ using the credentials of 'lindsey' is shown below. 
- Download and install turboVNC viewer according to the OS of your local machine ([Download turboVNC Viewer](https://sourceforge.net/projects/turbovnc/)).
- For Windows users, PuTTY is required ([Download PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)). For mac OS users, skip to step 2. 
- Always close the VNC server session when you are finished with your work. If you need to run a process in the background for an extended time, use the [screen](https://www.geeksforgeeks.org/screen-command-in-linux-with-examples/) command to run it in a screen session.

<div>
1. Run PuTTY and enter IP address 10.227.17.189 and a title for your session as shown below. The example below is test; you can have your own title. Click Save to save your settings for future use, and then click Open to initiate your SSH tunnel.
<center><img src="/assets/img/ws1.png" alt="drawing" width="70%"/></center>
<br>

2. Once a terminal is open, type your id and ssh password as below. (For mac OS, open terminal and login by ‘ssh lindsey@10.227.17.189.)
<center><img src="/assets/img/ws2.png" alt="drawing" width="90%"/></center>
<br>

3. Change your ssh password as you want for security. To change the password, type ‘passwd’.
   <br>

4. Run a VNC server on your assigned port number by ‘vncserver :[Your Port Number]’. You will be asked to create your VNC password (8 digits). If you want to change the password later, type in vncpasswd.
<center><img src="/assets/img/ws3.png" alt="drawing" width="90%"/></center>
<br>

5. open turboVNC viewer in your local machine, type in IP address + port number, click ‘Connect’
<center><img src="/assets/img/ws4.png" alt="drawing" width="70%"/></center>
<br>

6. type in your VNC passwd (8 digtis).
<center><img src="/assets/img/ws5.png" alt="drawing" width="60%"/></center>
<br>

7. Once you are connected, you should see the default desktop. It should look something like this:
<center><img src="/assets/img/ws6.png" alt="drawing" width="90%"/></center>
<br>

8. Again, always close the VNC server session ("vncserver -kill :2") when you are finished with your work. If you need to run a process in the background for an extended time, use the <a href="https://www.geeksforgeeks.org/screen-command-in-linux-with-examples/">screen</a> command to run it in a screen session.

</div>

---
layout: post
title: Workstations
date: 2025-11-03 14:40:00-0400
description: How to access group workstations
tags:
categories: Quantitative_Hydrogeology_Lab
giscus_comments: false
related_posts: false
pretty_table: true
---

## How to access the group workstations

Three workstations are available in Quantitative Hydrogeology Lab.

| Name         | IP            |
| ------------ | ------------- |
| yoon-group-0 | 10.242.75.188 |
| yoon-group-1 | 10.227.17.58  |
| yoon-group-2 | 10.227.17.189 |

<p></p>

The ID, SSH password, and VNC port number will be created and provided to each member upon request to Sean.

| ID      | VNC port number | accesible workstations |
| ------- | --------------- | ---------------------- |
| lindsey | 2               | yoon-group-2           |
| fabian  | 3               | yoon-group-0,1,2       |
| samuel  | 4               | yoon-group-2           |
| madison | 5               | yoon-group-0,1,2       |
| keith   | 6               | yoon-group-0,1,2       |

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

---
layout: post
title: Workstations
date: 2024-07-31 14:37:00-0400
description: How to access group workstations
tags: 
categories: Quantitative_Hydrogeology_Lab
giscus_comments: false
related_posts: false 
pretty_table: true
---

## How to access the group workstations
Two workstations are available in Quantitative Hydrogeology Lab.

| Name | IP |
| ------------ | ------------ |
|   yoon-group-1   |    10.227.17.58   |
|   yoon-group-2   |    10.227.17.189    |

<p></p>

The ID, SSH password, and VNC port number will be provided to each member upon request to Sean. In this manual, an account with the following credential information will be used to demonstrate how to access our group workstations.

| ID | ssh password | VNC portnumber | VNC password |
| :----------- | :------------ | :------------ | :------------ |
| lindsey       |e     |2 |22222222 |

<br>

- Download and install turboVNC viewer according to the OS of your local machine ([Download turboVNC Viewer](https://sourceforge.net/projects/turbovnc/)).
- An example of setting up a GUI connection on the workstation ‘yoon-group-2’ using the credentials of lindsey is shown below. 
- For Windows users, putty is required ([Download putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)). For mac OS users, skip to step 3. 

<div>
1. Run Putty and enter IP address 10.227.17.189 and a title for your session as shown below. The example below is test; you can have your own title. Click Save to save your settings for future use, and then click Open to initiate your SSH tunnel.
<center><img src="/assets/img/ws1.png" alt="drawing" width="60%"/></center>
<br>

2. Once a terminal is open, type your id and ssh password as below. (For mac OS, open terminal and login by ‘ssh lindsey@10.227.17.189.)
<center><img src="/assets/img/ws2.png" alt="drawing" width="90%"/></center>
<br>

3. Change your ssh password as you want for security. To change the password, type ‘passwd’.
<br>

4. Run a VNC server on your assigned port number by ‘vncserver :2’. Your current VNC password is ‘22222222’. If you want to change the password, type in vncpasswd.
<center><img src="/assets/img/ws3.png" alt="drawing" width="90%"/></center>
<br>

5. open turboVNC viewer in your local machine, type in IP address + port number, click ‘Connect’
<center><img src="/assets/img/ws4.png" alt="drawing" width="70%"/></center>
<br>

6. type in VNC passwd (22222222). 
<center><img src="/assets/img/ws5.png" alt="drawing" width="60%"/></center>
<br>

7. Once you are connected, you should see the default desktop. It should look something like this:
<center><img src="/assets/img/ws6.png" alt="drawing" width="90%"/></center>
</div>

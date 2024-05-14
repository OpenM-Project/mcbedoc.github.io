---
layout: default
title: The story
nav_order: 2
---

# The story of MCBE unlockers
{: .no_toc }

The detaild story of cracking Minecraft: Windows 10 Edition
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .info }
> When Minecraft: Windows 10 Edition was released, people started to look for ways to play the game for free *(as usual)*. The game had a trial version which was limited and you could only play for 60 minutes in a world.
>
> Then, people started to notice that the paid version and the trial version was the exact same app! So, efforts started to try to unlock the game, and here we are today.

### The Beginning, M Centers & online-fix\.me
* The First trick, discovered by tinedpakgamer, is the **ClipSVC Method**. With some registry code, you could force stop ClipSVC and prevent it from running in the background. After that, when you start Minecraft, it would buffer at 46% which you would then go and force stop Runtime Broker under Minecraft in Task Manager. And this worked! This was then packed into a program named M Centers by the discoverer. But, this method was the opposite of safe, as it breaks MS Store completely and on 10th October 2022, it got patched by Microsoft Sanity/Subscription Check Update.

* Then came along a permanent method, the **DLL Replacing**. By replacing `Windows.ApplicationModel.Store.dll` with *Cracked DLLs* and making it say the game was licensed, Minecraft was able to be unlocked! This was the method used by Tinedpakgamer in M Centers, released as version 3.0 *(2.0 was a sentry launcher using precracked appx. It failed and got scraped)*. After M Centers 3.0 became commonly used, M Centers 3.3 was released which did the same thing, but fixed a bug in the previous version.

* In 2021, online-fix\.me *(a well-known Russian site)* released their own version of memory injection crack, which became popular as well. After this, Tinedpakgamer developed M Centers 4.0 which added **Appx Download** and discarded some in-development methods like, *DLL RAM Patch*, *Store Purchase Crack* using pre-cracked dlls from a Github repository. M Centers 5.0 was released and it used **In-Memory Code Manipulation** without the need of any DLLs. This version also had a UWP app but it was tricky to install *(it needed Developer Mode to be enabled, and made users install his self-signing certificate which was not secure at all)*. M Centers 6.0 was released, but it was just a re-made UI for the exact same app *(it was intended to provide auto-patching DLLs, but it was never done).

---

### The End of M Centers & The Rise of M Community
* After some time of the releases, Tinedpakgamer announced the end of M Centers, and started slowly deleting everything related to him. The speculated reason for this was an DMCA takedown, but this was never confirmed. 

* While M Centers was slowly shutting down, a user named SOMEONE#1060 created a server named "M Community" and shared it through a major chunk of users on the M Centers server. his server, M Community, was the unofficial revival and archive of M Centers. As this server got increasingly popular, Tinedpakgamer found out about it then proceeded to delete the invitation message. But it was too late, and most of the stuff was archived and lots of users were in the server already. M Centers eventually deleted the Discord server, leaving no trace of it. 

* Later, a video titled something along the lines of "How to get MCBE for free" blew up. This video had linked the M Community server, which caused it to get lots of members. This soon led to M Centers joining the server and uploading M Centers 7.0 *(also known as Akshnav Launcher)* which also used *In-Memory Code Manipulation]. But this method had some issues.

* It was basically closed-source, it got frequently flagged by AV software as a virus, and you had to open the app and launch Minecraft that way to make it work. It also didn't work with all versions of Minecraft or Windows, so it was basically just a mess which got some people upset, and some left. Then there was a new player in the game.

---

### The New Beginning of the OpenM Project

* Developers in M Community started work on decompiling Akshnav, cleaning it up and the sorts. This led nowhere in the end, but it was still a helpful resource to get an idea of how it was done. This work was done under M Community-Development.

* And then some staff members and developers created a new server named "OpenM Community", and therefore the OpenM Project. They started work on `librosewater`, which was a process memory manipulation library written in pure Python.

* This hinted at their next release, `BEAMinject` which was a fast and secure unlocker using **DLL Memory Manipulatoion** for Minecraft. Development was slow and steady, but it was a breath of fresh air in the Minecraft cracking scene because of its features:
  - It *was* the only maintained and currently working tool that was open-source
  - It worked with all kinds of Minecraft and Windows versions
  - It natively supported ARM devices
  - It had a silent executable which allowed users to just create a nice-looking shortcut
  - It didn't permanently modify system files and didn't have any prebuilt DLLs

### The Demise of OpenM and Rebirth of M Centers 

* OpenM has been aborted, as soyeonswife63 retired on OpenM to begin a new individual project. The rest Mods/Admins deleted OpenM and set sail to M Community, as they have merged with them. 

* Since MCenter's discontinuation, tinedpakgamer has become silent ever since, except in Twitter. But, as of 1st May 2024, he joined M Community and announced that he was working on MCenters 8.0, so, MCenters prevail!

* First, tinedpakgamer revived the [Youtube Channel](https://www.youtube.com/channel/UCM1jM7NWXvt8roj8mzMvhfw). He then created the [Discord Server](https://dsc.gg/mcenters) in which, on 8th May 2024, officially released MCenters 4.5 [The base code of MCenters 8.0]. It uses DLL Replacing, just like 4.0, but used .NET Framework replacing .NET Core, in which removes the requirement of .NET Runtime in your device. It also has an x86 version, but mainly it adds a *secret function*. The program can also be used with other UWP applications. 

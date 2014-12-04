---
title: Installing Windows 7 on Lenovo G505
layout: post
---

First of all, you need a proper ISO image. You can get one [here](http://www.techverse.net/download-windows-7-iso-x86-x64-microsofts-official-servers/). 

Then you should create a *bootable USB/DVD disc*. And if you do not know how to do that, 
there are hundreds of good examples available on the Internet, so just do a quick search.

Then you need to plug in the *USB device/DVD disc* that you created and shut down your computer afterwards.

Now look at your shiny *G505*. There is a small button next to the power button (on its right). Press it and wait a little bit.
You should see the startup menu. Choose *"BIOS setup"*.

**Now follow these steps:**

1. Find *"SecureBoot"* option and disable it. Otherwise you will not be able to perform installation.

2. Now change the boot mode to *"Legacy support"* (it is set to *"UEFI"* by default). You can not install Windows 7 on UEFI-based computer without the legacy support mode enabled.

3. You can also change the boot priority to *"Legacy first"*, although it is optional (if you want to, you can, but it is not required).

4. Then change the boot order using *Fn+F5, Fn+F6* combinations. You should place your *USB device/DVD disc* on top of the list.

Now restart your computer and (if you did everything correctly) you will see the Windows 7 installation window.

Have fun!

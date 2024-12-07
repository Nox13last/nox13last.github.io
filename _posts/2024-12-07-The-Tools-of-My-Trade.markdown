---
title: The Tools of My Trade
date: 2024-12-07 3:36:00 +0000
categories: [ffxiv]
tags: [info]
toc: true
comments: true
---
## Foreword  
As one can imagine, the way I get these pictures is frowned-upon by Square Enix and Creative Business Unit III. This is because *Final Fantasy XIV* has a fairly strict policy on modifications to the game. Not that I need to bat for a corporation but this is understandable - it's an online multiplayer game with competitive elements.  
Before I proceed, I want to make clear that I have no intentions about damaging the health of the game. And in the *incredibly rare* times when I go on PvP, this shit stays *outside*. This is based on a liberal intrepretation of Yoshi-P's stance on third-party modifications. More specifically, the Advanced Combat Tracker, which is not in the purview of my research (but it nonetheless a useful tool to have in my Mentorial capacities).

{% include embed/youtube.html id='e_i6mjiGerU' %}

The opinion basically boils down to "As a company, we have to condemn these things. __Please do not use them.__ With that said, if you do use them, *please do not give us a reason to come after you.*"

In shorter parlance, "don't be a chud, and you'll lower your risk of being banned; but that chance is never non-zero."  
Yoshi-P has already spoken about the disappointment he feels with the World First raid of Omega Savage - a raid whose first-time winners used Cammy (mentioned later) - or an equivalent modification - to manipulate the camera (so as to see more of the battlefield). This is not the spirit I wish to embody. I'm just a humble Shapewizard. If you use the knowledge you gained here in the pursuit of ill-gained prestige, you are the worst, and my Museum closes its doors to your ilk.  

In a more general sense, for personal use, I use modifications to make the game playable. The Accessibility options are infamous. I get easily lost in visual noise, have difficulty focusing on one thing or the other, fatigue easily, and nerve damage to my hands means that I can't play the game in a combat-effective sense for the first three days after it updates (because none of the modifications work at the time). *You* can get by with giving your Melee DPS the Danger Dorito. *I* cannot.  
Also, the problem has been bad since Shadowbringers, but has zenithed at Dawntrail - the game throws fifty visual tells at you and asks you to make sense of them. Telegraphs make no sense, are deliberately misleading (for the purpose of gimmicks), or only show up for the last half-second of an attack having expected you to look at the enemy's body-language. **That shit sucks.** And I genuinely don't think Yoshi-P nor his employees have so much as met a disabled gamer before (especially if the former's opinion with FFXVI's "accessibility rings" are any indication).  
I subscribe because I want to enjoy the game. But I refuse to be excluded because of things about me I can't control. If Steam had a memo section for automated purchases, I would write that in it...

## Tools  
That's quite enough proselytising. That's quite enough backstory. You're here for tools and knowledge. Hopefully. Why *are* you here?

### XIVLauncher & Dalamud  
**Location:** [Goatcorp](https://goatcorp.github.io/)
It is little surprise to anyone that the "stock" launcher (the one that comes with the game) is actually bad. It has to load assets (images, news items, server status) before you're allowed to attempt to login. Also, it doesn't save your credentials or log you in automatically. Also-also, updates are glacial. That all sucks. Also³, it's generally clunky to look at or work with.  

Enter the XIVLauncher. I'll just steal their list of features.

 * Auto-login
 * Fast patching
 * Discord Rich Presence
 * Fast in-game market board price checks
 * Chat filtering
 * Chat bridge to Discord
 * Discord notifications for duties, retainer sales, etc.
 
Even if you don't intend to use anything in this list, you should use this. If you're worried about someone sitting at your computer and logging in as you, then XIVLauncher supports Two-Factor Authentication. Configure it to do that. Load the launcher, then open the app on your phone, and you're in. If you're like me (my condolences), you probably have a password consisting of random characters. It's a pain to write it out, and copy-pasting it from a doc or a password-vault isn't secure either (there's shit that can scrape your clipboard now). Don't put up with it.  
That's already a pretty powerful quality-of-life thing. But the real meat-and-potatoes is Dalamud, which is set-up by the Launcher. Don't try to Google this name without context, it will just bring up [some shit about a moon or something](https://finalfantasy.fandom.com/wiki/Dalamud). In grossly oversimplified terms: Dalamud is the scaffold that sits around (and throughout) the game. It's the industry-standard modification to the game, so you don't have to worry about "is *x* better than Dalamud?" It's not. There's __only__ Dalamud. And it is updated with a level of commitment that borders on fanatic. There is no way Squeenix doesn't know about Dalamud, which is why it is **so, so important** that we be on our best behaviour when using it.  

Further entries on this page that are titled "repo" are tools that require the aftermentioned URL to be put in Dalamud's Experimental Tab in-game. Under Third-Party Repos. Don't just add everything you lay your eyes on. It's not safe, and Dalamud starts dropping frames if it's spending so much time gathering and rendering the list of things to offer.  
And for future reference, whenever I (or anyone, in general) uses the word "repo", it is short for "repository", and is the collection of things in which a given thing can be found. I'll write a glossary at some point. Also, the nomenclature for a modification offered through Dalamud is "plugin". Do not confuse it with the word "mod". That's for shit that affects files. (Shit like texture and model changes.) Both plugin devs and mod devs will dislike you.  

### Cammy  
**Developer:** UnknownX7  
**Repo:** `https://raw.githubusercontent.com/UnknownX7/DalamudPluginRepo/master/pluginmaster.json`  
![Cammy](/about_cammy.png){: width="600" }  
Cammy is a plugin that lets you change the parameters of the camera. It lets you change the field-of-view (how wide the view is, for capturing more things at close range), the zoom level, camera collision (whether it will move in front of something solid to keep you in frame), and tilt (the roll of the camera, as measured in radians-from-horizon). Also, if you're dead, it provides the option to spectate your current target. But that stuff isn't very interesting.  

Included is a Freecam, and is the mechanism by which I find the shapes. It's easy to use. Check the box (or use the command `/cammy freecam`), and the camera will unlock from you. Controls for flying the camera are the same as mount-flight or swimming. Your body will stop in place while you're doing this (unless you're riding pillion). So if you're riding a Hunt Train, you will fall behind. This is ostensibly to stop your discorporated ass from blundering into danger because your mind is off looking at cubes. Do not hold your compatriots up, especially if you're providing an important function of the group. There's plenty of time to explore at the end of the Duty, when everyone has already left.  
Also, you can speed up or slow the camera down by holding the Auto-Run button and scrolling with the mousewheel. Slow down to get the perfect view, or speed up if you know where you're going. Don't go too fast - you may have trouble coming back. Also, cartesian infinity is a thing, and the camera doesn't like when you try to punch a hole through it.  

This is __not__ a cheating implement. This will not let you target things that are too far away, or things that you wouldn't be able to target anyway. But the render radius will stay with the camera. So while NPCs, creatures, and things will all disappear, the world itself will load in fine.  

### Splatoon  
**Developer:** NightmareXIV  
**Repo:** `https://love.puni.sh/ment.json`  
~Splatoon is a third-person shooter series by Nintendo that follows the vivacious and rebellious Inkl--~ No, wait. Wrong one. Sorry.  
Splatoon is a very powerful "waymarking" plugin. Powerful enough that I only use about 30% of what it offers, and mechanically know even less than that.. If you've read some of the articles here, you may have seen some red circles, or yellow names, or red/yellow lines. Splatoon is responsible for that and more.  
Located at the heart of it is its Layouts system. If you want to keep a consistent eye on anything that shows up, you can add it to the list. Suppose that you're a Gatherer, and you know where you'll be tromping about. You can either save Waymarks, or keep a Layout that designates the names of the nodes, have that layout draw a line from you to the node, ring that node, and only do this if you're a Disciple of the Land.  

![Cammy](/about_splatoon_1.png){: width="600" }
_I'm looking for rocks to bash._

Going through your Hunting Log? You can type `/sf (name)`, and it will search for and ping everything in range matching that name. In the following example, I'm hunting Shelfclaw Sahagins. Anything else (such as Shelfspine Sahagins) are worthless. So by typing `/sf Shelfspine`, I get flashing lines that show what I am looking for, and only that.  
![Cammy](/about_splatoon_2.png){: width="600" }
_Pick your prey; don't kill without discrimination._

Looking for an NPC in a crowd? It can do that. But what it is also good at is pointing out **Untargetable Entities**. With the command `/sf !!(name)`, it will look for things, including things that are untargetable, and point them out. This includes things that will stand there *at some point*. Take, for instance, this Island Sanctuary. The Beach is used in cutscenes that are engaged by approaching a guest. We know (if we've gotten that far) that Tataru has a habit of bringing people over. So we can type `/sf !!Tataru`, and see all the places where she is programmed to stand, at all points in the timeline.  
![Cammy](/about_splatoon_3.png){: width="600" }
_That's a lot of places for Tataru to stand._

You want to be depressed? Hell yeah, you do. You want a reminder of *just how empty The Waking Sands is.*  
![Cammy](/about_splatoon_4.png){: width="600" }
_Pray return to the Waking Sands. Pray. Please._ 

The storeroom is still here, and you can almost *see* Urianger standing there with that stupid grain bag on his head. But with this, you can see the empty space and remember that he once was there and his English was even older and ye-butcherede back then.  

As an aside, I save the positions of every cube or funny shape I detect in this list. I might publish the list as a Splatoon preset at some point.  

### QoL Bar
**Developer:** UnknownX7  
**Repo:** (Included with Dalamud.)  
QoL Bar is less an implement for shenanigans, and more just a good tool to use. The game is restricted to ten hotbars (excluding things like Pet Hotbars), and those hotbars are themselves restricted to only twelve items each. QoL Bars allows you to make bars of arbitrary size and with arbitrary icons (not just those in the game's Macro Icon Picker, or through `/micon (thing) (category)`.  
It supports icons or text (for a traditional menu), and the bar buttons themselves support any command that the game uses in macros. It can also intercept keypresses. For example, the command to use my Freecam is in here somewhere, but I can assign a hotkey to it.  
![Cammy](/about_qolbar_1.png){: width="600" }
_The hotkey means I can quickly use and un-use it. It is, mechanically, a button macro._

Sick of having Sprint take up a spot on every hotbar that could fit a technique? Turn it into a QoL Bar! It can even track the cooldown and readiness of a technique if you use it as a surrogate. In the example below, I have this button use the `/action "Sprint"` command, and have also configured it to track the readiness - I have already sprinted, and can't use it again for a while.  
![Cammy](/about_qolbar_2.png){: width="600" }
_Cooldowns, and ways to apply them to the icon._

And finally, the buttons are not beholden to 15 commands. It can execute more, and it can do them sequentially, one-per-press, or random-one-per-press.  

### Hyperborea  
**Readme:** https://github.com/kawaii/Hyperborea  
**Developer:** NightmareXIV, kawaii  
**Repo:** `https://puni.sh/api/repository/kawaii`  
> *Caveat Lector:* This shit is actually pretty dangerous. Misusing this one can easily get you banned.
{: .prompt-danger }

Hyperborea is a map spoofer. That is, it forces the game to load a map that you otherwise shouldn't access. I've done an [entire article](https://nox13last.github.io/posts/Hyperborea_Spectacular/) on this one (pictured therein is the Mordion Gaol). And it's so sketchy that the plugin won't let you use it until you're in an Inn Room (where no other players are).  
![Cammy](/about_hyperborea_1.png){: width="600" }
_DO THIS RESPONSIBLY._

This is because Hyperborea strangles the connection with the game, blackholing anything that will make you look odd, but it still wants you to be careful. It will also suggest that you use a throwaway Free Trial account, because tampering with the state of the game is *actually* risky. They could suspend your account for this, and they wouldn't even be wrong to do so. But the pursuit of arcane knowledge is never 100% safe.  
Ever wanted to go back to a pre-boss area, where you invariably wait 25 minutes for the Duty Finder to find enough folks to help you kill the boss and you're left to jam out to the soundtrack? Here you go. Here's Interphos, with the Circle of Azem.  
![Cammy](/about_hyperborea_2.png){: width="600" }
_Spheeeene. Where are you?_

What about the variant of the Gold Saucer that's used for Air Force One? That's also in here. It's legally listed as a "Dungeon".  
![Cammy](/about_hyperborea_3.png){: width="600" }
_What's the party for?_

## Afterword  
That about does it. There's a few more tools in my box, but I've been writing this for hours, so I'll probably make this a multiparter.  
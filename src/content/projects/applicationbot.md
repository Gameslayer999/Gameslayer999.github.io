---
title: ApplicationBot
summary: A job-search pipeline that runs on your own machine — it discovers matching openings, tailors your résumé to each one, applies, and tracks everything.
tech: [Python, Claude API, Playwright, SQLite]
image: /projects/applicationbot-icon.png
imageAlt: ApplicationBot app icon.
repo: https://github.com/Gameslayer999/ApplicationBot
order: 3
---

## How it works

Five stages, each runnable on its own or chained into one loop:

**Configure → Discover → Tailor → Apply → Track**

You supply a profile, a base résumé and filters. ApplicationBot finds matching postings, customizes the résumé for each one, fills out and submits the application, and records it. Your data stays in a local, git-ignored folder and only the minimal text needed for tailoring is sent to Claude.

## Safety by design

Submitting an application can't be undone, so every path that submits is one you start deliberately. There's a dry-run switch that prepares everything without sending, a "watch it apply" mode, a command line that stays disarmed by default, and a global kill switch that's checked right before every click.

## What I learned

<!-- Add a few sentences: hardest bug, a design trade-off, what you'd change. -->

---
title: AgentStatus
summary: An always-on-top bar of lights showing the live state of every open Claude Code or Cursor session — working, blocked, finished, or errored — at a glance.
tech: [Rust, Tauri, JavaScript, macOS, Windows]
image: /projects/agentstatus-hero.svg
imageAlt: The AgentStatus light bar, with green, orange, white, red and gray lights for different session states.
repo: https://github.com/Gameslayer999/AgentStatus
order: 1
---

## The problem

When several AI coding sessions run at once, you lose track of which one is waiting for you. Switching windows to check each one breaks focus.

## How it works

AgentStatus is split into two layers:

- **Signal layer:** a hook runs on each session event and writes the session's state to a small JSON file. It's a compiled binary with no dependencies, so it never slows down a turn.
- **Display layer:** a Tauri app watches that directory and draws one light per session. It stays above every other window, including full-screen apps. Click a light to jump to that session.

A single hook covers Claude Code in VS Code, the terminal and Claude Desktop, plus the Cursor agent. The app makes no network connections.

## What I learned

<!-- Add a few sentences: hardest bug, a design trade-off, what you'd change. -->

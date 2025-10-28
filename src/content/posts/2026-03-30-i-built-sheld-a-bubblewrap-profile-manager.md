---
title: "I built Sheld — a Bubblewrap profile manager"
locale: "en_US"
published: true
publish_date: "2026-03-30"
last_edit_date: "2026-03-30"
description: |
  Let me introduce Sheld - a Bubblewrap profile manager for defining per-command sandbox profiles in YAML — globally or per-project — with automatic wrapping when you run those commands in your shell. The goal: practical isolation without the overhead of containers on Linux systems.
section: "computing"
tags: ["sheld", "bubblewrap", "sandbox", "linux"]
keywords: ["bwrap", "security"]
---

**TL;DR**: _Let me introduce Sheld - a [Bubblewrap](https://github.com/containers/bubblewrap) profile manager for defining per-command sandbox profiles in YAML — globally or per-project — with automatic wrapping when you run those commands in your shell. The goal: practical isolation without the overhead of containers on Linux systems._

![Containers vs no security meme](/assets/posts/containers-vs-no-security-meme.avif)

# The dev environment in the age of AI

Your dev environment has never been more exposed:

- **Classic dev**: hundreds of dependencies from `npm`, `pip`, `cargo`, etc. Each one can run arbitrary code during install or at runtime.
- **AI coding assistants**: tools like Claude Code execute shell commands autonomously. They can make mistakes, be manipulated by prompt injection, or accidentally expose secrets.
- **MCP servers**: Model Context Protocol servers are executables that AI assistants call to access filesystems, databases, and APIs. Third-party MCP servers run with your full user permissions — regardless of what sandbox you put your coding assistant in.

The common thread: untrusted code running as you, with full access to your system and data — your `~/.ssh` keys, `~/.aws` credentials, `/etc/passwd`, browser profiles, and more.

# Containers vs. Bubblewrap

The instinctive answer is to containerize everything. And containers do solve isolation — but at a cost: you need a container runtime, image management, registries, and often a whole orchestration layer. That's a lot of machinery for every tool already installed on your machine.

[Bubblewrap](https://github.com/containers/bubblewrap) (`bwrap`) is the lightweight alternative. It wraps a single executable in a Linux namespace sandbox, giving you full control over what filesystems it can see — no daemon, no images, no overhead. It's what Flatpak uses under the hood. The only prerequisite: Linux with unprivileged user namespaces enabled, which is the default on most modern distributions.

# Bubblewrap is great, but raw

`bwrap` gives you fine-grained control over what a process can see and do — namespaces, bind mounts, environment, capabilities.

The problem is the interface. Here's a typical `bwrap` invocation:

```sh
bwrap \
  --share-net \
  --ro-bind /usr /usr \
  --ro-bind /lib /lib \
  --ro-bind-try /lib64 /lib64 \
  --ro-bind /etc/resolv.conf /etc/resolv.conf \
  --bind "$HOME/.node_modules" "$HOME/.node_modules" \
  --bind "$PWD" "$PWD" \
  node script.js
```

That's not something you want to type — or remember — for every command. You could alias it, but aliases aren't versioned, aren't shareable, and `bwrap` itself has no concept of saved profiles — nothing lets you define them in a file, version them with your project, and apply them automatically.

# Sheld: profiles on top of Bubblewrap

That's the gap I built [Sheld](https://github.com/pierrelegall/sheld) to fill.

It reads YAML profiles and translates them into `bwrap` invocations. Profiles can be defined globally (`~/.config/sheld/default.yaml`) or per-project (`.sheld.yaml`) — local settings take precedence.

A profile looks like this:

```yaml
node:
  share:
    - network          # share host network namespace (isolated by default)
  ro_bind:             # read-only bind mounts
    - /usr
    - /lib
    - /etc/resolv.conf
  ro_bind_try:         # like ro_bind, but silently skipped if path doesn't exist
    - /lib64
  bind:                # read-write bind mount
    - $PWD             # environment variables are expanded
    - ~/.node_modules  # ~ is expanded to $HOME

npm:
  share:
    - network
  ro_bind:
    - /usr
    - /lib
    - /etc/resolv.conf
  ro_bind_try:
    - /lib64
  bind:
    - $PWD
    - ~/.node_modules
    - ~/.npm
```

To avoid repeating shared entries across profiles, you can define a reusable model. Profiles that include a model merge its entries rather than replace them:

```yaml
base:
  type: model          # not a command profile; only usable via includes
  share:
    - network
  ro_bind:
    - /usr
    - /lib
    - /etc/resolv.conf
  ro_bind_try:
    - /lib64
  bind:
    - $PWD
    - ~/.node_modules

node:
  includes: base       # merges base entries into this profile

npm:
  includes: base
  bind:
    - ~/.npm           # adds to base's bind list, doesn't replace it
```

To run a command through its profile manually:

```sh
sheld wrap node script.js
```

The real convenience is shell integration. Add this to your shell configuration to enable it:

```sh
# Bash / Zsh
eval "$(sheld activate bash)"

# Fish
sheld activate fish | source
```

Once active, typing `node` in your terminal is sandboxed — the activation command defines shell functions that shadow configured commands, transparently prepending `sheld wrap`. `node script.js` becomes `sheld wrap node script.js` behind the scenes. You can bypass it when needed with `sheld unwrap node script.js`.

That covers the core workflow. For the full list of supported profile keys, see the [README](https://github.com/pierrelegall/sheld#readme).

# Installation

Since `bwrap` relies on Linux namespaces, Sheld is Linux-only — no plans to change that.

Arch Linux users can install it from the AUR: [sheld](https://aur.archlinux.org/packages/sheld) (from source) or [sheld-bin](https://aur.archlinux.org/packages/sheld-bin) (binary). For other distributions, see the [installation instructions](https://github.com/pierrelegall/sheld#installation) in the repository. Sheld hasn't reached `v1.0` yet, so expect some breaking changes.

I'll be happy to have your feedback! Feel free to post issues.

Happy hacking.

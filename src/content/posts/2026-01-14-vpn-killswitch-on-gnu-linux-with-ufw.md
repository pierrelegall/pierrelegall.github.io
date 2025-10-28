---
title: "VPN: firewall-based killswitch on GNU/Linux with UFW"
locale: "en_US"
published: true
publish_date: "2026-01-14"
last_edit_date: "2026-01-14"
description: |
  How to block all your traffic except through your VPN on GNU/Linux using UFW.
section: "computing"
tags: ["vpn", "firewall", "linux", "privacy"]
keywords: ["killswitch", "ufw"]
---

**TL;DR**: _How to block all your traffic except through your VPN on GNU/Linux using UFW._

![VPN killswitch meme](/assets/posts/vpn-killswitch-meme.avif)

## What is a VPN killswitch?

A VPN killswitch blocks all internet traffic when your VPN connection drops. Without one, your device silently falls back to your regular connection, exposing your real IP address and unencrypted traffic.

This can happen when:
- your VPN server becomes unreachable
- you switch networks (e.g. Wi-Fi to mobile)
- your system wakes from sleep
- the VPN client crashes

A firewall-based killswitch is the most reliable approach because it operates at the OS level, independent of your VPN client.

## Tools I use

`ufw` (Uncomplicated FireWall) is the simplest GNU/Linux firewall front-end tool I know. It's installed but disabled by default on Ubuntu and its derivatives. Red Hat distros use `firewalld` instead (but it's known to be more complex). I prefer to keep things simple, so I stick to `ufw`.

I use [WireGuard](https://en.wikipedia.org/wiki/WireGuard) as my encrypted VPN protocol (its default interface is named `wg0`) which shines by its efficiency and simplicity compared to OpenVPN.

# UFW installation and minimal setup

```sh
# Install UFW if not already done (here I use Arch BTW)
sudo pacman -S ufw
#=> […]

# Enable UFW
sudo ufw enable
#=> Firewall is active and enabled on system startup

# Print the status (verbose mode)
sudo ufw status verbose
#=> Status: active
#=> Logging: on (low)
#=> Default: deny (incoming), allow (outgoing), allow (routed)
#=> New profiles: skip
```

# The killswitch

I wrote a self-explanatory script for this (to run with `sudo` because `ufw` needs it):

```sh set_vpn_only.sh
#!/usr/bin/env sh

set -e

# Check if ufw is available
if ! command -v ufw >/dev/null 2>&1; then
  echo "Error: ufw is not installed. Please install ufw and try again."
  exit 1
fi

echo "Configuring UFW with WireGuard killswitch..."

# Disable UFW for configuration
ufw --force disable

# Reset to default rules
ufw --force reset

# Deny all by default
ufw default deny incoming comment "Default deny in"
ufw default deny outgoing comment "Default deny out"
ufw default deny routed comment "Default deny routed"

# Allow local loopback
ufw allow in on lo from 127.0.0.0/8 to 127.0.0.0/8 comment "Local loopback in"
ufw allow out on lo from 127.0.0.0/8 to 127.0.0.0/8 comment "Local loopback out"

# Allow LAN out
ufw allow out from any to 192.168.0.0/16 comment "LAN out"
ufw allow out from any to 10.0.0.0/8 comment "LAN out"
ufw allow out from any to 172.16.0.0/12 comment "LAN out"

# Allow out via WireGuard tunnel (here wg0)
ufw allow out on wg0 from any to any comment "WireGuard traffic"

# Allow out on port 51820, WireGuard handshake port
ufw allow out from any to any port 51820 proto udp comment "WireGuard handshake port"

# Re-enable UFW
ufw --force enable
```

**Note**: DNS queries will go through the WireGuard tunnel (`wg0`) since all traffic on that interface is allowed. Most VPN providers configure DNS automatically, so you shouldn't need additional setup.

After executing it, I verified the configuration with `sudo ufw status verbose`:

```
Status: active
Logging: on (low)
Default: deny (incoming), deny (outgoing), deny (routed)
New profiles: skip

To                 Action     From
--                 ------     ----
127.0.0.0/8 on lo  ALLOW IN   127.0.0.0/8           # Local loopback in

127.0.0.0/8        ALLOW OUT  127.0.0.0/8 on lo     # Local loopback out
192.168.0.0/16     ALLOW OUT  Anywhere              # LAN out
10.0.0.0/8         ALLOW OUT  Anywhere              # LAN out
172.16.0.0/12      ALLOW OUT  Anywhere              # LAN out
Anywhere           ALLOW OUT  Anywhere on wg0       # WireGuard traffic
51820/udp          ALLOW OUT  Anywhere              # WireGuard handshake port
Anywhere (v6)      ALLOW OUT  Anywhere (v6) on wg0  # WireGuard traffic
51820/udp (v6)     ALLOW OUT  Anywhere (v6)         # WireGuard handshake port
```

After disconnecting from my VPN, no more outgoing requests are sent. To be sure of that, I ran the command below to see all blocked requests:

```sh
journalctl --follow --lines 10 | grep "UFW BLOCK"
#=> [should show all requests to the internet blocked] 
```

Et voilà! My VPN killswitch is setup and tested. 

# Rolling back to a minimal UFW config

To roll back to the previous minimal UFW rules (useful if you no longer use your VPN), I wrote a second script (to run with `sudo` too):

```sh set_minimal.sh
#!/usr/bin/env sh

set -e

# Check if ufw is available
if ! command -v ufw >/dev/null 2>&1; then
  echo "Error: ufw is not installed. Please install ufw and try again."
  exit 1
fi

echo "Configuring UFW with minimal protection..."

# Disable UFW for configuration
ufw --force disable

# Reset to default rules
ufw --force reset

# These are the default UFW rules, but we are explicit here
ufw default deny incoming comment "Default deny in"
ufw default allow outgoing comment "Default allow out"
ufw default allow routed comment "Default allow routed"

# Re-enable UFW
ufw --force enable
```

And now I'm back to a default `ufw` configuration.

You can find my scripts used to apply the targeted configuration [there](https://github.com/pierrelegall/dotfiles/commit/7f1dbb2d5f7bdb0e939e77edd14cf6508cb9e21d).

Happy hacking.

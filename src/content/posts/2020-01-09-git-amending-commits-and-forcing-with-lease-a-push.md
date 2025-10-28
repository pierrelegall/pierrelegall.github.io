---
title: "Git: amending commits and forcing with lease a push"
locale: "en_US"
published: true
publish_date: "2020-01-09"
last_edit_date: "2020-01-09"
description: |
  The "git push --force-with-lease" command allows you to force a push with a lot more safety than a classic "--force", checking the synchronization with the remote before taking action.
section: "computing"
tags: ["git"]
keywords: ["push", "force", "lease", "force-with-lease"]
---

**TL;DR**: _The `git push --force-with-lease` command allows you to force a push with a lot more safety than a classic `--force`, checking the synchronization with the remote before taking action._

![But when I do, I use --force-with-lease](/assets/posts/git-push-force-with-lease-meme-1.avif)

I often have a discussion about `git commit --amend` and `git push --force` versus `git push --force-with-lease` with new colleagues.

First things first: it is okay to rewrite commits on your working branches, even already pushed commits. This allows you to remove inconsistencies, resulting in a cleaner history.

Rewriting commits seems fearful as a git newcomer. However, if you want to rewrite the last one, `git commit --amend` allows you to do it easily. Not only the commit message is alterable, but the content of the commit too (you just have to add or remove some changes before your `git commit --amend`). This is definitely my main way for editing a commit. More advanced history rewrites may be done with `git rebase` which is a broad topic I will not discuss in this post.

After changing an already committed work, you will then be forbidden to push it the regular way. The reason is it would result in an inconsistent synchronization between your local machine and the remote. So you have to force your `git push`. But as you maybe already heard, `git push --force` is a truly bad habit. This is because, if something changed on the remote, it will not be taken into account. Put it another way, if someone else pushed a commit and you didn't pull it before, the commit will be lost (or more precisely, it will be hard to recover).

Maybe you think `git push --force` is unavoidable after rewriting your commits history? Spoiler alert: it's not true. The alternative is to use `git push --force-with-lease`. The `--force-with-lease` option works similar to `--force`, but will check if you are well synchronized with the remote before pushing. If you are not up-to-date locally, the command fails and warns you. In other words, you are forcing, but safely. This good practice may avoid many “where is that damn commit?!” situations in your team.

![But when I do, I use --force-with-lease](/assets/posts/git-push-force-with-lease-meme-2.avif)

I sometimes heard: “I do not `git push --force-with-lease` but I always `git pull` before every `git push --force`”. Unfortunately, this is not enough yet because another push could be done by someone else between the two commands. Rare, but it happens.

The Git CLI gets nicer these days, e.g. adding in version 2.23 the `switch` and `restore` sub-commands to do some stuff `checkout` is already capable of. Thanks to this update, we have now more suitable verbs to do the job. However, the CLI change I would be the most happy to see is a `-f` short option bound to the `--force-with-lease` option of `git push`. In this case, brutal force short option could use `-F` instead. Sadly, it would be a breaking change.

Stay curious, but pragmatic.

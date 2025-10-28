---
title: "Elixir can make you avoid the microservices architecture"
publish_date: "2022-12-14"
last_edit_date: "2022-12-14"
description: |
  The agent model implemented in Elixir via the BEAM scales by nature without the need for a microservices architecture.
section: "computing"
tags: ["elixir", "microservices"]
keywords: ["beam", "erlang", "monolith"]
locale: "en_US"
published: true
---

**TL;DR**: _The agent model implemented in Elixir via the BEAM scales by nature without the need for a microservices architecture._

![Microservices vs. Elixir VM](/assets/posts/microservices-vs-elixir-meme.avif)

While many companies are still thinking about a migration to a microservice architecture, many didn't hear about Erlang/Elixir yet. It seems surprising because Erlang solved a lot of scalability headache before the microservice concept was named; even before the first releases of Java and Python!

# The purpose of a microservices architecture

To be as brief as possible, microservices architecture help in these cases:

- scalability issues: monolithic apps can be hard to scale
- splitting a service into functional parts: teams could have a much adapted code source organization for their project
- language agnostic solution: you can choose the more suitable tool to solve a specific problem

Despite this nice characteristics, this is an expensive architecture (in time, context switching and team skills needed). If we think costs will just double, we are often far from the truth.

Common advice is to start small and simple, so [microservices is rarely the best option at the birth of a project](https://www.martinfowler.com/bliki/images/microservice-verdict/productivity.png).

# The case of Elixir

Elixir is welcomed in a microservices architecture, like every other languages. But that is not the point here: monolithic architectures with Elixir will be compared to microservices architectures.

## Scalability

One of the killer feature of Elixir is the use of the BEAM (a.k.a. the Erlang VM) under the wood. The BEAM allows you to write an app as a monolith following [the actor model](https://www.youtube.com/watch?v=ELwEdb_pD0k) patterns. Consequently, it runs it "as microservices" on the host machine; i.e. each operation runs in a single lightweight process without sharing memory. Data is shared between processes with message passing. So, all CPU cores are used without making a change to your code base (I really recommend [this talk](https://www.youtube.com/watch?v=bo5WL5IQAd0) by late Joe Armstrong on this topic). Moreover, multiple BEAMs on different machines could work together as a cluster with [a bit of configuration](https://www.youtube.com/watch?v=Z2r6ZEPX5e4).

This is often the main argument in favor of a microservices architecture. However, Elixir (in fact, the BEAM) solved the issue about scalability a long time ago. The reason why it shines so much on this topic is because it has been design for concurrency from start.

Note [Akka](https://akka.io/), the Java & friends framework, is working with the actor model and have as main inspiration Erlang to mimic some features of the BEAM on top of the JVM.

## Functional split

Breaking a monolith into functional parts is doable thanks to the concept of apps in Erlang/Elixir. It enables us to add an app as a dependency of another app. Because all apps run on the BEAM, you take advantage of it: processes still communicates through the classic Erlang message passing mechanism.

Managing multiple Git repositories and their dependencies can be hard. In that case, [Umbrella](https://medium.com/multiverse-tech/getting-our-feet-wet-with-elixir-umbrella-applications-8ba4b1f7b7dd) comes to the rescue to manage your different parts of your project in a single repository.

## Language agnostic?

In the case of Elixir, there is fantastic tools helping you to stay in a monolithic approach. I think about [Rustler](https://github.com/rusterlium/rustler) to add safe machine code written in Rust to your project, or even [Nx](https://www.youtube.com/watch?v=fPKMmJpAGWc) for AI purposes (like [Numpy](https://numpy.org/) in the Python ecosystem) which can make use of the GPU for intensive scientific computations.

Nevertheless, microservices is still the architecture of choice to fully enable the "good tool for the right job" spirit.

# In short

Erlang/Elixir can avoid you many complexities of a microservices architecture, because it's written as a monolith (with actor model patterns), but runs concurrently at the fine grain of processes. If you start a project, choosing it allows you to build a monolith without the need to rebuild everything as microservices in the future. If you feel the need of a functional split of the source code, the concept of "apps" comes to the rescue. But if Elixir does not seem to feet your requirements, feel free to think about a microservices architecture, but start simple as possible (probably with a monolith finally).

I will finish with a real world example of a company using Erlang/Elixir for their little messaging service called WhatsApp, [which only needs 50 engineers for its 900M users](https://www.wired.com/2015/09/whatsapp-serves-900-million-users-50-engineers/). To name some others: [Discord](https://discord.com/blog/how-discord-scaled-elixir-to-5-000-000-concurrent-users), [Pinterest](https://medium.com/pinterest-engineering/introducing-new-open-source-tools-for-the-elixir-community-2f7bb0bb7d8c), [Riot Games](https://technology.riotgames.com/news/riot-messaging-service).

Stay curious, but pragmatic.

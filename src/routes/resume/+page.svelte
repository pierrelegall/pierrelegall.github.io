<script lang="ts">
  import config from "$lib/config"

  const events = [
    {
      date: "September 2023 → Present",
      title: "Independent",
      links: {},
      tags: [
        "elixir",
        "phoenix",
        "ash",
        "svelte",
        "typescript",
        "tauri",
        "githubactions",
        "flyio",
      ],
      description:
        "Design of a platform for discovery, promotion and management of live musical events. Activities include needs analysis with live music scene actors and the public, web back-end and front-end development, test automation, CI/CD management, and iteration with prototype testers.",
    },
    {
      date: "January 2023 → August 2023",
      title: "Software Engineer",
      links: {
        "Gens de Confiance": "https://gensdeconfiance.com",
      },
      tags: [
        "typescript",
        "react",
        "php",
        "mysql"
      ],
      description:
        "Maintenance and development of the vacation rental section of the Gens de Confiance platform.",
    },
    {
      date: "February 2018 → July 2020",
      title: "Web Developer consultant & trainer",
      links: {
        Zenika: "https://zenika.com",
      },
      tags: [
        "typescript",
        "javascript",
        "nodejs",
        "angular",
        "java",
        "spring",
        "ionic",
        "firebase",
        "postgresql",
        "aws",
        "rxjs",
      ],
      description:
        "Consulting missions for Groupama, Manitou Group and Informatique Banque Populaire, covering customer portals, internal communication tools and cloud migration assessment software. Also delivered JavaScript, RxJS and Git training.",
    },
    {
      date: "October 2016 → February 2018",
      title: "Web Developer consultant",
      links: {
        SII: "https://sii-group.com",
        Energiency: "https://www.energiency.com",
      },
      tags: [
        "nodejs",
        "angular",
        "mongodb",
        "scrum"
      ],
      description:
        "Consultancy mission for Energiency, focused on maintaining and developing an energy consumption monitoring platform for industrial facilities.",
    },
    {
      date: "September 2015 → June 2016",
      title:
        "Research Master's in Computer Science, “Human-Centered Computing” (Université de Bretagne Occidentale, Brest)",
      links: {
        "Université de Bretagne Occidentale": "https://www.univ-brest.fr/",
        INRIA: "https://www.inria.fr"
      },
      tags: [
        "research",
        "human",
        "python"
      ],
      description:
        "Research master's at the intersection of computer science and the humanities, focused on interactive system design and artificial intelligence.",
    },
    {
      date: "September 2014 → August 2015",
      title: "Web Developer",
      links: {
        "Télécom Santé": "https://www.hoppen.care/",
      },
      tags: [
        "javascript",
        "nodejs",
        "mongodb",
        "testlink"
      ],
      description:
        "Member of the MediaScreen team, working on the TV/tablet product for hospital room patients. Activities included web back-end and front-end development, documentation, manual test suite management, and new version testing before release.",
    },
    {
      date: "January 2013 → August 2014",
      title: "Web Developer",
      links: {
        "Thales Group": "https://www.thalesgroup.com",
      },
      tags: [
        "php",
        "symfony",
        "javascript",
        "extjs",
        "mysql"
      ],
      description:
        "Member of the repair workflow tracking system team of “Thales Systèmes Aéroportés”. Activities included in-house user support on the legacy system based on Excel and Access, new tracking system design with web technologies, web back-end and front-end development, and documentation.",
    },
    {
      date: "September 2013 → June 2014",
      title:
        "Master's in Computer Science “Information Technologies and Software Engineering”",
      links: {
        "Université de Bretagne Occidentale (Brest)": "https://www.univ-brest.fr/",
      },
      tags: [
        "c",
        "java",
        "smalltalk",
        "ocaml",
        "vhdl",
        "git"
      ],
      description:
        "Master's focused on the design and development of software systems, covering programming languages, architectures and software engineering methodologies.",
    }
  ]
</script>

<svelte:head>
  <title>Portfolio ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Portfolio ~ Pierre Le Gall" />
</svelte:head>

<section class="space-y-6">
  <div class="space-y-4 text-center select-none">
    <h1 class="page-title text-3xl sm:text-4xl whitespace-nowrap">~> cat resume</h1>
    <p class="grid gap-y-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-x-8 sm:gap-y-1">
      <a class="sm:text-right" href="/assets/cv/pierre-legall-cv-english.pdf" target="_blank"
        >Full English PDF CV</a
      >
      <span class="hidden text-2xl leading-none sm:block" aria-hidden="true">-</span>
      <a class="sm:text-left" href="/assets/cv/pierre-legall-cv-francais.pdf" target="_blank"
        >CV PDF complet français</a
      >
    </p>
  </div>

  <div>
    <div class="flex items-center justify-start sm:justify-center gap-4 select-none">
      <div class="hidden sm:block sm:flex-1 text-right whitespace-nowrap">Pierre Le Gall</div>
      <img
        class="ml-2 h-30 w-30 min-w-30 object-cover sm:-ml-0 sm:rounded-full border-4 border-white/70 opacity-90"
        src="/assets/main/me.avif"
        width="400"
        height="400"
        alt="Pierre"
        draggable="false"
      />
      <div class="sm:flex-1 text-left whitespace-nowrap">
        <div class="sm:hidden">Pierre Le Gall</div>
        <div>Software Engineer</div>
      </div>
    </div>
    <hr class="separator" />
    <ul class="timeline timeline-vertical">
      {#each events as event, i (i)}
        <li>
          <hr />
          <div class="{i % 2 === 0 ? 'timeline-start' : 'timeline-end'} timeline-box mb-6 block">
            <time class="text-xs opacity-50">{event.date}</time>
            <p class="mt-1 font-bold" style="color: var(--secondary-color)">{event.title}</p>
            {#if event.links}
              <ul class="links mt-1 text-sm {i % 2 === 0 ? 'links-right sm:text-right' : ''}">
                {#each Object.entries(event.links) as [name, url] (name)}
                  <li><a href={url} target="_blank" rel="noopener noreferrer" style="color: var(--primary-color)">{name}</a></li>
                {/each}
              </ul>
            {/if}
            {#if event.tags.length > 0}
              <p class="mt-1 text-sm text-white">{event.tags.map(t => `#${t}`).join(" ")}</p>
            {/if}
            {#if event.description}
              <p class="mt-1 text-sm opacity-80">{event.description}</p>
            {/if}
          </div>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-primary h-5 w-5" style="color: var(--primary-color)">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <hr class={i === events.length - 1 ? "dotted" : ""} />
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  /* Timeline component — adapted from DaisyUI 5 */
  /* https://github.com/saadeghi/daisyui */

  .timeline {
    display: flex;
    position: relative;
  }

  .timeline > li {
    grid-template-rows: var(--timeline-row-start, minmax(0, 1fr)) auto var(--timeline-row-end, minmax(0, 1fr));
    grid-template-columns: var(--timeline-col-start, minmax(0, 1fr)) auto var(--timeline-col-end, minmax(0, 1fr));
    flex-shrink: 0;
    align-items: center;
    display: grid;
    position: relative;
  }

  .timeline > li > hr {
    border: none;
    width: 100%;
  }

  .timeline > li > hr:first-child {
    grid-row-start: 2;
    grid-column-start: 1;
  }

  .timeline > li > hr:last-child {
    grid-area: 2 / 3 / auto / none;
  }

  .timeline :where(hr) {
    background-color: var(--text-2);
    height: 0.25rem;
  }

  .timeline-box {
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    font-size: 0.875rem;
  }

  .timeline-start {
    grid-area: 1 / 1 / 2 / 4;
    place-self: flex-end center;
    margin: 0.25rem;
  }

  .timeline-middle {
    grid-row-start: 2;
    grid-column-start: 2;
  }

  .timeline-end {
    grid-area: 3 / 1 / 4 / 4;
    place-self: flex-start center;
    margin: 0.25rem;
  }


  .timeline-vertical {
    flex-direction: column;
  }

  .timeline-vertical > li {
    --timeline-row-start: minmax(0, 1fr);
    --timeline-row-end: minmax(0, 1fr);
    justify-items: center;
  }

  .timeline-vertical > li > hr {
    width: 0.25rem;
    height: 100%;
  }

  .timeline-vertical > li > hr:first-child {
    grid-row-start: 1;
    grid-column-start: 2;
  }

  .timeline-vertical > li > hr:last-child {
    grid-area: 3 / 2 / none;
  }

  .timeline-vertical .timeline-start {
    grid-area: 1 / 1 / 4 / 2;
    place-self: center flex-end;
    text-align: right;
  }

  @media (max-width: 639px) {
    .timeline-vertical .timeline-start {
      grid-area: 1 / 3 / 4 / 4;
      place-self: center flex-start;
      text-align: left;
    }

    .timeline-vertical > li {
      --timeline-col-start: 0;
    }
  }

  .timeline-vertical .timeline-end {
    grid-area: 1 / 3 / 4 / 4;
    place-self: center flex-start;
  }

  .timeline-vertical :where(hr.dotted) {
    background: repeating-linear-gradient(
      to bottom,
      var(--text-2) 0px,
      var(--text-2) 4px,
      transparent 4px,
      transparent 9px
    );
  }

  hr.separator {
    border: none;
    background-color: var(--text-2);
    width: 0.25rem;
    height: 1.5rem;
    margin-inline: auto;
  }

  @media (max-width: 639px) {
    hr.separator {
      margin-inline: 0.5rem;
    }
  }

.links li::before {
    content: "> ";
  }

  @media (min-width: 640px) {
    .links-right li::before {
      content: none;
    }

    .links-right li::after {
      content: " <";
    }
  }

</style>

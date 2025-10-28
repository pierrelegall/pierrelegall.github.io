<script lang="ts">
  import config from "$lib/config"

  const events = [
    {
      date: "Présent",
      title: "Strument service",
      description: "Développement d'un service de gestion d'événements musicaux, l'idée étant de permettre un accès rapide aux événements tout en mettant en avant les artistes, collectifs et scènes locales.",
      tags: ["elixir", "phoenix", "ash", "tauri"],
    },
    {
      date: "Janvier 2026 → maintenance",
      title: "PS3 library",
      description: "Développement de PS3, une bibliothéque pur Elixir permettant de simuler un service S3 localement. Le mode “dev” permet de simplement copier les fichiers en local, alors que le mode “test” (plus complexe), permet l'isolation de multiple services S3 dans le but de permettre l'exécution asynchrone des tests.",
      url: "https://github.com/pierrelegall/ps3",
      tags: ["elixir", "s3"],
    },
    {
      date: "Décembre 2025 → maintenance",
      title: "Sheld app",
      description: "Développement d'un gestionnaire d'isolation de commandes shell via Bubblewrap sous GNU/Linux. L'idée étant de créer une couche de sécurité sur les environnements de développement, notamment dans le cadre de l'utilisation d'outils AI.",
      url: "https://github.com/pierrelegall/sheld",
      tags: ["rust", "shell", "linux"],
    },
    {
      date: "Juillet 2025 → maintenance",
      title: "Dripping Tales website",
      description: "Développement du site du label de musique Dripping Tales, présentant ses artistes et albums, tout en faisant découvrir l'univers du label.",
      url: "https://drippingtales.github.io",
      tags: ["svelte"],
    },
    {
      date: "Juin 2025 → Septembre 2025",
      title: "Certification “ISO/IEC 27001 Foundation”",
      description: "Certification introduisant la norme ISO/IEC 27001 et ses exigences pour la mise en œuvre d'un SMSI au sein d'une organisation.",
      tags: ["isms", "cybersecurity"],
    },
    {
      date: "Juin 2025 → Septembre 2025",
      title: "Docaposte Institute: formation “Développeur en Cybersécurité”",
      description: "Formation axée sur les fondamentaux offensifs et défensifs de la cybersécurité : sécurité des bases de données, réseaux, cryptographie et tests d'intrusion, avec pour objectif de renforcer la protection des systèmes d'information.",
      tags: ["cybersecurity", "system", "networking", "linux", "shell", "python", "spluck"],
    },
    {
      date: "Juin 2024",
      title: "BPM app",
      description: "Développement d'une application de calcul de BPM (beats per minute) pour Android.",
      url: "https://github.com/pierrelegall/bpm",
      tags: ["kotlin", "android-sdk"],
    },
    {
      date: "Mars 2024",
      title: "Certification “Professional Scrum Master 1”",
      description: "Certification validant la maîtrise du cadre Scrum et la capacité à accompagner une équipe dans son application.",
      tags: ["scrum"],
    },
    {
      date: "Décembre 2023 → Mars 2024",
      title: "ib Cegos: formation “Chef de Projets en Informatique”",
      description: "Formation couvrant la gestion de projet informatique : planification, pilotage, gestion des risques et des parties prenantes.",
      tags: ["project-management", "agility"],
    },
    {
      date: "Décembre 2022 → maintenance",
      title: "Whatlangex library",
      description: "Liaison au détecteur de langue Whatlang écrit en Rust pour le langage Elixir.",
      url: "https://github.com/pierrelegall/whatlangex",
      tags: ["elixir", "rust"],
    },
    {
      date: "Janvier 2019 → Février 2020",
      title: "IBP – Développeur Web, consultant Zenika",
      description: "Développement d'un outil interne de suivi qualité, en prenant en charge l'ensemble du cycle : recueil des besoins, implémentation full-stack, revue de code et présentation aux décideurs. Formation Git dispensée en interne en parallèle.",
      tags: ["typescript", "node.js", "angular", "postgresql", "aws", "scrum"],
    },
    {
      date: "Janvier & Juin 2019",
      title: "Formateur, consultant Zenika",
      description: "Formations dispensées sur JavaScript, RxJS et Git. Mise à jour des supports de cours, création d'exercices adaptés aux besoins.",
      tags: ["javascript", "rxjs"],
    },
    {
      date: "Septembre 2018 → Décembre 2018",
      title: "Manitou – Développeur Web, consultant Zenika",
      description: "Maintenance et développement d'une application web de communication interne (actualité, événements, chat).",
      tags: ["javascript", "angular", "node.js", "ionic", "firebase"],
    },
    {
      date: "Février 2018 → Août 2018",
      title: "Groupama – Développeur Web, consultant Zenika",
      description: "Maintenance et développement de l'espace assurance client particulier.",
      tags: ["java", "javascript", "angular", "scrum"],
    },
    {
      date: "Janvier 2017 → Février 2018",
      title: "Energiency – Développeur Web, consultant SII",
      description: "Maintenance et développement du produit Energiency : plateforme de monitoring de consommations d'énergies pour l'industrie.",
      tags: ["nodejs", "angular", "mongodb", "scrum"],
    },
    {
      date: "Septembre 2015 → Juin 2016",
      title: "Master recherche en informatique, “Informatique centrée sur l'Humain” (UBO Brest)",
      description: "Master recherche à l'intersection de l'informatique et des sciences humaines, centré sur la conception et l'évaluation de systèmes interactifs.",
      tags: ["python"],
    },
    {
      date: "Septembre 2014 → Août 2015",
      title: "Télécom Santé – Développeur Web",
      description: "Maintenance et développement du produit MediaScreen : centre multimédia hybride TV-tablette dédié aux patients en chambre d'hôpital.",
      tags: ["javascript", "nodejs", "mongodb", "testlink"],
    },
    {
      date: "Janvier 2013 → Août 2014",
      title: "Thalès Systèmes Aéroportés – Développeur Web, étudiant",
      description: "Maintenance et développement du système de suivi du flux de travail de réparation.",
      tags: ["php", "symfony", "ext-js"],
    },
    {
      date: "Septembre 2013 → Juin 2014",
      title: "Master en informatique “Technologies de l'Information et Ingénierie du Logiciel” (UBO Brest)",
      description: "Master axé sur la conception et le développement de systèmes logiciels, couvrant les langages, architectures et méthodologies de l'ingénierie logicielle.",
      tags: ["c", "java", "smalltalk", "ocaml", "git"],
    },
    {
      date: "Septembre 2011 → Juin 2012",
      title: "Licence en informatique, “Développeur logiciel” (UBO Brest)",
      description: "Licence introduisant les bases de la programmation et du développement logiciel, avec une approche pluridisciplinaire des technologies de l'information.",
      tags: ["java", "ruby", "php", "web", "database"],
    }
  ]
</script>

<svelte:head>
  <title>Portfolio ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Portfolio of things Pierre has built and done." />
</svelte:head>

<section class="space-y-7">
  <h1 class="page-title text-3xl sm:text-4xl">~> cat portfolio</h1>

  <ul class="timeline timeline-vertical">
    {#each events as event, i}
      <li>
        {#if i === 0}
          <hr class="dotted" />
        {:else}
          <hr />
        {/if}
        {#if i % 2 !== 0}
          <svelte:element this={event.url ? 'a' : 'div'} href={event.url} target={event.url ? '_blank' : undefined} rel={event.url ? 'noopener noreferrer' : undefined} class="timeline-start timeline-box mb-6 block">
            <time class="text-xs opacity-50">{event.date}</time>
            <p class="mt-1 font-bold" style="color: var(--secondary-color)">{event.title}</p>
            {#if event.tags.length > 0}
              <p class="mt-1 text-sm text-white">{event.tags.map(t => `#${t}`).join(' ')}</p>
            {/if}
            {#if event.description}
              <p class="mt-1 text-sm opacity-80">{event.description}</p>
            {/if}
          </svelte:element>
        {/if}
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-primary h-5 w-5" style="color: var(--primary-color)">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </div>
        {#if i % 2 === 0}
          <svelte:element this={event.url ? 'a' : 'div'} href={event.url} target={event.url ? '_blank' : undefined} rel={event.url ? 'noopener noreferrer' : undefined} class="timeline-end timeline-box mb-6 block">
            <time class="text-xs opacity-50">{event.date}</time>
            <p class="mt-1 font-bold" style="color: var(--secondary-color)">{event.title}</p>
            {#if event.tags.length > 0}
              <p class="mt-1 text-sm text-white">{event.tags.map(t => `#${t}`).join(' ')}</p>
            {/if}
            {#if event.description}
              <p class="mt-1 text-sm opacity-80">{event.description}</p>
            {/if}
          </svelte:element>
        {/if}
        {#if i === events.length - 1}
          <hr class="dotted" />
        {:else}
          <hr />
        {/if}
      </li>
    {/each}
  </ul>
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

  a.timeline-box {
    color: inherit;
    text-decoration: none;
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

  .timeline-snap-icon > li {
    --timeline-col-start: 0.5rem;
    --timeline-row-start: minmax(0, 1fr);
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

  .timeline-vertical.timeline-snap-icon > li {
    --timeline-col-start: minmax(0, 1fr);
    --timeline-row-start: 0.5rem;
  }
</style>

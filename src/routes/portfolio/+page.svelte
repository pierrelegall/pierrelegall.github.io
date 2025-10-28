<script lang="ts">
  import config from "$lib/config"

  const events = [
    {
      date: "En développement",
      title: "Strument service",
      tags: ["elixir", "phoenix", "ash", "tauri"],
      description: "Développement d'un service de gestion d'événements musicaux accessible via le web ainsi qu'avec une application mobile, mettant en avant les artistes, collectifs et scènes locales tout se focalisant sur un accès rapide aux informations liées aux événements.",
    },
    {
      date: "Janvier 2026 → maintenance",
      title: "PS3 Elixir library",
      tags: ["elixir", "s3"],
      description: "Développement de PS3, une bibliothéque pure Elixir permettant de simuler un service S3 localement pour la stack Elixir. Le mode “dev” permet de simplement stocker les fichiers dans un dossier en local, alors que le mode “test” (plus complexe), permet l'isolation de multiple services S3 dans le but de permettre l'exécution asynchrone des tests.",
      links: {
        "source code": "https://github.com/pierrelegall/ps3"
      },
    },
    {
      date: "Décembre 2025 → maintenance",
      title: "Sheld CLI",
      tags: ["rust", "shell", "bubblewrap", "linux"],
      description: "Développement d'un gestionnaire d'isolation de commandes shell via Bubblewrap sous GNU/Linux. L'idée étant de créer une couche de sécurité sur les environnements de développement, notamment dans le cadre de l'utilisation d'outils AI.",
      links: {
        "article": "/posts/2026-03-30-i-built-sheld-a-bubblewrap-profile-manager",
        "source code": "https://github.com/pierrelegall/sheld",
        "AUR package": "https://aur.archlinux.org/packages/sheld"
      },
    },
    {
      date: "Juillet 2025 → maintenance",
      title: "Dripping Tales website",
      tags: ["typescript", "svelte"],
      description: "Développement du site du label de musique Dripping Tales, présentant ses artistes et albums, tout en faisant découvrir l'univers du label.",
      links: {
        "Dripping Tales": "https://drippingtales.github.io",
        "source code": "https://github.com/drippingTales/drippingtales.github.io",
      },
    },
    {
      date: "Septembre 2025",
      title: "Certification “ISO/IEC 27001 Foundation”",
      tags: ["isms", "cybersecurity"],
      description: "Certification introduisant la norme ISO/IEC 27001 et ses exigences pour la mise en œuvre d'un Système de Management de la Sécurité de l'Information au sein d'une organisation.",
      links: {
        "ISO/IEC 27001 Foundation": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001/iso-iec-27001-foundation"
      },
    },
    {
      date: "Juin 2025 → Septembre 2025",
      title: "Formation “Développeur en Cybersécurité” (Docaposte Institute)",
      tags: ["cybersecurity", "networking", "logmanagement", "riskmanagement", "linux", "shell", "python", "sql", "postgresql", "spluck"],
      description: "Formation axée sur les fondamentaux offensifs et défensifs de la cybersécurité : sécurité des bases de données, réseaux, gestion/analyse des logs, cryptographie et tests d'intrusion, avec pour objectif de renforcer la protection des systèmes d'information.",
      links: {
        "Docaposte Institute": "https://www.docaposteinstitute.com/nos-formations"
      },
    },
    {
      date: "Juin 2024",
      title: "BPM app",
      tags: ["kotlin", "android"],
      description: "Développement d'une application de calcul de BPM (beats per minute) pour Android.",
      links: { "source code": "https://github.com/pierrelegall/bpm" },
    },
    {
      date: "Mars 2024",
      title: "Certification “Professional Scrum Master 1”",
      tags: ["scrum", "agility"],
      description: "Certification validant la maîtrise du cadre Scrum et la capacité à accompagner une équipe dans son application.",
      links: {
        "Professional Scrum Master I": "https://www.scrum.org/assessments/professional-scrum-master-i-certification"
      },
    },
    {
      date: "Décembre 2023 → Mars 2024",
      title: "Formation “Chef de Projets en Informatique” (ib Cegos)",
      tags: ["projectmanagement", "riskmanagement", "agility"],
      description: "Formation couvrant la gestion de projet informatique : planification, pilotage, gestion des risques et des parties prenantes.",
      links: {
        "ib Cegos": "https://www.ib-formation.fr/"
      },
    },
    {
      date: "Janvier 2023 → Mars 2023",
      title: "Gens de Confiance – Web Developer",
      tags: ["typescript", "react", "php", "mysql"],
      description: "Maintenance et développement de la section location de vacances de la plateforme Gens de Confiance.",
      links: {
        "Gens de Confiance": "https://gensdeconfiance.com/fr"
      },
    },
    {
      date: "Décembre 2022 → maintenance",
      title: "Whatlangex library",
      tags: ["elixir", "rust"],
      description: "Liaison au détecteur de langue Whatlang écrit en Rust pour le langage Elixir.",
      links: {
        "Hex package": "https://hex.pm/packages/whatlangex",
        "source code": "https://github.com/pierrelegall/whatlangex"
      },
    },
    {
      date: "Janvier 2019 → Février 2020",
      title: "Informatique Banque Populaire – Développeur Web, consultant Zenika",
      tags: ["typescript", "nodejs", "angular", "postgresql", "aws"],
      description: "Développement d'un outil interne de suivi qualité pour les produits développés en interne. Ce projet ayant pour intension de jugé de la capaciter d'IBP à migrer vers un outillage Cloud (AWS). Formation Git dispensée en interne en parallèle pour les internes.",
      links: {
        "Informatique Banque Populaire": "https://www.bpce-si.fr/"
      },
    },
    {
      date: "Janvier 2019",
      title: "Formateur, consultant Zenika",
      tags: ["javascript", "rxjs"],
      description: "Formation dispensée sur JavaScript et RxJS. Mise à jour des supports de cours, création d'exercices adaptés aux besoins des élèves.",
      links: {
        "Zenika Training": "https://training.zenika.com"
      }
    },
    {
      date: "Septembre 2018 → Décembre 2018",
      tags: ["javascript", "angular", "nodejs", "ionic", "firebase"],
      title: "Manitou Group – Développeur Web, consultant Zenika",
      description: "Maintenance et développement d'une application web mobile pour la communication interne au groupe (actualité, événements, chat).",
      links: {
        "Manitou Group": "https://www.manitou-group.com"
      },
    },
    {
      date: "Février 2018 → Août 2018",
      tags: ["java", "spring", "javascript", "angular"],
      title: "Groupama – Développeur Web, consultant Zenika",
      description: "Maintenance et développement de l'espace assurance client particulier.",
      links: {
        "Groupama": "https://www.groupama.fr"
      },
    },
    {
      date: "Janvier 2017 → Février 2018",
      title: "Energiency – Développeur Web, consultant SII",
      tags: ["nodejs", "angular", "mongodb", "scrum"],
      description: "Maintenance et développement du produit Energiency : plateforme de monitoring de consommations d'énergies pour l'industrie.",
      links: {
        "Energiency": "https://www.energiency.com",
      },
    },
    {
      date: "Janvier 2016 → Juin 2016",
      title: "Stage de recherche: “Towards Metamorphic DSL” (INRIA, Rennes)",
      tags: ["research", "dsl", "xtend", "java", "python"],
      description: "Recherche et rédaction d'une bibliographie sur l'état de l'art sur l'usage des Domain Specific Languages dans l'idée de créer des ponts de traduction automatique entre différents DSL internes et externes.",
      links: {
        "bibliography": "https://github.com/pierrelegall/towards-metamorphic-dsl/document.org",
        "prototype": "https://github.com/pierrelegall/busimo",
        "INRIA": "https://www.inria.fr",
      },
    },
    {
      date: "Septembre 2015 → Juin 2016",
      title: "Master recherche en informatique, “Informatique centrée sur l'Humain” (Université de Bretagne Occidentale, Brest)",
      tags: ["research", "human", "python"],
      description: "Master recherche à l'intersection de l'informatique et des sciences humaines, centré sur la conception de systèmes interactifs et l'intelligence artificielle.",
      links: {
        "Université de Bretagne Occidentale": "https://www.univ-brest.fr/",
      },
    },
    {
      date: "Septembre 2014 → Août 2015",
      title: "Télécom Santé – Développeur Web",
      tags: ["javascript", "nodejs", "mongodb", "testlink"],
      description: "Maintenance et développement du produit MediaScreen : centre multimédia hybride TV-tablette dédié aux patients en chambre d'hôpital.",
      links: {
        "Télécom Santé (rebranded)": "https://www.hoppen.care/",
      },
    },
    {
      date: "Janvier 2013 → Août 2014",
      title: "Thalès Systèmes Aéroportés – Développeur Web, étudiant",
      tags: ["php", "symfony", "javascript", "extjs", "mysql"],
      description: "Maintenance et développement du système de suivi du flux de travail de réparation.",
      links: {
        "Thales Group": "https://www.thalesgroup.com",
      },
    },
    {
      date: "Septembre 2013 → Juin 2014",
      title: "Master en informatique “Technologies de l'Information et Ingénierie du Logiciel” (Université de Bretagne Occidentale, Brest)",
      tags: ["c", "java", "smalltalk", "ocaml", "vhdl", "git"],
      description: "Master axé sur la conception et le développement de systèmes logiciels, couvrant les langages, architectures et méthodologies de l'ingénierie logicielle.",
      links: {
        "Université de Bretagne Occidentale": "https://www.univ-brest.fr/",
      },
    },
    {
      date: "Septembre 2011 → Juin 2012",
      title: "Licence en informatique, “Développeur logiciel” (Université de Bretagne Occidentale, Brest)",
      tags: ["c", "java", "ruby"],
      description: "Licence introduisant les bases de la programmation et du développement logiciel, avec une approche pluridisciplinaire des technologies de l'information.",
      links: {
        "Université de Bretagne Occidentale": "https://www.univ-brest.fr/",
      },
    },
    {
      date: "Septembre 2009 → Juin 2011",
      title: "BTS en informatique, “Développeur d'applications de gestion” (Université de Bretagne Occidentale, Brest)",
      tags: ["java", "ruby", "php", "html", "css", "sql", "mysql"],
      description: "Formation initiale aux bases du développement logiciel : algorithmique, programmation orientée objet, conception de bases de données et développement web.",
      links: {
        "Université de Bretagne Occidentale": "https://www.univ-brest.fr/",
      },
    }
  ]
</script>

<svelte:head>
  <title>Portfolio ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Portfolio ~ Pierre Le Gall" />
</svelte:head>

<section class="space-y-11">
  <h1 class="page-title text-3xl sm:text-4xl whitespace-nowrap select-none">~> cat portfolio</h1>

  <div>
    <div class="flex items-center justify-start sm:justify-center gap-4 select-none">
      <div class="hidden sm:block sm:flex-1 text-right whitespace-nowrap">Pierre Le Gall</div>
      <img
        class="ml-2 sm:-ml-0 w-30 min-w-30 sm:rounded-full border-4 border-white/70 opacity-90"
        src="/assets/main/me.avif"
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
      {#each events as event, i (event.title)}
        <li>
          <hr />
          <div class="{i % 2 !== 0 ? 'timeline-start' : 'timeline-end'} timeline-box mb-6 block">
          <time class="text-xs opacity-50">{event.date}</time>
          <p class="mt-1 font-bold" style="color: var(--secondary-color)">{event.title}</p>
          {#if event.tags.length > 0}
            <p class="mt-1 text-sm text-white">{event.tags.map(t => `#${t}`).join(" ")}</p>
          {/if}
          {#if event.description}
            <p class="mt-1 text-sm opacity-80">{event.description}</p>
          {/if}
          {#if event.links}
            <ul class="links mt-1 text-sm {i % 2 !== 0 ? 'links-right sm:text-right' : ''}">
              {#each Object.entries(event.links) as [name, url] (name)}
                <li><a href={url} target="_blank" rel="noopener noreferrer" style="color: var(--primary-color)">{name}</a></li>
              {/each}
            </ul>
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

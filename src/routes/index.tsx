import { createFileRoute } from "@tanstack/react-router";
import heroGrill from "@/assets/hero-grill.jpg";
import dishBokit from "@/assets/dish-bokit.jpg";
import dishBrochettes from "@/assets/dish-brochettes.jpg";
import dishGrill from "@/assets/dish-grill.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const dishes = [
  {
    name: "Le Bokit",
    tagline: "Pain frit · poulet boucané · crudités",
    desc: "Notre bokit signature — pâte frite dorée, poulet mariné au colombo, salade fraîche et sauce chien maison.",
    price: "12€",
    img: dishBokit,
  },
  {
    name: "Brochettes Flambées",
    tagline: "Boeuf mariné · épices créoles",
    desc: "Brochettes grillées sur braises de bois, marinade au rhum vieux, piment doux et bois d'inde.",
    price: "16€",
    img: dishBrochettes,
  },
  {
    name: "Poulet Boucané",
    tagline: "Riz colombo · haricots rouges · bananes",
    desc: "Poulet fumé lentement à la canne à sucre, servi avec riz épicé et bananes plantain caramélisées.",
    price: "18€",
    img: dishGrill,
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <span className="font-script text-3xl text-gold-gradient leading-none">Chez Manman</span>
          <div className="hidden md:flex gap-10 font-display text-sm uppercase tracking-[0.25em] text-foreground/70">
            <a href="#carte" className="hover:text-[var(--gold-bright)] transition-colors">La Carte</a>
            <a href="#histoire" className="hover:text-[var(--gold-bright)] transition-colors">L'Histoire</a>
            <a href="#visite" className="hover:text-[var(--gold-bright)] transition-colors">Nous Trouver</a>
          </div>
          <a
            href="#visite"
            className="font-display text-xs md:text-sm uppercase tracking-[0.2em] px-5 py-2.5 bg-[var(--gold)] text-[var(--primary-foreground)] hover:bg-[var(--gold-bright)] transition-colors rounded-sm"
          >
            Réserver
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroGrill}
            alt="Braises ardentes du grill créole Chez Manman"
            className="w-full h-full object-cover opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 md:pt-32 md:pb-44 text-center">
          <p className="font-display text-xs md:text-sm uppercase tracking-[0.5em] text-[var(--gold)] mb-8">
            Cuisine Antillaise · Depuis 1998
          </p>
          <h1 className="font-script text-7xl md:text-[180px] leading-[0.85] text-gold-gradient mb-6">
            Chez Manman
          </h1>
          <div className="flex items-center justify-center gap-4 md:gap-8 font-display text-lg md:text-3xl uppercase tracking-[0.2em] text-secondary mb-12">
            <span>Bokit</span>
            <span className="text-[var(--gold)]">·</span>
            <span>Brochettes</span>
            <span className="text-[var(--gold)]">·</span>
            <span>Grill</span>
          </div>
          <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/70 leading-relaxed mb-12">
            La cuisine de Guadeloupe comme à la maison. Braises de bois, épices vraies,
            recettes transmises de mère en fille depuis trois générations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#carte"
              className="font-display text-sm uppercase tracking-[0.25em] px-8 py-4 bg-[var(--gold)] text-[var(--primary-foreground)] hover:bg-[var(--gold-bright)] transition-colors rounded-sm shadow-[var(--shadow-warm)]"
            >
              Voir la Carte
            </a>
            <a
              href="#visite"
              className="font-display text-sm uppercase tracking-[0.25em] px-8 py-4 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition-colors rounded-sm"
            >
              Réserver une Table
            </a>
          </div>
        </div>
      </header>

      {/* CARTE / SIGNATURES */}
      <section id="carte" className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                Les Signatures
              </p>
              <h2 className="font-script text-6xl md:text-7xl text-gold-gradient leading-none">
                À la braise
              </h2>
            </div>
            <p className="max-w-md text-foreground/70 leading-relaxed">
              Trois plats, trois mémoires. Chaque assiette raconte un voyage entre Pointe-à-Pitre
              et la table de Manman.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((d) => (
              <article key={d.name} className="group">
                <div className="relative overflow-hidden rounded-sm mb-6 aspect-[4/5] bg-card">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[var(--gold)] text-[var(--primary-foreground)] font-display text-sm px-3 py-1.5 tracking-wider">
                    {d.price}
                  </div>
                </div>
                <h3 className="font-script text-4xl text-gold-gradient mb-1">{d.name}</h3>
                <p className="font-display text-[11px] uppercase tracking-[0.25em] text-[var(--gold)]/80 mb-3">
                  {d.tagline}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section id="histoire" className="py-24 md:py-32 px-6 bg-[var(--emerald-deep)]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-8">
            L'Histoire
          </p>
          <p className="font-script text-4xl md:text-6xl text-gold-gradient leading-tight mb-12">
            « Le secret, c'est le feu — et l'amour qu'on met dedans. »
          </p>
          <div className="h-px w-24 bg-[var(--gold)]/40 mx-auto mb-12" />
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Manman Joséphine a ouvert sa première cabane à bokit sur la plage de Sainte-Anne
            en 1998. Aujourd'hui, ses filles perpétuent les mêmes gestes, les mêmes marinades,
            la même générosité — au cœur du quartier.
          </p>
          <p className="mt-10 font-script text-3xl text-[var(--gold-bright)]">— Joséphine, Sandra & Élodie</p>
        </div>
      </section>

      {/* VISITE */}
      <section id="visite" className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Adresse</p>
            <p className="font-script text-3xl text-gold-gradient mb-2">Venez nous voir</p>
            <p className="text-foreground/75 leading-relaxed">
              2, avenue de Chany - La Varenne Saint Hilaire<br />
              94210 Saint-Maur-des-Fossés
            </p>
          </div>
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Service</p>
            <p className="font-script text-3xl text-gold-gradient mb-2">Heures d'ouverture</p>
            <div className="text-foreground/75 space-y-2 text-sm">
              <div className="border-b border-border pb-1.5 items-start justify-between flex flex-row"><span>Mar — Jeu</span><span>18h — 23h</span></div>
              <div className="border-b border-border pb-1.5 items-start justify-between flex flex-row"><span>Ven — Sam</span><span>18h — 01h</span></div>
              <div className="border-b border-border pb-1.5 items-start justify-between flex flex-row"><span>Dimanche</span><span>12h — 16h</span></div>
              <div className="flex justify-between"><span>Lundi</span><span className="text-[var(--gold)]/70">Fermé</span></div>
            </div>
          </div>
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Réservations</p>
            <p className="font-script text-3xl text-gold-gradient mb-2">Téléphone</p>
            <p className="text-foreground/75 leading-relaxed mb-6">
              2, avenue de Chany - La Varenne Saint Hilaire<br />
              94210 Saint-Maur-des-Fossés
            </p>
            <a
              href="tel:+33 7 82 19 83 33"
              className="inline-block font-display text-sm uppercase tracking-[0.25em] px-6 py-3 bg-[var(--gold)] text-[var(--primary-foreground)] hover:bg-[var(--gold-bright)] transition-colors rounded-sm"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-script text-2xl text-gold-gradient">Chez Manman</span>
          <p className="font-display text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            © 2026 · Fait avec amour en Guadeloupe
          </p>
        </div>
      </footer>
    </main>
  );
}

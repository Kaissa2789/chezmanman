import { createFileRoute } from "@tanstack/react-router";
import heroGrill from "@/assets/hero-grill.jpg";
import logo from "@/assets/chez-manman-logo.png";
import dishBokit from "@/assets/dish-bokit.jpg";
import dishPoisson from '../assets/dish-poisson.jpg';
import dishPouletGrille from '../assets/dish-poulet-grille.jpg';
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
    price: "8€",
    img: dishBokit,
  },
  {
    name: "Brochettes",
    tagline: "Boeuf mariné · épices créoles",
    desc: "Brochettes grillées sur braises de bois, marinade maison, piment doux et bois d'inde.",
    price: "16€",
    img: dishBrochettes,
  },
  {
    name: "Poulet Boucané",
    tagline: "Riz ou frites · salade",
    desc: "Poulet fumé lentement au charbon de bois, servi avec riz ou frites et une salade fraîche.",
    price: "18€",
    img: dishGrill,
  },
{
    name: "Poisson Boucané",
    tagline: "Poisson fumé · riz ou frites · salade",
    desc: "Poisson fumé à l'ancienne, mariné dans nos épices maison, accompagné de riz ou de frites et d'une salade fraîche.",
    price: "16€",
    img: dishPoisson,
  },
  {
    name: "Poulet Grillé",
    tagline: "Poulet mariné · grillade au charbon",
    desc: "Poulet mariné longuement dans nos épices maison, grillé au feu de charbon pour un goût fumé et authentique.",
    price: "16€",
    img: dishPouletGrille,
  },
];
function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <img src={logo} alt="Chez Manman" className="h-10 md:h-12 w-auto object-contain" />
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
            Cuisine Antillaise
          </p>
          <img src={logo} alt="Chez Manman" className="mx-auto mb-6 w-full max-w-[280px] md:max-w-[760px] h-auto" />
          <div className="flex items-center justify-center gap-4 md:gap-8 font-display text-lg md:text-3xl uppercase tracking-[0.2em] text-secondary mb-12">
            <span>Bokit</span>
            <span className="text-[var(--gold)]">·</span>
            <span>Brochettes</span>
            <span className="text-[var(--gold)]">·</span>
            <span>Grill</span>
          </div>
          <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/70 leading-relaxed mb-12">
            Frais, authentique, fait avec amour comme chez ta mère. Bokits et grillades
            au barbecue portugais, charbon de bois, viande fraîche, jamais congelée.
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
              et la table de Chez Manman.
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

      {/* VALEURS */}
      <section className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
              Nos Valeurs
            </p>
            <h2 className="font-script text-5xl md:text-6xl text-gold-gradient leading-none">
              Ce qui nous rend différents
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/50 border border-border rounded-sm p-8">
              <span className="inline-block font-display text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full mb-4">
                Qualité
              </span>
              <h3 className="font-script text-2xl text-gold-gradient mb-2">100% frais. 0% congelé.</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                La viande arrive fraîche chaque matin. Préparation maison, cuisson au barbecue
                portugais sur charbon de bois. Steve supervise chaque plat. Ici, rien ne sort
                d'un congélateur.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-sm p-8">
              <span className="inline-block font-display text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full mb-4">
                Authenticité
              </span>
              <h3 className="font-script text-2xl text-gold-gradient mb-2">Recettes antillaises, goût d'origine</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Les recettes viennent de là-bas. Transmises, pas inventées. Le barbecue portugais
                au charbon donne le goût fumé authentique qu'aucun four ne peut reproduire.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-sm p-8">
              <span className="inline-block font-display text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full mb-4">
                Prix
              </span>
              <h3 className="font-script text-2xl text-gold-gradient mb-2">Le meilleur rapport qualité prix</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Bokit à 8€. Formule bokit + boisson à 10€. Menu famille 4 bokits + 4 boissons à 35€.
                Halal certifié. Tu manges bien sans te ruiner.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-sm p-8">
              <span className="inline-block font-display text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full mb-4">
                Proximité
              </span>
              <h3 className="font-script text-2xl text-gold-gradient mb-2">Comme à la maison</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                On t'accueille comme on accueillerait de la famille. Pas de chichis, pas de
                formalités. Tu viens, tu manges bien, tu repars le sourire aux lèvres. C'est ça
                l'esprit Chez Manman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section id="histoire" className="py-24 md:py-32 px-6 bg-[var(--emerald-deep)]">
        <div className="max-w-4xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-8 text-center">
            Notre Histoire
          </p>
          <h3 className="font-script text-3xl md:text-5xl text-gold-gradient leading-tight mb-12 text-center">
            Pendant 3 ans, les gens faisaient la queue pour un food truck sans nom.
          </h3>
          <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed">
            <p>
              Avant d'être un restaurant, Chez Manman c'était un food truck rouge. Pas d'enseigne,
              pas de logo, pas de page Instagram. Juste Steve, son grill au charbon, et ses bokits.
            </p>
            <p>
              Les gens venaient quand même. Ils se passaient le mot. « T'as goûté le bokit du camion
              rouge à côté du marché ? » Le bouche à oreille, c'est tout ce qu'il avait. Et c'était
              suffisant.
            </p>
            <p>
              La file grandissait. Les habitués revenaient chaque semaine. Et un jour, ce sont eux
              qui ont dit : « Steve, ouvre un vrai restaurant. » Pas un investisseur. Pas un business
              plan. Ses clients.
            </p>
            <p>
              Alors il l'a fait. Il a trouvé un local à Saint-Maur-des-Fossés. Il a gardé la même
              viande fraîche, le même charbon de bois, les mêmes recettes. Il a juste ajouté des murs
              et un nom : Chez Manman.
            </p>
            <p>
              Pourquoi Manman ? Parce que c'est comme ça qu'on dit « maman » aux Antilles. Et parce
              que chaque plat qui sort de cette cuisine est fait comme si c'était ta mère qui
              cuisinait. Avec du temps, des vrais produits, et de l'amour dedans.
            </p>
            <div className="border-l-2 border-[var(--gold)] pl-6 py-2 my-10">
              <p className="font-script text-2xl md:text-3xl text-gold-gradient">
                Chez Manman, c'est une promesse : tu vas manger comme chez ta mère.
              </p>
              <p className="mt-3 font-display text-xs uppercase tracking-[0.2em] text-[var(--gold)]/70">
                — Steve, fondateur
              </p>
            </div>
            <p>
              Aujourd'hui, on fait exactement la même chose qu'avant. On cuit au charbon, on prépare
              tout frais, on met de l'amour dedans. La seule différence, c'est que maintenant, t'as
              une chaise pour t'asseoir.
            </p>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-24 md:py-32 px-6 bg-[var(--emerald-deep)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
              Témoignages
            </p>
            <h2 className="font-script text-4xl md:text-5xl text-gold-gradient leading-tight">
              La première bouchée, c'est toujours la même réaction.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-2 border-[var(--gold)] pl-6 py-2">
              <p className="text-foreground/80 text-base leading-relaxed italic">
                J'ai goûté par curiosité. Maintenant j'y vais toutes les semaines. La viande est
                dingue, le pain est parfait. Y'a rien de comparable dans le 94.
              </p>
              <p className="mt-4 font-display text-xs uppercase tracking-[0.15em] text-[var(--gold)]">
                — Kevin, Créteil
              </p>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6 py-2">
              <p className="text-foreground/80 text-base leading-relaxed italic">
                Halal, frais, fait maison. Un bokit c'est comme un sandwich mais 10 fois meilleur.
                Mes enfants en redemandent à chaque fois.
              </p>
              <p className="mt-4 font-display text-xs uppercase tracking-[0.15em] text-[var(--gold)]">
                — Fatou, Champigny
              </p>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6 py-2">
              <p className="text-foreground/80 text-base leading-relaxed italic">
                J'ai découvert le bokit grâce à une amie. Honnêtement, je savais même pas que ça
                existait. Maintenant c'est mon truc du vendredi soir.
              </p>
              <p className="mt-4 font-display text-xs uppercase tracking-[0.15em] text-[var(--gold)]">
                — Sophie, Saint-Maur
              </p>
            </div>

            <div className="border-l-2 border-[var(--gold)] pl-6 py-2">
              <p className="text-foreground/80 text-base leading-relaxed italic">
                Menu famille à 35€. Quatre bokits, quatre boissons. Toute la famille a mangé.
                On reviendra.
              </p>
              <p className="mt-4 font-display text-xs uppercase tracking-[0.15em] text-[var(--gold)]">
                — Marc, Joinville
              </p>
            </div>
          </div>
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
              <div className="border-b border-border pb-1.5 items-start justify-between flex flex-row"><span>Mar — Dim</span><span>12h — 15h · 19h — 23h</span></div>
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
          <img src={logo} alt="Chez Manman" className="h-8 w-auto object-contain" />
          <p className="font-display text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            Chez Manman © 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

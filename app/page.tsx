import Image from "next/image";

const COURRIEL = "unemainpourlesenfants@gmail.com";
const MONTANT_MENSUEL = 25;

const ACTIONS = [
  {
    id: "sante",
    titre: "Santé",
    image: "/act-sante.webp",
    alt: "Consultation de soins dans un village",
    texte:
      "Consultations mobiles, trousses de premiers soins pour les écoles et accompagnement des familles vers les centres de santé les plus proches.",
  },
  {
    id: "education",
    titre: "Éducation",
    image: "/act-educ.webp",
    alt: "Enfants dans une salle de classe avec leurs cahiers",
    texte:
      "Fournitures et manuels pour la rentrée, soutien aux instituteurs des écoles isolées, et aide au maintien à l'école des enfants les plus fragiles.",
  },
  {
    id: "espoir",
    titre: "Espoir",
    image: "/act-espoir.webp",
    alt: "Enfants réunis pour un moment de jeu collectif",
    texte:
      "Ateliers, sport et temps collectifs : rendre l'enfance vivable, et donner aux enfants une raison de se projeter au-delà du village.",
  },
];

export default function Accueil() {
  return (
    <>
      <header className="entete">
        <div className="enveloppe entete-interieur">
          <a href="#haut" className="marque">
            <span className="pastille" />
            <span className="marque-nom">Une main pour les enfants</span>
          </a>
          <nav className="navigation">
            <a href="#mission" className="lien-nav">
              Notre mission
            </a>
            <a href="#actions" className="lien-nav">
              Nos actions
            </a>
            <a href="#parrainer" className="lien-nav">
              Parrainer
            </a>
            <a href="#contact" className="lien-nav">
              Contact
            </a>
            <a
              href="#parrainer"
              className="bouton bouton-principal bouton-compact"
            >
              Parrainer un enfant
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="haut" className="enveloppe heros">
          <div>
            <span className="etiquette">Association · Gabon</span>
            <h1>Parce qu&apos;aucun enfant ne devrait être privé d&apos;un avenir</h1>
            <p>
              Une main pour les enfants agit pour la santé, l&apos;éducation et
              l&apos;espoir des enfants qui vivent dans les zones les plus reculées
              du Gabon — villages, campements, écoles isolées.
            </p>
            <div className="groupe-boutons">
              <a href="#parrainer" className="bouton bouton-principal">
                Parrainer un enfant
              </a>
              <a href="#contact" className="bouton bouton-secondaire">
                Nous contacter
              </a>
            </div>
          </div>
          <div className="heros-visuel">
            <span className="heros-rond" />
            <div className="heros-cadre lavee">
              <Image
                src="/hero.webp"
                alt="Enfants souriants d'un village recevant des fournitures"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 500px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        <section id="mission" className="section-beige">
          <div className="enveloppe duo">
            <div>
              <h6 className="sur-titre">Notre mission</h6>
              <h2 className="titre-section">Aller là où l&apos;aide n&apos;arrive pas</h2>
            </div>
            <div className="mission-texte">
              <p>
                Dans les villages reculés du Gabon, la distance décide de tout :
                d&apos;un vaccin manqué, d&apos;une année scolaire perdue, d&apos;un enfant qui
                grandit sans jamais voir un médecin. Nous rapprochons ce qui est
                trop loin.
              </p>
              <p>
                L&apos;association vient d&apos;être créée. Nous construisons nos
                premières actions avec les familles, les instituteurs et les
                soignants des communautés concernées, et nous rendons compte de
                chaque franc engagé.
              </p>
              <div className="piluliers">
                <span className="pilulier pilulier-sante">Santé</span>
                <span className="pilulier pilulier-education">Éducation</span>
                <span className="pilulier pilulier-espoir">Espoir</span>
              </div>
            </div>
          </div>
        </section>

        <section id="actions" className="enveloppe actions">
          <h2 className="titre-section">Nos actions</h2>
          <p className="actions-intro">
            Trois engagements, pensés pour tenir dans la durée plutôt que le
            temps d&apos;une visite.
          </p>
          <div className="grille-actions">
            {ACTIONS.map((action) => (
              <article key={action.id} className="carte">
                <div className="carte-visuel lavee">
                  <Image
                    src={action.image}
                    alt={action.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 350px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="carte-corps">
                  <h3>{action.titre}</h3>
                  <p>{action.texte}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="parrainer" className="parrainage">
          <div className="enveloppe parrainage-grille">
            <div>
              <h6 className="sur-titre">Parrainer un enfant</h6>
              <h2>Un enfant, un parrain, une année d&apos;école</h2>
              <p>
                Le parrainage couvre la scolarité, les fournitures et le suivi de
                santé d&apos;un enfant sur une année entière. Vous recevez des
                nouvelles régulières et le bilan de ce qui a été financé.
              </p>
              <p className="montant">
                À partir de {MONTANT_MENSUEL} € par mois
              </p>
              <div className="groupe-boutons">
                <a
                  href={`mailto:${COURRIEL}?subject=Je%20souhaite%20parrainer%20un%20enfant`}
                  className="bouton bouton-clair"
                >
                  Je parraine un enfant
                </a>
                <a href="#contact" className="bouton bouton-contour-clair">
                  Poser une question
                </a>
              </div>
            </div>
            <div className="parrainage-visuel">
              <div className="parrainage-cadre lavee">
                <Image
                  src="/parrain.webp"
                  alt="Portrait d'un enfant soutenu par l'association"
                  fill
                  sizes="(max-width: 900px) 100vw, 420px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="enveloppe contact">
          <div className="duo">
            <div>
              <h6 className="sur-titre">Contact</h6>
              <h2 className="titre-section">Écrivez-nous</h2>
              <p className="contact-intro">
                Parrainage, dons, bénévolat ou simple curiosité : nous répondons
                à tout le monde.
              </p>
            </div>
            <div className="bloc-courriel">
              <p className="bloc-courriel-intitule">Notre adresse e-mail</p>
              <a href={`mailto:${COURRIEL}`} className="adresse-courriel">
                {COURRIEL}
              </a>
              <p className="bloc-courriel-note">
                Écrivez-nous directement : précisez votre nom et ce qui vous
                amène, nous vous répondons sous quelques jours.
              </p>
              <p className="reseaux">
                ou sur les réseaux : <strong>@unemainpourlesenfants</strong>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="pied">
        <div className="enveloppe pied-interieur">
          <div className="pied-marque">
            <span className="pastille-petite" />
            <span className="pied-nom">Une main pour les enfants</span>
          </div>
          <span className="pied-mention">Santé · Éducation · Espoir — Gabon</span>
          <span className="pied-reseau">@unemainpourlesenfants</span>
        </div>
      </footer>
    </>
  );
}

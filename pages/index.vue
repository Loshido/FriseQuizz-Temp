<template>
    <main>
        <Navigation :flag="false" titre="Bienvenue" description="Vous retrouverez sur cette page, une frise chronologique des événements qui ont permis l'<u>amitié</u> entre la France 🇫🇷 et l'Allemagne 🇩🇪" />
        <NuxtLink to="/quizz">
            <section id="quizz-button" class="module">
                <h1>
                    Quizz
                </h1>
                <p>Testez vos connaissances !</p>
            </section>
        </NuxtLink>
        <Frise>
            <FriseSection titre="1945 - La Seconde Guerre Mondiale" identifier="2ndGuerreMondiale">
                <template v-slot:fr>
                    <p>
                        La Seconde Guerre mondiale a été un <strong>conflit mondial</strong> qui a duré de 1939 à 1945. 
                        Elle a été déclenchée par l'invasion de la Pologne par l'Allemagne nazie et a impliqué <u>la plupart des nations du monde, 
                        y compris les grandes puissances de l'époque telles que les États-Unis, l'Union soviétique, le Royaume-Uni et la France</u>. 
                    </p>
                    <p>
                        La guerre a vu des millions de personnes mourir, aussi bien sur le champ de bataille que dans les camps de concentration nazis. 
                        Elle a également vu l'utilisation de <strong>technologies avancées de guerre, telles que les bombardements aériens et les armes nucléaires</strong>. 
                        La Seconde Guerre mondiale s'est terminée par la victoire des Alliés, 
                        menant à la création de l'<u><strong>Organisation des Nations unies</strong></u> pour maintenir <u>la paix et la sécurité internationales</u>. 
                    </p>
                    <p>
                        La guerre a eu des <u>répercussions durables sur le monde</u>, transformant les relations internationales et conduisant à <strong>des changements sociaux, 
                        économiques et politiques à l'échelle mondiale</strong>.
                    </p>
                </template>
                <template v-slot:de>
                    <p>
                        <u>Der Zweite Weltkrieg</u> war ein globaler Konflikt, der von 1939 bis 1945 dauerte. Der Krieg <strong>forderte Millionen von Menschenleben</strong>, 
                        sowohl auf dem Schlachtfeld als auch in Nazi-Konzentrationslagern. 
                    </p>
                    <p>
                        Der Zweite Weltkrieg endete mit dem Sieg der Alliierten und führte zur <strong>Gründung der Vereinten Nationen</strong>, 
                        veränderte die internationalen Bezie um <u><strong>den Frieden und die internationale Sicherheit aufrechtzuerhalten</strong></u>.
                    </p>
                </template>
            </FriseSection>
            <FriseSection titre="1951 - La CECA" identifier="ceca">
                <template v-slot:fr>
                    La communauté européenne du charbon et de l'acier (CECA) fut fondée le 18 avril 1951. 
                    C'était une communauté qui réunissait la France, l'Allemagne, la Belgique, l'Italie, le Luxembourg et les Pays-bas. 
                    Les principaux acteurs furent la France et l'Allemagne. La CECA fut le premier signe de l'amitié franco-allemande. 
                    En effet, Robert Schuman et Konrad Adenauer furent à l'initiative de cette communauté. 
                    Ces deux dirigeants avaient à cœur de faire progresser l'amitié franco-allemande. 
                    Cette communauté d'une importance majeure pour le commerce européen entraîna de nombreuses 
                    initiatives d'amitiés entre la France et l'Allemagne comme les villes jumelées entre les pays.
                </template>
                <template v-slot:de>
                    Die Europäische Gemeinschaft für Kohle und Stahl (EGKS) ist ein Wirtschaftsverband zwischen Deutschland und Frankreich. 
                    Nach dem zweiten Weltkrieg waren Kohle und Stahl sehr wichtig für die Ökonomie in Europa, deshalb haben Deutschland und Frankreich EGKS gegründet. 
                    Der EGKS-Vertrag hat im 18. April 1951 gegründet. Es waren andere Länder in dieser Gemeinschaft wie Belgien, Italien, Luxemburg und die Niederlande, 
                    aber Deutschland und Frankreich waren die wichtigsten Glieder der EGKS. Die EGKS war die erste Phase für die Deutsch-Französische Freundschaft, 
                    nämlich dass es Konrad Adenauer und Robert Schuman versöhnt hat. Diese Gemeinschaft hat das Erscheinen der Partnerschaft zwischen Stadt erlaubt.
                </template>
            </FriseSection>
            <FriseSection titre="1963 - Le traité de L'Élysée" identifier="Élysée">
                <template v-slot:fr>
                    <p>
                        A la fin de la Seconde Guerre mondiale, bien que <u>les tensions</u> soient encore latentes entre les deux ennemis, 
                        plusieurs voix se font entendre pour orchestrer une réconciliation et 
                        ainsi mettre fin à cette logique de <strong>destruction mutuelle</strong>. 
                    </p>
                    <div class="row">
                        <p>
                            Enfin, <strong>le général de Gaulle</strong> va rencontrer plusieurs fois <strong>le Chancelier fédéral allemand <u>Konrad Adenauer</u></strong>. 
                            Progressivement, les deux hommes vont se lier d'amitié. 
                            Ensemble, ils prennent l'initiative d'<u>une déclaration conjointe visant à sceller la réconciliation 
                            entre la France et la République Fédérale d'Allemagne</u> mais aussi à renforcer la <u>coopération</u> entre les deux pays. 
                        </p>
                        <img src="@/assets/img/de-gaulle-adenauer.png"  style="width: 100%; max-width: 400px; min-width: 200px;">
                    </div>
                    <p>
                        Quelques mois après le <u>22 janvier 1963</u> (la signature du traité), 
                        L'office franco-allemand pour la jeunesse est créé pour développer les échanges 
                        entre les jeunes des deux pays. Cette institution existe encore de nos jours; 
                        elle a permis à 10 millions de jeunes de participer à <strong>des programmes d'échanges</strong>.
                    </p>
                </template>
                <template v-slot:de>
                    <p>
                        <strong>Bundeskanzler Konrad Adenauer</strong> und <strong>Präsident Charles de Gaulle</strong> unterzeichneten am <u>22 Januar 1963</u>
                        <em> der Elysee-Vertrag</em>. Dieser Vertrag gibt Frieden zwischen den beiden Ländern. 
                        Dazu kommt, dass es die Grundlage für die Kreation <strong>der Europäischen Union</strong> ist. 
                        Außerdem brechen dieser Vertrag Stereotypen und bringen die Vielfalt der beiden Nachbarländer. 
                        In der Tat wurden <u>Austauschprogramme</u> zwischen Deutschen und Franzosen gegründet.
                    </p>
                </template>
            </FriseSection>
            <FriseSection titre="1993 - Le traité de Maastricht" identifier="Maastricht">
                <template v-slot:fr>
                    <div class="row">
                        <p>
                            En 1957, la France et l'Allemagne sont <strong>des membres fondateurs</strong> et 
                            deviendront ultérieurement des Etats membres de l'Union Européenne. 
                            Cette union permet d'assurer une <u>paix durable</u> suite à la précédente 
                            guerre à travers l'Europe et favorise également le progrès 
                            économique et social. 
                            La relation entre les deux pays 
                            s'amplifie donc avec cette position en partageant 
                            les mêmes valeurs qu'eux . L'Union Européenne se renforcera 
                            plus tard en 1993 avec <strong> le traité de Maastricht </strong>qui consiste 
                            à unifier la monnaie en Europe.
                        </p>
                        <img src="@/assets/img/maastricht.png" style="width: 100%; max-width: 400px; min-width: 200px;">
                    </div>
                </template>
                <template v-slot:de>
                    <p>
                        1957 traten Deutschland und Frankreich einer Union bei, die nach 
                        dem Zweiten Weltkrieg den <strong>Weltfrieden aufrechterhielt</strong>. 
                        Diese Union wurde dann zur <u>Europäischen Union</u>, die durch den Vertrag 
                        von Maastricht von 1993 gestärkt wurde. Diese Beteiligung an dieser 
                        Union stärkt die Beziehungen zwischen den beiden Ländern.
                    </p>
                </template>
            </FriseSection>
            <FriseSection titre="2019 - Le traité de l'Aix la chapelle" identifier="Aixlachapelle">
                <template v-slot:fr>
                    <div class="row">
                    <p>
                        Le 22 janvier 2019 <u>Emmanuel Macron</u> et <u>la chancelière Angela Merkel</u> 
                        signent <strong>le traité de coopération franco allemand de l'<u>Aix la chapelle</u></strong>. 
                        Ce traité instaure un conseil d'experts économiques qui se charge de faire 
                        des recommandations pour mener une politique économique entre les deux pays. 
                        L'objectif est d'<strong>instaurer une zone économique commune entre la France et 
                        l'Allemagne</strong> avec des règles similaires.
                    </p>
                    <img src="@/assets/img/emm-ang.png" style="width: 100%; max-width: 400px; min-width: 200px;">
                </div>
                </template>
                <template v-slot:de>
                    <p>
                        Am 22. Januar 2019 unterzeichneten <u>Emmanuel Macron</u> und <u>Kanzlerin Angela Merkel</u> 
                        den Aachener Vertrag über die deutsch-französische Zusammenarbeit. Dieser Vertrag 
                        stellt einen Rat von Wirtschaftsexperten dar, der Empfehlungen für eine 
                        Wirtschaftspolitik zwischen den beiden Ländern formuliert. Ziel ist es, 
                        <strong>einen gemeinsamen Wirtschaftsraum zwischen Frankreich und Deutschland</strong> mit 
                        identischen Regeln zu schaffen.
                    </p>
                </template>
            </FriseSection>
        </Frise>
        <footer>
            <h3>Informations supplémentaires</h3>
            <div class="links">
                <NuxtLink to="misc/feedback">Contact / Feedback</NuxtLink>
                <NuxtLink to="misc/sources">Sources</NuxtLink>
            </div>
        </footer>
    </main>
</template>

<style>
@media (min-width: 1000px) {
    section.module{
        width: fit-content !important;
        padding-right: 75px !important;}
    div.row{
        display: flex;
        flex-direction: row;}
    section p{text-align: justify;}
}

footer{
    margin: 15px 10px;}
footer > div.links{
    margin: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;}


section.module{
    background-color: rgba(0,0,0,0.1);
    border-radius: 5px;
    width: 92.5%;
    min-height: 50px;
    margin: 0 3.5%;
    padding: 15px;
    color: rgb(89, 115, 151);
    transition: all .25s ease-in-out;}
section.module > h1{font-size: 2em;}
section.module > p{font-size: 1em;}
section.module#quizz-button{
    background-color: rgba(89, 115, 151, 0.15);
    border: 2px solid rgba(89, 115, 151, 0.3);}
section.module#quizz-button:hover{background-color: rgba(89, 115, 151, 0.4);}
</style>
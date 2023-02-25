<template>
    <main>
        <Navigation :flag="false" titre="Bienvenue" description="Vous retrouverez sur cette page, une frise chronologique des événements qui ont contribué à l'<u>amitié</u> entre la France 🇫🇷 et l'Allemagne 🇩🇪" />
        <NuxtLink to="/quizz">
            <section id="quizz-button" class="module">
                <h1>
                    Quizz
                </h1>
                <p>Testez vos connaissances !</p>
            </section>
        </NuxtLink>
        <Frise>
            <FriseSection titre="1957 - Union Européene" identifier="1957_ue">
                <template v-slot:fr>
                    <p>
                        En 1957, la France et l’Allemagne sont <strong>des membres fondateurs</strong> et 
                        deviendront ultérieurement des Etats membres de l’Union Européenne. 
                        Cette union permet d’assurer une <u>paix durable</u> suite à la précédente 
                        guerre à travers l’Europe et favorise également le progrès 
                        économique et social. 
                    </p>
                    <div class="row">
                        <p>
                            La relation entre les deux pays 
                            s’amplifie donc avec cette position en partageant 
                            les mêmes valeurs qu'eux . L’Union Européenne se renforcera 
                            plus tard en 1993 avec <strong> le traité de Maastricht </strong>qui consiste 
                            à unifier la monnaie en Europe.
                        </p>
                        <img src="@/assets/img/maastricht.png" style="width: 100%; max-width: 400px; min-width: 200px;">
                    </div>
                </template>
                <template v-slot:de>
                    1957 traten Deutschland und Frankreich einer Union bei, die nach 
                    dem Zweiten Weltkrieg den Weltfrieden aufrechterhielt. 
                    Diese Union wurde dann zur Europäischen Union, die durch den Vertrag 
                    von Maastricht von 1993 gestärkt wurde. Diese Beteiligung an dieser 
                    Union stärkt die Beziehungen zwischen den beiden Ländern.
                </template>
            </FriseSection>
            <FriseSection titre="2019 - Traité de l'Aix la chapelle" identifier="2019">
                <template v-slot:fr>
                    Le 22 janvier 2019 Emmanuel Macron et la chancelière Angela Merkel 
                    signent le traité de coopération franco allemand de l'Aix la chapelle. 
                    Ce traité instaure un conseil d'experts économiques qui se charge de faire 
                    des recommandations pour mener une politique économique entre les deux pays. 
                    L'objectif est d'instaurer une zone économique commune entre la France et 
                    l'Allemagne avec des règles similaires.
                </template>
                <template v-slot:de>
                    Am 22. Januar 2019 unterzeichneten Emmanuel Macron und Kanzlerin Angela Merkel 
                    den Aachener Vertrag über die deutsch-französische Zusammenarbeit. Dieser Vertrag 
                    stellt einen Rat von Wirtschaftsexperten dar, der Empfehlungen für eine 
                    Wirtschaftspolitik zwischen den beiden Ländern formuliert. Ziel ist es, 
                    einen gemeinsamen Wirtschaftsraum zwischen Frankreich und Deutschland mit 
                    identischen Regeln zu schaffen.
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
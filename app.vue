<template>
    <header class="flex flex-col items-center gap-3 mt-11">
        <img src="~/assets/images/logo-ladraweuz.svg" alt="logo de Ladraweuz" loading="lazy" class="w-48">
        <img src="~/assets/images/title-ladraweuz.svg" alt="Ladraweuz: graphisme et illustration" loading="lazy"
            class="w-64">
    </header>
    <main class="mb-auto">
        <article class="flex flex-col items-center gap-5 font-fira text-center text-xl m-8">
            <p class="text-5xl">
                Hello!
            </p>
            <p>
                Moi, c’est Johanna ou <span class="text-ladraweuz-ochre">Ladraweuz</span>.<br>
                Je suis <span class="text-ladraweuz-ochre">graphiste</span> et
                <span class="text-ladraweuz-blue">illustratrice</span> freelance.<br>
                J’habite à Clisson, merveilleuse ville médiévale du Hellfest !
            </p>
            <p>
                Mon site est encore en construction...<br>
                Désolée ;)
            </p>
            <p>
                Appelez-moi si vous avez un projet de graphisme ou d’illustration, de logo, de dessin etc...<br>
                Et retrouvez-moi sur les réseaux sociaux ;)
            </p>
        </article>
        <section class="flex flex-col items-center mb-8">
            <div class="flex flex-row items-center gap-16">
                <a href="https://www.linkedin.com/in/johanna-bechereau-29a368114/overlay/contact-info/" class="relative overflow-hidden w-20 h-20">
                    <img src="~/assets/images/picto-ligne-mail.svg" alt="mail" loading="lazy" class="frame">
                </a>
                <a href="https://www.linkedin.com/in/johanna-bechereau-29a368114/overlay/contact-info/" class="relative overflow-hidden w-20 h-20">
                    <img src="~/assets/images/picto-ligne-tel.svg" alt="téléphone" loading="lazy" class="frame">
                </a>
                <a href="https://g.page/Ladraweuz" class="relative overflow-hidden w-20 h-20">
                    <img src="~/assets/images/picto-ligne-map.svg" alt="carte" loading="lazy" class="frame">
                </a>
                <a href="https://www.instagram.com/ladraweuz" class="relative overflow-hidden w-20 h-20">
                    <img src="~/assets/images/picto-ligne-instagram.svg" alt="instagram" loading="lazy" class="frame">
                </a>
                <a href="https://www.facebook.com/Ladraweuz" class="relative overflow-hidden w-20 h-20">
                    <img src="~/assets/images/picto-ligne-facebook.svg" alt="facebook" loading="lazy" class="frame">
                </a>
            </div>
        </section>
    </main>
    <footer class="font-fira text-center duration-150 ease-in-out opacity-50 hover:opacity-100">
        <p>Made with ❤️ by Draugael</p>
    </footer>
</template>
<style lang="scss">

    @keyframes frame {
        from {
            top: 0;
        }
    
        25% {
            top: -100%;
        }

        50% {
            top: -200%;
        }

        75% {
            top: -300%;
        }
    
        to {
            top: 0;
        }
    }
    
    .frame {
        position: absolute;
        animation: frame 0.5s infinite;
        height: 20rem;
        animation-timing-function: steps(1, end);
    }
</style>

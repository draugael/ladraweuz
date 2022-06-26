<template>
    <header class="flex flex-col items-center gap-3 mt-11">
        <img src="/asset/image/logo-ladraweuz.svg" alt="logo de Ladraweuz" loading="lazy" class="w-48">
        <img src="/asset/image/title-ladraweuz.svg" alt="Ladraweuz: graphisme et illustration" loading="lazy"
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
                J’habite à Clisson,merveilleuse ville médiévale du Hellfest !
            </p>
            <p>
                Mon site est encore en construction...<br>
                Désolée ;)
            </p>
            <p>
                Appelez-moi si vous avez un projet de graphisme ou d’illustration, de logo, de dessin etc...<br>
                Et retrouve moi sur les réseaux sociaux ;)
            </p>
        </article>
        <section class="flex flex-col items-center mb-8">
            <div class="flex flex-row items-center gap-16">
                <a href="" class="relative">
                    <img src="/asset/image/mail/mail-1.svg" alt="mail" loading="lazy" class="w-16 frame1">
                    <img src="/asset/image/mail/mail-2.svg" alt="mail" loading="lazy" class="w-16 absolute inset-0 frame2">
                    <img src="/asset/image/mail/mail-3.svg" alt="mail" loading="lazy" class="w-16 absolute inset-0 frame3">
                    <img src="/asset/image/mail/mail-2.svg" alt="mail" loading="lazy" class="w-16 absolute inset-0 frame4">
                </a>
                <a href="" class="relative">
                    <img src="/asset/image/tel/tel-1.svg" alt="téléphone" loading="lazy" class="w-16 frame1">
                    <img src="/asset/image/tel/tel-2.svg" alt="téléphone" loading="lazy" class="w-16 absolute inset-0 frame2">
                    <img src="/asset/image/tel/tel-3.svg" alt="téléphone" loading="lazy" class="w-16 absolute inset-0 frame3">
                    <img src="/asset/image/tel/tel-2.svg" alt="téléphone" loading="lazy" class="w-16 absolute inset-0 frame4">

                </a>
                <a href="" class="relative">
                    <img src="/asset/image/map/france-1.svg" alt="carte" loading="lazy" class="w-16 frame1">
                    <img src="/asset/image/map/france-2.svg" alt="carte" loading="lazy" class="w-16 absolute inset-0 frame2">
                    <img src="/asset/image/map/france-3.svg" alt="carte" loading="lazy" class="w-16 absolute inset-0 frame3">
                    <img src="/asset/image/map/france-2.svg" alt="carte" loading="lazy" class="w-16 absolute inset-0 frame4">
                </a>
                <a href="" class="relative">
                    <img src="/asset/image/facebook/facebook-1.svg" alt="facebook" loading="lazy" class="w-16 frame1">
                    <img src="/asset/image/facebook/facebook-2.svg" alt="facebook" loading="lazy" class="w-16 absolute inset-0 frame2">
                    <img src="/asset/image/facebook/facebook-3.svg" alt="facebook" loading="lazy" class="w-16 absolute inset-0 frame3">
                    <img src="/asset/image/facebook/facebook-2.svg" alt="facebook" loading="lazy" class="w-16 absolute inset-0 frame4">

                </a>
                <a href="" class="relative">
                    <img src="/asset/image/instagram/instagram-1.svg" alt="instagram" loading="lazy"
                        class="w-16 frame1">
                    <img src="/asset/image/instagram/instagram-2.svg" alt="instagram" loading="lazy"
                        class="w-16 absolute inset-0 frame2">
                    <img src="/asset/image/instagram/instagram-3.svg" alt="instagram" loading="lazy"
                        class="w-16 absolute inset-0 frame3">
                    <img src="/asset/image/instagram/instagram-2.svg" alt="instagram" loading="lazy"
                        class="w-16 absolute inset-0 frame4">
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
            opacity: 1;
        }
    
        25% {
            opacity: 0;
        }
    
        to {
            opacity: 1;
        }
    }
    
    .frame1 {
        opacity: 0;
        animation: frame 1s infinite;
    }

    .frame2 {
        opacity: 0;
        animation: frame 1s 0.25s infinite;
    }

    .frame3 {
        opacity: 0;
        animation: frame 1s 0.5s infinite;
    }

    .frame4 {
        opacity: 0;
        animation: frame 1s 0.75 infinite;
    }
</style>

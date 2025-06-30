<div id="background"></div>

<style>
    @keyframes animatedBackground {
        from {
            background-position: 0 0;
        }
        to {
            background-position: top 400px left 400px;
        }
    }

    #background {
        position: fixed;
        
        background: white;
        background-image: radial-gradient(black 2px, transparent 0);
        background-size: 40px 40px;
        opacity: 8%;

        height: 100vh;
        width: 100vw;
        z-index: -100;
        padding: 0;
        margin: 0;

        animation: animatedBackground 80s linear infinite;
    }
</style>
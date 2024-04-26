import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
    key: "life",
    name: "Life",
    particles: {
        number: {
            value: 160,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#00A36C",
            animation: {
                enable: true,
                speed: 2,
                sync: true,
            },
        },
        shape: {
            type: "edge",
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: {
                min: 1,
                max: 2,
            },
        },
        links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
        },
        life: {
            duration: {
                sync: false,
                value: 3,
            },
            count: 0,
            delay: {
                value: {
                    min: 1,
                    max: 2,
                },
            },
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: false,
                mode: "repulse",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 4,
            },
        },
    },
};

export default options;
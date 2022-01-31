export default {
    methods: {
        kda(kills, assists, deaths) {
            return (
                Math.floor(((kills + assists) / deaths) * 100) / 100
            );
        },
        killsAvg(kills, games) {
            return (
                Math.floor((kills / games) * 10) / 10
            );
        },
        assistsAvg(assists, games) {
            return (
                Math.floor((assists / games) * 10) / 10
            );
        },
        deathsAvg(deaths, games) {
            return (
                Math.floor((deaths / games) * 10) / 10
            );
        },
        winsAvg(wins, games) {
            return Math.floor((wins / games) * 100);
        },
        kdaColor(kdaNumber) {
            if (Math.floor(kdaNumber) === 3) {
                return "green";
            } else if (Math.floor(kdaNumber) === 4) {
                return "blue";
            } else if (Math.floor(kdaNumber) >= 5) {
                return "orange";
            }
        },
    },
};

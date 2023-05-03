(() => {
    const NAME: string = process.argv[2];
    const N: number = parseInt(process.argv[3]);
    let isFirst = true;
    for (let i = 0; i < N; i++) {
        if (isFirst) {
            isFirst = false;
        } else {
            console.log("sleep 3");
        }
        console.log(`start powershell "ts-node .\\tasks\\${NAME}.ts ${i} ${N}"`);
    }
})();
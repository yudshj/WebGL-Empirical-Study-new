(() => {
    const NAME: string = process.argv[2];
    const N: number = parseInt(process.argv[3]);
    let isFirst = true;
    let a: string[] = [];
    for (let i = 0; i < N; i++) {
        if (isFirst) {
            isFirst = false;
        } else {
            a.push("sleep 3");
        }
        a.push(`start powershell "ts-node .\\tasks\\${NAME}.ts ${i} ${N}"`);
    }
    console.log(a.join(" ; "));
})();
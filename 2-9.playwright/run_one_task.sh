name=$1
N=$2

for i in $(seq 0 $((N-1))); do
    echo tmux new -s "${name}-${i}_${N}" -d ts-node tasks/"${name}".ts ${i} ${N}
    tmux new -s "${name}-${i}_${N}" -d ts-node tasks/"${name}".ts ${i} ${N}
    sleep 1
done

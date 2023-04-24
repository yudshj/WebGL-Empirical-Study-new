echo $@
echo "..."

for NAME in $@
do
    tmux new -s "${NAME}-1_4" -d ts-node tasks/${NAME}.ts 0 4
    tmux new -s "${NAME}-2_4" -d ts-node tasks/${NAME}.ts 1 4
    tmux new -s "${NAME}-3_4" -d ts-node tasks/${NAME}.ts 2 4
    tmux new -s "${NAME}-4_4" -d ts-node tasks/${NAME}.ts 3 4
done
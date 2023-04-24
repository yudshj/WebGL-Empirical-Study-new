echo $@
echo "..."

for NAME in $@
do
    tmux kill-session -t "${NAME}-1_4"
    tmux kill-session -t "${NAME}-2_4"
    tmux kill-session -t "${NAME}-3_4"
    tmux kill-session -t "${NAME}-4_4"
done
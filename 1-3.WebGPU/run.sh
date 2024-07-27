#!/bin/bash

task=$1
num=$2
tmux new-session -d -s "$task"
for ((i=0; i<num; i++)); do
    tmux new-window -a -t "$task" -n "$task-$i" "ts-node src/main.ts $task $i $num"
    sleep 1
done
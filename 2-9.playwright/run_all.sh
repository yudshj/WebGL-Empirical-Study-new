echo $@
echo "..."

N=8

for NAME in $@
do
    ./run_one_task.sh $NAME $N
done

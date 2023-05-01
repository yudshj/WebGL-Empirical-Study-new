echo $@
echo "..."

N=10

for NAME in $@
do
    ./run_one_task.sh $NAME $N
done
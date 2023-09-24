$task = $Args[0]
$num = $Args[1]
for ($i = 0; $i -lt $num; $i++) {
    wt --window 0 nt -p "Windows Powershell" -d "$pwd" powershell -noExit "ts-node .\tasks\$task.ts $i $num"
    sleep 1
}

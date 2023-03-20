from pathlib import Path
import json

def edit_distance(str1, str2):
    # Create a matrix of zeros with dimensions (len(str1)+1) x (len(str2)+1)
    dist_matrix = [[0 for x in range(len(str2)+1)] for y in range(len(str1)+1)]
    
    # Initialize the first row and column of the matrix
    for i in range(1, len(str1)+1):
        dist_matrix[i][0] = i
    for j in range(1, len(str2)+1):
        dist_matrix[0][j] = j
    
    # Iterate over the remaining cells of the matrix, computing the edit distance at each step
    for i in range(1, len(str1)+1):
        for j in range(1, len(str2)+1):
            if str1[i-1] == str2[j-1]:
                cost = 0
            else:
                cost = 1
            dist_matrix[i][j] = min(dist_matrix[i-1][j]+1,    # deletion
                                     dist_matrix[i][j-1]+1,   # insertion
                                     dist_matrix[i-1][j-1]+cost) # substitution
    
    # The final edit distance is the value in the bottom right corner of the matrix
    return dist_matrix[-1][-1]

def main():
    plist = sorted(Path('urls').glob('*.txt'))
    tmp = {x.name.split('.')[0]: x.read_text().splitlines() for x in plist}
    with open('urls.json', 'w') as fp:
        json.dump(tmp, fp, indent=2)
    
    lst = [(key, value) for key, value in tmp.items()]
    min_dist = float('inf')
    for i in range(len(lst)):
        for j in range(i+1, len(lst)):
            dist = edit_distance(lst[i][1], lst[j][1])
            if dist <= 2:
                print(lst[i], lst[j], dist)
            min_dist = min(min_dist, dist)
    print(f'min_dist: {min_dist}')



if __name__ == '__main__':
    main()
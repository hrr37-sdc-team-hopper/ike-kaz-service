import pandas as pd
import glob

# chunk_size = 1e6
path  = './data/postgres/'
files = [f for f in glob.glob(path + "**/*.csv", recursive=True)]

for i in files:
	data = pd.read_csv(i, error_bad_lines = False, low_memory = False)
	data.to_csv( i, index =False, header=False)
	print("processed : ", i)


path  = './data/cassandra/'
files = [f for f in glob.glob(path + "**/*.csv", recursive=True)]

for i in files:
	data = pd.read_csv(i, error_bad_lines = False,  low_memory = False)
	data.to_csv(i, header=False)
	print("processed : ", i)



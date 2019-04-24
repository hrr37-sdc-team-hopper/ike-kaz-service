import pandas as pd
import glob

path  = './data/'

files = [f for f in glob.glob(path + "**/*.csv", recursive=True)]


for i in files:
	data = pd.read_csv(i, error_bad_lines = False)
	data.to_csv(i, index =False)
	print("processed : ", i)



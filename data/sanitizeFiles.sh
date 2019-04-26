#!/bin/bash
cp data/*.csv  data/cassandra/
cp data/*.csv  data/postgres/
rm -rf  data/*.csv

echo "Concat Data for Cassnadra..";
cat data/cassandra/bookInfo* >> data/cassandra/bookInfo.csv
cat data/cassandra/readStatus* >> data/cassandra/readStatus.csv
cat data/cassandra/users* >> data/cassandra/users.csv

echo "Concat Data for postgres..";
cat data/postgres/bookInfo* >> data/postgres/bookInfo.csv
cat data/postgres/readStatus* >> data/postgres/readStatus.csv
cat data/postgres/users* >> data/postgres/users.csv

echo "Clear Files";
rm -rf data/cassandra/*_*
rm -rf data/postgres/*_*

echo "Data processing for bad formed rows..";
python data/cleanData.py

echo "Move Cassandra Data..";
sudo mkdir /tmp/cassandra/
sudo cp data/cassandra/*.csv  /tmp/cassandra/

echo "Move postgres Data..";
sudo mkdir /tmp/postgres/
sudo cp data/postgres/*.csv  /tmp/postgres/
#!/bin/bash

IN_DIR="cypress/snapshots/"
OUT_DIR="docs/.vuepress/public/img/screenshots"

rm -rf ${OUT_DIR}
mkdir -p ${OUT_DIR}

function getDir {
  filePath=$1;
  parentPath="$(dirname $filePath)";
  parentName=${parentPath##*/};
  updatedDocName=${parentName/'.js'/''}
  getDirRes="${updatedDocName}";
}

function getFile {
  filePath=$1;
  fileName="$(basename "$filePath")"
  updatedFileName=${fileName/'.snap'/''}
  getFileRes="${updatedFileName}";
}


for f in $(find ${IN_DIR} -depth -name "*.png"); do
    getDir $f;
    getFile $f;

    DIR_PATH="${OUT_DIR}/${getDirRes}"
    FILE_PATH="${DIR_PATH}/${getFileRes}"

    mkdir -p "$DIR_PATH";
    mv "$f" "$FILE_PATH";
done

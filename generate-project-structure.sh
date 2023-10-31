#!bin/bash

tree -I "node_modules|.vscode|dist|.env" $1 > project-structure.md
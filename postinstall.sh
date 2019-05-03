#!/usr/bin/bash

mkdir -p dist/demo
babel --out-dir dist src &&
webpack --config webpack.config.js
cp src/demo.html dist/demo && 
cp src/*.css dist/demo


#!/bin/zsh

i=0
while (( i++ < 500 )); 
do
  cp ./src/stories/Button.stories.jsx "./src/stories/Button$i.stories.jsx"
done

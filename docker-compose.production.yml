version: '3'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/code
      - logvolume01:/var/log
    links:
      - mysql
      - elasticsearch
    external_links:
      - mysql
      - elasticsearch
    command: []
  mysql:
    image: mysql
  elasticsearch:
    image: elasticsearch
  volumes:
    logvolume01: {}

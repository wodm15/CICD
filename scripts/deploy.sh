#!/bin/bash

# 의존성 설치
yarn --frozen-lockfile

# 빌드
yarn build

# PM2로 실행 중인 서버 중지 및 삭제
pm2 delete sparta-nest-cicd

# 서버를 PM2로 실행
pm2 --name sparta-nest-cicd start dist/main.js

# PM2 설정 저장 (선택사항, startup 설정을 해놨다면)
pm2 save
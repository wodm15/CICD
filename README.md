# Sparta Nest.js CI/CD

스파르타코딩클럽 내일배움캠프 Node.js 과정 CI/CD 템플릿 코드

## 환경변수 설정

```bash
cp .env.example .env
```

## 패키지 설치

```bash
yarn
```

## 실행 (개발용)

```bash
yarn start:dev
```

## 실행 (배포용)

```bash
yarn build
yarn start:prod
```

## PM2로 실행 (배포용)

```bash
yarn build
pm2 --name sparta-nest-cicd start dist/main.js
```

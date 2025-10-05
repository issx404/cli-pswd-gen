# Генератор паролей

скачивание исходников:

```bash
git clone https://github.com/issx404/cli-pswd-gen.git
cd cli-pswd-gen
npm install
```

## Опции:

первая опция **обязательная** - длина символов в генерируемом пароле:

```bash
npm start 8
```

_(сгенерируется пароль длиной в 8 символов)_

**остальные две опции являются не обязательными**:

```bash
npm start 8 save
npm start 8 copy
npm start 8 copy save
npm start 8 save copy
```

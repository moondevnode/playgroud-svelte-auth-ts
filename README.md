# [playgroud-svelte-auth-ts](https://github.com/moondevnode/playgroud-svelte-auth-ts)

> "Svelte Authentication(Signup, Login, Logout / JWT, OAuth) with Typescript

# [SvelteKit & PocketBase #1 - Authentication & User Management](https://www.youtube.com/watch?v=vKqWED-aPMg)

> [Github](https://github.com/huntabyte/showcase/tree/episode-1)

> [POCKETBASE TUTORIAL 1 - LOGIN WITH EMAIL](https://www.youtube.com/watch?v=GQuaf9s4vDA&list=PLusHaWo40rSuvXk4zb3SMnQ8p4AOIhxWV&index=2)

## Settings > Mail settings(SMTP server: Gmail 사용)

## 회원가입

> `src/routes/register/+page.svelte`

> `src/routes/register/+page.server.ts`

## 로그인

> `src/routes/login/+page.svelte`

> `src/routes/login/+page.server.ts`

## 암호 초기화

> `src/routes/reset-password/+page.svelte`

> `src/routes/reset-password/+page.server.ts`

===

# [(코딩셀러) 인증 별거 아님~ (feat. 포켓베이스, 스벨트킷과 함께 라면)](https://www.youtube.com/watch?v=uf6ryvENJ6g&list=PL2Y878eUwQK6u-ELK5lKZViyP2l6EymIS)

## picocss 적용

> `src/app.html`

```html
<link rel="icon" href="%sveltekit.assets%/favicon.png" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
...
```

> `src/routes/+layout.svelte`

> `src/routes/+page.svelte`

## npm install

```bash
npm install pocketbase  --save
```

## install vscode extension

```
kit-snippets
```

## pocketbase instance

> `src/lib/pocketbase.ts`

### references

- [AuthStore](https://github.com/pocketbase/js-sdk#authstore)
- [SSR integration](https://github.com/pocketbase/js-sdk#ssr-integration)

> `src/hooks.server.ts`

### app.d.ts (jsDoc 사용시)

> `src/app.d.ts`

## 회원가입

> `src/routes/register/+page.svelte`

> `src/routes/register/+page.server.ts`

## 로그인

> `src/routes/login/+page.svelte`

> `src/routes/login/+page.server.ts`

## 로그인시 페이지 적용

> `src/routes/+layout.server.ts`

> `src/routes/+page.svelte`

> `src/routes/+layout.svelte`

## 로그아웃

> `src/routes/logout/+server.ts`

## 로그인시 login, register 페이지(주소창에 넣었을 경우) redirect

===

# setup

## setup pocketbase

### path, Admin 설정

### Settings > Mail settings(SMTP server), Authentication > Auth providers

## init app

```bash
# run pocketbase
cd __ROOT__
mkdir db && cd db && mkdir sqlite && cd ..

# templte: svelte-kit-lint-ts
bootapp -u moondevnode -n playgroud-svelte-auth-ts -d "Svelte Authentication(Signup, Login, Logout / JWT, OAuth) with Typescript" -t svelte-kit-lint-ts


# rename folder name
rename playgroud-svelte-auth app

#! 액세스가 거부되었습니다.(vscode에서 실행시 vscode 종료후 재실행)

# run pocketbase
pocketbase.exe serve --dir="./db/sqlite"

# run app(sveltekit): New Terminal
cd __ROOT__/app
yarn dev --open
```

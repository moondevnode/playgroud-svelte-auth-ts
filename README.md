# [playgroud-svelte-auth-ts](https://github.com/moondevnode/playgroud-svelte-auth-ts)

> "Svelte Authentication(Signup, Login, Logout / JWT, OAuth) with Typescript


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

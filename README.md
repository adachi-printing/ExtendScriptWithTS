# Adobe ExtendScript Development Template with Typescript


## Description

ExtendScriptをTypescritpで開発するためのテンプレートです

importや型チェックなどのモダンな記法を使用して、ES3準拠のExtendScriptを開発できます

ビルド時はBOM付きのUTF-8ファイルを出力します

## Getting Started / スタートガイド

$ git clone https://github.com/adachi-printing/ExtendScriptWithTS.git [your_project_name]

$ git remote set-url origin [your_repository]

$ git push

$ yarn install

## Usage

### tsconfigで目的とするアプリを指定する

types[] 内を目的のアプリのみ残してコメントアウトしてください

以下はIllustratorのスクリプトを開発する場合

```json
"types": [
    "types-for-adobe/Illustrator/2015.3",
    //"types-for-adobe/InDesign/2015.3",
    //"types-for-adobe/Photoshop/2015.5",
]
```

* InDesignではScriptUIと一部のクラスが重複しているため、ScriptUIのTypesが除外されています

### エントリーポイントにスクリプトのmain functionを作成する

src/apps直下のファイルがエントリーポイントになっています

ビルドされた各スクリプトは/distのしたに出力されます

$ yarn dev 更新監視状態でwebpackを起動します

$ yarn run build 最終形式で出力します

## License

[MIT](http://b4b4r07.mit-license.org)
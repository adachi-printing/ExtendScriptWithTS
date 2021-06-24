# Adobe ExtendScript Development Template with Typescript


## Description

ExtendScriptをTypescritpで開発するためのテンプレートです

importや型チェックなどのモダンな記法を使用して、ES3準拠のExtendScriptを開発できます

ビルド時はBOM付きのUTF-8ファイルを出力します

## Getting Started / スタートガイド

$ git clone --mirror https://github.com/adachi-printing/ExtendScriptWithTS.git

$ yarn install

## Usage

src/apps直下のファイルがエントリーポイントになっています

ビルドされた各スクリプトは/distのしたに出力されます

$ yarn dev 更新監視状態でwebpackを起動します

$ yarn run build 最終形式で出力します

## License

[MIT](http://b4b4r07.mit-license.org)
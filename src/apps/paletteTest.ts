////////////////////////////////////////////////////////////////
///
///	
///	
///											
///
////////////////////////////////////////////////////////////////
// @script "Alert Test"
// @strict on
// @target "photoshop"
// @targetengine "test_palette"
import "extendscript-es5-shim-ts"

import { PaletteDemo} from '../components/PaletteDemo'

const palette = new PaletteDemo();

palette.show();


while (palette.isShow === true) {
    app.refresh(); // アプリが待機でフリーズするのを防ぐために必要
}

alert("パレットは閉じられました")